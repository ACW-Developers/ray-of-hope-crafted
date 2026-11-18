import Stripe from "https://esm.sh/stripe@18.5.0?target=deno";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { validateDonationCheckoutInput } from "./validation.ts";

const jsonHeaders = { ...corsHeaders, "Content-Type": "application/json" };
const allowedOrigin = (origin: string | null): string | null => {
  if (!origin) return null;
  try {
    const parsed = new URL(origin);
    const isLocal = parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
    const isLovable =
      parsed.hostname.endsWith(".lovable.app") ||
      parsed.hostname.endsWith(".lovableproject.com");
    if (
      parsed.origin !== origin ||
      (parsed.protocol !== "https:" && !isLocal) ||
      (!isLocal && !isLovable)
    ) {
      return null;
    }
    return parsed.origin;
  } catch {
    return null;
  }
};

function reply(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (request.method !== "POST") {
    return reply({ error: "Use a POST request." }, 405);
  }
  if (Number(request.headers.get("content-length") ?? 0) > 8192) {
    return reply({ error: "Donation details are too large." }, 413);
  }

  const origin = allowedOrigin(request.headers.get("origin"));
  if (!origin) {
    return reply({ error: "This website origin is not allowed to start checkout." }, 403);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return reply({ error: "Donation details must be valid JSON." }, 400);
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return reply({ error: "Donation details are invalid." }, 400);
  }
  const requestBody = body as Record<string, unknown>;
  const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
  if (!stripeKey?.startsWith("sk_test_")) {
    return reply({ error: "Stripe test checkout is not configured yet." }, 503);
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });
  if (requestBody.action === "verify") {
    const sessionId = requestBody.sessionId;
    if (
      typeof sessionId !== "string" ||
      sessionId.length > 255 ||
      !/^cs_test_[A-Za-z0-9]+$/.test(sessionId)
    ) {
      return reply({ error: "The checkout reference is invalid." }, 400);
    }

    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (session.metadata?.donation !== "true") {
        return reply({ error: "This checkout is not a donation." }, 400);
      }

      const amountCents = Number(session.metadata.amount_cents);
      const isDonationPaid =
        session.mode === "payment"
          ? session.status === "complete" && session.payment_status === "paid"
          : session.mode === "subscription" &&
            session.status === "complete" &&
            session.payment_status === "paid";
      let subscriptionActive = true;
      if (isDonationPaid && session.mode === "subscription" && session.subscription) {
        const subscriptionId =
          typeof session.subscription === "string"
            ? session.subscription
            : session.subscription.id;
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        subscriptionActive =
          subscription.status === "active" || subscription.status === "trialing";
      }

      if (!Number.isSafeInteger(amountCents) || amountCents < 100) {
        return reply({ error: "The donation amount could not be confirmed." }, 400);
      }

      return reply({
        status: isDonationPaid && subscriptionActive ? "paid" : "pending",
        amountCents,
        donationType: session.metadata.donation_type,
        impactArea: session.metadata.impact_area,
      });
    } catch {
      return reply({ error: "We could not check this Stripe checkout. Please try again." }, 502);
    }
  }

  if (requestBody.action !== "create") {
    return reply({ error: "Choose a valid checkout action." }, 400);
  }

  const validation = validateDonationCheckoutInput(requestBody);
  if (!validation.success) {
    return reply({ error: validation.error }, 400);
  }

  const { amountCents, donationType, donor, impactArea } = validation.data;
  const metadata = {
    donation: "true",
    donation_type: donationType,
    impact_area: impactArea,
    amount_cents: String(amountCents),
    first_name: donor.firstName,
    last_name: donor.lastName,
  };
  const isMonthly = donationType === "monthly";
  const productName = isMonthly
    ? "Monthly donation to Imbuto of Hope International"
    : "Donation to Imbuto of Hope International";

  try {
    const session = await stripe.checkout.sessions.create({
      mode: isMonthly ? "subscription" : "payment",
      customer_email: donor.email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: amountCents,
            product_data: {
              name: productName,
              description: `Humanitarian support for ${impactArea.replaceAll("_", " ")}`,
            },
            ...(isMonthly ? { recurring: { interval: "month" as const } } : {}),
          },
        },
      ],
      success_url: `${origin}/donate?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate?payment=cancelled`,
      metadata,
      ...(isMonthly
        ? { subscription_data: { metadata } }
        : { payment_intent_data: { metadata } }),
    });

    if (!session.url) {
      return reply({ error: "Stripe did not provide a checkout page. Please try again." }, 502);
    }
    return reply({ url: session.url });
  } catch (error) {
    console.error(
      "[DONATION_CHECKOUT] Stripe could not create a session:",
      error instanceof Error ? error.name : "unknown error",
    );
    return reply({ error: "Stripe could not start checkout. Please try again shortly." }, 502);
  }
});
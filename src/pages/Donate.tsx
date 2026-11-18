import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Check,
  CreditCard,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Home,
  LifeBuoy,
  LockKeyhole,
  Salad,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero } from "@/components/layout/PageHero";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/general/Latest/R31.jpeg";

const donationSchema = z.object({
  firstName: z.string().trim().min(2, "Enter at least 2 characters").max(80),
  lastName: z.string().trim().min(2, "Enter at least 2 characters").max(80),
  email: z.string().trim().email("Enter a valid email address").max(254),
  amount: z
    .number()
    .finite()
    .min(1, "Amount must be at least $1")
    .max(999999.99, "Maximum donation is $999,999.99")
    .refine((amount) => Math.abs(amount * 100 - Math.round(amount * 100)) < 0.000001, {
      message: "Enter an amount in whole cents",
    }),
  impactArea: z.enum([
    "education",
    "healthcare",
    "shelter",
    "emergency",
    "empowerment",
    "general",
  ], { required_error: "Choose an impact area" }),
  donationType: z.enum(["one-time", "monthly"]),
});

const donationAmounts = [25, 50, 100, 250, 500, 1000];
const impactAreas: {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
}[] = [
  { value: "education", label: "Children's Education", description: "School fees, supplies, and learning programs", icon: BookOpen },
  { value: "healthcare", label: "Healthcare & Nutrition", description: "Medical care and nutritious meals", icon: HeartPulse },
  { value: "shelter", label: "Safe Shelter", description: "Safe housing and protection", icon: Home },
  { value: "emergency", label: "Emergency Relief", description: "Immediate support for children in crisis", icon: LifeBuoy },
  { value: "empowerment", label: "Youth Empowerment", description: "Skills training and mentorship", icon: Users },
  { value: "general", label: "Greatest Need", description: "Support where it is needed most", icon: Target },
];
const impactGuide = [
  { amount: 25, text: "School supplies for one child", icon: BookOpen },
  { amount: 50, text: "Nutritious meals for one month", icon: Salad },
  { amount: 100, text: "Education support for three months", icon: GraduationCap },
  { amount: 250, text: "Complete healthcare for one child", icon: HeartPulse },
  { amount: 500, text: "A full-year scholarship", icon: Sparkles },
];

type PaymentState = "form" | "verifying" | "paid" | "pending" | "unconfirmed";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [impactArea, setImpactArea] = useState("");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [paymentState, setPaymentState] = useState<PaymentState>("form");
  const [verifiedDonation, setVerifiedDonation] = useState<{
    amountCents: number;
    donationType: "one-time" | "monthly";
    impactArea: string;
  } | null>(null);
  const [checkoutNotice, setCheckoutNotice] = useState("");
  const selectedImpact = useMemo(
    () => impactAreas.find((area) => area.value === impactArea),
    [impactArea],
  );
  const SelectedImpactIcon = selectedImpact?.icon ?? Target;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    if (payment === "cancelled") {
      setCheckoutNotice("Checkout was canceled. You can adjust your gift and try again whenever you’re ready.");
      window.history.replaceState({}, "", window.location.pathname);
      return;
    }
    if (payment !== "success") return;

    const sessionId = params.get("session_id");
    window.history.replaceState({}, "", window.location.pathname);
    if (!sessionId) {
      setPaymentState("unconfirmed");
      return;
    }

    let active = true;
    setPaymentState("verifying");
    void supabase.functions
      .invoke("create-donation-checkout", { body: { action: "verify", sessionId } })
      .then(({ data, error }) => {
        if (!active) return;
        if (error || !data || typeof data.status !== "string") {
          setPaymentState("unconfirmed");
          return;
        }
        if (data.status === "paid") {
          setVerifiedDonation({
            amountCents: Number(data.amountCents),
            donationType: data.donationType === "monthly" ? "monthly" : "one-time",
            impactArea: String(data.impactArea ?? "general"),
          });
          setPaymentState("paid");
        } else {
          setPaymentState("pending");
        }
      })
      .catch(() => {
        if (active) setPaymentState("unconfirmed");
      });
    return () => {
      active = false;
    };
  }, []);

  const handleCheckout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCheckoutNotice("");
    const amount = customAmount === "" ? selectedAmount : Number(customAmount);
    const result = donationSchema.safeParse({ ...formData, amount, impactArea, donationType });
    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0];
        if (key) nextErrors[String(key)] = issue.message;
      });
      setErrors(nextErrors);
      toast.error("Please review the highlighted fields");
      return;
    }

    setErrors({});
    setIsCheckingOut(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-donation-checkout", {
        body: {
          action: "create",
          amountCents: Math.round(result.data.amount * 100),
          donationType: result.data.donationType,
          impactArea: result.data.impactArea,
          donor: {
            firstName: result.data.firstName,
            lastName: result.data.lastName,
            email: result.data.email,
          },
        },
      });
      if (error || typeof data?.url !== "string") {
        throw new Error(data?.error ?? "Stripe could not start checkout. Please try again shortly.");
      }
      window.location.assign(data.url);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not start checkout. Please try again.";
      toast.error(message);
      setIsCheckingOut(false);
    }
  };

  if (paymentState !== "form") {
    const details = verifiedDonation
      ? impactAreas.find((area) => area.value === verifiedDonation.impactArea)
      : undefined;
    const isPaid = paymentState === "paid";
    const heading =
      paymentState === "verifying"
        ? "Confirming your donation"
        : isPaid
          ? "Your generosity brings hope closer."
          : "Your checkout is still processing";
    const body =
      paymentState === "verifying"
        ? "We’re confirming your payment securely with Stripe."
        : isPaid && verifiedDonation
          ? `Your ${verifiedDonation.donationType === "monthly" ? "monthly " : ""}$${(verifiedDonation.amountCents / 100).toFixed(2)} gift is confirmed${details ? ` for ${details.label.toLowerCase()}` : ""}. Thank you for supporting children and families.`
          : "We couldn’t confirm the payment yet. Please allow a moment, then check your Stripe receipt or contact us before trying again.";
    return (
      <main className="min-h-screen bg-background pt-20">
        <section className="container-page flex min-h-[75vh] items-center justify-center py-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl text-center">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              {isPaid ? <Check className="h-10 w-10" /> : <ShieldCheck className="h-10 w-10" />}
            </span>
            <p className="eyebrow mt-8">{isPaid ? "Thank you" : "Stripe checkout"}</p>
            <h1 className="text-title mt-5">{heading}</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{body}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {!isPaid && paymentState !== "verifying" && (
                <Button variant="outline" size="lg" onClick={() => window.location.reload()}>
                  Check payment again
                </Button>
              )}
              <Button asChild variant="hero" size="lg">
                <Link to="/">Return home</Link>
              </Button>
              {!isPaid && paymentState !== "verifying" && (
                <Button asChild variant="ghost" size="lg">
                  <Link to="/contact">Contact us</Link>
                </Button>
              )}
            </div>
          </motion.div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <PageHero
        eyebrow="Give with confidence"
        title="A gift today can change a child's tomorrow."
        description="Choose a one-time gift or monthly support. Your secure payment is completed on Stripe."
        image={heroImage}
        icon={HandHeart}
        imagePosition="center 35%"
      />
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <div>
            <p className="eyebrow">Your donation</p>
            <h2 className="text-title mt-5">Choose the support that feels right.</h2>
            <form onSubmit={handleCheckout} className="mt-10 space-y-8" noValidate>
              {checkoutNotice && (
                <div role="status" className="rounded-md border border-border bg-muted p-4 text-sm text-muted-foreground">
                  {checkoutNotice}
                </div>
              )}
              <fieldset>
                <legend className="font-bold">Donation frequency</legend>
                <RadioGroup value={donationType} onValueChange={(value) => setDonationType(value as "one-time" | "monthly")} className="mt-4 grid grid-cols-2 gap-3">
                  {[["one-time", "One-time"], ["monthly", "Monthly"]].map(([value, label]) => (
                    <div key={value}>
                      <RadioGroupItem value={value} id={value} className="peer sr-only" />
                      <Label htmlFor={value} className="flex h-12 cursor-pointer items-center justify-center rounded-md border border-input bg-background peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                        {label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </fieldset>
              <fieldset>
                <legend className="font-bold">Gift amount (USD)</legend>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {donationAmounts.map((amount) => (
                    <Button key={amount} type="button" variant={selectedAmount === amount && customAmount === "" ? "default" : "outline"} onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }} aria-pressed={selectedAmount === amount && customAmount === ""}>
                      ${amount}
                    </Button>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  <Label htmlFor="custom-amount">Or enter a custom amount</Label>
                  <Input id="custom-amount" type="number" min="1" max="999999.99" step="0.01" inputMode="decimal" value={customAmount} onChange={(event) => setCustomAmount(event.target.value)} placeholder="Amount in USD" className="h-12" aria-invalid={Boolean(errors.amount)} />
                  {errors.amount && <p className="text-sm text-destructive">{errors.amount}</p>}
                </div>
              </fieldset>
              <div className="space-y-2">
                <Label htmlFor="impact-area">Where should your gift help?</Label>
                <Select value={impactArea} onValueChange={setImpactArea}>
                  <SelectTrigger id="impact-area" className="h-12" aria-invalid={Boolean(errors.impactArea)}>
                    <SelectValue placeholder="Select an impact area" />
                  </SelectTrigger>
                  <SelectContent>
                    {impactAreas.map(({ value, label }) => <SelectItem key={value} value={value}>{label}</SelectItem>)}
                  </SelectContent>
                </Select>
                {errors.impactArea && <p className="text-sm text-destructive">{errors.impactArea}</p>}
                {selectedImpact && <p className="flex items-center gap-2 text-sm text-muted-foreground"><SelectedImpactIcon className="h-4 w-4 text-secondary" />{selectedImpact.description}</p>}
              </div>
              <fieldset>
                <legend className="font-bold">Your information</legend>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" autoComplete="given-name" value={formData.firstName} onChange={(event) => setFormData({ ...formData, firstName: event.target.value })} aria-invalid={Boolean(errors.firstName)} className="h-12" />
                    {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" autoComplete="family-name" value={formData.lastName} onChange={(event) => setFormData({ ...formData, lastName: event.target.value })} aria-invalid={Boolean(errors.lastName)} className="h-12" />
                    {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="mt-5 space-y-2">
                  <Label htmlFor="donor-email">Email address</Label>
                  <Input id="donor-email" type="email" autoComplete="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} aria-invalid={Boolean(errors.email)} className="h-12" />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
              </fieldset>
              <Button variant="hero" size="xl" className="w-full" type="submit" disabled={isCheckingOut}>
                <CreditCard />
                {isCheckingOut ? "Opening secure checkout…" : `Continue to Stripe Checkout${donationType === "monthly" ? " · monthly" : ""}`}
              </Button>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-6">
                <span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4" />Secure payment with Stripe</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" />Card details are not stored here</span>
              </div>
            </form>
          </div>
          <aside className="lg:border-l lg:border-border lg:pl-12">
            <div className="sticky top-28">
              <p className="eyebrow">What giving can do</p>
              <h2 className="mt-5 text-3xl font-bold">Every amount has purpose.</h2>
              <div className="mt-8 divide-y divide-border border-y border-border">
                {impactGuide.map(({ amount, text, icon: Icon }) => (
                  <div key={amount} className="grid grid-cols-[3rem_4rem_1fr] items-center gap-3 py-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/10 text-secondary"><Icon className="h-5 w-5" /></span>
                    <strong className="text-primary">${amount}</strong>
                    <span className="text-sm leading-6 text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-md bg-muted p-6">
                <ShieldCheck className="h-7 w-7 text-secondary" />
                <h3 className="mt-4 font-bold">A secure, transparent donation</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Stripe securely processes your one-time or monthly donation. You’ll review the amount before completing payment.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Donate;

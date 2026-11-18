export const MIN_DONATION_CENTS = 100;
export const MAX_DONATION_CENTS = 99_999_999;

const impactAreas = new Set([
  "education",
  "healthcare",
  "shelter",
  "emergency",
  "empowerment",
  "general",
]);

export type DonationCheckoutInput = {
  amountCents: number;
  donationType: "one-time" | "monthly";
  donor: {
    firstName: string;
    lastName: string;
    email: string;
  };
  impactArea: string;
};

type ValidationResult =
  | { success: true; data: DonationCheckoutInput }
  | { success: false; error: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizedName(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const name = value.trim();
  return name.length >= 2 && name.length <= 80 ? name : null;
}

export function validateDonationCheckoutInput(
  value: unknown,
): ValidationResult {
  if (!isRecord(value)) {
    return { success: false, error: "Donation details are invalid." };
  }

  const amountCents = value.amountCents;
  if (
    typeof amountCents !== "number" ||
    !Number.isSafeInteger(amountCents) ||
    amountCents < MIN_DONATION_CENTS ||
    amountCents > MAX_DONATION_CENTS
  ) {
    return { success: false, error: "Enter a donation between $1 and $999,999.99." };
  }

  if (value.donationType !== "one-time" && value.donationType !== "monthly") {
    return { success: false, error: "Choose a supported donation frequency." };
  }

  if (!isRecord(value.donor)) {
    return { success: false, error: "Donor details are invalid." };
  }

  const firstName = normalizedName(value.donor.firstName);
  const lastName = normalizedName(value.donor.lastName);
  const email =
    typeof value.donor.email === "string" ? value.donor.email.trim() : "";
  if (!firstName || !lastName || email.length > 254 || !/^\S+@\S+\.\S+$/.test(email)) {
    return { success: false, error: "Enter a valid name and email address." };
  }

  if (typeof value.impactArea !== "string" || !impactAreas.has(value.impactArea)) {
    return { success: false, error: "Choose a valid impact area." };
  }

  return {
    success: true,
    data: {
      amountCents,
      donationType: value.donationType,
      donor: { firstName, lastName, email },
      impactArea: value.impactArea,
    },
  };
}
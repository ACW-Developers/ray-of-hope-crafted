import { describe, expect, test } from "bun:test";
import { validateDonationCheckoutInput } from "./validation";

const donation = {
  amountCents: 2500,
  donationType: "one-time",
  donor: {
    firstName: "Amos",
    lastName: "Clinton",
    email: "amos@example.com",
  },
  impactArea: "education",
};

describe("donation checkout validation", () => {
  test("accepts a one-time donation of $25", () => {
    const result = validateDonationCheckoutInput(donation);
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.amountCents).toBe(2500);
  });

  test("accepts monthly donations", () => {
    expect(
      validateDonationCheckoutInput({ ...donation, donationType: "monthly" }).success,
    ).toBe(true);
  });

  test("rejects donations below the $1 minimum", () => {
    expect(
      validateDonationCheckoutInput({ ...donation, amountCents: 99 }).success,
    ).toBe(false);
  });

  test("rejects non-cent amounts", () => {
    expect(
      validateDonationCheckoutInput({ ...donation, amountCents: 2500.5 }).success,
    ).toBe(false);
  });

  test("rejects unsupported donation frequencies", () => {
    expect(
      validateDonationCheckoutInput({ ...donation, donationType: "weekly" }).success,
    ).toBe(false);
  });
});
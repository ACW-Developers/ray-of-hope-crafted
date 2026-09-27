import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Building2, Check, CheckCircle2, Clipboard, CreditCard, GraduationCap, HandHeart, HeartPulse, Home, LifeBuoy, LockKeyhole, Mail, Salad, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHero } from "@/components/layout/PageHero";
import heroImage from "@/assets/general/Latest/R31.jpeg";

const donationSchema = z.object({
  firstName: z.string().trim().min(2, "Enter at least 2 characters"),
  lastName: z.string().trim().min(2, "Enter at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  amount: z.number().finite().min(1, "Amount must be at least $1"),
  impactArea: z.string().min(1, "Choose an impact area"),
});

const donationAmounts = [25, 50, 100, 250, 500, 1000];
const impactAreas: { value: string; label: string; description: string; icon: LucideIcon }[] = [
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
const paymentInfo = {
  paypal: { email: "rayofhope@gmail.com", name: "Imbuto of Hope International" },
  bank: { bankName: "Global Trust Bank", accountName: "Imbuto of Hope International", accountNumber: "1234 5678 9012 3456", routingNumber: "021000021", swiftCode: "GTBKENAXXX" },
};
type Pledge = { firstName: string; lastName: string; email: string; amount: number; donationType: string; impactArea: string };

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [impactArea, setImpactArea] = useState("");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pledge, setPledge] = useState<Pledge | null>(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const selectedImpact = useMemo(() => impactAreas.find((area) => area.value === (pledge?.impactArea ?? impactArea)), [impactArea, pledge]);
  const SelectedImpactIcon = selectedImpact?.icon ?? Target;

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast.success(`${field} copied`);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      toast.error("Could not copy automatically", { description: "Please select and copy the information manually." });
    }
  };

  const handlePledgeSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const amount = customAmount === "" ? selectedAmount : Number(customAmount);
    const result = donationSchema.safeParse({ ...formData, amount, impactArea });
    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => { const key = error.path[0]; if (key) nextErrors[String(key)] = error.message; });
      setErrors(nextErrors);
      toast.error("Please review the highlighted fields");
      return;
    }
    const nextPledge = { ...formData, amount, donationType, impactArea };
    setErrors({});
    setPledge(nextPledge);
    localStorage.setItem("donationPledge", JSON.stringify({ ...nextPledge, timestamp: new Date().toISOString() }));
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast.success("Your pledge is ready", { description: "Choose a payment method to complete your donation." });
  };

  const resetPledge = () => { setPledge(null); setPaymentCompleted(false); window.scrollTo({ top: 0, behavior: "smooth" }); };

  if (paymentCompleted && pledge) {
    return <main className="min-h-screen bg-background pt-20"><section className="container-page flex min-h-[75vh] items-center justify-center py-20"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl text-center"><span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-secondary"><Check className="h-10 w-10" /></span><p className="eyebrow mt-8">Thank you</p><h1 className="text-title mt-5">Your generosity brings hope closer.</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">You marked your ${pledge.amount} donation for {selectedImpact?.label ?? "the greatest need"} as complete. Our team will confirm it after the payment is verified.</p><div className="mt-7 rounded-md border border-border bg-card p-5 text-sm leading-6 text-muted-foreground"><Mail className="mx-auto mb-3 h-5 w-5 text-secondary" />Verification can take 24–48 hours. Keep your transfer receipt for your records.</div><Button asChild variant="hero" size="lg" className="mt-8"><Link to="/">Return home</Link></Button></motion.div></section></main>;
  }

  if (pledge) {
    const methods = [
      { title: "PayPal", subtitle: "Online transfer", icon: CreditCard, details: [["PayPal email", paymentInfo.paypal.email], ["Account name", paymentInfo.paypal.name]] },
      { title: "Bank transfer", subtitle: "Direct transfer", icon: Building2, details: [["Bank name", paymentInfo.bank.bankName], ["Account name", paymentInfo.bank.accountName], ["Account number", paymentInfo.bank.accountNumber], ["Routing number", paymentInfo.bank.routingNumber], ["SWIFT code", paymentInfo.bank.swiftCode]] },
    ];
    return <main className="min-h-screen bg-background pt-20">
      <section className="border-b border-border bg-muted/45 py-16"><div className="container-page"><Button variant="ghost" onClick={resetPledge}><ArrowLeft />Edit pledge</Button><div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow">Pledge confirmed</p><h1 className="text-title mt-5">Complete your ${pledge.amount} donation.</h1><p className="mt-4 max-w-2xl text-muted-foreground">Use one of the payment methods below, include your name in the reference, then tell us when your transfer is complete.</p></div><div className="flex items-center gap-3 rounded-md border border-border bg-card px-5 py-4"><SelectedImpactIcon className="h-6 w-6 text-secondary" /><div><span className="block text-xs text-muted-foreground">Supporting</span><strong>{selectedImpact?.label}</strong></div></div></div></div></section>
      <section className="py-16 md:py-24"><div className="container-page"><div className="grid gap-8 lg:grid-cols-2">{methods.map(({ title, subtitle, icon: Icon, details }) => <article key={title} className="rounded-md border border-border bg-card p-6 shadow-soft md:p-8"><div className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground"><Icon className="h-6 w-6" /></span><div><h2 className="text-2xl font-bold">{title}</h2><p className="text-sm text-muted-foreground">{subtitle}</p></div></div><dl className="mt-7 divide-y divide-border border-y border-border">{details.map(([label, value]) => <div key={label} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr_auto] sm:items-center"><dt className="text-sm text-muted-foreground">{label}</dt><dd className="break-all font-semibold">{value}</dd><Button type="button" variant="ghost" size="icon" onClick={() => copyToClipboard(value, label)} aria-label={`Copy ${label}`}>{copiedField === label ? <CheckCircle2 /> : <Clipboard />}</Button></div>)}</dl></article>)}</div>
      <div className="mx-auto mt-12 max-w-3xl border-t border-border pt-10 text-center"><h2 className="text-2xl font-bold">After you transfer</h2><p className="mt-3 text-muted-foreground">Clicking below records your confirmation on this device. It does not process or verify payment.</p><Button variant="hero" size="lg" onClick={() => { setPaymentCompleted(true); toast.success("Donation marked as complete"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="mt-6"><CheckCircle2 />I’ve completed my donation</Button></div></div></section>
    </main>;
  }

  return <main className="min-h-screen bg-background">
    <PageHero eyebrow="Give with confidence" title="A pledge today can change a child's tomorrow." description="Choose how you would like to help, then receive clear instructions to complete your contribution." image={heroImage} icon={HandHeart} imagePosition="center 35%" />
    <section className="py-20 md:py-28"><div className="container-page grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
      <div><p className="eyebrow">Your pledge</p><h2 className="text-title mt-5">Choose the support that feels right.</h2><form onSubmit={handlePledgeSubmit} className="mt-10 space-y-8" noValidate>
        <fieldset><legend className="font-bold">Donation frequency</legend><RadioGroup value={donationType} onValueChange={setDonationType} className="mt-4 grid grid-cols-2 gap-3">{[["one-time", "One-time"], ["monthly", "Monthly"]].map(([value, label]) => <div key={value}><RadioGroupItem value={value} id={value} className="peer sr-only" /><Label htmlFor={value} className="flex h-12 cursor-pointer items-center justify-center rounded-md border border-input bg-background peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">{label}</Label></div>)}</RadioGroup></fieldset>
        <fieldset><legend className="font-bold">Pledge amount (USD)</legend><div className="mt-4 grid grid-cols-3 gap-3">{donationAmounts.map((amount) => <Button key={amount} type="button" variant={selectedAmount === amount && customAmount === "" ? "default" : "outline"} onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }} aria-pressed={selectedAmount === amount && customAmount === ""}>${amount}</Button>)}</div><div className="mt-4 space-y-2"><Label htmlFor="custom-amount">Or enter a custom amount</Label><Input id="custom-amount" type="number" min="1" inputMode="decimal" value={customAmount} onChange={(event) => setCustomAmount(event.target.value)} placeholder="Amount in USD" className="h-12" aria-invalid={Boolean(errors.amount)} />{errors.amount && <p className="text-sm text-destructive">{errors.amount}</p>}</div></fieldset>
        <div className="space-y-2"><Label htmlFor="impact-area">Where should your gift help?</Label><Select value={impactArea} onValueChange={setImpactArea}><SelectTrigger id="impact-area" className="h-12" aria-invalid={Boolean(errors.impactArea)}><SelectValue placeholder="Select an impact area" /></SelectTrigger><SelectContent>{impactAreas.map(({ value, label }) => <SelectItem key={value} value={value}>{label}</SelectItem>)}</SelectContent></Select>{errors.impactArea && <p className="text-sm text-destructive">{errors.impactArea}</p>}{selectedImpact && <p className="flex items-center gap-2 text-sm text-muted-foreground"><SelectedImpactIcon className="h-4 w-4 text-secondary" />{selectedImpact.description}</p>}</div>
        <fieldset><legend className="font-bold">Your information</legend><div className="mt-4 grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="first-name">First name</Label><Input id="first-name" autoComplete="given-name" value={formData.firstName} onChange={(event) => setFormData({ ...formData, firstName: event.target.value })} aria-invalid={Boolean(errors.firstName)} className="h-12" />{errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}</div><div className="space-y-2"><Label htmlFor="last-name">Last name</Label><Input id="last-name" autoComplete="family-name" value={formData.lastName} onChange={(event) => setFormData({ ...formData, lastName: event.target.value })} aria-invalid={Boolean(errors.lastName)} className="h-12" />{errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}</div></div><div className="mt-5 space-y-2"><Label htmlFor="donor-email">Email address</Label><Input id="donor-email" type="email" autoComplete="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} aria-invalid={Boolean(errors.email)} className="h-12" />{errors.email && <p className="text-sm text-destructive">{errors.email}</p>}</div></fieldset>
        <Button variant="hero" size="xl" className="w-full" type="submit"><Mail />Make pledge and view payment details</Button><div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-6"><span className="flex items-center gap-2"><Mail className="h-4 w-4" />Clear payment instructions</span><span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4" />Your details stay on this device</span></div>
      </form></div>
      <aside className="lg:border-l lg:border-border lg:pl-12"><div className="sticky top-28"><p className="eyebrow">What giving can do</p><h2 className="mt-5 text-3xl font-bold">Every amount has purpose.</h2><div className="mt-8 divide-y divide-border border-y border-border">{impactGuide.map(({ amount, text, icon: Icon }) => <div key={amount} className="grid grid-cols-[3rem_4rem_1fr] items-center gap-3 py-5"><span className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/10 text-secondary"><Icon className="h-5 w-5" /></span><strong className="text-primary">${amount}</strong><span className="text-sm leading-6 text-muted-foreground">{text}</span></div>)}</div><div className="mt-8 rounded-md bg-muted p-6"><ShieldCheck className="h-7 w-7 text-secondary" /><h3 className="mt-4 font-bold">A transparent pledge process</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">This form records your pledge and displays transfer details. No payment is charged on this website.</p></div></div></aside>
    </div></section>
  </main>;
};

export default Donate;
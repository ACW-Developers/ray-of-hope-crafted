import { useState } from "react";
import { Heart, Shield, Check, CreditCard, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your donation!", {
      description: "Your contribution will transform lives.",
    });
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-accent" fill="currentColor" />
              <span className="text-sm font-semibold">Make a Difference Today</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-['Playfair_Display'] mb-6">
              Transform Lives
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Your generosity provides hope, education, and protection to vulnerable children
            </p>
          </div>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Donation Form */}
              <div className="lg:col-span-2">
                <div className="glass rounded-3xl p-8 md:p-10 shadow-strong">
                  <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-8">
                    Your Donation
                  </h2>

                  <form onSubmit={handleDonate} className="space-y-8">
                    {/* Donation Type */}
                    <div>
                      <Label className="text-base font-semibold mb-4 block">
                        Donation Type
                      </Label>
                      <RadioGroup
                        value={donationType}
                        onValueChange={setDonationType}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div>
                          <RadioGroupItem
                            value="one-time"
                            id="one-time"
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="one-time"
                            className="flex items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-smooth"
                          >
                            One-Time
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem
                            value="monthly"
                            id="monthly"
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="monthly"
                            className="flex items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-smooth"
                          >
                            Monthly
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <Label className="text-base font-semibold mb-4 block">
                        Select Amount (USD)
                      </Label>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {donationAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => {
                              setSelectedAmount(amount);
                              setCustomAmount("");
                            }}
                            className={`p-4 rounded-xl border-2 font-semibold transition-smooth ${
                              selectedAmount === amount && !customAmount
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-muted hover:border-primary/50"
                            }`}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <div>
                        <Label htmlFor="custom-amount" className="mb-2 block">
                          Or enter custom amount
                        </Label>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold mb-4 block">
                        Your Information
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="John" required />
                        </div>
                        <div>
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Doe" required />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Payment Button */}
                    <Button variant="hero" size="xl" className="w-full group">
                      <CreditCard className="mr-2" />
                      Proceed to Payment
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Your donation is secure and tax-deductible. You will receive a receipt via
                      email.
                    </p>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Impact Card */}
                <div className="glass rounded-2xl p-6 shadow-soft">
                  <h3 className="text-xl font-bold mb-4">Your Impact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">$25</div>
                        <div className="text-sm text-muted-foreground">
                          School supplies for one child
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">$100</div>
                        <div className="text-sm text-muted-foreground">
                          One month of education support
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">$500</div>
                        <div className="text-sm text-muted-foreground">
                          Full year scholarship for one child
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="glass rounded-2xl p-6 shadow-soft">
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="font-bold">Secure & Transparent</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>256-bit SSL encryption</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>100% transparent reporting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Tax-deductible donations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Cancel anytime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;

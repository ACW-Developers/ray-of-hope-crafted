import { useState } from "react";
import { Heart, Shield, Check, CreditCard, Sparkles, Lock, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { z } from "zod";

const donationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  amount: z.number().min(1, "Donation amount must be at least $1"),
});

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    
    try {
      donationSchema.parse({
        ...formData,
        amount,
      });
      
      setErrors({});
      toast.success("Thank you for your generosity!", {
        description: `Your ${donationType === "monthly" ? "monthly" : "one-time"} donation of $${amount} will transform lives.`,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast.error("Please check your information", {
          description: "Some fields need your attention.",
        });
      }
    }
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section - Enhanced */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20"
            >
              <Heart className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-sm font-bold tracking-wide">Make a Lasting Impact</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] mb-6 leading-tight">
              Transform Lives
              <br />
              <span className="bg-gradient-to-r from-accent to-amber-200 bg-clip-text text-transparent">
                Change the World
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Your generosity provides hope, education, and protection to vulnerable children across East and Central Africa
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center space-x-2 text-white/80">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Secure & Encrypted</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Tax Deductible</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">100% Transparent</span>
              </div>
            </div>
          </motion.div>
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

                    {/* Personal Information - Enhanced with Validation */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold mb-4 block">
                        Your Information
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="first-name">First Name</Label>
                          <Input 
                            id="first-name" 
                            placeholder="John" 
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className={errors.firstName ? "border-destructive" : ""}
                            required 
                          />
                          {errors.firstName && (
                            <p className="text-xs text-destructive mt-1">{errors.firstName}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input 
                            id="last-name" 
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className={errors.lastName ? "border-destructive" : ""}
                            required 
                          />
                          {errors.lastName && (
                            <p className="text-xs text-destructive mt-1">{errors.lastName}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className={errors.email ? "border-destructive" : ""}
                          required
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Payment Button - Enhanced */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="hero" size="xl" className="w-full group relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <Lock className="mr-2 w-5 h-5" />
                        Secure Checkout
                        <CreditCard className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                      </Button>
                    </motion.div>

                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground text-center leading-relaxed">
                        🔒 Your donation is protected by 256-bit SSL encryption
                      </p>
                      <p className="text-xs text-muted-foreground text-center leading-relaxed">
                        📧 Instant tax-deductible receipt sent to your email
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              {/* Sidebar - Enhanced */}
              <div className="space-y-6">
                {/* Impact Card - Enhanced */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-premium rounded-3xl p-8 shadow-elegant border border-primary/10 hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-['Playfair_Display']">Your Impact</h3>
                  </div>
                  <div className="space-y-5">
                    {[
                      { amount: 25, text: "School supplies for one child", icon: "📚" },
                      { amount: 50, text: "Nutritious meals for one month", icon: "🍎" },
                      { amount: 100, text: "Education support for 3 months", icon: "📖" },
                      { amount: 250, text: "Complete healthcare for one child", icon: "🏥" },
                      { amount: 500, text: "Full year scholarship", icon: "🎓" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.amount}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start space-x-3 group hover:translate-x-2 transition-transform"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <span className="text-lg">{item.icon}</span>
                        </div>
                        <div>
                          <div className="font-bold text-lg text-primary">${item.amount}</div>
                          <div className="text-sm text-muted-foreground leading-relaxed">
                            {item.text}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Trust Indicators - Enhanced */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-premium rounded-3xl p-8 shadow-elegant border border-primary/10"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Why Trust Us?</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { icon: Lock, text: "Bank-level 256-bit SSL encryption" },
                      { icon: Award, text: "Registered Canadian charity" },
                      { icon: TrendingUp, text: "95% goes directly to programs" },
                      { icon: Check, text: "Monthly impact reports" },
                      { icon: Heart, text: "Cancel recurring donations anytime" },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center space-x-3 text-sm group hover:translate-x-1 transition-transform"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground/80">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;

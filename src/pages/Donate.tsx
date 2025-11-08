import { useState } from "react";
import { Heart, Shield, Check, CreditCard, Sparkles, Lock, Award, TrendingUp, Mail, Building, Copy, CheckCircle, Target, User, DollarSign, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";

const donationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  amount: z.number().min(1, "Donation amount must be at least $1"),
  impactArea: z.string().min(1, "Please select an impact area"),
});

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const impactAreas = [
  { value: "education", label: "📚 Children's Education", description: "Support school fees, supplies, and educational programs" },
  { value: "healthcare", label: "🏥 Healthcare & Nutrition", description: "Provide medical care, vaccines, and nutritious meals" },
  { value: "shelter", label: "🏠 Safe Shelter", description: "Fund safe housing and protection for vulnerable children" },
  { value: "emergency", label: "🚨 Emergency Relief", description: "Immediate aid for children in crisis situations" },
  { value: "empowerment", label: "💪 Youth Empowerment", description: "Skills training and mentorship programs" },
  { value: "general", label: "🌟 Greatest Need", description: "Let us direct your donation where it's needed most" },
];

// Payment information
const paymentInfo = {
  paypal: {
    email: "rayofhope@gmail.com",
    name: "Ray of Hope Foundation",
    instructions: "Send to PayPal address or use 'Send to Friends and Family' option"
  },
  bank: {
    bankName: "Global Trust Bank",
    accountName: "Ray of Hope Foundation",
    accountNumber: "1234 5678 9012 3456",
    routingNumber: "021000021",
    swiftCode: "GTBKENAXXX",
    instructions: "Include your name in the transfer reference"
  }
};

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [impactArea, setImpactArea] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success("Copied to clipboard!", {
      description: `${field} has been copied.`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    
    try {
      donationSchema.parse({
        ...formData,
        amount,
        impactArea,
      });
      
      setErrors({});
      setPledgeSubmitted(true);
      
      // Store pledge data for persistence
      localStorage.setItem('donationPledge', JSON.stringify({
        ...formData,
        amount,
        donationType,
        impactArea,
        timestamp: new Date().toISOString()
      }));
      
      toast.success("Pledge Received!", {
        description: `Thank you for your ${donationType === "monthly" ? "monthly" : "one-time"} pledge of $${amount}. Check your email for payment instructions.`,
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

  const handlePaymentComplete = () => {
    setPaymentCompleted(true);
    toast.success("Thank You for Your Donation!", {
      description: "We'll email you our gratitude once payment is verified.",
      duration: 5000,
    });
  };

  // Get stored pledge data
  const getStoredPledge = () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('donationPledge');
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  };

  const storedPledge = getStoredPledge();
  const selectedImpact = impactAreas.find(area => area.value === (impactArea || storedPledge?.impactArea));

  const PaymentMethodCard = ({ 
    title, 
    method, 
    details, 
    icon: Icon 
  }: { 
    title: string;
    method: string;
    details: { label: string; value: string; copyField: string }[];
    icon: React.ElementType;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card text-card-foreground rounded-3xl p-8 shadow-lg border border-border hover:border-primary/20 transition-all"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold font-['Playfair_Display']">{title}</h3>
          <p className="text-muted-foreground">{method}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {details.map((detail, index) => (
          <div key={index} className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground">
              {detail.label}
            </Label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-muted/50 rounded-lg px-4 py-3 font-mono text-sm break-all">
                {detail.value}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(detail.value, detail.label)}
                className="flex-shrink-0"
              >
                {copiedField === detail.label ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  if (paymentCompleted) {
    return (
      <main className="min-h-screen pt-20 bg-gradient-to-b from-green-50 to-background dark:from-green-950/20 dark:to-background">
        <section className="py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <Check className="w-12 h-12 text-green-600 dark:text-green-400" />
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6 text-foreground">
                Thank You for Your Generosity!
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your donation of <span className="font-bold text-primary">${storedPledge?.amount}</span> for <span className="font-semibold">{selectedImpact?.label}</span> will create lasting impact.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center space-x-2 text-green-700 dark:text-green-300 mb-2">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Email Confirmation</span>
                </div>
                <p className="text-green-600 dark:text-green-400 text-sm">
                  We'll email you our gratitude and confirmation once payment is verified. Please allow 24-48 hours for processing.
                </p>
              </div>

              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.location.href = '/'}
              >
                Return to Homepage
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    );
  }

  if (pledgeSubmitted) {
    return (
      <main className="min-h-screen pt-20 bg-background">
        {/* Success Section */}
        <section className="py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-6xl mx-auto"
            >
              {/* Pledge Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card text-card-foreground rounded-3xl p-8 shadow-lg border border-border mb-12"
              >
                <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-6 text-center">Your Pledge Summary</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <User className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-lg">{storedPledge?.firstName} {storedPledge?.lastName}</div>
                    <div className="text-sm text-muted-foreground">Donor</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-lg">${storedPledge?.amount}</div>
                    <div className="text-sm text-muted-foreground">Amount</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-lg capitalize">{storedPledge?.donationType}</div>
                    <div className="text-sm text-muted-foreground">Frequency</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-lg">{selectedImpact?.label}</div>
                    <div className="text-sm text-muted-foreground">Impact Area</div>
                  </div>
                </div>
              </motion.div>

              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-8 h-8 text-primary" />
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4 text-foreground">
                  Pledge Confirmed!
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Thank you for your generous {donationType === "monthly" ? "monthly" : "one-time"} pledge. 
                  Complete your donation using one of the methods below.
                </p>
              </div>

              {/* Payment Methods */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <PaymentMethodCard
                  title="PayPal"
                  method="Quick & Secure"
                  icon={CreditCard}
                  details={[
                    { label: "PayPal Email", value: paymentInfo.paypal.email, copyField: "PayPal Email" },
                    { label: "Account Name", value: paymentInfo.paypal.name, copyField: "Account Name" }
                  ]}
                />
                
                <PaymentMethodCard
                  title="Bank Transfer"
                  method="Direct & Safe"
                  icon={Building}
                  details={[
                    { label: "Bank Name", value: paymentInfo.bank.bankName, copyField: "Bank Name" },
                    { label: "Account Name", value: paymentInfo.bank.accountName, copyField: "Account Name" },
                    { label: "Account Number", value: paymentInfo.bank.accountNumber, copyField: "Account Number" },
                    { label: "Routing Number", value: paymentInfo.bank.routingNumber, copyField: "Routing Number" }
                  ]}
                />
              </div>

              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card text-card-foreground rounded-3xl p-8 shadow-lg border border-border max-w-4xl mx-auto mb-8"
              >
                <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-6 text-center">
                  Next Steps
                </h3>
                <div className="space-y-4 text-left">
                  {[
                    { step: "1", text: "Choose your payment method above and complete the transfer" },
                    { step: "2", text: `Include your name (${storedPledge?.firstName} ${storedPledge?.lastName}) in the payment reference` },
                    { step: "3", text: "Keep an eye on your email - we'll send confirmation and tax receipt within 24 hours of payment" },
                    { step: "4", text: "Click the 'I've Donated' button below once you've completed payment" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">{item.step}</span>
                      </div>
                      <p className="text-muted-foreground flex-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center space-y-4"
              >
                <div className="space-x-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.print()}
                  >
                    Print Instructions
                  </Button>
                  <Button 
                    variant="default" 
                    size="lg"
                    onClick={() => {
                      const subject = `Donation Instructions - ${storedPledge?.firstName} ${storedPledge?.lastName}`;
                      const body = `Dear ${storedPledge?.firstName},\n\nThank you for your pledge of $${storedPledge?.amount} for ${selectedImpact?.label}!\n\nPayment Details:\nPayPal: ${paymentInfo.paypal.email}\nBank Transfer: ${paymentInfo.bank.accountNumber}\n\nPlease include your name in the payment reference.\n\nBest regards,\nRay of Hope Team`;
                      window.open(`mailto:${storedPledge?.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
                    }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me Instructions
                  </Button>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="hero" 
                      size="lg"
                      onClick={handlePaymentComplete}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      I've Completed My Donation
                    </Button>
                  </motion.div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Click this button after you've sent your payment to let us know
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 relative overflow-hidden">
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
              className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-border"
            >
              <Heart className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-sm font-bold tracking-wide">Make a Pledge Today</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] mb-6 leading-tight">
              Commit to Change
              <br />
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Fulfill with Ease
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Make your pledge now and complete payment through secure channels. Our team will guide you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pledge Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Pledge Form */}
              <div className="lg:col-span-2">
                <div className="bg-card text-card-foreground rounded-3xl p-8 md:p-10 shadow-lg border border-border">
                  <div className="flex items-center space-x-3 mb-2">
                    <Mail className="w-6 h-6 text-primary" />
                    <h2 className="text-3xl font-bold font-['Playfair_Display']">
                      Make Your Pledge
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Commit to your donation now. We'll send payment instructions directly to your email.
                  </p>

                  <form onSubmit={handlePledgeSubmit} className="space-y-8">
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
                            className="flex items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
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
                            className="flex items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                          >
                            Monthly
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Impact Area Dropdown */}
                    <div>
                      <Label className="text-base font-semibold mb-4 block">
                        Where would you like to make an impact?
                      </Label>
                      <Select value={impactArea} onValueChange={setImpactArea}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select an impact area" />
                        </SelectTrigger>
                        <SelectContent>
                          {impactAreas.map((area) => (
                            <SelectItem key={area.value} value={area.value}>
                              <div className="flex flex-col">
                                <span className="font-medium">{area.label}</span>
                                <span className="text-xs text-muted-foreground">{area.description}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.impactArea && (
                        <p className="text-xs text-destructive mt-1">{errors.impactArea}</p>
                      )}
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <Label className="text-base font-semibold mb-4 block">
                        Pledge Amount (USD)
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
                            className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                              selectedAmount === amount && !customAmount
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-muted bg-background hover:border-primary/50"
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

                    {/* Pledge Button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="hero" size="xl" className="w-full group relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <Mail className="mr-2 w-5 h-5" />
                        Make Pledge & Get Payment Info
                        <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                      </Button>
                    </motion.div>

                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground text-center leading-relaxed">
                        📧 Payment instructions will be sent to your email immediately
                      </p>
                      <p className="text-xs text-muted-foreground text-center leading-relaxed">
                        🔒 Your information is secure and protected
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Impact Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card text-card-foreground rounded-3xl p-8 shadow-lg border border-border hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
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

                {/* How It Works */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-card text-card-foreground rounded-3xl p-8 shadow-lg border border-border"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">How It Works</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { step: "1", text: "Make your pledge with your details" },
                      { step: "2", text: "Get instant payment instructions" },
                      { step: "3", text: "Complete payment via PayPal or bank" },
                      { step: "4", text: "Receive confirmation and tax receipt" },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center space-x-3 text-sm group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                          {item.step}
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
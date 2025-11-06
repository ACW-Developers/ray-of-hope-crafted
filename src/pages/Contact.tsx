import { Mail, MapPin, Phone, Send, Sparkles, MessageCircle, Clock, Zap, Heart, CheckCircle, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRef, useState } from "react";
import bg3 from "@/assets/general/bg3.jpg";
import unityHands from "@/assets/unity-hands.jpg";

const Contact = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "We'll get back to you as soon as possible.",
    });
  };

  const contactMethods = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "info@rayofhope.org",
      href: "mailto:info@rayofhope.org",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+254 700 000 000",
      href: "tel:+254700000000",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Kenya, Uganda, Burundi, DRC",
      href: "#",
      color: "from-orange-500 to-red-500"
    },
  ];

  const quickActions = [
    { label: "Donate Now", icon: Heart, href: "/donate", variant: "hero" as const },
    { label: "View Programs", icon: Sparkles, href: "/programs", variant: "accent" as const },
  ];

  return (
    <main className="min-h-screen pt-20 relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section with Parallax */}
      <motion.section 
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative py-32 min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(168, 85, 247, 0.9)), url(${unityHands})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-3 glass-premium px-8 py-4 rounded-full mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <MessageCircle className="w-6 h-6 text-accent" />
              <span className="text-sm font-bold tracking-wider text-white">LET'S CONNECT</span>
            </motion.div>

            <motion.h1
              className="text-7xl md:text-8xl font-bold font-['Playfair_Display'] mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Get in Touch
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Have questions? Want to partner with us?
              <br />
              <span className="text-accent font-semibold">We'd love to hear from you.</span>
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Contact Section */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form - Takes 2 columns */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="glass-premium rounded-3xl p-10 md:p-12 shadow-strong relative overflow-hidden">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="flex items-center gap-4 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
                        <Send className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-4xl font-bold font-['Playfair_Display'] gradient-text">
                        Send Us a Message
                      </h2>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                        >
                          <Label htmlFor="name" className="text-base font-semibold mb-3 block">
                            Full Name *
                          </Label>
                          <motion.div
                            animate={{
                              scale: focusedField === "name" ? 1.02 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <Input
                              id="name"
                              placeholder="John Doe"
                              required
                              className="h-14 text-base"
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField(null)}
                            />
                          </motion.div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          <Label htmlFor="email" className="text-base font-semibold mb-3 block">
                            Email Address *
                          </Label>
                          <motion.div
                            animate={{
                              scale: focusedField === "email" ? 1.02 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@example.com"
                              required
                              className="h-14 text-base"
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField(null)}
                            />
                          </motion.div>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <Label htmlFor="subject" className="text-base font-semibold mb-3 block">
                          Subject *
                        </Label>
                        <motion.div
                          animate={{
                            scale: focusedField === "subject" ? 1.02 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            id="subject"
                            placeholder="How can we help?"
                            required
                            className="h-14 text-base"
                            onFocus={() => setFocusedField("subject")}
                            onBlur={() => setFocusedField(null)}
                          />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        <Label htmlFor="message" className="text-base font-semibold mb-3 block">
                          Message *
                        </Label>
                        <motion.div
                          animate={{
                            scale: focusedField === "message" ? 1.02 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <Textarea
                            id="message"
                            placeholder="Tell us more about your inquiry..."
                            required
                            rows={6}
                            className="resize-none text-base"
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                          />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <Button 
                          variant="hero" 
                          size="xl" 
                          className="w-full group text-lg"
                          type="submit"
                        >
                          <Send className="mr-3 group-hover:translate-x-1 transition-smooth" />
                          Send Message
                          <ArrowRight className="ml-3 group-hover:translate-x-1 transition-smooth" />
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information Sidebar */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Contact Methods */}
                <motion.div
                  className="glass-premium rounded-3xl p-8 shadow-soft"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-primary" />
                    Contact Info
                  </h3>
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <motion.a
                        key={method.label}
                        href={method.href}
                        className="flex items-start gap-4 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 8 }}
                      >
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth shadow-medium`}>
                          <method.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="font-bold mb-1 text-lg">{method.label}</div>
                          <div className="text-sm text-muted-foreground group-hover:text-primary transition-smooth">
                            {method.value}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Office Hours */}
                <motion.div
                  className="glass-premium rounded-3xl p-8 shadow-soft"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    Office Hours
                  </h3>
                  <div className="space-y-4">
                    {[
                      { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
                      { days: "Saturday", hours: "10:00 AM - 2:00 PM" },
                      { days: "Sunday", hours: "Closed" },
                    ].map((schedule, index) => (
                      <motion.div
                        key={schedule.days}
                        className="flex justify-between items-center p-3 rounded-xl hover:bg-background/50 transition-smooth"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <span className="text-muted-foreground">{schedule.days}</span>
                        <span className="font-bold">{schedule.hours}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-6 text-center">
                    EAT (East Africa Time - UTC+3)
                  </p>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  className="glass-premium rounded-3xl p-8 shadow-soft"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    {quickActions.map((action, index) => (
                      <motion.a
                        key={action.label}
                        href={action.href}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant={action.variant} className="w-full text-base" size="lg">
                          <action.icon className="mr-2 w-5 h-5" />
                          {action.label}
                        </Button>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

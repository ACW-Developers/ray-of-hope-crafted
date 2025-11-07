import { Mail, MapPin, Phone, Send, Clock, Users, Heart, CheckCircle, ArrowRight } from "lucide-react";
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
      description: "We'll get back to you within 24 hours.",
    });
  };

  const contactMethods = [
    { 
      icon: Mail, 
      label: "General Inquiries", 
      value: "info@rayofhope.org",
      description: "For general questions and information",
      href: "mailto:info@rayofhope.org",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+254 700 000 000",
      description: "Mon-Fri, 9AM-5PM EAT",
      href: "tel:+254700000000",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: MapPin, 
      label: "Regional Offices", 
      value: "Kenya, Uganda, Burundi, DRC",
      description: "Serving East Africa communities",
      href: "#",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: Users, 
      label: "Partnerships", 
      value: "partners@rayofhope.org",
      description: "For organizations and corporate partners",
      href: "mailto:partners@rayofhope.org",
      color: "from-green-500 to-emerald-500"
    },
  ];

  const quickActions = [
    { 
      label: "Make a Donation", 
      icon: Heart, 
      href: "/donate", 
      description: "Support our mission",
      variant: "hero" as const 
    },
    { 
      label: "View Programs", 
      icon: Users, 
      href: "/programs", 
      description: "Explore our initiatives",
      variant: "accent" as const 
    },
  ];

  return (
    <main className="min-h-screen pt-20 relative overflow-hidden bg-background">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative py-24 min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(168, 85, 247, 0.9)), url(${unityHands})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Send className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold tracking-wide text-white">CONTACT US</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Get in Touch
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Ready to make a difference? We're here to help you join our mission 
              to transform lives across East Africa.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Contact Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-4">
                Let's Start a Conversation
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Whether you're interested in volunteering, partnering, or learning more 
                about our work, we'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold font-['Playfair_Display'] text-foreground mb-3">
                      Send Us a Message
                    </h3>
                    <p className="text-muted-foreground">
                      Fill out the form below and our team will get back to you promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-base font-semibold mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                          className="h-12 text-base"
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-base font-semibold mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="h-12 text-base"
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-base font-semibold mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        placeholder="How can we help you today?"
                        required
                        className="h-12 text-base"
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-semibold mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Please share details about your inquiry..."
                        required
                        rows={5}
                        className="resize-none text-base"
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full text-base font-semibold group"
                      type="submit"
                    >
                      <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information Sidebar */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Contact Methods */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <motion.a
                        key={method.label}
                        href={method.href}
                        className="flex items-start gap-4 group p-3 rounded-xl hover:bg-gray-50 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm`}>
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground mb-1">{method.label}</div>
                          <div className="text-foreground font-medium">{method.value}</div>
                          <div className="text-sm text-muted-foreground mt-1">{method.description}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
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
                        className="flex justify-between items-center py-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <span className="text-muted-foreground">{schedule.days}</span>
                        <span className="font-semibold text-foreground">{schedule.hours}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    All times in East Africa Time (EAT - UTC+3)
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Quick Links
                  </h3>
                  <div className="space-y-4">
                    {quickActions.map((action, index) => (
                      <motion.a
                        key={action.label}
                        href={action.href}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Button variant={action.variant} className="w-full justify-start text-base h-14" size="lg">
                          <action.icon className="mr-3 w-5 h-5" />
                          <div className="text-left">
                            <div className="font-semibold">{action.label}</div>
                            <div className="text-xs opacity-80">{action.description}</div>
                          </div>
                        </Button>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Assurance */}
      <section className="relative py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                We're Here to Help
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our team typically responds to all inquiries within 24 hours during business days. 
                For urgent matters, please call our main office line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-sm text-muted-foreground">
                  <strong>Response Time:</strong> Within 24 hours
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Urgent Inquiries:</strong> +254 700 000 000
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
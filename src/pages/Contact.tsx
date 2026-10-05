import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, HandHeart, Mail, MessageCircle, Phone, Send, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/layout/PageHero";
import heroImage from "@/assets/general/Latest/R23.jpeg";
import communityImage from "@/assets/general/Latest/R30.jpeg";

const contactMethods = [
  { icon: Mail, label: "General inquiries", value: "info@imbutoofhope.org", description: "Questions about our work and programs", href: "mailto:info@imbutoofhope.org" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 (319) 654-2928", description: "Send a message directly to our team", href: "https://wa.me/13196542928" },
  { icon: Phone, label: "Alternative line", value: "+1 (825) 343-1549", description: "Reach us when the main line is busy", href: "tel:+18253431549" },
  { icon: Users, label: "Partnerships", value: "info@imbutoofhope.org", description: "Organizations and corporate partners", href: "mailto:info@imbutoofhope.org" },
];

const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.5 } };

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.id]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    const message = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}\n\n*Sent via:* Imbuto of Hope International Website`;
    const popup = window.open(`https://wa.me/13196542928?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);

    if (popup) {
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("WhatsApp is ready", { description: "Review your message there, then tap send." });
    } else {
      toast.error("WhatsApp could not open", { description: "Please allow pop-ups or use the direct WhatsApp link." });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <PageHero eyebrow="Contact us" title="A conversation can be the start of lasting change." description="Whether you want to give, volunteer, partner, or learn more, our team is ready to hear from you." image={heroImage} icon={Send} />

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <motion.div {...reveal}>
            <p className="eyebrow">Send a message</p>
            <h2 className="text-title mt-5">Tell us how you would like to get involved.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Complete the form and WhatsApp will open with your message prepared. You can review it before sending.</p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6" aria-label="Contact form">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="name">Full name</Label><Input id="name" autoComplete="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" required className="h-12" /></div>
                <div className="space-y-2"><Label htmlFor="email">Email address</Label><Input id="email" type="email" autoComplete="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" required className="h-12" /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="subject">Subject</Label><Input id="subject" value={formData.subject} onChange={handleInputChange} placeholder="How can we help?" required className="h-12" /></div>
              <div className="space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" value={formData.message} onChange={handleInputChange} placeholder="Share the details of your inquiry" required rows={6} className="resize-y" /></div>
              <Button variant="hero" size="lg" type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                <MessageCircle />{isSubmitting ? "Opening WhatsApp…" : "Continue in WhatsApp"}<ArrowRight />
              </Button>
            </form>
          </motion.div>

          <motion.aside {...reveal} className="lg:border-l lg:border-border lg:pl-12">
            <img src={communityImage} alt="Imbuto of Hope community members together" className="aspect-[5/3] w-full rounded-md object-cover shadow-medium" />
            <h2 className="mt-8 text-2xl font-bold">Reach us directly</h2>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {contactMethods.map(({ icon: Icon, label, value, description, href }) => (
                <a key={label} href={href} target={label === "WhatsApp" ? "_blank" : undefined} rel={label === "WhatsApp" ? "noopener noreferrer" : undefined} className="group flex gap-4 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground"><Icon className="h-5 w-5" /></span>
                  <span><strong className="block text-sm">{label}</strong><span className="mt-1 block font-semibold text-primary">{value}</span><span className="mt-1 block text-sm text-muted-foreground">{description}</span></span>
                </a>
              ))}
            </div>
            <div className="mt-7 flex items-start gap-3 rounded-md bg-muted p-5"><Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" /><p className="text-sm leading-6 text-muted-foreground"><strong className="text-foreground">Response times vary.</strong> WhatsApp is usually the quickest way to reach our team.</p></div>
          </motion.aside>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-page flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Ready to help?</p><h2 className="mt-3 text-3xl font-bold">Turn compassion into practical support.</h2></div>
          <Button asChild variant="accent" size="lg"><Link to="/donate"><HandHeart />Make a pledge<ArrowRight /></Link></Button>
        </div>
      </section>
    </main>
  );
};

export default Contact;
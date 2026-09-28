import { ArrowRight, Heart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import childImage from "@/assets/general/Latest/R17.jpeg";

export const CallToAction = () => (
  <section className="bg-muted/70 py-20 sm:py-24 lg:py-28">
    <div className="container-page">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="grid overflow-hidden rounded-md border border-border bg-card shadow-medium lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="relative min-h-[22rem] overflow-hidden">
          <img src={childImage} alt="A child reading and learning with hope" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/25" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-md bg-accent px-4 py-3 text-accent-foreground shadow-medium">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm font-bold">Your support creates opportunity</span>
          </div>
        </div>

        <div className="relative p-8 sm:p-12 lg:p-14">
          <div className="absolute inset-y-0 left-0 hidden w-1 bg-secondary lg:block" />
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            <Heart className="h-4 w-4 fill-current" /> Join Our Mission
          </p>
          <h2 className="text-title mt-5 text-primary">
            Every child matters. <span className="text-secondary">Every life counts.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Let us become a ray of hope in the darkest corners of the world. Your support can transform a child's life, providing education, protection, and a brighter future.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="xl">
              <Link to="/donate">Make a Donation <ArrowRight /></Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-secondary text-primary hover:bg-secondary hover:text-secondary-foreground">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
          <blockquote className="mt-9 border-l-2 border-accent pl-5 text-sm italic leading-relaxed text-muted-foreground">
            “Every child matters. Every life counts. Let us become a ray of hope in the darkest corners of the world.”
          </blockquote>
        </div>
      </motion.div>
    </div>
  </section>
);

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Eye,
  Gem,
  HandHelping,
  Heart,
  MapPin,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutHero from "@/assets/general/Latest/R20.jpeg";
import missionImage from "@/assets/general/Latest/R9.jpeg";
import africaService from "@/assets/general/Latest/R36.jpeg";

const coreValues = [
  { icon: Heart, title: "Compassion", description: "We care about people and respond to their needs with kindness and respect.", tone: "primary" },
  { icon: Sparkles, title: "Empowerment", description: "We help people develop the skills and resources needed to become self-reliant.", tone: "secondary" },
  { icon: Shield, title: "Integrity", description: "We act honestly, responsibly, and transparently.", tone: "accent" },
  { icon: Gem, title: "Dignity", description: "We respect the worth and rights of every person we serve.", tone: "primary" },
  { icon: HandHelping, title: "Inclusion", description: "We promote equal opportunities and participation for vulnerable people.", tone: "secondary" },
  { icon: BookOpen, title: "Sustainability", description: "We seek solutions that create lasting positive change.", tone: "accent" },
  { icon: Users, title: "Hope", description: "We believe every person deserves an opportunity for a better future.", tone: "primary" },
] as const;

const toneClasses = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
};

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export const Mission = () => (
  <section className="overflow-hidden bg-background py-20 sm:py-24 lg:py-28" aria-labelledby="who-we-are-title">
    <div className="container-page">
      <motion.div {...reveal} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-6">
          <div className="overflow-hidden rounded-md bg-muted shadow-strong">
            <img
              src={aboutHero}
              alt="Children in East Africa receiving education support"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="hidden lg:absolute -bottom-6 right-4 max-w-[15rem] rounded-md border border-border bg-card p-5 shadow-medium sm:right-8">
            <MapPin className="mb-3 h-5 w-5 text-secondary" aria-hidden="true" />
            <p className="text-sm font-bold text-primary">East & Central Africa</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Present in Kenya and Uganda, with a vision for wider regional care.</p>
          </div>
        </div>

        <div className="pt-8 lg:col-span-6 lg:pt-0">
          <p className="eyebrow">Who We Are</p>
          <h2 id="who-we-are-title" className="text-title mt-5 text-foreground">
            Restoring hope for <span className="text-primary">children and families</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-accent" />
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
            Imbuto of Hope International is a humanitarian organization empowering vulnerable children, women, youth, and families to overcome poverty, access education and essential services, and live with dignity and hope.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Through education, economic empowerment, skills development, community support, and healthcare access, we help individuals and communities build independent and sustainable futures.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <Link to="/about">Our Full Story <ArrowRight /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-secondary text-primary hover:bg-secondary hover:text-secondary-foreground">
              <Link to="/programs">Explore Our Programs</Link>
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="mt-24 grid gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-2">
        <motion.article {...reveal} className="bg-card p-7 sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <Target className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-secondary">Our Mission</p>
          <h3 className="mt-3 text-2xl font-bold text-primary">Restore hope, strengthen dignity</h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Imbuto of Hope International is committed to empowering vulnerable children, women, youth, and families through education, economic empowerment, skills development, community support, healthcare access, and sustainable livelihood opportunities.
          </p>
        </motion.article>

        <motion.article {...reveal} transition={{ duration: 0.6, delay: 0.1 }} className="bg-primary p-7 text-primary-foreground sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
            <Eye className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Vision</p>
          <h3 className="mt-3 text-2xl font-bold">Equal opportunity for every family</h3>
          <blockquote className="mt-5 text-lg leading-relaxed text-primary-foreground/80">
            “A world where vulnerable children, women, youth, and families have equal opportunities to access education, overcome poverty, live safely and with dignity, and build a hopeful and self-reliant future.”
          </blockquote>
        </motion.article>
      </div>
    </div>

    <div className="mt-24 bg-muted/70 py-20">
      <div className="container-page">
        <motion.div {...reveal} className="max-w-3xl">
          <p className="eyebrow">Our Foundation</p>
          <h3 className="text-title mt-5">Values that shape every decision</h3>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            These principles define how we serve people, work with communities, and steward every resource entrusted to us.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map(({ icon: Icon, title, description, tone }, index) => (
            <motion.article
              key={title}
              {...reveal}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-t border-border pt-6"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-md ${toneClasses[tone]}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h4 className="mt-5 text-lg font-bold text-foreground">{title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>

    <div className="container-page pt-24">
      <motion.div {...reveal} className="grid overflow-hidden rounded-md bg-primary text-primary-foreground lg:grid-cols-2">
        <div className="relative min-h-[20rem]">
          <img src={africaService} alt="Children gathered in one of our service communities" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/25" />
        </div>
        <div className="p-8 sm:p-12 lg:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Where We Serve</p>
          <h3 className="mt-4 text-3xl font-bold">Serving East & Central Africa</h3>
          <p className="mt-6 leading-relaxed text-primary-foreground/80">
            We are actively working in refugee camps in Kenya and Uganda, supporting vulnerable children and families with education, mentorship, and essential resources. Our future goals include expanding to post-conflict areas in Burundi and establishing a permanent Child Development Centre in the Democratic Republic of Congo.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Kenya & Uganda</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-secondary" /> Child Protection Focus</span>
          </div>
          <Button asChild variant="accent" size="lg" className="mt-8">
            <Link to="/contact">Join Our Mission <ArrowRight /></Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

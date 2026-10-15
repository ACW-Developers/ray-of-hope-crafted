import { ArrowRight, BookOpen, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import education from "@/assets/general/Latest/R4.jpeg";
import protection from "@/assets/general/Latest/R27.jpeg";
import mentorship from "@/assets/general/Latest/R5.jpeg";
import care from "@/assets/general/Latest/R40.jpeg";

const programs = [
  { icon: BookOpen, title: "Education Support", description: "School fees, uniforms, books, and supplies that help orphaned and vulnerable children stay in school and reach their potential.", image: education, imageAlt: "Children studying together in a classroom", tone: "primary" },
  { icon: ShieldCheck, title: "Women & Widow Empowerment", description: "Entrepreneurship, vocational skills, financial literacy, and start-up support that help women build sustainable incomes.", image: protection, imageAlt: "Community members supported together", tone: "secondary" },
  { icon: Users, title: "Youth Empowerment", description: "Prevention education, mentorship, life skills, and vocational training that open pathways to a healthier, productive future.", image: mentorship, imageAlt: "Young people sharing a meaningful conversation", tone: "accent" },
  { icon: HeartHandshake, title: "Savings Groups & Health Access", description: "Community savings groups (Ibimina) that build financial resilience, while connecting families with healthcare and insurance.", image: care, imageAlt: "Families gathered in a supportive community", tone: "primary" },
] as const;

const toneClasses = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
};

export const Programs = () => (
  <section className="bg-background py-20 sm:py-24 lg:py-28" aria-labelledby="programs-title">
    <div className="container-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid gap-6 border-b border-border pb-10 md:grid-cols-[1fr_1fr] md:items-end"
      >
        <div>
          <p className="eyebrow">What We Do</p>
          <h2 id="programs-title" className="text-title mt-5">Nine programs, one shared purpose</h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground md:pb-1">
          Connected programs that help children, women, youth, and families overcome poverty, access education and essential services, and build sustainable livelihoods.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {programs.map(({ icon: Icon, title, description, image, imageAlt, tone }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group overflow-hidden rounded-md border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-medium"
          >
            <div className="grid h-full sm:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-56 overflow-hidden bg-muted">
                <img src={image} alt={imageAlt} className="img-zoom absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary/35 to-transparent" />
              </div>
              <div className="flex flex-col p-7">
                <div className={`flex h-11 w-11 items-center justify-center rounded-md ${toneClasses[tone]}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-primary">{title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{description}</p>
                <Link to="/programs" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                  Learn about this program <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild variant="hero" size="xl">
          <Link to="/programs">Explore All Programs <ArrowRight /></Link>
        </Button>
      </div>
    </div>
  </section>
);

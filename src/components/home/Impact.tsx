import { useEffect, useRef, useState } from "react";
import { BookOpen, Globe, Heart, Target, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import impactImage from "@/assets/general/Latest/R18.jpeg";

const stats = [
  { icon: Users, value: 300, suffix: "+", label: "Children Supported", description: "Young lives reached through comprehensive care", tone: "accent" },
  { icon: BookOpen, value: 100, suffix: "+", label: "Students Enrolled", description: "Access to education and learning resources", tone: "secondary" },
  { icon: Heart, value: 20, suffix: "+", label: "Volunteers Active", description: "Dedicated people guiding future generations", tone: "accent" },
  { icon: Globe, value: 3, suffix: "", label: "Countries Reached", description: "Impact across East and Central Africa", tone: "secondary" },
] as const;

const iconTone = {
  accent: "bg-accent text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground",
};

export const Impact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-surface-dark py-24 text-surface-dark-foreground lg:py-32" aria-labelledby="impact-title">
      <img src={impactImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <Target className="h-4 w-4" /> Our Impact
          </p>
          <h2 id="impact-title" className="text-title mt-5">Hope measured in lives changed</h2>
          <p className="mt-6 text-lg leading-relaxed text-surface-dark-foreground/75">
            Every number represents a child supported, a family strengthened, and a community moving toward a more hopeful future.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-surface-dark-foreground/15 bg-surface-dark-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-dark/75 p-7 backdrop-blur-sm"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-md ${iconTone[stat.tone]}`}>
                <stat.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-6 text-4xl font-bold text-surface-dark-foreground">
                {isInView ? <CountUp end={stat.value} suffix={stat.suffix} /> : "0"}
              </p>
              <h3 className="mt-2 font-bold text-accent">{stat.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-surface-dark-foreground/65">{stat.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 border-t border-surface-dark-foreground/15 pt-8 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">Together, lasting change is possible</p>
          <p className="mx-auto mt-3 max-w-2xl text-surface-dark-foreground/75">
            Through education, mentorship, and community support, we are creating lasting change across East and Central Africa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const steps = 40;
    const increment = end / steps;
    let current = 0;
    const timer = window.setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => window.clearInterval(timer);
  }, [end]);

  return <>{count}{suffix}</>;
};

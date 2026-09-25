import { ArrowRight, BookOpen, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TypingAnimation } from "@/components/ui/TypingAnimation";

import bgImage1 from "@/assets/general/Latest/R31.jpeg";
import bgImage2 from "@/assets/general/child4.jpg";
import bgImage3 from "@/assets/general/Latest/R28.jpeg";
import bgImage4 from "@/assets/general/Latest/R33.jpeg";

const bgImages = [bgImage1, bgImage2, bgImage3, bgImage4];
const SLIDE_MS = 6500;

const typingPhrases = [
  "Rebuilding Lives",
  "Empowering Children",
  "Restoring Dignity",
  "Building Hope",
  "Creating Futures",
  "Transforming Communities",
];

const pillars = [
  { icon: BookOpen, label: "Education" },
  { icon: Shield, label: "Protection" },
  { icon: Users, label: "Mentorship" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % bgImages.length), SLIDE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-surface-dark text-surface-dark-foreground">
      {/* Image carousel */}
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={bgImages[index]}
            alt="Children supported by Imbuto of Hope International"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2 }, scale: { duration: SLIDE_MS / 1000, ease: "linear" } }}
          />
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--surface-dark))] via-[hsl(var(--surface-dark)/0.75)] to-[hsl(var(--surface-dark)/0.2)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[hsl(var(--surface-dark))] to-transparent" />

      <div className="container-page relative flex min-h-[100svh] flex-col justify-center pb-28 pt-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow !text-accent"
          >
            Imbuto of Hope International
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-display mt-6"
          >
            Every Child <br />
            <span className="text-accent">Deserves Hope</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 min-h-[2.5rem] text-xl font-semibold opacity-90 md:text-2xl"
          >
            We are{" "}
            <TypingAnimation phrases={typingPhrases} className="text-accent" cursorClassName="bg-accent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed opacity-80"
          >
            Through education, protection, and sustainable community development, we're bringing
            lasting change to orphaned and vulnerable children across East and Central Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="accent" size="xl" className="group">
              <Link to="/donate">
                Support a Child
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-surface-dark-foreground/40 bg-transparent text-surface-dark-foreground hover:bg-surface-dark-foreground/10 hover:text-surface-dark-foreground"
            >
              <Link to="/about">Our Story</Link>
            </Button>
          </motion.div>
        </div>

        {/* Bottom strip: pillars + slide progress */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-page flex flex-col gap-6 border-t border-surface-dark-foreground/15 py-6 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-6">
              {pillars.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-semibold opacity-85">
                  <Icon className="h-4 w-4 text-accent" />
                  {label}
                </li>
              ))}
            </ul>
            <div className="flex gap-2" role="tablist" aria-label="Hero images">
              {bgImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show image ${i + 1}`}
                  aria-selected={i === index}
                  role="tab"
                  className="relative h-1 w-10 overflow-hidden rounded-full bg-surface-dark-foreground/25"
                >
                  {i === index && (
                    <motion.span
                      key={index}
                      className="absolute inset-y-0 left-0 bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

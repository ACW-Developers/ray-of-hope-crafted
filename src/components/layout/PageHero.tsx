import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  imagePosition?: string;
};

export const PageHero = ({
  eyebrow,
  title,
  description,
  image,
  icon: Icon,
  imagePosition = "center",
}: PageHeroProps) => (
  <section className="relative flex min-h-[34rem] items-end overflow-hidden bg-surface-dark pt-28 text-surface-dark-foreground md:min-h-[40rem]">
    <img
      src={image}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-55"
      style={{ objectPosition: imagePosition }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/60 to-surface-dark/20" />
    <div className="container-page relative z-10 pb-16 pt-28 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl"
      >
        <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <Icon className="h-5 w-5" aria-hidden="true" /> {eyebrow}
        </p>
        <h1 className="text-display max-w-3xl text-surface-dark-foreground">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-surface-dark-foreground/80 md:text-xl">
          {description}
        </p>
      </motion.div>
    </div>
  </section>
);
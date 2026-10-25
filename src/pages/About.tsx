import { motion } from "framer-motion";
import { Award, BookOpen, Eye, HandHeart, Heart, Shield, Target, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import unityImage from "@/assets/general/Latest/R27.jpeg";
import schoolImage from "@/assets/general/Latest/R38.jpeg";
import childrenImage from "@/assets/general/Latest/R39.jpeg";
import mentoringImage from "@/assets/general/school2.webp";

const values = ["Compassion", "Empowerment", "Integrity", "Dignity", "Inclusion", "Sustainability", "Hope"];
const objectives = [
  { icon: BookOpen, title: "Education & essential services", text: "Helping children and families access education, healthcare, and the essential services they need." },
  { icon: HandHeart, title: "Overcoming poverty", text: "Building economic empowerment and sustainable livelihoods through skills, savings, and enterprise." },
  { icon: Users, title: "Overcoming social challenges", text: "Walking alongside people facing violence, substance abuse, or crisis with respectful, appropriate support." },
  { icon: Shield, title: "Dignity & independence", text: "Promoting protection, inclusion, and equal opportunities so every person can live with hope." },
];

const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.55 } };

const About = () => (
  <main className="min-h-screen bg-background">
    <PageHero eyebrow="Our story" title="Planting hope, changing lives." description="A humanitarian journey of compassion and practical action across East and Central Africa." image={unityImage} icon={Heart} />

    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <motion.div {...reveal}>
          <p className="eyebrow">The beginning</p>
          <h2 className="text-title mt-5">Born from compassion. Built for lasting change.</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
            <p>Imbuto of Hope International emerged in response to the urgent needs of children in the refugee camps of Kenya and Uganda. What started as a handful of volunteers has blossomed into a comprehensive humanitarian movement touching hundreds of lives.</p>
            <p>We saw beyond immediate physical needs. We witnessed the emotional challenges and loss of community that displacement creates—and the resilience in every child waiting to be nurtured.</p>
            <p>Today, our work serves children, women, youth, and families through education, economic empowerment, skills development, community support, and healthcare access. Every program is designed not only to meet needs, but to restore dignity and ignite hope.</p>
          </div>
        </motion.div>
        <motion.div {...reveal} className="grid grid-cols-2 gap-4">
          <img src={schoolImage} alt="Children learning together" className="col-span-2 aspect-[16/9] w-full rounded-md object-cover shadow-medium" />
          <img src={childrenImage} alt="Children supported by the community" className="aspect-square w-full rounded-md object-cover shadow-soft" />
          <div className="flex aspect-square flex-col justify-end rounded-md bg-primary p-6 text-primary-foreground shadow-soft">
            <strong className="text-4xl font-bold">200+</strong><span className="mt-2 text-sm opacity-80">children supported</span>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="border-y border-border bg-muted/45 py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-2">
          <motion.article {...reveal} className="bg-card p-8 md:p-12">
            <Target className="h-8 w-8 text-secondary" />
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-secondary">Our mission</p>
            <h2 className="mt-3 text-3xl font-bold">Restore hope and strengthen dignity.</h2>
            <p className="mt-5 leading-7 text-muted-foreground">Imbuto of Hope International is committed to empowering vulnerable children, women, youth, and families through education, economic empowerment, skills development, community support, healthcare access, and sustainable livelihood opportunities. We work to restore hope, strengthen dignity, and equip individuals and communities with the knowledge, skills, and resources they need to build independent and sustainable futures.</p>
          </motion.article>
          <motion.article {...reveal} className="bg-primary p-8 text-primary-foreground md:p-12">
            <Eye className="h-8 w-8 text-accent" />
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-accent">Our vision</p>
            <h2 className="mt-3 text-3xl font-bold">A hopeful, self-reliant future for all.</h2>
            <p className="mt-5 leading-7 text-primary-foreground/80">A world where vulnerable children, women, youth, and families have equal opportunities to access education, overcome poverty, live safely and with dignity, and build a hopeful and self-reliant future.</p>
          </motion.article>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container-page">
        <motion.div {...reveal} className="max-w-2xl">
          <p className="eyebrow">How we work</p><h2 className="text-title mt-5">Our objective guides every decision.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">To empower vulnerable children, women, youth, and families to overcome poverty, access education and essential services, develop sustainable livelihoods, overcome social challenges, and live with dignity, hope, and greater independence.</p>
        </motion.div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {objectives.map(({ icon: Icon, title, text }, index) => (
            <motion.article key={title} {...reveal} transition={{ duration: .5, delay: index * .06 }} className="grid grid-cols-[3.5rem_1fr] gap-5 border-t border-border pt-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary/10 text-secondary"><Icon className="h-6 w-6" /></span>
              <div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-primary py-15 text-surface-dark-foreground md:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <motion.div {...reveal}><Award className="h-9 w-9 text-accent" /><h2 className="text-title mt-6">Values we live by</h2><p className="mt-5 max-w-lg leading-7 text-surface-dark-foreground/70">Our values are not statements on a wall. They shape how we serve, account for resources, and walk alongside each community.</p></motion.div>
        <motion.div {...reveal} className="grid grid-cols-2 gap-px overflow-hidden rounded-md bg-surface-dark-foreground/15 sm:grid-cols-3">
          {values.map((value) => <div key={value} className="flex min-h-28 items-center gap-3 bg-surface-dark p-5 font-semibold"><span className="h-2 w-2 rounded-full bg-accent" />{value}</div>)}
        </motion.div>
      </div>
    </section>
  </main>
);

export default About;

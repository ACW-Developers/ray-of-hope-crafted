import { motion } from "framer-motion";
import { Award, BookOpen, Eye, HandHeart, Heart, Shield, Target, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import unityImage from "@/assets/unity-hands.jpg";
import schoolImage from "@/assets/general/school.webp";
import childrenImage from "@/assets/general/child2.jpeg";
import mentoringImage from "@/assets/general/school2.webp";

const values = ["Compassion", "Integrity", "Transparency", "Inclusion", "Stewardship", "Faith", "Empowerment"];
const objectives = [
  { icon: BookOpen, title: "Education support", text: "Opening access to school fees, supplies, tutoring, and opportunities that let children keep learning." },
  { icon: Shield, title: "Child protection", text: "Creating safe environments and practical safeguards for children facing displacement and vulnerability." },
  { icon: Users, title: "Mentorship & guidance", text: "Connecting young people with trusted adults who offer encouragement, direction, and positive role models." },
  { icon: HandHeart, title: "Community empowerment", text: "Equipping caregivers and local networks to build sustainable systems of care around every child." },
];

const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.55 } };

const About = () => (
  <main className="min-h-screen bg-background">
    <PageHero eyebrow="Our story" title="Hope grows when a child is seen, protected, and believed in." description="A journey of faith, compassion, and practical action across East and Central Africa." image={unityImage} icon={Heart} />

    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <motion.div {...reveal}>
          <p className="eyebrow">The beginning</p>
          <h2 className="text-title mt-5">Born from compassion. Built for lasting change.</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
            <p>Imbuto of Hope International emerged from a profound calling witnessed in the refugee camps of Kenya and Uganda. What started as a handful of volunteers has blossomed into a comprehensive movement touching hundreds of lives.</p>
            <p>We saw beyond immediate physical needs. We witnessed the spiritual and emotional void that displacement creates—and the resilience in every child waiting to be nurtured.</p>
            <p>Today, our work spans education, protection, mentorship, and holistic care. Every program is designed not only to meet needs, but to restore dignity and ignite hope.</p>
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
            <h2 className="mt-3 text-3xl font-bold">Empower every child to become who God created them to be.</h2>
            <p className="mt-5 leading-7 text-muted-foreground">To support, educate, and protect vulnerable children through holistic care addressing physical, emotional, and spiritual needs.</p>
          </motion.article>
          <motion.article {...reveal} className="bg-primary p-8 text-primary-foreground md:p-12">
            <Eye className="h-8 w-8 text-accent" />
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-accent">Our vision</p>
            <h2 className="mt-3 text-3xl font-bold">A generation rising with dignity and hope.</h2>
            <p className="mt-5 leading-7 text-primary-foreground/80">Communities where once-forgotten children have the opportunity, support, and confidence to thrive.</p>
          </motion.article>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container-page">
        <motion.div {...reveal} className="max-w-2xl">
          <p className="eyebrow">How we work</p><h2 className="text-title mt-5">Four commitments guide every decision.</h2>
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

    <section className="bg-surface-dark py-20 text-surface-dark-foreground md:py-28">
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

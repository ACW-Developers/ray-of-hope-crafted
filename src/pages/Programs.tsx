import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, CheckCircle2, Handshake, HeartHandshake, HeartPulse, PiggyBank, Shield, Sprout, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/PageHero";
import heroImage from "@/assets/general/Latest/R37.jpeg";
import educationImage from "@/assets/general/Latest/R18.jpeg";
import womenImage from "@/assets/general/Latest/R38.jpeg";
import survivorsImage from "@/assets/general/Latest/R12.jpeg";
import youthImage from "@/assets/general/Latest/R34.jpeg";
import savingsImage from "@/assets/general/Latest/R41.jpeg";
import skillsImage from "@/assets/general/Latest/R16.jpeg";
import basicImage from "@/assets/general/Latest/R25.jpeg";
import protectionImage from "@/assets/general/Latest/R13.jpeg";
import partnershipImage from "@/assets/general/Latest/R1.jpeg";

const programs = [
  { icon: BookOpen, title: "Education Support for Orphans and Vulnerable Children", tagline: "Keeping children in school", description: "Supporting orphaned and vulnerable children with school fees, uniforms, books, school supplies, and other educational needs so they can remain in school and reach their potential.", image: educationImage, features: ["School fees", "Uniforms", "Books and school supplies", "Other educational needs"] },
  { icon: Briefcase, title: "Women and Widow Economic Empowerment", tagline: "Building sustainable incomes", description: "Training widows and vulnerable women in entrepreneurship, vocational skills, financial literacy, and small-business development, with appropriate start-up support to help them establish sustainable sources of income.", image: womenImage, features: ["Entrepreneurship training", "Vocational skills", "Financial literacy", "Small-business development", "Start-up support"] },
  { icon: HeartHandshake, title: "Support for Survivors of Sexual and Gender-Based Violence", tagline: "Care with dignity and respect", description: "Supporting girls and women affected by sexual and gender-based violence, including those facing unintended pregnancies following sexual violence, by connecting them with appropriate support.", image: survivorsImage, features: ["Psychosocial support", "Health support", "Educational support", "Social and economic support"] },
  { icon: Users, title: "Youth Empowerment and Substance Abuse Prevention", tagline: "Pathways to a healthier future", description: "Supporting vulnerable youth, including young people affected by or at risk of substance abuse, with pathways toward recovery, reintegration, employment, and a healthier, more productive future.", image: youthImage, features: ["Prevention education", "Mentorship", "Life skills", "Vocational training", "Psychosocial support"] },
  { icon: PiggyBank, title: "Community Savings Groups and Health Access", tagline: "Resilience through mutual support", description: "Establishing and strengthening community savings groups (Ibimina) to promote saving, financial literacy, mutual support, and economic resilience, while helping vulnerable families connect with available healthcare and health-insurance opportunities.", image: savingsImage, features: ["Savings groups (Ibimina)", "Financial literacy", "Mutual support", "Healthcare and insurance access"] },
  { icon: Sprout, title: "Skills Development and Sustainable Livelihoods", tagline: "Skills that lead to income", description: "Providing vulnerable youth, women, and families with opportunities that can lead to sustainable income.", image: skillsImage, features: ["Vocational training", "Entrepreneurship skills", "Agricultural knowledge", "Mentorship"] },
  { icon: HeartPulse, title: "Humanitarian and Basic Support", tagline: "Help in times of crisis", description: "Providing appropriate assistance to individuals and families experiencing severe vulnerability or crisis.", image: basicImage, features: ["Food and essential needs", "Education", "Healthcare", "Emergency situations"] },
  { icon: Shield, title: "Protection, Inclusion, and Equal Opportunities", tagline: "Dignity and safety for all", description: "Promoting the protection, dignity, safety, inclusion, and equal opportunities of vulnerable children, women, youth, and families.", image: protectionImage, features: ["Protection", "Dignity and safety", "Inclusion", "Equal opportunities"] },
  { icon: Handshake, title: "Partnerships and Resource Mobilization", tagline: "Working together for lasting change", description: "Building partnerships to mobilize resources and implement sustainable programs that improve lives in Africa and beyond.", image: partnershipImage, features: ["Communities and governments", "Foundations and businesses", "Churches and donors", "Other organizations"] },
];

const Programs = () => (
  <main className="min-h-screen bg-background">
    <PageHero eyebrow="What we do" title="Nine programs. One shared purpose." description="Connected programs that empower vulnerable children, women, youth, and families to overcome poverty and build sustainable futures." image={heroImage} icon={BookOpen} />
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-7xl space-y-20 md:space-y-28">
          {programs.map(({ icon: Icon, title, tagline, description, image, features }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55 }} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={index % 2 ? "lg:order-2" : ""}>
                <div className="group overflow-hidden rounded-md bg-muted shadow-medium"><img src={image} alt={`${title} in action`} loading="lazy" className="aspect-[4/3] w-full object-cover img-zoom" /></div>
              </div>
              <div className={index % 2 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary/10 text-secondary"><Icon className="h-6 w-6" /></span><span className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Program {String(index + 1).padStart(2, "0")}</span></div>
                <p className="mt-7 text-sm font-bold text-primary">{tagline}</p>
                <h2 className="mt-2 text-2xl font-bold leading-tight md:text-3xl">{title}</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {features.map(feature => <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />{feature}</li>)}
                </ul>
                <Button asChild variant="outline" className="mt-8"><Link to="/donate">Support this program <ArrowRight /></Link></Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-page flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Looking ahead</p><h2 className="text-title mt-4">The next chapter extends hope further.</h2><p className="mt-5 leading-7 text-primary-foreground/75">Our future includes expansion to Burundi and DRC, a Child Development Centre, sustainable income projects, and skills training centres.</p></div>
        <Button asChild variant="accent" size="lg"><Link to="/projects">Explore our vision <ArrowRight /></Link></Button>
      </div>
    </section>
  </main>
);
export default Programs;

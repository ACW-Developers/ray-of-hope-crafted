import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, Globe2, HeartPulse, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/PageHero";
import heroImage from "@/assets/general/bg5.jpeg";
import educationImage from "@/assets/child-reading.jpg";
import protectionImage from "@/assets/general/school2.webp";
import mentorshipImage from "@/assets/general/child2.jpeg";
import careImage from "@/assets/general/child3.jpg";
import campImage from "@/assets/general/camp.webp";

const programs = [
  { icon: BookOpen, title: "Education Support", tagline: "Unlocking potential through learning", description: "We believe education is the key to breaking the cycle of poverty. Our comprehensive education program transforms lives through knowledge and opportunity.", image: educationImage, features: ["School fee sponsorships", "Supplies and uniforms", "After-school tutoring", "Vocational training", "Higher education scholarships"] },
  { icon: Shield, title: "Child Protection", tagline: "Safety, security, and peace of mind", description: "Every child deserves to feel safe and protected. Our initiatives create havens where children can heal, grow, and thrive without fear.", image: protectionImage, features: ["Safe facilities", "Protection policy implementation", "Trauma counselling", "Legal advocacy", "Community awareness"] },
  { icon: Users, title: "Mentorship Programs", tagline: "Guiding futures and building leaders", description: "Positive role models can transform a child's trajectory. Our mentorship program connects vulnerable youth with caring adults who inspire and guide.", image: mentorshipImage, features: ["One-to-one mentoring", "Group mentorship activities", "Life skills workshops", "Career guidance", "Leadership development"] },
  { icon: HeartPulse, title: "Holistic Care", tagline: "Nurturing body, mind, and spirit", description: "We address the whole child—physical, emotional, and spiritual needs—because transformation is strongest when every part of wellbeing is nurtured.", image: careImage, features: ["Nutrition and food support", "Healthcare access", "Spiritual development", "Recreation and sport", "Emotional wellbeing"] },
  { icon: Globe2, title: "Refugee Camp Support", tagline: "Hope in the hardest places", description: "Active in Kenya and Uganda refugee camps, we provide comprehensive support where children and caregivers need it most.", image: campImage, features: ["Emergency relief", "Education in challenging settings", "Family reunification", "Caregiver training", "Community development"] },
];

const Programs = () => (
  <main className="min-h-screen bg-background">
    <PageHero eyebrow="What we do" title="Practical care designed around the whole child." description="Five connected programs help children feel safe, stay in school, build confidence, and move toward a hopeful future." image={heroImage} icon={BookOpen} />
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
                <h2 className="mt-2 text-title">{title}</h2>
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

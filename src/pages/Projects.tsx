import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar, CheckCircle2, Heart, MapPin, Shield, Target, Trophy, Users, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/PageHero";
import heroImage from "@/assets/general/child4.jpg";
import educationImage from "@/assets/child-reading.jpg";
import havenImage from "@/assets/hero-children.jpg";
import mentorshipImage from "@/assets/general/child1.jpeg";

const stories = [
  { title: "Educational Excellence Initiative", short: "Education", location: "Kakuma Refugee Camp, Kenya", year: "2018 — Present", description: "Our flagship education program provides comprehensive academic support including full scholarships, educational materials, and personalised tutoring to help every child reach their potential.", image: educationImage, icon: BookOpen, achievements: ["Full scholarships covering tuition, books, and supplies", "Weekly tutoring and mentorship sessions", "Leadership development workshops", "Career guidance and university placement support"] },
  { title: "Safe Haven Project", short: "Protection", location: "Nakivale Camp, Uganda", year: "2019 — Present", description: "Secure facilities and comprehensive protection programs offer trauma counselling, legal advocacy, and holistic care in nurturing environments for children at risk.", image: havenImage, icon: Shield, achievements: ["Secure shelter and care facilities", "Professional trauma counselling services", "Legal advocacy and child protection", "Reintegration and family reunification programs"] },
  { title: "Mentorship Network", short: "Mentorship", location: "Kenya & Uganda", year: "2020 — Present", description: "Vulnerable children connect with dedicated mentors who offer guidance, emotional support, and positive role modelling through structured activities and life skills development.", image: mentorshipImage, icon: Users, achievements: ["One-to-one mentorship with trained volunteers", "Life skills and career development workshops", "Monthly recreational and educational activities", "Peer support groups and community building"] },
];
const goals = [
  { icon: MapPin, title: "Regional expansion", text: "Establish programs in Burundi and DRC, extending support to more vulnerable children." },
  { icon: BookOpen, title: "Child Development Centre", text: "Create an integrated home for education, healthcare, and recreation." },
  { icon: Target, title: "Sustainable initiatives", text: "Develop income-generating projects that strengthen local communities." },
  { icon: Wrench, title: "Vocational training centres", text: "Equip young people with practical skills for independence and meaningful work." },
];

const Projects = () => {
  const [selected, setSelected] = useState(0);
  const story = stories[selected];
  const StoryIcon = story.icon;
  return <main className="min-h-screen bg-background">
    <PageHero eyebrow="Our impact journey" title="Real projects. Lasting pathways to hope." description="Explore the work taking root in refugee communities and the next initiatives we are preparing to build." image={heroImage} icon={Trophy} imagePosition="center 35%" />
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-7 border-b border-border pb-8 lg:flex-row lg:items-end">
          <div><p className="eyebrow">Impact stories</p><h2 className="text-title mt-5">Progress made together.</h2></div>
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Select a project">
            {stories.map((item, index) => <Button key={item.title} role="tab" aria-selected={selected === index} variant={selected === index ? "default" : "outline"} onClick={() => setSelected(index)}>{item.short}</Button>)}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.article key={story.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .35 }} className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
            <div><img src={story.image} alt={`${story.title} participants`} className="aspect-[4/3] w-full rounded-md object-cover shadow-medium" /><div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" />{story.location}</span><span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-secondary" />{story.year}</span></div></div>
            <div className="lg:pt-5"><span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground"><StoryIcon className="h-6 w-6" /></span><h3 className="mt-6 text-3xl font-bold md:text-4xl">{story.title}</h3><p className="mt-5 text-lg leading-8 text-muted-foreground">{story.description}</p><h4 className="mt-8 font-bold">Program highlights</h4><ul className="mt-5 space-y-4">{story.achievements.map(item => <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />{item}</li>)}</ul></div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
    <section className="border-y border-border bg-muted/45 py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl"><p className="eyebrow">Future goals</p><h2 className="text-title mt-5">Building the next chapter responsibly.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Each goal strengthens the support surrounding children and creates more durable community-led change.</p></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-4">{goals.map(({icon: Icon,title,text}, index) => <motion.article key={title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.06}} className="bg-card p-7"><span className="text-sm font-bold text-secondary">0{index+1}</span><Icon className="mt-8 h-7 w-7 text-primary" /><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></motion.article>)}</div>
      </div>
    </section>
    <section className="bg-surface-dark py-16 text-surface-dark-foreground"><div className="container-page flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Stand with us</p><h2 className="mt-3 text-3xl font-bold">Help turn the next goal into a lived reality.</h2></div><Button asChild variant="accent" size="lg"><Link to="/donate"><Heart />Support our vision<ArrowRight /></Link></Button></div></section>
  </main>;
};
export default Projects;

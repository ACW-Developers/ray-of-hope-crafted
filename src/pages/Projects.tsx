import { Award, TrendingUp, Target, Sparkles, MapPin, Calendar, Users as UsersIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import childImage from "@/assets/child-reading.jpg";
import heroImage from "@/assets/hero-children.jpg";
import child1 from "@/assets/general/child1.jpeg";
import bg6 from "@/assets/general/bg6.jpg";

const successStories = [
  {
    title: "Educational Excellence Initiative",
    location: "Kakuma Refugee Camp, Kenya",
    year: "2018 - Present",
    impact: "120 children sponsored",
    description: "Our flagship education program has sponsored over 120 children in Kakuma camp, providing full school fees, supplies, and tutoring. 95% of sponsored children have shown significant academic improvement.",
    image: childImage,
    stats: [
      { label: "Students", value: "120+", icon: UsersIcon },
      { label: "Graduation Rate", value: "95%", icon: TrendingUp },
      { label: "Schools", value: "8", icon: Award },
    ],
  },
  {
    title: "Safe Haven Project",
    location: "Nakivale Camp, Uganda",
    year: "2019 - Present",
    impact: "50+ children protected",
    description: "Established safe house facilities and protection programs for at-risk children. Providing trauma counseling, legal advocacy, and holistic care in a secure environment.",
    image: heroImage,
    stats: [
      { label: "Children Safe", value: "50+", icon: UsersIcon },
      { label: "Counseling Sessions", value: "200+", icon: TrendingUp },
      { label: "Protection Staff", value: "15", icon: Award },
    ],
  },
  {
    title: "Mentorship Network",
    location: "Kenya & Uganda",
    year: "2020 - Present",
    impact: "80 active mentorship pairs",
    description: "Connected vulnerable children with caring mentors who provide guidance, support, and positive role models. Monthly activities and life skills workshops.",
    image: child1,
    stats: [
      { label: "Mentorship Pairs", value: "80", icon: UsersIcon },
      { label: "Mentors Trained", value: "100+", icon: TrendingUp },
      { label: "Workshops", value: "24/year", icon: Award },
    ],
  },
];

const futureGoals = [
  { title: "Expand to Burundi and DRC", description: "Establish comprehensive programs in two new countries.", timeline: "2025-2026", funding: "$250,000" },
  { title: "Build Child Development Centre", description: "Create a state-of-the-art facility offering comprehensive services.", timeline: "2026-2027", funding: "$500,000" },
  { title: "Launch Sustainable Projects", description: "Develop income-generating initiatives for long-term sustainability.", timeline: "2025-2028", funding: "$150,000" },
  { title: "Skills Training Centers", description: "Establish vocational training facilities for youth empowerment.", timeline: "2026-2028", funding: "$300,000" },
];

const Projects = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${bg6})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
      </div>

      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <motion.div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6">
              <Award className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-sm font-semibold tracking-wider">REAL IMPACT</span>
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold font-['Playfair_Display'] mb-6">Success Stories</h1>
            <p className="text-xl md:text-2xl text-white/90">Transforming lives, empowering communities</p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-32 bg-background z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {successStories.map((story, index) => (
                <motion.button key={story.title} onClick={() => setSelectedStory(index)} className={`px-6 py-3 rounded-xl font-semibold transition-smooth ${selectedStory === index ? "bg-gradient-primary text-primary-foreground shadow-soft" : "glass-premium hover:shadow-soft"}`} whileHover={{ scale: 1.05 }}>
                  {story.title.split(' ')[0]}
                </motion.button>
              ))}
            </div>

            <motion.div key={selectedStory} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <motion.div className="relative rounded-3xl overflow-hidden shadow-strong" whileHover={{ scale: 1.03 }}>
                  <img src={successStories[selectedStory].image} alt={successStories[selectedStory].title} className="w-full aspect-[4/3] object-cover" />
                </motion.div>
                <motion.div className="absolute -bottom-6 -right-6 glass-premium rounded-2xl p-6 shadow-elegant" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-primary">{successStories[selectedStory].location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{successStories[selectedStory].year}</span>
                  </div>
                </motion.div>
              </div>

              <div>
                <h2 className="text-4xl font-bold font-['Playfair_Display'] mb-6 gradient-text">{successStories[selectedStory].title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{successStories[selectedStory].description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {successStories[selectedStory].stats.map((stat, idx) => (
                    <motion.div key={stat.label} className="glass-premium rounded-xl p-4 text-center hover:shadow-medium transition-smooth" whileHover={{ y: -4 }}>
                      <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-gradient-subtle z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold font-['Playfair_Display'] gradient-text mb-6">Future Goals</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {futureGoals.map((goal, index) => (
                <motion.div key={goal.title} className="glass-premium rounded-3xl p-8 hover:shadow-strong transition-smooth" whileHover={{ y: -8 }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground font-bold mb-6">{index + 1}</div>
                  <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">{goal.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{goal.description}</p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">{goal.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50">
                      <Target className="w-4 h-4 text-accent" />
                      <span className="text-sm">{goal.funding}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;

import { Award, TrendingUp, Target, Sparkles, MapPin, Calendar, Users as UsersIcon, CheckCircle2, Star, Heart, Zap, ArrowRight, Trophy, BookOpen, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import childImage from "@/assets/child-reading.jpg";
import heroImage from "@/assets/hero-children.jpg";
import child1 from "@/assets/general/child1.jpeg";
import child2 from "@/assets/general/child2.jpeg";
import child3 from "@/assets/general/child3.jpg";
import bg1 from "@/assets/general/bg1.jpeg";
import bg2 from "@/assets/general/bg2.jpg";
import bg3 from "@/assets/general/bg3.jpg";

const successStories = [
  {
    title: "Educational Excellence Initiative",
    location: "Kakuma Refugee Camp, Kenya",
    year: "2018 - Present",
    impact: "Children Sponsored",
    description: "Our flagship education program provides comprehensive academic support including full scholarships, educational materials, and personalized tutoring to ensure every child reaches their full potential.",
    image: childImage,
    achievements: [
      "Full scholarships covering tuition, books, and supplies",
      "Weekly tutoring and mentorship sessions",
      "Leadership development workshops",
      "Career guidance and university placement support"
    ]
  },
  {
    title: "Safe Haven Project",
    location: "Nakivale Camp, Uganda",
    year: "2019 - Present",
    impact: "Children Protected",
    description: "Established secure facilities and comprehensive protection programs offering trauma counseling, legal advocacy, and holistic care in nurturing environments for at-risk children.",
    image: heroImage,
    achievements: [
      "24/7 secure shelter and care facilities",
      "Professional trauma counseling services",
      "Legal advocacy and child protection",
      "Reintegration and family reunification programs"
    ]
  },
  {
    title: "Mentorship Network",
    location: "Kenya & Uganda",
    year: "2020 - Present",
    impact: "Active Mentorship Relationships",
    description: "Connecting vulnerable children with dedicated mentors who provide consistent guidance, emotional support, and positive role modeling through structured activities and life skills development.",
    image: child1,
    achievements: [
      "One-on-one mentorship with trained volunteers",
      "Life skills and career development workshops",
      "Monthly recreational and educational activities",
      "Peer support groups and community building"
    ]
  },
];

const futureGoals = [
  { 
    title: "Regional Expansion", 
    description: "Establish comprehensive programs in new countries, extending our reach to thousands more vulnerable children in underserved regions.", 
    timeline: "2025-2026", 
    icon: MapPin,
    color: "from-blue-500 to-purple-500"
  },
  { 
    title: "Child Development Centre", 
    description: "Create a state-of-the-art facility offering integrated services including education, healthcare, and recreational activities for holistic child development.", 
    timeline: "2026-2027", 
    icon: BookOpen,
    color: "from-green-500 to-emerald-500"
  },
  { 
    title: "Sustainable Initiatives", 
    description: "Develop income-generating projects that ensure long-term program sustainability while empowering local communities through economic opportunities.", 
    timeline: "2025-2028", 
    icon: Target,
    color: "from-orange-500 to-red-500"
  },
  { 
    title: "Vocational Training Centers", 
    description: "Establish comprehensive skills development facilities to empower youth with practical abilities for economic independence and career success.", 
    timeline: "2026-2028", 
    icon: Zap,
    color: "from-pink-500 to-purple-500"
  },
];

const Projects = () => {
  const [selectedStory, setSelectedStory] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <main className="min-h-screen pt-20 relative overflow-hidden bg-background">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative py-32 min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.9)), url(${bg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 glass-premium px-8 py-4 rounded-full mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Trophy className="w-6 h-6 text-accent" />
              <span className="text-sm font-bold tracking-wider text-white">OUR IMPACT JOURNEY</span>
            </motion.div>
            
            <motion.h1 
              className="text-7xl md:text-8xl font-bold font-['Playfair_Display'] mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Transforming Lives
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Stories of hope, resilience, and lasting change
            </motion.p>

            {/* Impact Highlights */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Success Stories Section */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold font-['Playfair_Display'] gradient-text mb-6">
              Our Impact Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the meaningful transformations we've achieved through our dedicated programs
            </p>
          </motion.div>

          {/* Story Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {successStories.map((story, index) => (
              <motion.button
                key={story.title}
                onClick={() => setSelectedStory(index)}
                className={`group px-8 py-4 rounded-2xl font-semibold transition-smooth relative overflow-hidden ${
                  selectedStory === index
                    ? "text-white shadow-strong"
                    : "glass-premium hover:shadow-medium"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedStory === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary"
                    layoutId="activeStory"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Star className="w-4 h-4" fill={selectedStory === index ? "currentColor" : "none"} />
                  {story.title.split(' ').slice(0, 2).join(' ')}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Story Content */}
          <motion.div
            key={selectedStory}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Image Side */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="relative rounded-3xl overflow-hidden shadow-strong group"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={successStories[selectedStory].image}
                    alt={successStories[selectedStory].title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>

                {/* Location & Timeline Card */}
                <motion.div
                  className="absolute -bottom-6 -right-6 glass-premium rounded-2xl p-6 shadow-elegant max-w-xs"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-bold text-primary text-sm">{successStories[selectedStory].location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground font-medium">{successStories[selectedStory].year}</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.h3 
                  className="text-4xl font-bold font-['Playfair_Display'] mb-6 gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {successStories[selectedStory].title}
                </motion.h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {successStories[selectedStory].description}
                </p>

                {/* Achievements */}
                <motion.div
                  className="glass-premium rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Program Highlights
                  </h4>
                  <div className="space-y-3">
                    {successStories[selectedStory].achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-primary mt-2 group-hover:scale-150 transition-smooth flex-shrink-0" />
                        <p className="text-muted-foreground text-sm group-hover:text-foreground transition-smooth">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-subtle" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 glass-premium px-8 py-4 rounded-full mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Sparkles className="w-6 h-6 text-accent" />
              <span className="text-sm font-bold tracking-wider">STRATEGIC VISION 2028</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold font-['Playfair_Display'] gradient-text mb-6">
              Our Future Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expanding our reach and deepening our impact through strategic initiatives
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {futureGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -8 }}
              >
                <div className="glass-premium rounded-2xl p-8 h-full hover:shadow-strong transition-smooth relative overflow-hidden">
                  {/* Subtle Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-5 transition-smooth`}
                    initial={false}
                  />

                  {/* Number Indicator */}
                  <div className="relative mb-6">
                    <motion.div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${goal.color} text-white font-bold text-lg shadow-soft`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <goal.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-smooth" />

                  <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display'] group-hover:gradient-text transition-smooth">
                    {goal.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {goal.description}
                  </p>

                  {/* Timeline */}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">{goal.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/donate"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-primary text-white font-bold shadow-strong hover:shadow-elegant transition-smooth group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-smooth" />
              Support Our Vision
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
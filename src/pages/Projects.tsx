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
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-blue-500"
  },
  { 
    title: "Child Development Centre", 
    description: "Create a state-of-the-art facility offering integrated services including education, healthcare, and recreational activities for holistic child development.", 
    timeline: "2026-2027", 
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500"
  },
  { 
    title: "Sustainable Initiatives", 
    description: "Develop income-generating projects that ensure long-term program sustainability while empowering local communities through economic opportunities.", 
    timeline: "2025-2028", 
    icon: Target,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500"
  },
  { 
    title: "Vocational Training Centers", 
    description: "Establish comprehensive skills development facilities to empower youth with practical abilities for economic independence and career success.", 
    timeline: "2026-2028", 
    icon: Zap,
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-pink-500"
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
              backgroundImage: `linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(168, 85, 247, 0.3)), url(${bg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
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

      {/* Future Vision Timeline Section */}
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

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-purple-500 h-full hidden lg:block" />
            
            {/* Timeline Items */}
            <div className="space-y-12 lg:space-y-24">
              {futureGoals.map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node - Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-20">
                    <motion.div
                      className={`w-8 h-8 rounded-full ${goal.bgColor} shadow-lg border-4 border-white`}
                      whileHover={{ scale: 1.3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>

                  {/* Timeline Node - Mobile */}
                  <div className="lg:hidden absolute left-0 top-6 transform -translate-x-1/2 z-20">
                    <div className={`w-6 h-6 rounded-full ${goal.bgColor} shadow-lg border-3 border-white`} />
                  </div>

                  {/* Content Card */}
                  <div className={`glass-premium rounded-2xl p-6 lg:p-8 shadow-strong hover:shadow-elegant transition-smooth relative lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'
                  } ml-8 lg:ml-0`}>
                    {/* Mobile Timeline Line */}
                    <div className="absolute left-0 top-6 w-4 h-0.5 bg-gradient-to-r from-primary/50 to-transparent lg:hidden" />

                    {/* Timeline Label - Mobile */}
                    <div className="lg:hidden mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        <Calendar className="w-3 h-3" />
                        {goal.timeline}
                      </div>
                    </div>

                    {/* Icon and Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${goal.color} text-white shadow-soft`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <goal.icon className="w-6 h-6" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold font-['Playfair_Display']">
                          {goal.title}
                        </h3>
                        {/* Timeline Label - Desktop */}
                        <div className="hidden lg:flex items-center gap-2 mt-1">
                          <Calendar className="w-3 h-3 text-primary" />
                          <span className="text-sm font-semibold text-primary">{goal.timeline}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${goal.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(index + 1) * 25}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        Phase {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Spacer for alternating sides */}
                  <div className="hidden lg:block lg:w-5/12" />
                </motion.div>
              ))}
            </div>

            {/* Timeline End Cap */}
            <div className="hidden lg:flex justify-center mt-12">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg border-4 border-white flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              >
                <Trophy className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>

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
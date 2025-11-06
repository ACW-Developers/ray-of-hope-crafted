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
    impact: "120 children sponsored",
    description: "Our flagship education program has sponsored over 120 children in Kakuma camp, providing full school fees, supplies, and tutoring. 95% of sponsored children have shown significant academic improvement.",
    image: childImage,
    stats: [
      { label: "Students", value: "120+", icon: UsersIcon },
      { label: "Graduation Rate", value: "95%", icon: TrendingUp },
      { label: "Schools", value: "8", icon: Award },
    ],
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
    impact: "50+ children protected",
    description: "Established safe house facilities and protection programs for at-risk children. Providing trauma counseling, legal advocacy, and holistic care in a secure environment.",
    image: heroImage,
    stats: [
      { label: "Children Safe", value: "50+", icon: UsersIcon },
      { label: "Counseling Sessions", value: "200+", icon: TrendingUp },
      { label: "Protection Staff", value: "15", icon: Award },
    ],
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
    impact: "80 active mentorship pairs",
    description: "Connected vulnerable children with caring mentors who provide guidance, support, and positive role models. Monthly activities and life skills workshops.",
    image: child1,
    stats: [
      { label: "Mentorship Pairs", value: "80", icon: UsersIcon },
      { label: "Mentors Trained", value: "100+", icon: TrendingUp },
      { label: "Workshops", value: "24/year", icon: Award },
    ],
    achievements: [
      "One-on-one mentorship with trained volunteers",
      "Life skills and career development workshops",
      "Monthly recreational and educational activities",
      "Peer support groups and community building"
    ]
  },
];

const impactNumbers = [
  { value: "250+", label: "Lives Changed", icon: Heart, color: "from-pink-500 to-rose-500" },
  { value: "95%", label: "Success Rate", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
  { value: "3", label: "Countries", icon: MapPin, color: "from-purple-500 to-indigo-500" },
  { value: "6", label: "Years Impact", icon: Trophy, color: "from-amber-500 to-orange-500" },
];

const futureGoals = [
  { 
    title: "Expand to Burundi and DRC", 
    description: "Establish comprehensive programs in two new countries, reaching thousands more vulnerable children.", 
    timeline: "2025-2026", 
    funding: "$250,000",
    icon: MapPin,
    color: "from-blue-500 to-purple-500"
  },
  { 
    title: "Build Child Development Centre", 
    description: "Create a state-of-the-art facility offering comprehensive services including education, healthcare, and recreation.", 
    timeline: "2026-2027", 
    funding: "$500,000",
    icon: BookOpen,
    color: "from-green-500 to-emerald-500"
  },
  { 
    title: "Launch Sustainable Projects", 
    description: "Develop income-generating initiatives for long-term sustainability and community empowerment.", 
    timeline: "2025-2028", 
    funding: "$150,000",
    icon: Target,
    color: "from-orange-500 to-red-500"
  },
  { 
    title: "Skills Training Centers", 
    description: "Establish vocational training facilities for youth empowerment and economic independence.", 
    timeline: "2026-2028", 
    funding: "$300,000",
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
      {/* Animated Background Particles */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section with Parallax */}
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
              <span className="text-sm font-bold tracking-wider text-white">OUR IMPACT STORIES</span>
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
              Real stories of hope, resilience, and lasting change
            </motion.p>

            {/* Impact Numbers */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {impactNumbers.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="glass-premium rounded-2xl p-6 hover:scale-105 transition-smooth"
                  whileHover={{ y: -8 }}
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-sm text-white/80 font-medium">{item.label}</div>
                </motion.div>
              ))}
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
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Witness the incredible journeys of transformation across our programs
            </p>
          </motion.div>

          {/* Story Selector */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </motion.div>

                {/* Floating Info Card */}
                <motion.div
                  className="absolute -bottom-8 -right-8 glass-premium rounded-3xl p-8 shadow-elegant max-w-xs"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-bold text-primary">{successStories[selectedStory].location}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground font-medium">{successStories[selectedStory].year}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-bold">{successStories[selectedStory].impact}</span>
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
                  className="text-5xl font-bold font-['Playfair_Display'] mb-6 gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {successStories[selectedStory].title}
                </motion.h3>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  {successStories[selectedStory].description}
                </p>

                {/* Stats Grid */}
                <motion.div 
                  className="grid grid-cols-3 gap-6 mb-10"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {successStories[selectedStory].stats.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      variants={itemVariants}
                      className="glass-premium rounded-2xl p-6 text-center hover:shadow-medium transition-smooth group"
                      whileHover={{ y: -8, scale: 1.05 }}
                    >
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Achievements */}
                <motion.div
                  className="glass-premium rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    Key Achievements
                  </h4>
                  <div className="space-y-4">
                    {successStories[selectedStory].achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-4 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2 group-hover:scale-150 transition-smooth" />
                        <p className="text-muted-foreground group-hover:text-foreground transition-smooth">
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

      {/* Future Goals Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
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
              <span className="text-sm font-bold tracking-wider">VISION 2028</span>
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-bold font-['Playfair_Display'] gradient-text mb-6">
              Future Goals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our ambitious roadmap to expand hope and transform more lives
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto"
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
                whileHover={{ y: -12 }}
              >
                <div className="glass-premium rounded-3xl p-10 h-full hover:shadow-strong transition-smooth relative overflow-hidden">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-10 transition-smooth`}
                    initial={false}
                  />

                  {/* Number Badge */}
                  <div className="relative mb-8">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${goal.color} text-white font-bold text-2xl shadow-medium`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {index + 1}
                    </motion.div>
                    <motion.div
                      className={`absolute -right-4 -top-4 w-20 h-20 rounded-full bg-gradient-to-br ${goal.color} opacity-20 blur-xl`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>

                  {/* Icon */}
                  <goal.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-smooth" />

                  <h3 className="text-3xl font-bold mb-4 font-['Playfair_Display'] group-hover:gradient-text transition-smooth">
                    {goal.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    {goal.description}
                  </p>

                  {/* Info Tags */}
                  <div className="flex flex-wrap gap-4">
                    <motion.div
                      className="flex items-center gap-3 px-5 py-3 rounded-xl glass group-hover:shadow-soft transition-smooth"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold">{goal.timeline}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3 px-5 py-3 rounded-xl glass group-hover:shadow-soft transition-smooth"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Target className="w-5 h-5 text-accent" />
                      <span className="text-sm font-semibold">{goal.funding}</span>
                    </motion.div>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-smooth"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </motion.div>
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
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-primary text-white font-bold text-lg shadow-strong hover:shadow-elegant transition-smooth group"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-6 h-6 group-hover:scale-110 transition-smooth" />
              Help Us Achieve These Goals
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-smooth" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;

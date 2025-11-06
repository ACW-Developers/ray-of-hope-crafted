import { Award, TrendingUp, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import childImage from "@/assets/child-reading.jpg";
import heroImage from "@/assets/hero-children.jpg";
import backgroundImage from "@/assets/general/bg1.jpeg";

const successStories = [
  {
    title: "Educational Excellence Initiative",
    location: "Kakuma Refugee Camp, Kenya",
    impact: "120 children sponsored",
    description:
      "Our flagship education program has sponsored over 120 children in Kakuma camp, providing full school fees, supplies, and tutoring. 95% of sponsored children have shown significant academic improvement.",
    image: childImage,
    stats: [
      { label: "Students", value: "120+" },
      { label: "Graduation Rate", value: "95%" },
      { label: "Schools", value: "8" },
    ],
  },
  {
    title: "Safe Haven Project",
    location: "Nakivale Camp, Uganda",
    impact: "50+ children protected",
    description:
      "Established safe house facilities and protection programs for at-risk children. Providing trauma counseling, legal advocacy, and holistic care in a secure environment.",
    image: heroImage,
    stats: [
      { label: "Children Safe", value: "50+" },
      { label: "Counseling Sessions", value: "200+" },
      { label: "Protection Staff", value: "15" },
    ],
  },
  {
    title: "Mentorship Network",
    location: "Kenya & Uganda",
    impact: "80 active mentorship pairs",
    description:
      "Connected vulnerable children with caring mentors who provide guidance, support, and positive role models. Monthly activities and life skills workshops.",
    image: childImage,
    stats: [
      { label: "Mentorship Pairs", value: "80" },
      { label: "Mentors Trained", value: "100+" },
      { label: "Workshops", value: "24/year" },
    ],
  },
];

// Regular bubbles configuration for main background
const bubbles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: Math.random() * 60 + 20, // 20-80px
  color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${
    Math.random() * 100 + 155
  }, ${Math.random() * 0.3 + 0.1})`,
  left: Math.random() * 100,
  duration: Math.random() * 10 + 10, // 10-20 seconds
  delay: Math.random() * 5,
}));

// Bigger, slower bubbles for hero section
const heroBubbles = Array.from({ length: 8 }, (_, i) => ({
  id: i + 100, // Different ID range
  size: Math.random() * 120 + 80, // 80-200px - Much bigger
  color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${
    Math.random() * 100 + 155
  }, ${Math.random() * 0.2 + 0.05})`, // More transparent
  left: Math.random() * 100,
  duration: Math.random() * 20 + 25, // 25-45 seconds - Much slower
  delay: Math.random() * 10,
}));

const Projects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      {/* Static Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.1,
        }}
      />
      
      {/* Bouncing Bubbles Animation - Global */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              backgroundColor: bubble.color,
              bottom: '-100px',
            }}
            animate={{
              y: [-100, -1200],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 0.9],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        {/* Bigger, Slower Bubbles - Hero Section Only */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {heroBubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: `${bubble.left}%`,
                backgroundColor: bubble.color,
                bottom: '-200px', // Start further down for bigger bubbles
              }}
              animate={{
                y: [-200, -1500], // Travel further
                x: [0, Math.random() * 200 - 100], // More horizontal movement
                scale: [1, 1.2, 0.8], // More dramatic scale change
                rotate: [0, 180, 360], // Add rotation for bigger bubbles
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-accent/30 to-purple-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-sm font-semibold tracking-wider">REAL IMPACT, REAL CHANGE</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold font-['Playfair_Display'] mb-6 gradient-animated-text">
              Success Stories
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/90">
              Real impact, transformed lives, and communities empowered
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-background/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-24">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className={index % 2 === 1 ? "md:order-2" : ""}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass-premium rounded-3xl overflow-hidden shadow-strong group relative">
                    <motion.img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-80 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  </div>
                </motion.div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <motion.div 
                    className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      {story.location}
                    </span>
                  </motion.div>

                  <motion.h2 
                    className="text-4xl font-bold font-['Playfair_Display'] mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {story.title}
                  </motion.h2>

                  <motion.div 
                    className="flex items-center space-x-2 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="text-lg font-semibold text-accent">
                      {story.impact}
                    </span>
                  </motion.div>

                  <motion.p 
                    className="text-muted-foreground leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {story.description}
                  </motion.p>

                  <div className="grid grid-cols-3 gap-4">
                    {story.stats.map((stat, idx) => (
                      <motion.div
                        key={stat.label}
                        className="glass-premium rounded-xl p-4 text-center hover:shadow-medium transition-smooth"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + idx * 0.1 }}
                        whileHover={{ y: -4, scale: 1.05 }}
                      >
                        <div className="text-2xl font-bold text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="py-24 bg-gradient-subtle/80 backdrop-blur-sm relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Looking Ahead
              </motion.span>
              <h2 className="text-4xl font-bold font-['Playfair_Display'] gradient-text mb-6">
                Future Goals
              </h2>
              <p className="text-xl text-muted-foreground">
                Our vision for expanding impact and reaching more children
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  title: "Expand to Burundi and DRC",
                  description:
                    "Establish programs in two new countries to reach more vulnerable children in conflict-affected regions.",
                },
                {
                  title: "Build Child Development Centre",
                  description:
                    "Create a comprehensive facility offering education, protection, healthcare, and recreational activities under one roof.",
                },
                {
                  title: "Launch Sustainable Projects",
                  description:
                    "Develop income-generating initiatives that provide long-term sustainability for our programs and communities.",
                },
                {
                  title: "Skills Training Centers",
                  description:
                    "Establish vocational training facilities to equip youth with marketable skills for employment and entrepreneurship.",
                },
              ].map((goal, index) => (
                <motion.div
                  key={goal.title}
                  variants={fadeInUp}
                  className="glass-premium rounded-2xl p-6 hover:shadow-medium transition-smooth group"
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-elegant transition-smooth"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Target className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
                      <p className="text-muted-foreground">{goal.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        .gradient-animated-text {
          background: linear-gradient(
            45deg,
            #f59e0b,
            #ec4899,
            #8b5cf6,
            #06b6d4,
            #10b981
          );
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 8s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </main>
  );
};

export default Projects;
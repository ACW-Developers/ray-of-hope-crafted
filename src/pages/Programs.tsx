import { BookOpen, Shield, Users, Heart, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    icon: BookOpen,
    title: "Education Support",
    description:
      "We believe education is the key to breaking the cycle of poverty. Our education program provides:",
    features: [
      "Full or partial school fee sponsorships",
      "School supplies and uniforms",
      "After-school tutoring programs",
      "Vocational training opportunities",
      "Scholarship programs for higher education",
    ],
    color: "primary",
  },
  {
    icon: Shield,
    title: "Child Protection",
    description:
      "Every child deserves to feel safe and protected. Our protection initiatives include:",
    features: [
      "Safe house facilities for at-risk children",
      "Child protection policy implementation",
      "Trauma counseling and psychosocial support",
      "Legal advocacy for children's rights",
      "Community awareness campaigns",
    ],
    color: "secondary",
  },
  {
    icon: Users,
    title: "Mentorship Programs",
    description:
      "Positive role models can transform a child's trajectory. Our mentorship program offers:",
    features: [
      "One-on-one mentoring relationships",
      "Group mentorship activities",
      "Life skills training workshops",
      "Career guidance and planning",
      "Leadership development programs",
    ],
    color: "accent",
  },
  {
    icon: Heart,
    title: "Holistic Care",
    description:
      "We address the whole child - body, mind, and spirit. Our holistic care includes:",
    features: [
      "Nutritional support and food assistance",
      "Healthcare access and medical support",
      "Spiritual development programs",
      "Recreational and sports activities",
      "Emotional wellbeing support",
    ],
    color: "primary",
  },
  {
    icon: Globe,
    title: "Refugee Camp Support",
    description:
      "Currently active in Kenya and Uganda refugee camps, providing:",
    features: [
      "Emergency relief and supplies",
      "Education in challenging environments",
      "Family reunification efforts",
      "Caregiver training and support",
      "Community development initiatives",
    ],
    color: "secondary",
  },
  {
    icon: Sparkles,
    title: "Future Initiatives",
    description: "We're expanding our reach with plans to:",
    features: [
      "Establish operations in Burundi and DRC",
      "Build a Child Development Centre",
      "Launch sustainable income-generating projects",
      "Create skills training centers",
      "Expand our mentorship network",
    ],
    color: "accent",
  },
];

const Programs = () => {
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
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
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
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold font-['Playfair_Display'] mb-6 gradient-animated-text">
              Our Programs
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/90">
              Comprehensive support systems designed to empower children and transform communities
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <motion.div
                    key={program.title}
                    variants={fadeInUp}
                    className="glass-premium floating-card rounded-3xl p-8 md:p-10 hover:shadow-strong transition-smooth group"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-${program.color} flex items-center justify-center mb-6 shadow-soft`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>

                    <h3 className="text-3xl font-bold mb-4 font-['Playfair_Display'] group-hover:text-primary transition-smooth">
                      {program.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <motion.li 
                          key={feature} 
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <motion.div 
                            className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                            whileHover={{ scale: 1.3 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </motion.div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold font-['Playfair_Display'] mb-6">
              Support Our Programs
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your contribution directly impacts the lives of vulnerable children. Choose a program
              to support or make a general donation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate">
                <motion.button 
                  className="h-14 rounded-lg px-10 text-base inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-accent text-accent-foreground shadow-soft font-semibold glow-pulse"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Donate Now
                </motion.button>
              </a>
              <a href="/contact">
                <motion.button 
                  className="h-14 rounded-lg px-10 text-base inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Involved
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Programs;

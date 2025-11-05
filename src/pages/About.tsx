import { Heart, Target, Eye, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import unityImage from "@/assets/unity-hands.jpg";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
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

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-sm font-semibold tracking-wider">FOUNDED IN 2015</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold font-['Playfair_Display'] mb-6 gradient-animated-text">
              Our Story
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/90">
              A journey of faith, compassion, and transformation
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center mb-24"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="order-2 md:order-1">
                <motion.span 
                  className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Founded in 2015
                </motion.span>
                <h2 className="text-4xl font-bold font-['Playfair_Display'] mb-6">
                  Born from Compassion
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ray of Hope Community was founded with a simple yet powerful vision: to be a
                    light in the darkness for children who have lost everything. What started as
                    a small initiative has grown into a comprehensive support system reaching
                    hundreds of children across East and Central Africa.
                  </p>
                  <p>
                    Our journey began in refugee camps in Kenya and Uganda, where we witnessed
                    firsthand the devastating impact of displacement on children. We saw not just
                    physical needs, but broken spirits that needed restoration and hope that
                    needed rekindling.
                  </p>
                  <p>
                    Today, we work tirelessly to provide education, protection, mentorship, and
                    holistic care to orphaned and vulnerable children. Every program we run, every
                    child we support, is a testament to our belief that every life matters and
                    every child deserves a chance to thrive.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="order-1 md:order-2 relative group"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-strong">
                  <motion.img
                    src={unityImage}
                    alt="Unity and community"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-elegant"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Years Serving</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Mission, Vision, Values Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Mission */}
              <motion.div 
                variants={fadeInUp}
                className="glass-premium floating-card rounded-3xl p-8 hover:shadow-strong transition-smooth group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-soft"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To support, educate, and protect vulnerable children, empowering them to become
                  who God created them to be through holistic care addressing physical, emotional,
                  and spiritual needs.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div 
                variants={fadeInUp}
                className="glass-premium floating-card rounded-3xl p-8 hover:shadow-strong transition-smooth group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 shadow-soft"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="w-7 h-7 text-accent-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A generation of once-forgotten children rising with dignity and hope. Communities
                  where every child has the opportunity to thrive and reach their full potential.
                </p>
              </motion.div>

              {/* Values */}
              <motion.div 
                variants={fadeInUp}
                className="glass-premium floating-card rounded-3xl p-8 hover:shadow-strong transition-smooth md:col-span-2 lg:col-span-1 group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-soft"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Core Values</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Compassion",
                    "Integrity",
                    "Transparency",
                    "Inclusion",
                    "Stewardship",
                    "Faith",
                    "Empowerment",
                    "Accountability",
                  ].map((value, index) => (
                    <motion.div
                      key={value}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Heart className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        {/* Background Elements */}
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
              <h2 className="text-4xl font-bold font-['Playfair_Display'] gradient-text mb-6">
                Core Objectives
              </h2>
              <p className="text-xl text-muted-foreground">
                Our strategic focus areas for maximum impact
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  title: "Education Support",
                  description:
                    "Ensuring every child has access to quality education through sponsorships, school supplies, and tutoring programs.",
                },
                {
                  title: "Child Protection",
                  description:
                    "Creating safe environments and implementing protection policies to safeguard children from all forms of abuse.",
                },
                {
                  title: "Mentorship & Guidance",
                  description:
                    "Connecting children with caring mentors who provide emotional support, guidance, and positive role models.",
                },
                {
                  title: "Community Empowerment",
                  description:
                    "Training caregivers and strengthening community support systems to create sustainable change.",
                },
              ].map((objective, index) => (
                <motion.div
                  key={objective.title}
                  variants={fadeInUp}
                  className="glass-premium rounded-2xl p-6 hover:shadow-medium transition-smooth group"
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/20 transition-smooth"
                      whileHover={{ scale: 1.2 }}
                    >
                      <span className="text-primary font-bold">{index + 1}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{objective.title}</h3>
                      <p className="text-muted-foreground">{objective.description}</p>
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

export default About;

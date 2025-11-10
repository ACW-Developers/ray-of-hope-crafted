import { Heart, Target, Eye, Award, Sparkles, Users, Globe2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import unityImage from "@/assets/unity-hands.jpg";
import childImage1 from "@/assets/general/school2.webp";
import childImage2 from "@/assets/general/child2.jpeg";
import childImage3 from "@/assets/general/child3.jpg";
import schoolImage from "@/assets/general/school.webp";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      {/* Parallax Background with Moving Gradients */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Hero Section - Cinematic with Image Overlay */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${unityImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-[1]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-[2]">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
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
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-sm font-semibold tracking-wider text-white">FOUNDED IN 2015</span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp} 
              className="text-6xl md:text-7xl font-bold font-['Playfair_Display'] mb-6 text-white"
            >
              Our Story
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              A journey of faith, compassion, and transformation across East and Central Africa
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Timeline Section */}
      <section className="py-32 bg-background/95 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Main Story */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-16 items-start mb-32"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  The Beginning
                </span>
                <h2 className="text-5xl font-bold font-['Playfair_Display'] mb-6 gradient-text">
                  Born from Compassion
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Ray of Hope Community emerged from a profound calling witnessed in the refugee camps 
                    of Kenya and Uganda. What started as a handful of volunteers has blossomed into a 
                    comprehensive movement touching hundreds of lives.
                  </p>
                  <p>
                    We saw beyond the immediate physical needs—we witnessed the spiritual and emotional 
                    void that displacement creates. Children who had lost everything: families, homes, 
                    futures. Yet in their eyes, we also saw resilience waiting to be nurtured.
                  </p>
                  <p>
                    Today, our work spans education, protection, mentorship, and holistic care. Every 
                    program is designed not just to meet needs, but to restore dignity and ignite hope.
                  </p>
                </div>
              </motion.div>

              {/* Image Collage */}
              <motion.div variants={fadeInUp} className="relative h-[600px]">
                <motion.div 
                  className="absolute top-0 left-0 w-56 h-56 rounded-3xl overflow-hidden shadow-strong z-10"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <img src={childImage1} alt="Child reading" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                  className="absolute top-20 right-0 w-64 h-64 rounded-3xl overflow-hidden shadow-strong z-20"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <img src={schoolImage} alt="School" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-0 left-12 w-60 h-60 rounded-3xl overflow-hidden shadow-strong z-30"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <img src={childImage2} alt="Happy children" className="w-full h-full object-cover" />
                </motion.div>
                
                {/* Floating Stats */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-premium rounded-2xl p-6 shadow-elegant z-40"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-1">250+</div>
                    <div className="text-sm text-muted-foreground">Lives Changed</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Mission, Vision, Values - Unique Layout */}
            <motion.div 
              className="grid lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Mission */}
              <motion.div 
                variants={fadeInUp}
                className="relative group"
              >
                <div className="glass-premium rounded-3xl p-10 h-full hover:shadow-strong transition-smooth overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-smooth" />
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-soft relative z-10"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 font-['Playfair_Display'] relative z-10">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    To support, educate, and protect vulnerable children, empowering them to become
                    who God created them to be through holistic care addressing physical, emotional,
                    and spiritual needs.
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div 
                variants={fadeInUp}
                className="relative group"
              >
                <div className="glass-premium rounded-3xl p-10 h-full hover:shadow-strong transition-smooth overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-smooth" />
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 shadow-soft relative z-10"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Eye className="w-8 h-8 text-accent-foreground" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 font-['Playfair_Display'] relative z-10">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    A generation of once-forgotten children rising with dignity and hope. Communities
                    where every child has the opportunity to thrive and reach their full potential.
                  </p>
                </div>
              </motion.div>

              {/* Values */}
              <motion.div 
                variants={fadeInUp}
                className="relative group"
              >
                <div className="glass-premium rounded-3xl p-10 h-full hover:shadow-strong transition-smooth overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-smooth" />
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-soft relative z-10"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 font-['Playfair_Display'] relative z-10">Core Values</h3>
                  <div className="space-y-3 relative z-10">
                    {[
                      "Compassion",
                      "Integrity",
                      "Transparency",
                      "Inclusion",
                      "Stewardship",
                      "Faith",
                    ].map((value, index) => (
                      <motion.div
                        key={value}
                        className="flex items-center space-x-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Heart className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Objectives - Horizontal Scroll Cards */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Strategic Focus
              </span>
              <h2 className="text-5xl font-bold font-['Playfair_Display'] gradient-text mb-6">
                Core Objectives
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Four pillars driving sustainable change in vulnerable communities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  num: "01",
                  title: "Education Support",
                  description: "Ensuring every child has access to quality education through sponsorships, school supplies, and tutoring programs.",
                  image: schoolImage,
                },
                {
                  num: "02",
                  title: "Child Protection",
                  description: "Creating safe environments and implementing protection policies to safeguard children from all forms of abuse.",
                  image: childImage3,
                },
                {
                  num: "03",
                  title: "Mentorship & Guidance",
                  description: "Connecting children with caring mentors who provide emotional support, guidance, and positive role models.",
                  image: childImage1,
                },
                {
                  num: "04",
                  title: "Community Empowerment",
                  description: "Training caregivers and strengthening community support systems to create sustainable change.",
                  image: childImage2,
                },
              ].map((objective, index) => (
                <motion.div
                  key={objective.num}
                  variants={fadeInUp}
                  className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div 
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: `url(${objective.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:from-black/90 transition-smooth z-[1]" />
                  
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="text-6xl font-bold text-white/20 mb-4">{objective.num}</div>
                    <h3 className="text-3xl font-bold text-white mb-3 font-['Playfair_Display']">
                      {objective.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section - Animated Counters */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl font-bold font-['Playfair_Display'] gradient-text mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-muted-foreground">
                Real change, measurable results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, value: "200+", label: "Children Supported", color: "primary" },
                { icon: Globe2, value: "2", label: "Countries Active", color: "accent" },
                { icon: TrendingUp, value: "95%", label: "Graduation Rate", color: "primary" },
                { icon: Heart, value: "2+", label: "Years of Service", color: "accent" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="glass-premium rounded-3xl p-8 text-center hover:shadow-strong transition-smooth group"
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-${stat.color} flex items-center justify-center shadow-soft`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
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

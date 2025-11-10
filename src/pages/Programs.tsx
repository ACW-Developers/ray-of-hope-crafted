import { BookOpen, Shield, Users, Heart, Globe, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import childReading from "@/assets/child-reading.jpg";
import child1 from "@/assets/general/school2.webp";
import child2 from "@/assets/general/child2.jpeg";
import child3 from "@/assets/general/child3.jpg";
import school from "@/assets/general/camp.webp";
import bg5 from "@/assets/general/bg5.jpeg";

const programs = [
  {
    icon: BookOpen,
    title: "Education Support",
    tagline: "Unlocking Potential Through Learning",
    description: "We believe education is the key to breaking the cycle of poverty. Our comprehensive education program transforms lives through knowledge and opportunity.",
    features: [
      "Full or partial school fee sponsorships",
      "School supplies and uniforms",
      "After-school tutoring programs",
      "Vocational training opportunities",
      "Scholarship programs for higher education",
    ],
    image: childReading,
    stat: { value: "", label: "" },
  },
  {
    icon: Shield,
    title: "Child Protection",
    tagline: "Safety, Security, Peace of Mind",
    description: "Every child deserves to feel safe and protected. Our protection initiatives create havens where children can heal, grow, and thrive without fear.",
    features: [
      "Safe house facilities for at-risk children",
      "Child protection policy implementation",
      "Trauma counseling and psychosocial support",
      "Legal advocacy for children's rights",
      "Community awareness campaigns",
    ],
    image: child1,
    stat: { value: "", label: "" },
  },
  {
    icon: Users,
    title: "Mentorship Programs",
    tagline: "Guiding Futures, Building Leaders",
    description: "Positive role models can transform a child's trajectory. Our mentorship program connects vulnerable youth with caring adults who inspire and guide.",
    features: [
      "One-on-one mentoring relationships",
      "Group mentorship activities",
      "Life skills training workshops",
      "Career guidance and planning",
      "Leadership development programs",
    ],
    image: child2,
    stat: { value: "", label: "" },
  },
  {
    icon: Heart,
    title: "Holistic Care",
    tagline: "Nurturing Body, Mind & Spirit",
    description: "We address the whole child - physical, emotional, and spiritual needs. True transformation happens when all aspects of a child's wellbeing are nurtured.",
    features: [
      "Nutritional support and food assistance",
      "Healthcare access and medical support",
      "Spiritual development programs",
      "Recreational and sports activities",
      "Emotional wellbeing support",
    ],
    image: child3,
    stat: { value: "", label: "" },
  },
  {
    icon: Globe,
    title: "Refugee Camp Support",
    tagline: "Hope in the Hardest Places",
    description: "Active in Kenya and Uganda refugee camps, we bring light to the darkest situations, providing comprehensive support where it's needed most.",
    features: [
      "Emergency relief and supplies",
      "Education in challenging environments",
      "Family reunification efforts",
      "Caregiver training and support",
      "Community development initiatives",
    ],
    image: school,
    stat: { value: "", label: "" },
  },
];

const Programs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main ref={containerRef} className="min-h-screen pt-20 relative overflow-hidden">
      {/* Parallax Hero Background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bg5})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </motion.div>

      {/* Floating Elements */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-sm font-semibold tracking-wider text-white">TRANSFORMING LIVES</span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp} 
              className="text-6xl md:text-7xl lg:text-8xl font-bold font-['Playfair_Display'] mb-6 text-white leading-tight"
            >
              Our Programs
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support systems designed to empower children and transform communities across East and Central Africa
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Programs Showcase - Alternating Layout */}
      <section className="relative z-10 py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-32">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={program.title}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Image Side */}
                  <motion.div 
                    className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-strong group">
                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden">
                        <motion.img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                      
                      {/* Floating Stat Badge */}
                      <motion.div
                        className="absolute -bottom-6 -right-6 glass-premium rounded-2xl p-6 shadow-elegant"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-1">{program.stat.value}</div>
                          <div className="text-xs text-muted-foreground whitespace-nowrap">{program.stat.label}</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Decorative Element */}
                    <motion.div
                      className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-primary opacity-10 rounded-3xl"
                      animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Content Side */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      {/* Icon */}
                      <motion.div 
                        className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-soft"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-10 h-10 text-primary-foreground" />
                      </motion.div>

                      {/* Tagline */}
                      <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                        {program.tagline}
                      </div>

                      {/* Title */}
                      <h3 className="text-5xl font-bold font-['Playfair_Display'] mb-6 gradient-text">
                        {program.title}
                      </h3>

                      {/* Description */}
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {program.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-4 mb-8">
                        {program.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            className="flex items-start space-x-3 group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-smooth" />
                            <span className="text-muted-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.a 
                        href="/donate"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold shadow-soft hover:shadow-strong transition-smooth group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Support This Program
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Initiatives Teaser */}
      <section className="relative z-10 py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-accent/30 to-purple-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-accent" fill="currentColor" />
            <h2 className="text-5xl font-bold font-['Playfair_Display'] mb-6">
              Future Initiatives
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're expanding our reach with ambitious plans to establish operations in Burundi and DRC, 
              build a comprehensive Child Development Centre, launch sustainable income-generating projects, 
              and create skills training centers that will transform entire communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="/projects"
                className="px-10 py-4 bg-white text-primary rounded-xl font-semibold shadow-soft hover:shadow-strong transition-smooth"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Vision
              </motion.a>
              <motion.a 
                href="/donate"
                className="px-10 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-primary transition-smooth"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fund the Future
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Programs;

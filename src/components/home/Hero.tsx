import { ArrowRight, Heart, Sparkles, Star, Target, Play, Shield, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TypingAnimation } from "@/components/ui/TypingAnimation";

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // High-quality images that reflect your mission
  const images = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&crop=faces&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1491895200221-4c6d5b7d45e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const typingPhrases = [
    "Rebuilding Lives",
    "Empowering Children",
    "Restoring Dignity",
    "Building Hope",
    "Creating Futures"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      {/* Enhanced Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.05,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${image})`,
              backgroundPosition: "center 30%"
            }}
          />
        ))}
        
        {/* Multi-layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-purple-900/70 to-blue-900/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-primary/10" />
        
        {/* Animated Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />
        </div>
      </div>

      {/* Animated Particle System */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-accent/30 to-purple-400/30"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {/* Animated Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 shadow-2xl"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <Sparkles className="w-5 h-5 text-accent" fill="currentColor" />
              </motion.div>
              <span className="text-sm font-semibold text-white tracking-wider">
                <TypingAnimation 
                  phrases={typingPhrases} 
                  className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent font-bold"
                />
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Every Child
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-accent via-yellow-300 to-purple-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Deserves Hope
                </motion.span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-purple-400 rounded-full" />
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl"
            >
              Transforming lives of orphaned and vulnerable children across{" "}
              <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent font-semibold">
                East and Central Africa
              </span>{" "}
              through education, protection, and sustainable community development.
            </motion.p>

            {/* Impact Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-8 py-4"
            >
              {[
                { number: "2,000+", label: "Children Supported" },
                { number: "15", label: "Communities" },
                { number: "12", label: "Years of Service" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link to="/donate" className="flex-1">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <Button 
                    size="xl" 
                    className="w-full bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 text-white font-semibold px-8 py-6 rounded-2xl shadow-2xl shadow-accent/25 border-0 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Make a Difference
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </Button>
                </motion.div>
              </Link>
              
              <Link to="/about" className="flex-1">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outline" 
                    size="xl" 
                    className="w-full bg-white/5 backdrop-blur-md border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-6 rounded-2xl"
                  >
                    <Play className="mr-3 w-5 h-5" />
                    Our Story
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            {/* Floating Mission Cards */}
            <div className="relative h-[500px]">
              {[
                {
                  icon: Heart,
                  title: "Compassionate Care",
                  description: "Driven by love and Christian compassion",
                  color: "from-red-400 to-pink-500",
                  position: "top-0 left-10",
                  delay: 0
                },
                {
                  icon: BookOpen,
                  title: "Education Focus",
                  description: "Quality education for every child",
                  color: "from-blue-400 to-cyan-500",
                  position: "top-1/3 right-0",
                  delay: 0.3
                },
                {
                  icon: Shield,
                  title: "Child Protection",
                  description: "Safe environments for vulnerable children",
                  color: "from-green-400 to-emerald-500",
                  position: "bottom-1/3 left-0",
                  delay: 0.6
                },
                {
                  icon: Target,
                  title: "Sustainable Impact",
                  description: "Building future community leaders",
                  color: "from-purple-400 to-indigo-500",
                  position: "bottom-0 right-10",
                  delay: 0.9
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: item.delay,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className={`absolute ${item.position} bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl max-w-[280px] group cursor-pointer hover:bg-white/15 transition-all duration-500`}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Central Floating Element */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-accent to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-accent/30">
                  <Star className="w-12 h-12 text-white" fill="currentColor" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-3"
        >
          <span className="text-sm font-medium text-white/70 tracking-wider">
            Discover Our Mission
          </span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Image Progress Indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
        <div className="flex flex-col space-y-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? 'bg-accent w-8 h-2' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
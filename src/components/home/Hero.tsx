import { ArrowRight, Heart, Shield, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TypingAnimation } from "@/components/ui/TypingAnimation";
import heroImage from "@/assets/hero-children.jpg";
import unityImage from "@/assets/unity-hands.jpg";
import childReading from "@/assets/child-reading.jpg";

export const Hero = () => {
  const images = [heroImage, unityImage, childReading];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentImageIndex((current) => (current + 1) % images.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const typingPhrases = [
    "Rebuilding Lives",
    "Empowering Children",
    "Restoring Dignity",
    "Building Hope",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.1,
            }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-mesh opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-transparent" />
        
        {/* Progress Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden z-10">
          <motion.div
            className="h-full bg-gradient-gold"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Organic Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-aqua opacity-20 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-gold opacity-20 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-sapphire opacity-15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '6s' }} />
      </div>

      {/* Cinematic Content with Depth */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Glass Badge with Shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 glass-premium px-6 py-3 rounded-full mb-8 shimmer"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
            </motion.div>
            <span className="text-sm font-semibold text-white tracking-wide">
              <TypingAnimation phrases={typingPhrases} />
            </span>
          </motion.div>

          {/* Cinematic Main Heading with Glow */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 font-['Playfair_Display'] leading-[1.1] text-glow"
          >
            Every Child Deserves
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              A Ray of Hope
            </span>
          </motion.h1>

          {/* Elegant Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-white/95 mb-14 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Supporting orphaned and vulnerable children across East and Central Africa
            through education, protection, and holistic care.
          </motion.p>

          {/* Premium CTA Buttons with Micro-interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <Link to="/donate">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="accent" size="xl" className="group glow-pulse shadow-elegant">
                  Donate Now
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/about">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="xl" className="glass-premium border-white/40 text-white hover:bg-white/20">
                  Learn Our Story
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Floating Stats Cards with Depth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, value: "500+", label: "Children Supported", gradient: "bg-gradient-aqua" },
              { icon: Shield, value: "3", label: "Countries Active", gradient: "bg-gradient-sapphire" },
              { icon: Heart, value: "100%", label: "Transparency", gradient: "bg-gradient-gold" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="glass-premium rounded-3xl p-8 floating-card group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className={`w-16 h-16 ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" fill={stat.label.includes("Transparency") ? "currentColor" : "none"} />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-5xl font-bold text-white mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-white/90 font-medium tracking-wide">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

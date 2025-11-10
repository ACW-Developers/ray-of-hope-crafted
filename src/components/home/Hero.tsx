import { ArrowRight, Sparkles, Play, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { TypingAnimation } from "@/components/ui/TypingAnimation";

// Import local images from assets
import bgImage1 from "@/assets/general/child.jpg";
import bgImage2 from "@/assets/general/child4.jpg";
import bgImage3 from "@/assets/general/hero-children.jpg";
import bgImage4 from "@/assets/general/bg1.jpeg";
import featuredImage1 from "@/assets/general/bg6.jpg";
import featuredImage2 from "@/assets/general/child.jpg";
import featuredImage3 from "@/assets/general/child2.jpeg";

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [showMobileImages, setShowMobileImages] = useState(false);
  
  // Local background images from assets
  const bgImages = [
    bgImage1,
    bgImage2,
    bgImage3,
    bgImage4
  ];

  // Featured images for the circular arrangement
  const featuredImages = [
    featuredImage1,
    featuredImage2,
    featuredImage3
  ];

  // Preload images and track loading progress
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = bgImages.length + featuredImages.length;
    
    const loadImage = (src: string) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === totalImages) {
          // All images loaded, show content after a brief delay
          setTimeout(() => {
            setIsLoading(false);
            // Show mobile images after a short delay for better UX
            setTimeout(() => setShowMobileImages(true), 300);
          }, 1000);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === totalImages) {
          setTimeout(() => setIsLoading(false), 1000);
        }
      };
      img.src = src;
    };

    // Load all images
    [...bgImages, ...featuredImages].forEach(loadImage);

    // Fallback timeout in case some images fail to load
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setShowMobileImages(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((current) => (current + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading]);

  const typingPhrases = [
    "Rebuilding Lives",
    "Empowering Children", 
    "Restoring Dignity",
    "Building Hope",
    "Creating Futures",
    "Transforming Communities"
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

  // Loading Component
  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        {/* Animated Loading Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="mx-auto w-16 h-16 relative"
        >
          <Loader2 className="w-16 h-16 text-sky-400" />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <h3 className="text-2xl font-bold text-white font-playwright">
            Ray of Hope
          </h3>
          <p className="text-white/70 text-sm">
            Loading amazing content...
          </p>
          
          {/* Progress Bar */}
          <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${(imagesLoaded / (bgImages.length + featuredImages.length)) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-sky-400 to-purple-400 rounded-full"
            />
          </div>
          
          <p className="text-white/50 text-xs">
            {imagesLoaded} of {bgImages.length + featuredImages.length} images loaded
          </p>
        </motion.div>

        {/* Small Circular Images Preview for Mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center space-x-4 pt-4"
        >
          {featuredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.2 }}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-lg"
            >
              <img
                src={image}
                alt={`Loading preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900/30 via-purple-900/20 to-blue-900/10"
      >
        {/* Enhanced Background Carousel */}
        <div className="absolute inset-0 z-0">
          {bgImages.map((image, index) => (
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-purple-900/50 to-blue-900/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-primary/5" />
          
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
              className="space-y-6"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >


              {/* Main Heading - Constant Statement */}
              <motion.div variants={fadeInUp} className="space-y-6 mt-20">
                <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 leading-tight">
                  <span className="gradient-animated-text">
                    Every Child
                  </span>
                  <br />
                  <span className="gradient-animated-text delay-animation">
                    Deserves Hope
                  </span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-accent to-purple-400 rounded-full" />
              </motion.div>

              {/* Typing Animation Section with Gradient Transitions */}
              <motion.div
                variants={fadeInUp}
                className="space-y-4"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 leading-tight min-h-[60px]">
                  We are{" "}
                  <TypingAnimation 
                    phrases={typingPhrases} 
                    className="typing-gradient"
                    cursorClassName="bg-gradient-to-r from-accent to-purple-400"
                  />
                </div>
                
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-2xl">
                  Through education, protection, and sustainable community development, 
                  we're bringing lasting change to{" "}
                  <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent font-semibold">
                    East and Central Africa
                  </span>
                  .
                </p>
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
                      className="w-full bg-sky-700 border border-gray-300 hover:from-accent/90 hover:to-purple-600/90 text-white font-semibold px-8 py-6 rounded-2xl shadow-2xl shadow-accent/25 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Support the Cause
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
                
                <Link to="/about" className="flex-1 hidden sm:block">
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

            {/* Right Content - Circular Image Arrangement */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[500px] w-[500px]">
                {/* Circular Image 1 - Top */}
                <motion.div
                  className="absolute mt-14 left-32 transform -translate-x-1/2 -translate-y-4 w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                  initial={{ scale: 0.8, opacity: 0, y: -50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${featuredImages[0]})` }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                </motion.div>

                {/* Circular Image 2 - Bottom Left */}
                <motion.div
                  className="absolute bottom-8 left-6 w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                  initial={{ scale: 0.8, opacity: 0, x: -50 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${featuredImages[1]})` }}
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/40" />
                  
                  {/* Floating Badge for Image 2 */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                  </motion.div>
                </motion.div>

                {/* Circular Image 3 - Bottom Right */}
                <motion.div
                  className="absolute bottom-8 right-10 w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                  initial={{ scale: 0.8, opacity: 0, x: 50 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${featuredImages[2]})` }}
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 4
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/40" />
                  
                  {/* Floating Badge for Image 3 */}
                  <motion.div
                    className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Circular Images - Show on small screens */}
          <AnimatePresence>
            {showMobileImages && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className="lg:hidden flex justify-center space-x-6 mt-12 pt-4 mb-4 border-t border-white/20"
              >
                {featuredImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm"
                  >
                    <img
                      src={image}
                      alt={`Featured ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/30" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-3"
        >
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
            {bgImages.map((_, index) => (
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

        {/* Custom CSS for gradient animations */}
        <style>{`
          .typing-gradient {
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

          .delay-animation {
            animation-delay: 2s;
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
      </motion.section>
    </>
  );
};
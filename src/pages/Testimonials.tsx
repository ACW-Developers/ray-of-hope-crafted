import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Ray of Hope gave my children a future I couldn't provide alone. Through their education support, my daughter is now in secondary school and dreams of becoming a teacher.",
    author: "Mary K.",
    role: "Caregiver, Kakuma Camp",
    organization: "Parent",
  },
  {
    quote:
      "The mentorship program changed my life. My mentor helped me believe in myself and showed me that my past doesn't define my future. Today, I'm in university studying social work.",
    author: "James M.",
    role: "Former Beneficiary",
    organization: "Now Community Leader",
  },
  {
    quote:
      "Working with Ray of Hope has been transformative. Their holistic approach addresses not just immediate needs but creates lasting change in children's lives.",
    author: "Dr. Sarah L.",
    role: "Partner Organization",
    organization: "Education Initiative",
  },
  {
    quote:
      "The protection services saved my granddaughter from an unsafe situation. Now she's in a secure environment, receiving counseling, and slowly healing. We are forever grateful.",
    author: "Grace N.",
    role: "Guardian",
    organization: "Nakivale Camp",
  },
  {
    quote:
      "As a volunteer mentor, I've witnessed incredible transformations. These children have immense potential - they just need someone to believe in them and provide opportunities.",
    author: "Michael T.",
    role: "Volunteer Mentor",
    organization: "3 Years Active",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-sm font-semibold tracking-wider">STORIES OF HOPE</span>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold font-['Playfair_Display'] mb-6 gradient-animated-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Voices of Hope
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Stories of transformation from those whose lives have been touched by our work
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="glass-premium rounded-3xl p-12 md:p-16 shadow-strong relative overflow-hidden">
              {/* Decorative Elements */}
              <motion.div 
                className="absolute top-8 right-8 opacity-10"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <Quote className="w-32 h-32 text-primary" />
              </motion.div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                  >
                    <div className="mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Quote className="w-12 h-12 text-primary mb-6" />
                      </motion.div>
                      <p className="text-2xl md:text-3xl leading-relaxed text-foreground mb-8 font-light">
                        {testimonials[currentIndex].quote}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-xl mb-1">
                          {testimonials[currentIndex].author}
                        </div>
                        <div className="text-muted-foreground">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-sm text-primary font-semibold mt-1">
                          {testimonials[currentIndex].organization}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={prev}
                            className="rounded-full hover:bg-primary/10"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </Button>
                        </motion.div>
                        <div className="text-sm text-muted-foreground px-4">
                          {currentIndex + 1} / {testimonials.length}
                        </div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={next}
                            className="rounded-full hover:bg-primary/10"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted hover:bg-muted-foreground w-2"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of All Testimonials */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold font-['Playfair_Display'] gradient-text mb-6">
                More Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                Every testimonial represents a life transformed
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="glass-premium floating-card rounded-2xl p-8 hover:shadow-strong transition-smooth"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary font-semibold mt-1">
                      {testimonial.organization}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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

export default Testimonials;

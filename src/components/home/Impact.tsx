import { useEffect, useRef, useState } from "react";
import { Users, GraduationCap, Heart, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Children Supported",
  },
  {
    icon: GraduationCap,
    value: 300,
    suffix: "+",
    label: "Students Enrolled",
  },
  {
    icon: Heart,
    value: 50,
    suffix: "+",
    label: "Mentors Active",
  },
  {
    icon: Globe,
    value: 3,
    suffix: "",
    label: "Countries Reached",
  },
];

export const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
      {/* Cinematic Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-gold opacity-20 rounded-full blur-[150px] animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-aqua opacity-15 rounded-full blur-[150px] animate-float-slow" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[120px]" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Elegant Section Header */}
          <div className="text-center mb-20 reveal">
            <div className="inline-flex items-center space-x-2 glass-premium px-6 py-3 rounded-full mb-6 shimmer">
              <div className="w-2 h-2 bg-gradient-gold rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white tracking-wider uppercase">
                Making a Difference
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] text-white mb-8 leading-tight text-glow">
              Our Impact in Numbers
            </h2>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light">
              Real change, measurable results, and transformed lives across East and Central Africa.
            </p>
          </div>

          {/* Interactive 3D Stats Grid with Particles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const gradients = ['bg-gradient-aqua', 'bg-gradient-sapphire', 'bg-gradient-gold', 'bg-gradient-primary'];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="text-center group relative"
                >
                  {/* Pulsating Rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`w-32 h-32 rounded-full ${gradients[index]} opacity-20`}
                    />
                  </div>
                  
                  {/* Rotating 3D Icon */}
                  <motion.div
                    whileHover={{
                      rotateY: 360,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${gradients[index]} mb-6 shadow-elegant relative z-10`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                    
                    {/* Particle Effects */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        animate={{
                          x: [0, (i - 1) * 30],
                          y: [0, -40],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Animated Counter */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-6xl md:text-7xl font-bold mb-4 text-white text-glow"
                  >
                    {isVisible ? (
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    ) : (
                      "0"
                    )}
                  </motion.div>
                  
                  <div className="text-base md:text-lg text-white/90 font-semibold tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Counter animation component
const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

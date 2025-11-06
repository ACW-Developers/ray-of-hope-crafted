import { useEffect, useRef, useState } from "react";
import { Users, GraduationCap, Heart, Globe, Target, Sparkles } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Children Supported",
    description: "Young lives transformed through comprehensive care",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: GraduationCap,
    value: 300,
    suffix: "+",
    label: "Students Enrolled",
    description: "Access to quality education and learning resources",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: Heart,
    value: 50,
    suffix: "+",
    label: "Mentors Active",
    description: "Dedicated volunteers guiding future generations",
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: Globe,
    value: 3,
    suffix: "",
    label: "Countries Reached",
    description: "Making impact across East and Central Africa",
    color: "from-violet-400 to-purple-500",
  },
];

export const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
      }}
    >
      {/* Enhanced Water Canvas */}
      <WaterCanvas isActive={isInView} />
      
      {/* Subtle Floating Elements */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} color="cyan" />
        <FloatingElement delay={3} color="emerald" />
        <FloatingElement delay={6} color="violet" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Refined Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Elegant Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-3 rounded-full mb-6"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              >
                <Target className="w-4 h-4 text-cyan-300" />
              </motion.div>
              <span className="text-xs font-medium text-white tracking-widest uppercase">
                Our Impact
              </span>
              <Sparkles className="w-4 h-4 text-cyan-300" fill="currentColor" />
            </motion.div>

            {/* Balanced Title */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Waves of
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                Change
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Measuring hope through tangible results. Every number represents a life transformed and a future rewritten.
            </motion.p>
          </motion.div>

          {/* Organized Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <StatCard 
                key={stat.label}
                stat={stat}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-white/70 text-sm uppercase tracking-widest font-semibold mb-3">
              Together We're Making Difference
            </p>
            <p className="text-white/90 text-base max-w-2xl mx-auto">
              Through education, mentorship, and community support, we're creating lasting change 
              across <span className="text-cyan-300 font-semibold">East and Central Africa</span>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Subtle Ambient Lights */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400/5 rounded-full blur-[80px]" />
    </section>
  );
};

// Stat Card Component
const StatCard = ({ stat, index, isVisible }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-50, 50], [8, -8]));
  const rotateY = useSpring(useTransform(mouseX, [-50, 50], [-8, 8]));

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="group relative"
    >
      {/* Hover Wave Effect */}
      {isHovered && (
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-20`}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Main Card */}
      <motion.div
        animate={isHovered ? { y: -5 } : {}}
        className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-white/20 transition-all duration-300 h-full"
      >
        {/* Icon Container */}
        <motion.div
          animate={isHovered ? { 
            scale: 1.1,
            rotateY: 180 
          } : {}}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} mb-4 shadow-lg`}
        >
          <stat.icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Counter */}
        <motion.div
          animate={isHovered ? { scale: 1.05 } : {}}
          className="text-3xl md:text-4xl font-bold text-white mb-2"
        >
          {isVisible ? (
            <CountUp end={stat.value} suffix={stat.suffix} />
          ) : (
            "0"
          )}
        </motion.div>

        {/* Label */}
        <h3 className="text-lg font-semibold text-white mb-2">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed">
          {stat.description}
        </p>

        {/* Bottom Drip Effect */}
        <motion.div
          animate={isHovered ? { 
            scaleY: [0, 1, 0],
            opacity: [0, 1, 0],
          } : {}}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
          className={`absolute bottom-0 left-1/2 w-1 h-6 bg-gradient-to-t ${stat.color} rounded-t-full -translate-x-1/2 translate-y-full`}
        />
      </motion.div>
    </motion.div>
  );
};

// Simplified Water Canvas
const WaterCanvas = ({ isActive }: { isActive: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }> = [];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
      });
    }

    let animationId: number;

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        if (!isActive) return;

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.15)';
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - distance / 120)})`;
              ctx.lineWidth = 0.3;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    if (isActive) {
      animate();
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 pointer-events-none"
    />
  );
};

// Floating Element Component
const FloatingElement = ({ delay, color }: any) => {
  return (
    <motion.div
      className={`absolute w-6 h-6 bg-${color}-400/10 border border-${color}-400/20 rounded-full`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
      }}
    />
  );
};

// Counter Component
const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const steps = 50;
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
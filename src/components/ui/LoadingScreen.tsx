import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logos/logo2.png";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          return 95; // Hold at 95% until actual completion
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // When parent signals completion
    if (progress >= 95) {
      setProgress(100);
      setTimeout(onLoadingComplete, 300);
    }
  }, [onLoadingComplete, progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 flex items-center justify-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-accent/30 to-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8 flex justify-center"
        >
          <img src={logo} alt="Ray of Hope" className="w-32 h-32 object-contain" />
        </motion.div>

        {/* Organization Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-white font-['Playfair_Display'] mb-8"
        >
          Ray of Hope Foundation
        </motion.h1>

        {/* Beautiful Loading Circle with Particles */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-primary to-purple-500 opacity-20 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Rotating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
              }}
              animate={{
                rotate: [i * 45, i * 45 + 360],
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.125,
                ease: "linear",
              }}
            />
          ))}
          
          {/* Main circle */}
          <svg className="w-32 h-32 transform -rotate-90 relative z-10">
            {/* Background circle */}
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="6"
              fill="none"
            />
            
            {/* Progress circle with animated gradient */}
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              stroke="url(#beautifulGradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.5))',
              }}
              initial={{ strokeDasharray: "0 352" }}
              animate={{ strokeDasharray: `${(progress / 100) * 352} 352` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            
            <defs>
              <linearGradient id="beautifulGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="50%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Percentage in center with pulse effect */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            key={progress}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <div className="text-center">
              <motion.span 
                className="text-3xl font-bold bg-gradient-to-r from-accent via-primary to-purple-400 bg-clip-text text-transparent"
                animate={{ 
                  textShadow: [
                    '0 0 8px rgba(251, 146, 60, 0.3)',
                    '0 0 16px rgba(251, 146, 60, 0.5)',
                    '0 0 8px rgba(251, 146, 60, 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {progress}
              </motion.span>
              <span className="text-xl text-white/60">%</span>
            </div>
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/80 text-lg"
        >
          Bringing hope to life...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

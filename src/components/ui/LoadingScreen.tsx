import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logos/logo2.png";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

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

        {/* Loading Circle */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <svg className="w-24 h-24 transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="44"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="4"
              fill="none"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="44"
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 276" }}
              animate={{ strokeDasharray: `${(progress / 100) * 276} 276` }}
              transition={{ duration: 0.3 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold"
            key={progress}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {progress}%
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

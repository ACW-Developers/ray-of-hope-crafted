import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const newBubbles: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 40,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setBubbles(newBubbles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => {
        const distance = Math.sqrt(
          Math.pow(mousePos.x - (bubble.x / 100) * window.innerWidth, 2) +
            Math.pow(mousePos.y - (bubble.y / 100) * window.innerHeight, 2)
        );
        const scale = Math.max(1, 1.5 - distance / 500);

        return (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              left: `${bubble.x}%`,
              width: bubble.size,
              height: bubble.size,
              background: `radial-gradient(circle at 30% 30%, rgba(147, 197, 253, 0.3), rgba(59, 130, 246, 0.1))`,
              backdropFilter: "blur(2px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: ["-20vh", "-120vh"],
              opacity: [0, 1, 1, 0],
              scale: [1, scale, scale, 0.8],
              x: [0, Math.sin(bubble.id) * 50, 0],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
      
      {/* Mathematical wave patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M0,${200 + i * 100} Q400,${150 + i * 100} 800,${200 + i * 100} T1600,${200 + i * 100}`}
            stroke="url(#waveGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

import { motion } from "framer-motion";

interface WaveDividerProps {
  className?: string;
  color?: string;
}

export const WaveDivider = ({ className = "", color = "hsl(var(--primary))" }: WaveDividerProps) => {
  return (
    <div className={`relative w-full h-24 overflow-hidden ${className}`}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
          fill={color}
          initial={{ d: "M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" }}
          animate={{
            d: [
              "M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z",
              "M0,50 C150,0 350,100 600,50 C850,0 1050,100 1200,50 L1200,120 L0,120 Z",
              "M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};

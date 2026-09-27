import { motion } from "framer-motion";
import logo from "@/assets/logos/logo2.png";

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    role="status"
    aria-live="polite"
    aria-label="Loading Imbuto of Hope International"
  >
    <div className="px-6 text-center">
      <img src={logo} alt="" className="mx-auto h-24 w-24 object-contain" />
      <h1 className="mt-6 text-2xl font-bold text-foreground md:text-3xl">Imbuto of Hope International</h1>
      <div className="mx-auto mt-7 h-8 w-8 animate-spin rounded-full border-[3px] border-border border-t-secondary" aria-hidden="true" />
      <p className="mt-4 text-sm text-muted-foreground">Bringing hope to life…</p>
    </div>
  </motion.div>
);

export default LoadingScreen;
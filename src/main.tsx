import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import App from "./App.tsx";
import LoadingScreen from "./components/ui/LoadingScreen";
import "./index.css";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure minimum loading time for smooth experience
    const minLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(minLoadTime);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <App key="app" />
      )}
    </AnimatePresence>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);

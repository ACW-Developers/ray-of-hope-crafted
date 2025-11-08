import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import App from "./App.tsx";
import LoadingScreen from "./components/ui/LoadingScreen";
import "./index.css";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for all resources to be loaded
    const handleLoad = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
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

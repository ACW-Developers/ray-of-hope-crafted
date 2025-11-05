import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Users, BookOpen, FolderOpen, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

// Import your actual logo from assets
import logo from "@/assets/logos/logo2.png"; // Adjust the path to your actual logo file

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const navbarBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Users },
    { name: "Programs", path: "/programs", icon: BookOpen },
    { name: "Projects", path: "/projects", icon: FolderOpen },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <>
      <ScrollProgress />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-2 left-4 right-4 z-50 transition-all duration-500 ${
          scrolled ? "glass-premium shadow-elegant" : "glass-premium"
        }`}
        style={{
          backdropFilter: useTransform(navbarBlur, (v) => `blur(${v}px)`),
          borderRadius: "2rem",
        }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-1">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <img 
                  src={logo} 
                  alt="Ray of Hope Community Logo" 
                  className="w-16 h-16 object-contain transition-all duration-300"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.path} to={item.path}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group"
                    >
                      <div
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                          location.pathname === item.path
                            ? "bg-primary/20 text-primary"
                            : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                );
              })}
              <Link to="/donate">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="accent" size="sm" className="ml-4 glow-pulse">
                    <span className="mr-2">❤️</span>
                    Donate Now
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl glass-premium transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-2 border-t border-white/10"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                        location.pathname === item.path
                          ? "bg-primary/20 text-primary"
                          : "text-muted-foreground hover:bg-primary/10"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </motion.div>
                  </Link>
                );
              })}
              <Link to="/donate" onClick={() => setIsOpen(false)}>
                <Button variant="accent" size="sm" className="w-full mt-2">
                  <span className="mr-2">❤️</span>
                  Donate Now
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
};
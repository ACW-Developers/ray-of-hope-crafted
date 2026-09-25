import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, HandHeart } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import logo from "@/assets/logos/logo2.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled || isOpen
            ? "border-border bg-background/95 shadow-soft backdrop-blur-md"
            : "border-transparent bg-background/80 backdrop-blur-sm"
        }`}
      >
        <nav className="container-page flex h-20 items-center justify-between" aria-label="Main">
          <Link to="/" className="flex items-center gap-3" aria-label="Imbuto of Hope International home">
            <span className="flex h-14 w-14 items-center justify-center rounded-md bg-card p-1 shadow-soft">
              <img src={logo} alt="" className="h-full w-full object-contain" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-base font-bold text-primary">Imbuto of Hope</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                International
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                      active ? "text-primary" : "text-foreground/75 hover:text-primary"
                    }`}
                  >
                    {item.name}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button asChild variant="accent" size="sm" className="h-10 px-5">
              <Link to="/donate">
                <HandHeart /> Donate
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen((o) => !o)}
              className="rounded-md p-2 text-foreground hover:bg-muted"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "calc(100svh - 5rem)" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-y-auto border-t border-border bg-background lg:hidden"
            >
              <ul className="container-page flex flex-col py-6">
                {navItems.map((item, i) => {
                  const active = location.pathname === item.path;
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <Link
                        to={item.path}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between border-b border-border py-4 text-xl font-semibold ${
                          active ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {item.name}
                        {active && <span className="h-2 w-2 rounded-full bg-accent" />}
                      </Link>
                    </motion.li>
                  );
                })}
                <li className="pt-6">
                  <Button asChild variant="accent" size="lg" className="w-full">
                    <Link to="/donate">
                      <HandHeart /> Donate Now
                    </Link>
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { WaveDivider } from "@/components/ui/WaveDivider";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative">
      <WaveDivider className="-mb-1" color="hsl(var(--primary))" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
              >
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </motion.div>
              <div>
                <span className="text-xl font-bold font-['Playfair_Display'] text-white">
                  Ray of Hope
                </span>
                <p className="text-xs text-white/70">Community</p>
              </div>
            </Link>
            <p className="text-sm text-white/80 leading-relaxed">
              Rebuilding lives and restoring hope for orphaned and vulnerable children across East and Central Africa.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                    aria-label={social.label}
                  >
                    <motion.div
                      className="absolute inset-0 bg-accent rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <Icon className="w-6 h-6 relative z-10 group-hover:text-accent transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Programs", "Projects", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-white/80 hover:text-accent transition-all inline-block hover:translate-x-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Programs</h3>
            <ul className="space-y-2">
              {[
                "Education Support",
                "Child Protection",
                "Mentorship",
                "Community Empowerment",
                "Refugee Camp Support",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/80 block">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">
                  East & Central Africa
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@rayofhope.org"
                  className="text-sm text-white/80 hover:text-accent transition-colors"
                >
                  info@rayofhope.org
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+254700000000"
                  className="text-sm text-white/80 hover:text-accent transition-colors"
                >
                  +254 700 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">
              © {currentYear} Ray of Hope Community. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-white/70 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-white/70 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Link } from "react-router-dom";
import { 
  Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin,
  ArrowRight, Shield, Users, BookOpen, Home
} from "lucide-react";
import { motion } from "framer-motion";

// Wave Divider Component
const WaveDivider = ({ className, color }) => (
  <div className={className}>
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className="w-full h-12"
    >
      <path 
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
        opacity=".25" 
        className="fill-current"
        style={{ color }}
      ></path>
      <path 
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
        opacity=".5" 
        className="fill-current"
        style={{ color }}
      ></path>
      <path 
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
        className="fill-current"
        style={{ color }}
      ></path>
    </svg>
  </div>
);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                          radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <WaveDivider className="-mb-1" color="hsl(var(--primary))" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="flex items-center space-x-4 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg"
                >
                  <Heart className="w-8 h-8 text-white" fill="currentColor" />
                </motion.div>
                <motion.div
                  className="absolute -inset-2 bg-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold font-['Playfair_Display'] text-white tracking-tight">
                  Ray of Hope
                </h2>
                <p className="text-sm text-white/70 font-light tracking-wider">COMMUNITY FOUNDATION</p>
              </div>
            </Link>
            
            <p className="text-sm text-white/80 leading-relaxed font-light">
              Rebuilding lives and restoring hope for orphaned and vulnerable children 
              across East and Central Africa through sustainable community programs.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-400" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-400" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-300" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
                    className={`relative group ${social.color}`}
                    aria-label={social.label}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.1
                      }}
                    />
                    <Icon className="w-5 h-5 relative z-10 transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <Home className="w-5 h-5 mr-2 text-accent" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About", icon: Users },
                { name: "Programs", icon: BookOpen },
                { name: "Projects", icon: Heart },
                { name: "Contact", icon: Mail },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={`/${item.name.toLowerCase()}`}
                    className="group flex items-center text-sm text-white/80 hover:text-accent transition-all duration-300"
                  >
                    <item.icon className="w-4 h-4 mr-3 text-accent/70 group-hover:text-accent transition-colors" />
                    <span className="flex-1 group-hover:translate-x-1 transition-transform">
                      {item.name}
                    </span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-accent" />
              Our Programs
            </h3>
            <ul className="space-y-3">
              {[
                "Education Support",
                "Child Protection",
                "Mentorship",
                "Community Empowerment",
                "Refugee Camp Support",
              ].map((program, index) => (
                <motion.li 
                  key={program}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.2 
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"
                  />
                  <span className="text-sm text-white/80 font-light leading-relaxed">
                    {program}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <Mail className="w-5 h-5 mr-2 text-accent" />
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80 font-light">
                  East & Central Africa Region
                </span>
              </motion.li>
              
              <motion.li 
                className="flex items-start space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@rayofhope.org"
                  className="text-sm text-white/80 hover:text-accent transition-colors duration-300 font-light group-hover:underline"
                >
                  info@rayofhope.org
                </a>
              </motion.li>
              
              <motion.li 
                className="flex items-start space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+254700000000"
                  className="text-sm text-white/80 hover:text-accent transition-colors duration-300 font-light group-hover:underline"
                >
                  +254 700 000 000
                </a>
              </motion.li>
            </ul>

            {/* Newsletter Signup */}
            <motion.div 
              className="mt-6 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <p className="text-sm font-medium text-white mb-2">Stay Updated</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded focus:outline-none focus:border-accent text-white placeholder-white/50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-accent text-white text-sm font-medium rounded hover:bg-accent/90 transition-colors"
                >
                  Join
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-white/70">
              <Shield className="w-4 h-4" />
              <span>© {currentYear} Ray of Hope Community Foundation. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-white/70 hover:text-accent transition-colors duration-300 hover:underline flex items-center"
              >
                <Shield className="w-3 h-3 mr-1" />
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-white/70 hover:text-accent transition-colors duration-300 hover:underline"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};
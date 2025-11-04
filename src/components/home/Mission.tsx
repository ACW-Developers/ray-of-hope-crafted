import { Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { BubbleBackground } from "@/components/ui/BubbleBackground";

export const Mission = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Bubbly Animated Background */}
      <BubbleBackground />
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Elegant Section Header with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 glass-premium px-6 py-3 rounded-full mb-6"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-gradient-primary rounded-full"
              />
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                Our Purpose
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] gradient-text mb-8 leading-tight"
            >
              Mission & Vision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            >
              Guided by faith and compassion, we work to transform lives and restore dignity.
            </motion.p>
          </motion.div>

          {/* Floating Architectural Cards with Scale-in Animation */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-premium rounded-[2rem] p-10 md:p-12 floating-card group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-aqua opacity-10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-primary flex items-center justify-center mb-8 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-elegant">
                  <Target className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Playfair_Display'] group-hover:text-primary transition-colors">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-light">
                  To support, educate, and protect vulnerable children, empowering them to become
                  who God created them to be. We provide holistic care that addresses physical,
                  emotional, and spiritual needs.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-premium rounded-[2rem] p-10 md:p-12 floating-card group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-gold opacity-10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-accent flex items-center justify-center mb-8 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-elegant">
                  <Eye className="w-10 h-10 text-accent-foreground" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Playfair_Display'] group-hover:text-primary transition-colors">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-light">
                  A generation of once-forgotten children rising with dignity and hope. We envision
                  communities where every child has the opportunity to thrive and reach their
                  full potential.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Elegant Values Grid */}
          <div className="text-center reveal" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-4xl md:text-5xl font-bold mb-12 font-['Playfair_Display'] gradient-text">Our Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Compassion",
                "Integrity",
                "Transparency",
                "Inclusion",
                "Stewardship",
                "Faith",
                "Empowerment",
                "Accountability",
              ].map((value, index) => (
                <div
                  key={value}
                  className="glass-premium rounded-2xl p-6 hover:bg-primary/10 floating-card group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                    <Heart className="w-6 h-6 text-white" fill="currentColor" />
                  </div>
                  <span className="text-base font-semibold group-hover:text-primary transition-colors">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-children.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background with Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-[20s]"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-mesh opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Organic Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-aqua opacity-20 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-gold opacity-20 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-sapphire opacity-15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '6s' }} />
      </div>

      {/* Cinematic Content with Depth */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Glass Badge with Shimmer */}
          <div className="inline-flex items-center space-x-2 glass-premium px-6 py-3 rounded-full mb-8 animate-fade-in shimmer">
            <Heart className="w-4 h-4 text-accent" fill="currentColor" />
            <span className="text-sm font-semibold text-white tracking-wide">
              Rebuilding Lives Since 2015
            </span>
          </div>

          {/* Cinematic Main Heading with Glow */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 font-['Playfair_Display'] leading-[1.1] animate-fade-in-up text-glow">
            Every Child Deserves
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              A Ray of Hope
            </span>
          </h1>

          {/* Elegant Subheading */}
          <p className="text-xl md:text-2xl text-white/95 mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            Supporting orphaned and vulnerable children across East and Central Africa
            through education, protection, and holistic care.
          </p>

          {/* Premium CTA Buttons with Micro-interactions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/donate">
              <Button variant="accent" size="xl" className="group glow-pulse hover:scale-110 transition-all duration-500 shadow-elegant">
                Donate Now
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="xl" className="glass-premium border-white/40 text-white hover:bg-white/20 hover:scale-105 transition-all duration-500">
                Learn Our Story
              </Button>
            </Link>
          </div>

          {/* Floating Stats Cards with Depth */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass-premium rounded-3xl p-8 floating-card group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-aqua rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm text-white/90 font-medium tracking-wide">Children Supported</div>
            </div>
            <div className="glass-premium rounded-3xl p-8 floating-card group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-sapphire rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">3</div>
              <div className="text-sm text-white/90 font-medium tracking-wide">Countries Active</div>
            </div>
            <div className="glass-premium rounded-3xl p-8 floating-card group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                <Heart className="w-8 h-8 text-white" fill="currentColor" />
              </div>
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-white/90 font-medium tracking-wide">Transparency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

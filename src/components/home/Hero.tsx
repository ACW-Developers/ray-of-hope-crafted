import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-children.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Heart className="w-4 h-4 text-accent" fill="currentColor" />
            <span className="text-sm font-medium text-white">
              Rebuilding Lives Since 2015
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-['Playfair_Display'] leading-tight animate-fade-in-up">
            Every Child Deserves
            <br />
            <span className="text-accent">A Ray of Hope</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Supporting orphaned and vulnerable children across East and Central Africa
            through education, protection, and holistic care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/donate">
              <Button variant="accent" size="xl" className="group">
                Donate Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                Learn Our Story
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass rounded-2xl p-6 hover:shadow-strong transition-smooth">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-white/80">Children Supported</div>
            </div>
            <div className="glass rounded-2xl p-6 hover:shadow-strong transition-smooth">
              <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">3</div>
              <div className="text-sm text-white/80">Countries Active</div>
            </div>
            <div className="glass rounded-2xl p-6 hover:shadow-strong transition-smooth">
              <Heart className="w-8 h-8 text-accent mx-auto mb-3" fill="currentColor" />
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-white/80">Transparency</div>
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

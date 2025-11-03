import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import childImage from "@/assets/child-reading.jpg";

export const CallToAction = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-60" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-sapphire opacity-10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto reveal">
          <div className="glass-premium rounded-[2.5rem] overflow-hidden shadow-elegant floating-card">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={childImage}
                  alt="Child reading with hope"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
              </div>

              {/* Elegant Content Side */}
              <div className="p-10 md:p-14 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-gold opacity-10 rounded-full blur-[100px]" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center space-x-2 glass-premium px-5 py-3 rounded-full mb-8 self-start shimmer">
                    <Heart className="w-5 h-5 text-accent" fill="currentColor" />
                    <span className="text-sm font-bold text-accent tracking-wide">
                      Join Our Mission
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-8 leading-tight">
                    Every Child Matters.
                    <br />
                    <span className="bg-gradient-gold bg-clip-text text-transparent">Every Life Counts.</span>
                  </h2>

                  <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light">
                    Let us become a ray of hope in the darkest corners of the world. Your support
                    can transform a child's life, providing education, protection, and a
                    brighter future.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-5">
                    <Link to="/donate">
                      <Button variant="hero" size="xl" className="w-full sm:w-auto group glow-pulse hover:scale-110 transition-all duration-500 shadow-elegant">
                        Make a Donation
                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" size="xl" className="w-full sm:w-auto glass-premium border-primary/30 hover:scale-105 transition-all duration-500">
                        Get Involved
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-10 pt-10 border-t border-border/50">
                    <p className="text-base text-muted-foreground italic font-light leading-relaxed">
                      "Every child matters. Every life counts. Let us become a ray of hope in
                      the darkest corners of the world."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

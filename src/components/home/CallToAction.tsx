import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import childImage from "@/assets/child-reading.jpg";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden shadow-strong">
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

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6 self-start">
                  <Heart className="w-4 h-4 text-accent" fill="currentColor" />
                  <span className="text-sm font-semibold text-accent">
                    Join Our Mission
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] mb-6">
                  Every Child Matters.
                  <br />
                  <span className="gradient-text">Every Life Counts.</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Let us become a ray of hope in the darkest corners of the world. Your support
                  can transform a child's life, providing education, protection, and a
                  brighter future.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/donate">
                    <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                      Make a Donation
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="xl" className="w-full sm:w-auto">
                      Get Involved
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "Every child matters. Every life counts. Let us become a ray of hope in
                    the darkest corners of the world."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

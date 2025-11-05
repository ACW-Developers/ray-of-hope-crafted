import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const programs = [
  {
    title: "Education Support",
    description: "Providing school fees, supplies, and tutoring to ensure every child has access to quality education and a brighter future.",
    color: "primary",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center",
    imageAlt: "Children studying together in classroom"
  },
  {
    title: "Child Protection",
    description: "Creating safe environments and implementing protection policies to safeguard children from abuse and exploitation.",
    color: "secondary",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop&crop=center",
    imageAlt: "Protective hands surrounding a child"
  },
  {
    title: "Mentorship Programs",
    description: "Connecting children with caring mentors who provide guidance, support, and positive role models for personal growth.",
    color: "accent",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=400&h=300&fit=crop&crop=center",
    imageAlt: "Mentor and child reading together"
  },
  {
    title: "Holistic Care",
    description: "Addressing physical, emotional, and spiritual needs through comprehensive programs that nurture the whole child.",
    color: "primary",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&h=300&fit=crop&crop=center",
    imageAlt: "Children playing and laughing together"
  },
];

export const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-32 bg-gradient-subtle relative overflow-hidden diagonal-cut">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-sapphire opacity-10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-gold opacity-5 rounded-full blur-[120px] animate-float" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Cinematic Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 glass-premium px-6 py-3 rounded-full mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                What We Do
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] gradient-text mb-8 leading-tight animate-gradient">
              Our Programs
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive support systems designed to empower children and transform communities.
            </p>
          </div>

          {/* Enhanced Program Cards with Images - No Icons */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {programs.map((program, index) => {
              const gradients = {
                primary: 'bg-gradient-primary',
                secondary: 'bg-gradient-aqua',
                accent: 'bg-gradient-gold',
              };
              
              return (
                <div
                  key={program.title}
                  className={`glass-premium rounded-[2.5rem] overflow-hidden floating-card group cursor-pointer relative transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Background Glow */}
                  <div className={`absolute -top-20 -right-20 w-80 h-80 ${
                    gradients[program.color as keyof typeof gradients] || gradients.primary
                  } opacity-5 rounded-full blur-[100px] group-hover:scale-150 group-hover:opacity-10 transition-all duration-1000`} />
                  
                  <div className="relative z-10 flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="md:w-3/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10 md:hidden" />
                      <img
                        src={program.image}
                        alt={program.imageAlt}
                        className="w-full h-48 md:h-full object-cover transition-all duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="md:w-3/5 p-4 md:p-5 flex flex-col justify-center">
                      <div className="mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 font-['Playfair_Display'] group-hover:text-primary transition-colors duration-300">
                          {program.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-light">
                          {program.description}
                        </p>
                      </div>
                      
                      {/* Hover Learn More */}
                      <div className="flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 mt-4">
                        <span className="text-sm">Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Border Glow Effect */}
                  <div className={`absolute inset-0 rounded-[2.5rem] border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                    program.color === 'primary' ? 'border-primary/30' :
                    program.color === 'secondary' ? 'border-blue-400/30' :
                    'border-amber-400/30'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Enhanced CTA */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Link to="/programs">
              <Button variant="hero" size="xl" className="glow-pulse hover:scale-110 transition-all duration-500 shadow-elegant group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transform -skew-x-12 transition-all duration-1000 group-hover:translate-x-full" />
                <span className="relative z-10">Explore All Programs</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-gradient {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};
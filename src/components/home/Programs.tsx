import { BookOpen, Shield, Users, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: BookOpen,
    title: "Education Support",
    description: "Providing school fees, supplies, and tutoring to ensure every child has access to quality education and a brighter future.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Child Protection",
    description: "Creating safe environments and implementing protection policies to safeguard children from abuse and exploitation.",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Mentorship Programs",
    description: "Connecting children with caring mentors who provide guidance, support, and positive role models for personal growth.",
    color: "accent",
  },
  {
    icon: Sparkles,
    title: "Holistic Care",
    description: "Addressing physical, emotional, and spiritual needs through comprehensive programs that nurture the whole child.",
    color: "primary",
  },
];

export const Programs = () => {
  return (
    <section className="py-32 bg-gradient-subtle relative overflow-hidden diagonal-cut">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-sapphire opacity-10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cinematic Section Header */}
          <div className="text-center mb-20 reveal">
            <div className="inline-flex items-center space-x-2 glass-premium px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                What We Do
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] gradient-text mb-8 leading-tight">
              Our Programs
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive support systems designed to empower children and transform communities.
            </p>
          </div>

          {/* Depth Architecture Program Cards */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const gradients = {
                primary: 'bg-gradient-primary',
                secondary: 'bg-gradient-aqua',
                accent: 'bg-gradient-gold',
              };
              return (
                <div
                  key={program.title}
                  className="glass-premium rounded-[2rem] p-10 floating-card group cursor-pointer relative overflow-hidden reveal"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`absolute -top-20 -right-20 w-80 h-80 ${gradients[program.color as keyof typeof gradients] || gradients.primary} opacity-5 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000`} />
                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-3xl ${gradients[program.color as keyof typeof gradients] || gradients.primary} flex items-center justify-center mb-8 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-elegant`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 font-['Playfair_Display'] group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg font-light">
                      {program.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Premium CTA */}
          <div className="text-center reveal" style={{ animationDelay: '0.8s' }}>
            <Link to="/programs">
              <Button variant="hero" size="xl" className="glow-pulse hover:scale-110 transition-all duration-500 shadow-elegant group">
                Explore All Programs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

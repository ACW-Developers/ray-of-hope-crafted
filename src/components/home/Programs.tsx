import { BookOpen, Shield, Users, Sparkles } from "lucide-react";
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
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] gradient-text mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support systems designed to empower children and transform communities.
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.title}
                  className="glass rounded-3xl p-8 hover:shadow-strong transition-smooth group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-soft`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display'] group-hover:text-primary transition-smooth">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/programs">
              <Button variant="hero" size="xl">
                Explore All Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

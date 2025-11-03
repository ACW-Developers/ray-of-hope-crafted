import { BookOpen, Shield, Users, Heart, Globe, Sparkles } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Education Support",
    description:
      "We believe education is the key to breaking the cycle of poverty. Our education program provides:",
    features: [
      "Full or partial school fee sponsorships",
      "School supplies and uniforms",
      "After-school tutoring programs",
      "Vocational training opportunities",
      "Scholarship programs for higher education",
    ],
    color: "primary",
  },
  {
    icon: Shield,
    title: "Child Protection",
    description:
      "Every child deserves to feel safe and protected. Our protection initiatives include:",
    features: [
      "Safe house facilities for at-risk children",
      "Child protection policy implementation",
      "Trauma counseling and psychosocial support",
      "Legal advocacy for children's rights",
      "Community awareness campaigns",
    ],
    color: "secondary",
  },
  {
    icon: Users,
    title: "Mentorship Programs",
    description:
      "Positive role models can transform a child's trajectory. Our mentorship program offers:",
    features: [
      "One-on-one mentoring relationships",
      "Group mentorship activities",
      "Life skills training workshops",
      "Career guidance and planning",
      "Leadership development programs",
    ],
    color: "accent",
  },
  {
    icon: Heart,
    title: "Holistic Care",
    description:
      "We address the whole child - body, mind, and spirit. Our holistic care includes:",
    features: [
      "Nutritional support and food assistance",
      "Healthcare access and medical support",
      "Spiritual development programs",
      "Recreational and sports activities",
      "Emotional wellbeing support",
    ],
    color: "primary",
  },
  {
    icon: Globe,
    title: "Refugee Camp Support",
    description:
      "Currently active in Kenya and Uganda refugee camps, providing:",
    features: [
      "Emergency relief and supplies",
      "Education in challenging environments",
      "Family reunification efforts",
      "Caregiver training and support",
      "Community development initiatives",
    ],
    color: "secondary",
  },
  {
    icon: Sparkles,
    title: "Future Initiatives",
    description: "We're expanding our reach with plans to:",
    features: [
      "Establish operations in Burundi and DRC",
      "Build a Child Development Centre",
      "Launch sustainable income-generating projects",
      "Create skills training centers",
      "Expand our mentorship network",
    ],
    color: "accent",
  },
];

const Programs = () => {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-['Playfair_Display'] mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Comprehensive support systems designed to empower children and transform communities
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div
                    key={program.title}
                    className="glass rounded-3xl p-8 md:p-10 hover:shadow-strong transition-smooth group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-soft`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    <h3 className="text-3xl font-bold mb-4 font-['Playfair_Display'] group-hover:text-primary transition-smooth">
                      {program.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <ul className="space-y-3">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-['Playfair_Display'] mb-6">
              Support Our Programs
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your contribution directly impacts the lives of vulnerable children. Choose a program
              to support or make a general donation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate">
                <button className="h-14 rounded-lg px-10 text-base inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-accent text-accent-foreground hover:scale-105 shadow-soft hover:glow-accent font-semibold">
                  Donate Now
                </button>
              </a>
              <a href="/contact">
                <button className="h-14 rounded-lg px-10 text-base inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                  Get Involved
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programs;

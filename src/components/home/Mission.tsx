import { Target, Eye, Heart } from "lucide-react";

export const Mission = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] gradient-text mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guided by faith and compassion, we work to transform lives and restore dignity.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="glass rounded-3xl p-8 md:p-10 hover:shadow-strong transition-smooth group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-soft">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To support, educate, and protect vulnerable children, empowering them to become
                who God created them to be. We provide holistic care that addresses physical,
                emotional, and spiritual needs.
              </p>
            </div>

            {/* Vision Card */}
            <div className="glass rounded-3xl p-8 md:p-10 hover:shadow-strong transition-smooth group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-soft">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A generation of once-forgotten children rising with dignity and hope. We envision
                communities where every child has the opportunity to thrive and reach their
                full potential.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 font-['Playfair_Display']">Our Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  className="bg-muted/50 rounded-xl p-4 hover:bg-primary/10 hover:scale-105 transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Heart className="w-5 h-5 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

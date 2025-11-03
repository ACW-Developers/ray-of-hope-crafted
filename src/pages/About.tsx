import { Heart, Target, Eye, Award } from "lucide-react";
import unityImage from "@/assets/unity-hands.jpg";

const About = () => {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-['Playfair_Display'] mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              A journey of faith, compassion, and transformation
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-2 md:order-1">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  Founded in 2015
                </span>
                <h2 className="text-4xl font-bold font-['Playfair_Display'] mb-6">
                  Born from Compassion
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ray of Hope Community was founded with a simple yet powerful vision: to be a
                    light in the darkness for children who have lost everything. What started as
                    a small initiative has grown into a comprehensive support system reaching
                    hundreds of children across East and Central Africa.
                  </p>
                  <p>
                    Our journey began in refugee camps in Kenya and Uganda, where we witnessed
                    firsthand the devastating impact of displacement on children. We saw not just
                    physical needs, but broken spirits that needed restoration and hope that
                    needed rekindling.
                  </p>
                  <p>
                    Today, we work tirelessly to provide education, protection, mentorship, and
                    holistic care to orphaned and vulnerable children. Every program we run, every
                    child we support, is a testament to our belief that every life matters and
                    every child deserves a chance to thrive.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-strong">
                  <img
                    src={unityImage}
                    alt="Unity and community"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Mission, Vision, Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="glass rounded-3xl p-8 hover:shadow-strong transition-smooth">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-soft">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To support, educate, and protect vulnerable children, empowering them to become
                  who God created them to be through holistic care addressing physical, emotional,
                  and spiritual needs.
                </p>
              </div>

              {/* Vision */}
              <div className="glass rounded-3xl p-8 hover:shadow-strong transition-smooth">
                <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 shadow-soft">
                  <Eye className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A generation of once-forgotten children rising with dignity and hope. Communities
                  where every child has the opportunity to thrive and reach their full potential.
                </p>
              </div>

              {/* Values */}
              <div className="glass rounded-3xl p-8 hover:shadow-strong transition-smooth md:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-soft">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Core Values</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Compassion",
                    "Integrity",
                    "Transparency",
                    "Inclusion",
                    "Stewardship",
                    "Faith",
                    "Empowerment",
                    "Accountability",
                  ].map((value) => (
                    <div
                      key={value}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                    >
                      <Heart className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-['Playfair_Display'] gradient-text mb-6">
                Core Objectives
              </h2>
              <p className="text-xl text-muted-foreground">
                Our strategic focus areas for maximum impact
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Education Support",
                  description:
                    "Ensuring every child has access to quality education through sponsorships, school supplies, and tutoring programs.",
                },
                {
                  title: "Child Protection",
                  description:
                    "Creating safe environments and implementing protection policies to safeguard children from all forms of abuse.",
                },
                {
                  title: "Mentorship & Guidance",
                  description:
                    "Connecting children with caring mentors who provide emotional support, guidance, and positive role models.",
                },
                {
                  title: "Community Empowerment",
                  description:
                    "Training caregivers and strengthening community support systems to create sustainable change.",
                },
              ].map((objective, index) => (
                <div
                  key={objective.title}
                  className="glass rounded-2xl p-6 hover:shadow-medium transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{objective.title}</h3>
                      <p className="text-muted-foreground">{objective.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

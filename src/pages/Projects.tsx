import { Award, TrendingUp, Target } from "lucide-react";
import childImage from "@/assets/child-reading.jpg";
import heroImage from "@/assets/hero-children.jpg";

const successStories = [
  {
    title: "Educational Excellence Initiative",
    location: "Kakuma Refugee Camp, Kenya",
    impact: "120 children sponsored",
    description:
      "Our flagship education program has sponsored over 120 children in Kakuma camp, providing full school fees, supplies, and tutoring. 95% of sponsored children have shown significant academic improvement.",
    image: childImage,
    stats: [
      { label: "Students", value: "120+" },
      { label: "Graduation Rate", value: "95%" },
      { label: "Schools", value: "8" },
    ],
  },
  {
    title: "Safe Haven Project",
    location: "Nakivale Camp, Uganda",
    impact: "50+ children protected",
    description:
      "Established safe house facilities and protection programs for at-risk children. Providing trauma counseling, legal advocacy, and holistic care in a secure environment.",
    image: heroImage,
    stats: [
      { label: "Children Safe", value: "50+" },
      { label: "Counseling Sessions", value: "200+" },
      { label: "Protection Staff", value: "15" },
    ],
  },
  {
    title: "Mentorship Network",
    location: "Kenya & Uganda",
    impact: "80 active mentorship pairs",
    description:
      "Connected vulnerable children with caring mentors who provide guidance, support, and positive role models. Monthly activities and life skills workshops.",
    image: childImage,
    stats: [
      { label: "Mentorship Pairs", value: "80" },
      { label: "Mentors Trained", value: "100+" },
      { label: "Workshops", value: "24/year" },
    ],
  },
];

const Projects = () => {
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
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Real impact, transformed lives, and communities empowered
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-24">
            {successStories.map((story, index) => (
              <div
                key={story.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="glass rounded-3xl overflow-hidden shadow-strong group">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      {story.location}
                    </span>
                  </div>

                  <h2 className="text-4xl font-bold font-['Playfair_Display'] mb-4">
                    {story.title}
                  </h2>

                  <div className="flex items-center space-x-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="text-lg font-semibold text-accent">
                      {story.impact}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {story.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {story.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="glass rounded-xl p-4 text-center hover:shadow-medium transition-smooth"
                      >
                        <div className="text-2xl font-bold text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Looking Ahead
              </span>
              <h2 className="text-4xl font-bold font-['Playfair_Display'] gradient-text mb-6">
                Future Goals
              </h2>
              <p className="text-xl text-muted-foreground">
                Our vision for expanding impact and reaching more children
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Expand to Burundi and DRC",
                  description:
                    "Establish programs in two new countries to reach more vulnerable children in conflict-affected regions.",
                },
                {
                  title: "Build Child Development Centre",
                  description:
                    "Create a comprehensive facility offering education, protection, healthcare, and recreational activities under one roof.",
                },
                {
                  title: "Launch Sustainable Projects",
                  description:
                    "Develop income-generating initiatives that provide long-term sustainability for our programs and communities.",
                },
                {
                  title: "Skills Training Centers",
                  description:
                    "Establish vocational training facilities to equip youth with marketable skills for employment and entrepreneurship.",
                },
              ].map((goal, index) => (
                <div
                  key={goal.title}
                  className="glass rounded-2xl p-6 hover:shadow-medium transition-smooth group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                      <Target className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
                      <p className="text-muted-foreground">{goal.description}</p>
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

export default Projects;

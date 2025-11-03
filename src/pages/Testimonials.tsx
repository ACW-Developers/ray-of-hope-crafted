import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Ray of Hope gave my children a future I couldn't provide alone. Through their education support, my daughter is now in secondary school and dreams of becoming a teacher.",
    author: "Mary K.",
    role: "Caregiver, Kakuma Camp",
    organization: "Parent",
  },
  {
    quote:
      "The mentorship program changed my life. My mentor helped me believe in myself and showed me that my past doesn't define my future. Today, I'm in university studying social work.",
    author: "James M.",
    role: "Former Beneficiary",
    organization: "Now Community Leader",
  },
  {
    quote:
      "Working with Ray of Hope has been transformative. Their holistic approach addresses not just immediate needs but creates lasting change in children's lives.",
    author: "Dr. Sarah L.",
    role: "Partner Organization",
    organization: "Education Initiative",
  },
  {
    quote:
      "The protection services saved my granddaughter from an unsafe situation. Now she's in a secure environment, receiving counseling, and slowly healing. We are forever grateful.",
    author: "Grace N.",
    role: "Guardian",
    organization: "Nakivale Camp",
  },
  {
    quote:
      "As a volunteer mentor, I've witnessed incredible transformations. These children have immense potential - they just need someone to believe in them and provide opportunities.",
    author: "Michael T.",
    role: "Volunteer Mentor",
    organization: "3 Years Active",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
              Voices of Hope
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Stories of transformation from those whose lives have been touched by our work
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="glass rounded-3xl p-12 md:p-16 shadow-strong relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-32 h-32 text-primary" />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <div className="mb-8">
                  <Quote className="w-12 h-12 text-primary mb-6" />
                  <p className="text-2xl md:text-3xl leading-relaxed text-foreground mb-8 font-light">
                    {testimonials[currentIndex].quote}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-xl mb-1">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-sm text-primary font-semibold mt-1">
                      {testimonials[currentIndex].organization}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prev}
                      className="rounded-full hover:bg-primary/10"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <div className="text-sm text-muted-foreground px-4">
                      {currentIndex + 1} / {testimonials.length}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={next}
                      className="rounded-full hover:bg-primary/10"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of All Testimonials */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-['Playfair_Display'] gradient-text mb-6">
                More Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                Every testimonial represents a life transformed
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 hover:shadow-strong transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary font-semibold mt-1">
                      {testimonial.organization}
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

export default Testimonials;

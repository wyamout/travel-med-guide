import { Quote } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      country: "Australia",
      procedure: "Rhinoplasty",
      text: "I was nervous about traveling for surgery, but the team made everything so easy. My results are amazing and I saved over $8,000 compared to Australian prices.",
      avatar: "S",
    },
    {
      name: "Jennifer L.",
      country: "United States",
      procedure: "Breast Augmentation",
      text: "The hospital was like a 5-star hotel! Dr. Somchai was incredibly skilled and caring. I couldn't be happier with my results.",
      avatar: "J",
    },
    {
      name: "Emma T.",
      country: "United Kingdom",
      procedure: "Tummy Tuck",
      text: "After having three kids, I wanted my body back. The mommy makeover package was incredible value and the aftercare exceeded all expectations.",
      avatar: "E",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection animation="fade-up">
            <p className="gold-accent flex items-center justify-center gap-3 mb-6">
              <span className="w-12 h-px bg-accent" />
              Patient Stories
              <span className="w-12 h-px bg-accent" />
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="section-title text-foreground mb-6">
              Voices of
              <span className="text-accent italic"> Transformation</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="section-subtitle mx-auto">
              Real experiences from patients who entrusted us with their journey.
            </p>
          </AnimatedSection>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} animation="scale" delay={300 + index * 150}>
              <div className="bg-card border border-border/30 p-10 relative h-full">
                <Quote className="absolute top-8 right-8 w-8 h-8 text-accent/20" />
                
                <p className="text-foreground leading-relaxed mb-8 font-light italic">
                  "{testimonial.text}"
                </p>

                <div className="elegant-divider mb-6" />

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground font-serif text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground tracking-wider uppercase">
                      {testimonial.procedure} • {testimonial.country}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50,000+", label: "Patients" },
            { value: "20+", label: "Years" },
            { value: "4.9", label: "Rating" },
            { value: "15+", label: "Hospitals" },
          ].map((stat, index) => (
            <AnimatedSection key={stat.label} animation="fade-up" delay={600 + index * 100}>
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      country: "Australia",
      procedure: "Rhinoplasty",
      rating: 5,
      text: "I was nervous about traveling for surgery, but the team made everything so easy. My results are amazing and I saved over $8,000 compared to Australian prices.",
      avatar: "SM",
    },
    {
      name: "Jennifer L.",
      country: "United States",
      procedure: "Breast Augmentation",
      rating: 5,
      text: "The hospital was like a 5-star hotel! Dr. Somchai was incredibly skilled and caring. I couldn't be happier with my results. Highly recommend!",
      avatar: "JL",
    },
    {
      name: "Emma T.",
      country: "United Kingdom",
      procedure: "Tummy Tuck + Lipo",
      rating: 5,
      text: "After having three kids, I wanted my body back. The mommy makeover package was incredible value and the aftercare exceeded all expectations.",
      avatar: "ET",
    },
    {
      name: "Lisa K.",
      country: "Canada",
      procedure: "Facelift",
      rating: 5,
      text: "I look 15 years younger! The surgeon was an artist. Recovering at a luxury resort in Phuket made the whole experience unforgettable.",
      avatar: "LK",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="trust-badge mb-4">Patient Stories</span>
          <h2 className="section-title text-foreground mt-4">
            Hear From Our Happy Patients
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Real stories from real patients who trusted us with their 
            transformation journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.procedure} • {testimonial.country}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 bg-primary rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-4xl md:text-5xl font-bold">50,000+</div>
              <div className="text-primary-foreground/70 mt-2">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">20+</div>
              <div className="text-primary-foreground/70 mt-2">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">4.9/5</div>
              <div className="text-primary-foreground/70 mt-2">Patient Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">15+</div>
              <div className="text-primary-foreground/70 mt-2">Partner Hospitals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

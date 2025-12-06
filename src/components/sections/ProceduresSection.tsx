import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProceduresSection = () => {
  const procedures = [
    {
      title: "Rhinoplasty",
      category: "Face Surgery",
      description: "Expert nose reshaping for natural, harmonious results",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
      price: "From $2,500",
    },
    {
      title: "Breast Implants",
      category: "Breast Surgery",
      description: "Premium implants with experienced surgeons",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop",
      price: "From $3,200",
    },
    {
      title: "Facelift",
      category: "Face Surgery",
      description: "Turn back time with natural anti-aging results",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
      price: "From $4,500",
    },
    {
      title: "Liposuction",
      category: "Body Surgery",
      description: "Advanced Vaser technology for sculpted contours",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
      price: "From $2,800",
    },
    {
      title: "Tummy Tuck",
      category: "Body Surgery",
      description: "Achieve a flat, toned abdomen",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
      price: "From $4,000",
    },
    {
      title: "Eyelid Surgery",
      category: "Face Surgery",
      description: "Rejuvenate your eyes for a refreshed look",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop",
      price: "From $1,800",
    },
  ];

  return (
    <section id="procedures" className="py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="trust-badge mb-4">Our Expertise</span>
          <h2 className="section-title text-foreground mt-4">
            Popular Cosmetic Procedures
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            From subtle enhancements to transformative changes, our expert surgeons 
            deliver natural-looking results that exceed expectations.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <div
              key={procedure.title}
              className="procedure-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={procedure.image}
                  alt={`${procedure.title} surgery in Thailand`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-card/90 backdrop-blur-sm text-xs font-medium rounded-full text-foreground">
                    {procedure.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-lg">
                    {procedure.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {procedure.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {procedure.description}
                </p>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Procedures
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;

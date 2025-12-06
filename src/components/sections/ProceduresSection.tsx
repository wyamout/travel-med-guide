import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import procedureRhinoplasty from "@/assets/procedure-rhinoplasty.jpg";
import procedureFacelift from "@/assets/procedure-facelift.jpg";
import procedureBreast from "@/assets/procedure-breast-real.jpg";
import procedureBody from "@/assets/procedure-body-real.jpg";

const ProceduresSection = () => {
  const procedures = [
    {
      title: "Rhinoplasty",
      slug: "nose-surgery-thailand",
      category: "Face",
      description: "Expert nose reshaping for natural, harmonious facial balance",
      image: procedureRhinoplasty,
    },
    {
      title: "Breast Augmentation",
      slug: "breast-implants-thailand",
      category: "Breast",
      description: "Premium implants with internationally trained surgeons",
      image: procedureBreast,
    },
    {
      title: "Facelift",
      slug: "full-facelift-thailand",
      category: "Face",
      description: "Refined techniques for natural, youthful rejuvenation",
      image: procedureFacelift,
    },
    {
      title: "Liposuction",
      slug: "liposuction-thailand",
      category: "Body",
      description: "Advanced Vaser technology for sculpted, defined contours",
      image: procedureBody,
    },
  ];

  return (
    <section id="procedures" className="py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <AnimatedSection animation="fade-up">
            <p className="gold-accent flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-accent" />
              Our Expertise
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="section-title text-foreground mb-6">
              Signature Procedures
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="section-subtitle">
              Each procedure is performed with meticulous attention to detail, 
              combining surgical precision with an artistic eye for natural beauty.
            </p>
          </AnimatedSection>
        </div>

        {/* Procedures Grid - Asymmetric */}
        <div className="grid lg:grid-cols-2 gap-8">
          {procedures.map((procedure, index) => (
            <AnimatedSection 
              key={procedure.title} 
              animation={index % 2 === 0 ? "fade-left" : "fade-right"} 
              delay={300 + index * 150}
            >
              <Link
                to={`/${procedure.category.toLowerCase()}/${procedure.slug}`}
                className="group relative overflow-hidden block hover-lift"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={procedure.image}
                    alt={`${procedure.title} in Thailand`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-xs tracking-widest uppercase text-primary-foreground/70 mb-2 block">
                      {procedure.category}
                    </span>
                    <h3 className="font-serif text-3xl text-primary-foreground mb-3">
                      {procedure.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm max-w-md mb-4">
                      {procedure.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent text-sm tracking-wider uppercase font-medium">
                      Discover More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* View All */}
        <AnimatedSection animation="fade-up" delay={900}>
          <div className="flex justify-center mt-16">
            <Link to="/procedures">
              <Button variant="outline" size="lg" className="cta-button-outline px-12">
                View All Procedures
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProceduresSection;

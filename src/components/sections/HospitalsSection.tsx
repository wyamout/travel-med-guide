import { MapPin, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const HospitalsSection = () => {
  const hospitals = [
    {
      name: "Yanhee International Hospital",
      location: "Bangkok",
      slug: "yanhee-international-hospital",
      description: "World-renowned facility specializing in comprehensive cosmetic procedures",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
      accreditation: "JCI Accredited",
    },
    {
      name: "Preecha Aesthetic Institute",
      location: "Bangkok",
      slug: "pai-clinic",
      description: "Pioneering clinic with expertise in gender confirmation and facial surgery",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=600&auto=format&fit=crop",
      accreditation: "ISO Certified",
    },
    {
      name: "Phuket International Hospital",
      location: "Phuket",
      slug: "phuket-hospital",
      description: "Premium care in Thailand's most beautiful island destination",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=600&auto=format&fit=crop",
      accreditation: "JCI Accredited",
    },
  ];

  return (
    <section id="hospitals" className="py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <AnimatedSection animation="fade-up">
              <p className="gold-accent flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-accent" />
                Our Network
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <h2 className="section-title text-foreground">
                Accredited
                <span className="block text-accent italic">Facilities</span>
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="section-subtitle">
              Our carefully selected partner hospitals meet the highest 
              international healthcare standards, ensuring your safety and comfort.
            </p>
          </AnimatedSection>
        </div>

        {/* Hospitals Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {hospitals.map((hospital, index) => (
            <AnimatedSection key={hospital.name} animation="fade-up" delay={300 + index * 150}>
              <Link
                to={`/bangkok/${hospital.slug}`}
                className="group block"
              >
                <div className="relative h-[400px] overflow-hidden mb-6">
                  <img
                    src={hospital.image}
                    alt={`${hospital.name} - ${hospital.location}, Thailand`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm text-xs tracking-wider uppercase">
                      <Award className="w-3 h-3 text-accent" />
                      {hospital.accreditation}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{hospital.location}</span>
                </div>
                
                <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                  {hospital.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 font-light">
                  {hospital.description}
                </p>
                
                <span className="inline-flex items-center gap-2 text-accent text-xs tracking-wider uppercase font-medium">
                  View Hospital
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* View All */}
        <AnimatedSection animation="fade-up" delay={750}>
          <div className="flex justify-center mt-16">
            <Link to="/hospitals">
              <Button variant="outline" size="lg" className="cta-button-outline px-12">
                View All Locations
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HospitalsSection;

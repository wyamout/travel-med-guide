import { MapPin, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HospitalsSection = () => {
  const hospitals = [
    {
      name: "Yanhee International Hospital",
      location: "Bangkok",
      rating: 4.9,
      specialties: ["Rhinoplasty", "Breast Surgery", "Body Contouring"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
      accreditation: "JCI Accredited",
    },
    {
      name: "Preecha Aesthetic Institute",
      location: "Bangkok",
      rating: 4.8,
      specialties: ["Gender Confirmation", "Facial Feminization", "Body Surgery"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=600&auto=format&fit=crop",
      accreditation: "JCI Accredited",
    },
    {
      name: "Phuket International Hospital",
      location: "Phuket",
      rating: 4.9,
      specialties: ["Breast Augmentation", "Liposuction", "Facelift"],
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=600&auto=format&fit=crop",
      accreditation: "JCI Accredited",
    },
    {
      name: "Bangkok Hospital Samui",
      location: "Koh Samui",
      rating: 4.7,
      specialties: ["Cosmetic Surgery", "Recovery Packages", "Wellness"],
      image: "https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?q=80&w=600&auto=format&fit=crop",
      accreditation: "ISO Certified",
    },
  ];

  return (
    <section id="hospitals" className="py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="trust-badge mb-4">Our Network</span>
          <h2 className="section-title text-foreground mt-4">
            JCI-Accredited Hospitals
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Partner with Thailand's most trusted medical facilities. 
            All our hospitals meet international healthcare standards.
          </p>
        </div>

        {/* Hospitals Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {hospitals.map((hospital) => (
            <div
              key={hospital.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={hospital.image}
                    alt={`${hospital.name} - ${hospital.location}, Thailand`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                      {hospital.accreditation}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{hospital.location}</span>
                      <div className="flex items-center gap-1 ml-auto">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-foreground">{hospital.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {hospital.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hospital.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" className="group/btn justify-start p-0 h-auto text-primary hover:text-primary">
                    View Hospital
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Hospitals
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HospitalsSection;

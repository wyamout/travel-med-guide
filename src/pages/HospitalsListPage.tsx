import PageLayout from "@/components/layout/PageLayout";
import { allHospitals, locations } from "@/data/locations";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Shield, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getHospitalImage } from "@/utils/hospitalContentLoader";

const HospitalsListPage = () => {
  // Get unique hospital images for hero
  const heroImages = [
    "/images/hospitals/bangkok-hospital.jpg",
    "/images/hospitals/phuket-plastic-surgery.jpg",
    "/images/hospitals/bangpakok-hospital.webp",
  ];

  return (
    <PageLayout
      title="Hospitals in Thailand for Cosmetic Surgery"
      description="Top-rated cosmetic surgery hospitals in Thailand. JCI-accredited facilities in Bangkok, Phuket, Samui, Pattaya. Expert surgeons. Free consultation."
      keywords="cosmetic surgery hospitals thailand, plastic surgery hospitals bangkok, jci accredited hospitals thailand"
      canonicalUrl="https://cosmeticsurgerythailand.com/hospitals"
    >
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Images Grid */}
        <div className="absolute inset-0 grid grid-cols-3 opacity-20">
          {heroImages.map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <img 
                src={img} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            World-Class
            <span className="block text-accent">Hospitals</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Choose from our network of JCI-accredited hospitals and clinics
            across Thailand's most beautiful destinations.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-24">
        <div className="container space-y-16">
          {locations.map((location) => (
            <div key={location.id}>
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold">
                  {location.name}
                </h2>
                <Badge variant="secondary">
                  {location.hospitals.length} Hospital
                  {location.hospitals.length !== 1 ? "s" : ""}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.hospitals.map((hospital) => {
                  const hospitalImage = getHospitalImage(hospital.slug);
                  return (
                  <Link
                    key={hospital.id}
                    to={`/${location.slug}/${hospital.slug}`}
                    className="procedure-card group overflow-hidden"
                  >
                    {/* Hospital Image */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                      {hospitalImage ? (
                        <img 
                          src={hospitalImage} 
                          alt={hospital.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Shield className="w-12 h-12 text-primary/50" />
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {hospital.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {hospital.shortDescription}
                      </p>

                      {hospital.accreditations && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hospital.accreditations.map((acc) => (
                            <Badge
                              key={acc}
                              variant="outline"
                              className="text-xs"
                            >
                              <Award className="w-3 h-3 mr-1" />
                              {acc}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <span className="text-primary text-sm font-medium flex items-center gap-1">
                        View hospital
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default HospitalsListPage;

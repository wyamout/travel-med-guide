import PageLayout from "@/components/layout/PageLayout";
import { allHospitals, locations } from "@/data/locations";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Shield, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HospitalsListPage = () => {
  return (
    <PageLayout
      title="Hospitals in Thailand for Cosmetic Surgery"
      description="Top-rated cosmetic surgery hospitals in Thailand. JCI-accredited facilities in Bangkok, Phuket, Samui, Pattaya. Expert surgeons. Free consultation."
      keywords="cosmetic surgery hospitals thailand, plastic surgery hospitals bangkok, jci accredited hospitals thailand"
      canonicalUrl="https://cosmeticsurgerythailand.com/hospitals"
    >
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            World-Class
            <span className="block text-primary">Hospitals</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                {location.hospitals.map((hospital) => (
                  <Link
                    key={hospital.id}
                    to={`/${location.slug}/${hospital.slug}`}
                    className="procedure-card group overflow-hidden"
                  >
                    {/* Image placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-primary/50" />
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default HospitalsListPage;

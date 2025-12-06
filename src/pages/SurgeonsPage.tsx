import PageLayout from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Award, GraduationCap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SurgeonsPage = () => {
  const surgeons = [
    {
      name: "Dr. Preecha Tiewtranon",
      specialty: "Gender Confirmation & Facial Surgery",
      hospital: "Preecha Aesthetic Institute",
      experience: "40+ years",
      credentials: ["Board Certified", "International Training"],
    },
    {
      name: "Dr. Somchai Sirithanaphol",
      specialty: "Rhinoplasty & Facial Surgery",
      hospital: "Yanhee International Hospital",
      experience: "25+ years",
      credentials: ["Board Certified", "Harvard Fellow"],
    },
    {
      name: "Dr. Ronachai Komthong",
      specialty: "Breast & Body Contouring",
      hospital: "Naravee Aesthetic Center",
      experience: "20+ years",
      credentials: ["Board Certified", "Korean Training"],
    },
    {
      name: "Dr. Kamol Pansritum",
      specialty: "Gender Confirmation Surgery",
      hospital: "Kamol Cosmetic Hospital",
      experience: "30+ years",
      credentials: ["Board Certified", "International Expert"],
    },
    {
      name: "Dr. Pichet Rodchareon",
      specialty: "Facial Rejuvenation",
      hospital: "Bangkok Hospital",
      experience: "22+ years",
      credentials: ["Board Certified", "US Training"],
    },
    {
      name: "Dr. Thep Vechavisit",
      specialty: "Body Contouring",
      hospital: "Phuket International Hospital",
      experience: "18+ years",
      credentials: ["Board Certified", "ISAPS Member"],
    },
  ];

  const credentials = [
    {
      icon: GraduationCap,
      title: "Board Certified",
      description: "All surgeons are certified by Thai and international medical boards",
    },
    {
      icon: Globe,
      title: "International Training",
      description: "Many trained at top institutions in USA, Korea, and Europe",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Thousands of successful procedures with excellent outcomes",
    },
  ];

  return (
    <PageLayout
      title="Cosmetic Surgeons Thailand | Board-Certified Plastic Surgeons"
      description="Meet Thailand's leading cosmetic surgeons. Board-certified, internationally trained specialists at JCI-accredited hospitals."
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-up">
              <p className="text-accent text-xs tracking-widest uppercase mb-6 flex items-center gap-3">
                <span className="w-12 h-px bg-accent" />
                Our Surgeons
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
                World-Class Expertise,
                <span className="block text-accent italic">Exceptional Care</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl">
                Our network includes over 100 board-certified plastic surgeons across 
                Thailand's finest hospitals, each selected for their expertise, 
                experience, and commitment to patient care.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((cred, index) => (
              <AnimatedSection key={cred.title} animation="fade-up" delay={index * 100}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                    <cred.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{cred.title}</h3>
                    <p className="text-sm text-muted-foreground">{cred.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Surgeons Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="section-title text-foreground mb-4">
                Featured Surgeons
              </h2>
              <p className="section-subtitle mx-auto">
                A selection of our most experienced partner surgeons
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {surgeons.map((surgeon, index) => (
              <AnimatedSection key={surgeon.name} animation="scale" delay={100 + index * 100}>
                <div className="bg-card border border-border p-8 hover:shadow-lg transition-all hover:border-accent/30 group">
                  <div className="w-20 h-20 bg-primary text-primary-foreground flex items-center justify-center font-serif text-2xl mb-6">
                    {surgeon.name.split(' ').slice(-1)[0].charAt(0)}
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-accent transition-colors">
                    {surgeon.name}
                  </h3>
                  <p className="text-sm text-accent mb-3">{surgeon.specialty}</p>
                  <p className="text-sm text-muted-foreground mb-4">{surgeon.hospital}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {surgeon.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="text-xs bg-muted px-2 py-1 text-muted-foreground"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{surgeon.experience} experience</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-title text-foreground mb-4">
                Find Your Surgeon
              </h2>
              <p className="section-subtitle mx-auto mb-8">
                Tell us about your goals and we'll match you with the ideal surgeon 
                for your specific procedure and preferences.
              </p>
              <Link to="/contact">
                <Button size="lg" className="cta-button px-10 py-6">
                  Get Surgeon Recommendations
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default SurgeonsPage;

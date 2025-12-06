import { Button } from "@/components/ui/button";
import { Shield, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-36 pb-24 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-border/30" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-2 animate-fade-up">
              <p className="gold-accent flex items-center gap-2">
                <span className="w-8 h-px bg-accent" />
                Thailand's Premier Destination
              </p>
            </div>

            <h1 className="section-title text-foreground animate-fade-up stagger-1">
              The Art of
              <span className="block text-accent italic">Transformation</span>
            </h1>

            <p className="section-subtitle animate-fade-up stagger-2">
              Experience world-renowned cosmetic surgery at Thailand's most prestigious hospitals. 
              Our board-certified surgeons combine artistry with precision to deliver 
              exceptional, natural results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up stagger-3">
              <Link to="/contact">
                <Button size="lg" className="cta-button px-10 py-6 hover-glow">
                  Request Consultation
                </Button>
              </Link>
              <Link to="/before-after">
                <Button size="lg" variant="outline" className="cta-button-outline px-10 py-6">
                  View Results
                </Button>
              </Link>
            </div>

            {/* Subtle trust indicators */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50 animate-fade-up stagger-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">JCI Accredited</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">5 Premium Locations</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-blur-in stagger-2">
            <div className="relative">
              {/* Main image frame */}
              <div className="relative overflow-hidden">
                <img
                  src="/images/1ccaa7beb933c50c232e7e98132ec12c.jpg"
                  alt="Yanhee International Hospital - Luxury cosmetic surgery facility in Thailand"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>

              {/* Elegant overlay card */}
              <div className="absolute -bottom-8 -left-8 bg-card border border-border/50 p-8 shadow-elegant max-w-sm animate-slide-in-left stagger-5">
                <p className="gold-accent mb-3">Excellence in Every Detail</p>
                <p className="text-foreground font-serif text-2xl leading-snug">
                  "Where medical precision meets aesthetic artistry"
                </p>
              </div>

              {/* Stats card */}
              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 animate-scale-in stagger-4">
                <div className="text-center">
                  <div className="font-serif text-4xl font-medium">50K+</div>
                  <div className="text-xs tracking-widest uppercase opacity-80 mt-1">
                    Satisfied Patients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Star } from "lucide-react";

const HeroSection = () => {
  const trustIndicators = [
    { icon: Shield, label: "JCI Accredited", value: "Hospitals" },
    { icon: Award, label: "20+ Years", value: "Experience" },
    { icon: Users, label: "50,000+", value: "Patients" },
    { icon: Star, label: "4.9/5", value: "Rating" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              #1 Medical Tourism Destination
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              World-Class{" "}
              <span className="text-primary">Cosmetic Surgery</span>{" "}
              in Thailand
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Transform your confidence with expert surgeons at JCI-accredited hospitals. 
              Experience exceptional care, natural results, and save up to 70% compared to Western prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Free Consultation
              </Button>
              <Button variant="outline" size="xl">
                View Before & After
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {trustIndicators.map((item) => (
                <div key={item.label} className="glass-card rounded-xl p-4 text-center">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-bold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1000&auto=format&fit=crop"
                alt="Modern cosmetic surgery facility in Thailand"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 shadow-xl max-w-xs animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Shield className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">100% Safe</div>
                  <div className="text-sm text-muted-foreground">International Standards</div>
                </div>
              </div>
            </div>

            {/* Second Floating Card */}
            <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-bold text-primary">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold text-foreground">500+</div>
                  <div className="text-muted-foreground text-xs">Happy Patients Monthly</div>
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

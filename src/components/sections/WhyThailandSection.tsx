import { Award, Globe, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyThailandSection = () => {
  const benefits = [
    {
      icon: Award,
      title: "World-Renowned Surgeons",
      description: "Board-certified specialists with international training and decades of refined expertise.",
    },
    {
      icon: Shield,
      title: "JCI Accredited Excellence",
      description: "International gold-standard facilities meeting the highest healthcare safety requirements.",
    },
    {
      icon: Sparkles,
      title: "Exceptional Value",
      description: "Premium procedures at 50-70% less than Western prices, without compromise on quality.",
    },
    {
      icon: Globe,
      title: "Seamless Experience",
      description: "Dedicated English-speaking coordinators guide your entire journey from consultation to recovery.",
    },
  ];

  return (
    <section id="why-thailand" className="py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-accent text-xs tracking-widest uppercase mb-6 flex items-center gap-3">
              <span className="w-12 h-px bg-accent" />
              The Destination
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
              Why Discerning Patients
              <span className="block text-accent italic">Choose Thailand</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-12 max-w-lg font-light">
              Over 3 million international patients choose Thailand annually. 
              A convergence of medical excellence, exceptional hospitality, 
              and unparalleled value awaits.
            </p>

            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-5">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-foreground mb-1 tracking-wide">
                      {benefit.title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="inline-block mt-12">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-6 text-xs tracking-widest uppercase font-medium"
              >
                Begin Your Journey
              </Button>
            </Link>
          </div>

          {/* Image composition */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800&auto=format&fit=crop"
                alt="Luxury hospital facility in Thailand"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Stats overlay */}
              <div className="absolute -bottom-8 -right-8 bg-background text-foreground p-10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="font-serif text-4xl text-foreground">3M+</div>
                    <div className="text-xs tracking-widest uppercase text-muted-foreground mt-1">
                      Patients Annually
                    </div>
                  </div>
                  <div className="text-center border-l border-border pl-8">
                    <div className="font-serif text-4xl text-foreground">20+</div>
                    <div className="text-xs tracking-widest uppercase text-muted-foreground mt-1">
                      Years Excellence
                    </div>
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

export default WhyThailandSection;

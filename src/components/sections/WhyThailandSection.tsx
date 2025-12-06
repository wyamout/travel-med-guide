import { Check, Award, DollarSign, Plane, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyThailandSection = () => {
  const benefits = [
    {
      icon: Award,
      title: "World-Class Surgeons",
      description: "Board-certified surgeons trained in the US, UK, and Europe with decades of experience.",
    },
    {
      icon: DollarSign,
      title: "Save Up to 70%",
      description: "Premium quality procedures at a fraction of Western prices, without compromising on care.",
    },
    {
      icon: Heart,
      title: "JCI Accredited Hospitals",
      description: "International standard facilities meeting the highest healthcare safety requirements.",
    },
    {
      icon: Plane,
      title: "Recovery Vacation",
      description: "Recover in paradise with beautiful beaches, luxury hotels, and Thai hospitality.",
    },
    {
      icon: Globe,
      title: "English Speaking Staff",
      description: "Seamless communication with dedicated English-speaking coordinators and medical staff.",
    },
    {
      icon: Check,
      title: "Comprehensive Packages",
      description: "All-inclusive packages covering surgery, accommodation, transfers, and aftercare.",
    },
  ];

  return (
    <section id="why-thailand" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="trust-badge mb-4">Why Thailand</span>
            <h2 className="section-title text-foreground mt-4">
              The World's #1 Destination for{" "}
              <span className="text-primary">Medical Tourism</span>
            </h2>
            <p className="section-subtitle mt-4 mb-8">
              Over 3 million international patients choose Thailand every year for 
              medical procedures. Here's why you should too.
            </p>

            <div className="space-y-6">
              {benefits.slice(0, 4).map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg" className="mt-8">
              Get Your Free Quote
            </Button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=600&auto=format&fit=crop"
                  alt="Modern hospital facility in Thailand"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop"
                  alt="Beautiful Thai beach for recovery"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?q=80&w=600&auto=format&fit=crop"
                  alt="Luxury accommodation in Thailand"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-primary p-6 text-primary-foreground">
                <div className="text-5xl font-bold">3M+</div>
                <div className="text-lg mt-2">Medical tourists annually</div>
                <div className="text-primary-foreground/70 mt-1 text-sm">
                  Thailand is the global leader in medical tourism
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {benefits.slice(4).map((benefit) => (
            <div key={benefit.title} className="glass-card rounded-2xl p-6 flex gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                <benefit.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThailandSection;

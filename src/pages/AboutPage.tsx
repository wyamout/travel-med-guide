import PageLayout from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Shield, Award, Users, Heart, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every decision we make prioritizes patient safety above all else.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We partner only with JCI-accredited hospitals and board-certified surgeons.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We understand the emotional journey and provide caring support throughout.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making world-class cosmetic surgery accessible to patients worldwide.",
    },
  ];

  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "50,000+", label: "Happy Patients" },
    { value: "15+", label: "Partner Hospitals" },
    { value: "100+", label: "Expert Surgeons" },
  ];

  return (
    <PageLayout
      title="About Us | Cosmetic Surgery Thailand"
      description="Learn about Thailand's leading cosmetic surgery facilitator. 20+ years connecting international patients with world-class surgeons."
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-up">
              <p className="text-accent text-xs tracking-widest uppercase mb-6 flex items-center gap-3">
                <span className="w-12 h-px bg-accent" />
                About Us
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
                Your Trusted Partner in
                <span className="block text-accent italic">Medical Tourism</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl">
                For over two decades, we have been guiding international patients 
                through their cosmetic surgery journey in Thailand, connecting them 
                with the finest surgeons and world-class medical facilities.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="font-serif text-4xl md:text-5xl text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-widest uppercase text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="space-y-6">
                <p className="gold-accent flex items-center gap-3">
                  <span className="w-12 h-px bg-accent" />
                  Our Story
                </p>
                <h2 className="section-title text-foreground">
                  Two Decades of
                  <span className="block text-accent italic">Transformations</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2003, Cosmetic Surgery Thailand began with a simple mission: 
                    to make world-class cosmetic surgery accessible to international patients 
                    seeking quality care at affordable prices.
                  </p>
                  <p>
                    What started as a small consultancy has grown into Thailand's most 
                    trusted medical tourism facilitator, having helped over 50,000 patients 
                    from more than 60 countries achieve their aesthetic goals.
                  </p>
                  <p>
                    Our team of dedicated patient coordinators works tirelessly to ensure 
                    every aspect of your journey—from initial consultation to post-operative 
                    care—exceeds expectations.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="bg-muted/30 p-8 border border-border">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1">24/7 Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Round-the-clock assistance for all your needs
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Users className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Dedicated Coordinators</h3>
                      <p className="text-sm text-muted-foreground">
                        Personal support throughout your journey
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Globe className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Global Reach</h3>
                      <p className="text-sm text-muted-foreground">
                        Serving patients from 60+ countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="gold-accent mb-4">Our Values</p>
              <h2 className="section-title text-foreground">
                What Guides Us
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-up" delay={100 + index * 100}>
                <div className="bg-background p-8 border border-border text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="section-title text-foreground mb-4">
              Ready to Begin?
            </h2>
            <p className="section-subtitle mx-auto mb-8">
              Start your transformation journey with a free, no-obligation consultation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="cta-button px-10 py-6">
                Request Free Consultation
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;

import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import QuickConsultationForm from "@/components/forms/QuickConsultationForm";

const CTASection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <AnimatedSection animation="fade-up">
              <p className="gold-accent flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-accent" />
                Begin Your Journey
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <h2 className="section-title text-foreground mb-6">
                Request Your
                <span className="block text-accent italic">Consultation</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="section-subtitle mb-8">
                Take the first step toward your transformation. Our team will provide 
                personalized surgeon recommendations and detailed information about your 
                desired procedure.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={300}>
              <div className="space-y-4 text-sm text-muted-foreground mb-8">
                <p className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-accent" />
                  Complimentary, no-obligation consultation
                </p>
                <p className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-accent" />
                  Response within 24 hours
                </p>
                <p className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-accent" />
                  Your information is confidential and secure
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="p-8 bg-muted/50 border border-border/50">
                <p className="font-serif text-2xl text-foreground leading-relaxed italic">
                  "You pay nothing to us. Our service is entirely complimentary. 
                  You pay only the hospital directly for your procedure."
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="bg-white border border-border p-10 shadow-lg">
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Get Your Free Quote
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                Complete the form below and we'll respond within 24 hours.
              </p>

              <QuickConsultationForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
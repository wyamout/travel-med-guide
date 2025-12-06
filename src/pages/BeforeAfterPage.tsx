import PageLayout from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

const BeforeAfterPage = () => {
  const galleries = [
    {
      category: "Rhinoplasty",
      description: "Natural nose reshaping results",
      count: 45,
      slug: "nose-surgery-thailand",
    },
    {
      category: "Breast Augmentation",
      description: "Natural-looking breast enhancement",
      count: 62,
      slug: "breast-implants-thailand",
    },
    {
      category: "Facelift",
      description: "Youthful rejuvenation results",
      count: 38,
      slug: "full-facelift-thailand",
    },
    {
      category: "Liposuction",
      description: "Body contouring transformations",
      count: 54,
      slug: "liposuction-thailand",
    },
    {
      category: "Tummy Tuck",
      description: "Abdominoplasty results",
      count: 41,
      slug: "tummytuck-thailand",
    },
    {
      category: "Breast Lift",
      description: "Natural lift and reshaping",
      count: 29,
      slug: "breast-lifts-thailand",
    },
  ];

  return (
    <PageLayout
      title="Before & After Gallery | Cosmetic Surgery Thailand"
      description="View real patient before and after photos from top Thai cosmetic surgeons. See transformations from rhinoplasty, breast surgery, liposuction & more."
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-up">
              <p className="text-accent text-xs tracking-widest uppercase mb-6 flex items-center gap-3">
                <span className="w-12 h-px bg-accent" />
                Patient Results
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
                Real Results,
                <span className="block text-accent italic">Real Transformations</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl">
                Browse our gallery of genuine before and after photos from patients 
                who trusted our partner hospitals and surgeons with their transformations.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-accent" />
              <span>
                Due to patient privacy, detailed before/after photos are shared upon consultation request.
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 bg-background">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="section-title text-foreground mb-4">
                Browse by Procedure
              </h2>
              <p className="section-subtitle mx-auto">
                Select a procedure category to request access to patient photos and results.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((gallery, index) => (
              <AnimatedSection key={gallery.category} animation="scale" delay={100 + index * 100}>
                <div className="bg-card border border-border p-8 hover:shadow-lg transition-all hover:border-accent/30 group">
                  <div className="mb-6">
                    <div className="w-full h-48 bg-muted/50 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-4xl font-serif text-accent mb-2">{gallery.count}+</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Photos Available</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                    {gallery.category}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{gallery.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Request Photos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
                Want to See More?
              </h2>
              <p className="section-subtitle mx-auto mb-8">
                Request a consultation to receive detailed before and after photos 
                specific to your procedure of interest, along with a personalized quote.
              </p>
              <Link to="/contact">
                <Button size="lg" className="cta-button px-10 py-6">
                  Request Consultation & Photos
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default BeforeAfterPage;

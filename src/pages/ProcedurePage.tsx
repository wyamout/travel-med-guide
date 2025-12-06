import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { getProcedureBySlug, allProcedures } from "@/data/procedures";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Clock, Shield, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProcedurePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const procedure = slug ? getProcedureBySlug(slug) : null;

  if (!procedure) {
    return (
      <PageLayout
        title="Procedure Not Found"
        description="The requested procedure could not be found."
      >
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Procedure Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The procedure you're looking for doesn't exist.
          </p>
          <Link to="/procedures">
            <Button>View All Procedures</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  const categoryLabels = {
    face: "Face Surgery",
    breast: "Breast Surgery",
    body: "Body Surgery",
    other: "Specialized Surgery",
  };

  const relatedProcedures = allProcedures
    .filter((p) => p.category === procedure.category && p.id !== procedure.id)
    .slice(0, 3);

  return (
    <PageLayout
      title={`${procedure.name} Thailand | Bangkok`}
      description={`Expert ${procedure.name.toLowerCase()} in Thailand. Top surgeons, world-class hospitals in Bangkok. Free consultation. Best prices. Book now!`}
      keywords={`${procedure.name.toLowerCase()} thailand, ${procedure.name.toLowerCase()} bangkok, cosmetic surgery thailand`}
      canonicalUrl={`https://cosmeticsurgerythailand.com/${procedure.category}/${procedure.slug}`}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="text-sm">
                  {categoryLabels[procedure.category]}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Free Consultation
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {procedure.name}
                <span className="block text-primary">in Thailand</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl">
                {procedure.shortDescription}. Expert surgeons at world-class
                hospitals in Bangkok, Phuket, and Samui.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="cta-button">
                  <Phone className="w-5 h-5 mr-2" />
                  Free Consultation
                </Button>
                <Button size="lg" variant="outline">
                  View Prices
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span>JCI Accredited Hospitals</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-5 h-5 text-secondary" />
                  <span>Board-Certified Surgeons</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>24/7 Patient Support</span>
                </div>
              </div>
            </div>

            {/* Placeholder for procedure image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Expert {procedure.name} Procedure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title mb-4">
              Why Choose Thailand for {procedure.name}?
            </h2>
            <p className="section-subtitle mx-auto">
              Thailand is one of the world's top destinations for cosmetic
              surgery, offering expert care at affordable prices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "World-Class Surgeons",
                description:
                  "Board-certified surgeons with international training and decades of experience.",
              },
              {
                title: "Affordable Prices",
                description:
                  "Save up to 70% compared to Western countries without compromising on quality.",
              },
              {
                title: "JCI Accredited Hospitals",
                description:
                  "International standard facilities with the latest medical technology.",
              },
              {
                title: "Personalized Care",
                description:
                  "Dedicated coordinators to help with every aspect of your journey.",
              },
              {
                title: "Recovery in Paradise",
                description:
                  "Recover in a tropical setting with world-class hospitality.",
              },
              {
                title: "No Waiting Lists",
                description:
                  "Schedule your surgery when it's convenient for you.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation with our expert surgeons. We'll help you
            plan every detail of your {procedure.name.toLowerCase()} procedure.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +66 2 653 3880
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Related Procedures */}
      {relatedProcedures.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="section-title mb-8">Related Procedures</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProcedures.map((related) => (
                <Link
                  key={related.id}
                  to={`/${related.category}/${related.slug}`}
                  className="procedure-card p-6 group"
                >
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {related.shortDescription}
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default ProcedurePage;

import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { getProceduresByCategory } from "@/data/procedures";
import { Procedure } from "@/types/content";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryMap: Record<string, { 
    title: string; 
    description: string; 
    procedureCategory: Procedure["category"];
  }> = {
    face: {
      title: "Face Surgery Thailand",
      description: "Enhance your facial features with expert precision. Our board-certified surgeons specialize in rhinoplasty, facelift, eyelid surgery, and more.",
      procedureCategory: "face",
    },
    breast: {
      title: "Breast Surgery Thailand",
      description: "Achieve your ideal silhouette with premium breast augmentation, lift, and reduction procedures by experienced surgeons.",
      procedureCategory: "breast",
    },
    body: {
      title: "Body Surgery Thailand",
      description: "Transform your body with advanced liposuction, tummy tuck, and body contouring procedures at world-class facilities.",
      procedureCategory: "body",
    },
    srs: {
      title: "Gender Surgery Thailand",
      description: "Thailand is a world leader in gender confirmation surgery, with pioneering surgeons and comprehensive care.",
      procedureCategory: "other",
    },
  };

  const categoryInfo = category ? categoryMap[category] : null;
  const procedures = categoryInfo 
    ? getProceduresByCategory(categoryInfo.procedureCategory)
    : [];

  if (!categoryInfo) {
    return (
      <PageLayout
        title="Category Not Found"
        description="The requested category could not be found."
      >
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <Link to="/procedures">
            <Button>View All Procedures</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={categoryInfo.title}
      description={categoryInfo.description}
      keywords={`${category} surgery thailand, ${category} surgery bangkok, cosmetic ${category} surgery thailand`}
      canonicalUrl={`https://cosmeticsurgerythailand.com/${category}`}
    >
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {categoryInfo.title.split(" ")[0]}
              <span className="block text-primary">
                {categoryInfo.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {categoryInfo.description}
            </p>
            <Button size="lg" className="cta-button">
              <Phone className="w-5 h-5 mr-2" />
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Available Procedures
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((procedure) => (
              <Link
                key={procedure.id}
                to={`/${procedure.category === "other" ? "srs" : procedure.category}/${procedure.slug}`}
                className="procedure-card p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">
                    {procedure.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {procedure.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {procedure.shortDescription}
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

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation with our expert surgeons. We'll help you
            plan every detail of your procedure.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default CategoryPage;

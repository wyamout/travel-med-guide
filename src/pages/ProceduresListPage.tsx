import PageLayout from "@/components/layout/PageLayout";
import { 
  faceProcedures, 
  breastProcedures, 
  bodyProcedures,
  otherProcedures 
} from "@/data/procedures";
import { Link } from "react-router-dom";

const ProceduresListPage = () => {
  const categories = [
    {
      title: "Face Surgery",
      slug: "face",
      description: "Enhance your facial features with expert precision",
      procedures: faceProcedures,
    },
    {
      title: "Breast Surgery",
      slug: "breast",
      description: "Achieve your ideal silhouette with premium care",
      procedures: breastProcedures,
    },
    {
      title: "Body Surgery",
      slug: "body",
      description: "Transform your body with advanced techniques",
      procedures: bodyProcedures,
    },
    {
      title: "Specialized Surgery",
      slug: "srs",
      description: "Expert gender confirmation and specialized procedures",
      procedures: otherProcedures,
    },
  ];

  return (
    <PageLayout
      title="Medical Procedures Thailand"
      description="Comprehensive cosmetic surgery procedures in Thailand. Face, breast, body surgery by expert surgeons. Free consultation. Best prices in Bangkok."
      keywords="cosmetic surgery procedures thailand, plastic surgery bangkok, face surgery thailand, breast surgery thailand, body surgery thailand"
      canonicalUrl="https://cosmeticsurgerythailand.com/procedures"
    >
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Cosmetic Surgery
            <span className="block text-primary">Procedures</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of cosmetic surgery procedures
            performed by board-certified surgeons at JCI-accredited hospitals
            across Thailand.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container space-y-16">
          {categories.map((category) => (
            <div key={category.slug}>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {category.title}
                </h2>
                <p className="text-muted-foreground mt-1">
                  {category.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.procedures.map((procedure) => (
                  <Link
                    key={procedure.id}
                    to={`/${procedure.category}/${procedure.slug}`}
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
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {procedure.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default ProceduresListPage;

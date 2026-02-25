import PageLayout from "@/components/layout/PageLayout";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
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
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-foreground/20" />
        <div className="container relative z-10">
          <div className="mb-8">
            <Breadcrumbs
              items={[{ name: "Procedures", href: "/procedures" }]}
              className="text-primary-foreground/60 [&_a]:text-primary-foreground/60 [&_a:hover]:text-accent [&_span.font-medium]:text-primary-foreground [&_svg]:text-primary-foreground/40"
            />
          </div>
          <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary-foreground">
            Cosmetic Surgery
            <span className="block text-accent">Procedures</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Discover our comprehensive range of cosmetic surgery procedures
            performed by board-certified surgeons at JCI-accredited hospitals
            across Thailand.
          </p>
          </div>
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

import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MedicalBusinessSchema } from "@/components/seo/JsonLd";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const CURRENT_YEAR = new Date().getFullYear();

const PageLayout = ({
  children,
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://cosmeticsurgerythailand.com/og-image.png",
}: PageLayoutProps) => {
  const fullTitle = title.includes("Thailand")
    ? `${title} | ${CURRENT_YEAR}`
    : `${title} | Cosmetic Surgery Thailand ${CURRENT_YEAR}`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Cosmetic Surgery Thailand" />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Hreflang — single English site serving all markets */}
        <link rel="alternate" hrefLang="en" href={canonicalUrl || "https://cosmeticsurgerythailand.com"} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl || "https://cosmeticsurgerythailand.com"} />
      </Helmet>

      <MedicalBusinessSchema />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 md:pt-32">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;

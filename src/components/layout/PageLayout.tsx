import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}

const PageLayout = ({
  children,
  title,
  description,
  keywords,
  canonicalUrl,
}: PageLayoutProps) => {
  const fullTitle = title.includes("Thailand") 
    ? `${title} | 2024` 
    : `${title} | Cosmetic Surgery Thailand 2024`;

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
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 md:pt-32">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;

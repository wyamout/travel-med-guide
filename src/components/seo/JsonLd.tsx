import { Helmet } from "react-helmet-async";

const SITE_URL = "https://cosmeticsurgerythailand.com";
const SITE_NAME = "Cosmetic Surgery Thailand";
const SITE_LOGO = `${SITE_URL}/favicon.png`;
const SITE_PHONE = "+66925590848";

// Base MedicalBusiness schema — injected on every page via PageLayout
export const MedicalBusinessSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO,
    image: `${SITE_URL}/og-image.png`,
    telephone: SITE_PHONE,
    description:
      "Thailand's premier cosmetic surgery facilitator. Connecting international patients with board-certified surgeons at JCI-accredited hospitals in Bangkok, Phuket, Pattaya, and Koh Samui since 2003.",
    foundingDate: "2003",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "TH",
      addressLocality: "Bangkok",
    },
    medicalSpecialty: [
      "PlasticSurgery",
      "CosmeticSurgery",
    ],
    sameAs: [
      "https://www.facebook.com/cosmeticsurgerythailand",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

// Breadcrumb schema
interface BreadcrumbItem {
  name: string;
  href: string;
}

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

// MedicalProcedure schema for procedure pages
interface ProcedureSchemaProps {
  name: string;
  description: string;
  url: string;
  bodyLocation?: string;
  duration?: string;
}

export const MedicalProcedureSchema = ({
  name,
  description,
  url,
  bodyLocation,
  duration,
}: ProcedureSchemaProps) => {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url: `${SITE_URL}${url}`,
    procedureType: "https://schema.org/CosmeticProcedure",
    howPerformed: "Performed by board-certified plastic surgeons at JCI-accredited hospitals in Thailand.",
    preparation: "Free online consultation and medical questionnaire required before scheduling.",
    status: "https://schema.org/EventScheduled",
    availableService: {
      "@type": "MedicalTherapy",
      name,
      availableIn: {
        "@type": "Hospital",
        name: "JCI-Accredited Hospitals in Thailand",
        address: {
          "@type": "PostalAddress",
          addressCountry: "TH",
        },
      },
    },
  };

  if (bodyLocation) data.bodyLocation = bodyLocation;
  if (duration) data.estimatedCost = { "@type": "MonetaryAmount", currency: "THB" };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

// FAQPage schema
interface FaqItem {
  q: string;
  a: string;
}

export const FAQPageSchema = ({ faqs }: { faqs: FaqItem[] }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

// Hospital/LocalBusiness schema
interface HospitalSchemaProps {
  name: string;
  description: string;
  url: string;
  location: string;
  accreditations?: string[];
}

export const HospitalSchema = ({
  name,
  description,
  url,
  location,
  accreditations,
}: HospitalSchemaProps) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name,
    description,
    url: `${SITE_URL}${url}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
      addressCountry: "TH",
    },
    medicalSpecialty: "PlasticSurgery",
    ...(accreditations && accreditations.length > 0
      ? {
          hasCredential: accreditations.map((acc) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Accreditation",
            name: acc,
          })),
        }
      : {}),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

import PageLayout from "@/components/layout/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { FAQPageSchema } from "@/components/seo/JsonLd";

const FAQPage = () => {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "Why should I choose Thailand for cosmetic surgery?",
          a: "Thailand is one of the world's top medical tourism destinations. With JCI-accredited hospitals, internationally trained surgeons, and costs 50-70% lower than Western countries, Thailand offers world-class care at affordable prices. Plus, you can recover in a beautiful tropical setting.",
        },
        {
          q: "Is cosmetic surgery in Thailand safe?",
          a: "Yes, when performed at accredited hospitals by qualified surgeons. We only work with JCI-accredited hospitals and board-certified plastic surgeons with years of experience. Safety standards meet or exceed international standards.",
        },
        {
          q: "How much can I save compared to my home country?",
          a: "Most patients save 50-70% compared to prices in the USA, UK, or Australia. For example, breast augmentation that costs $10,000+ in the US can be $3,000-$5,000 in Thailand, including hospital fees.",
        },
        {
          q: "Do surgeons speak English?",
          a: "Yes, all our partner surgeons speak English fluently. Many have trained in the US, UK, or Australia. We also provide patient coordinators who speak multiple languages.",
        },
      ],
    },
    {
      category: "Before Your Surgery",
      questions: [
        {
          q: "How do I book a consultation?",
          a: "Simply fill out our contact form or call us. We'll connect you with the right surgeon based on your needs. Initial consultations are free and can be done via email or video call before you travel.",
        },
        {
          q: "What should I bring to Thailand?",
          a: "Bring loose, comfortable clothing, any medications you take, medical records, and photos if relevant to your procedure. We'll provide a detailed pre-travel checklist after booking.",
        },
        {
          q: "How long should I stay in Thailand?",
          a: "This depends on your procedure. Most patients stay 7-14 days. We recommend arriving 1-2 days before surgery and staying until your surgeon clears you to fly home.",
        },
        {
          q: "Can I combine multiple procedures?",
          a: "Yes, combining procedures is common and can save time and money. Your surgeon will advise what's safe to combine based on your health and goals.",
        },
      ],
    },
    {
      category: "During & After Surgery",
      questions: [
        {
          q: "What is the recovery like?",
          a: "Recovery varies by procedure. You'll have follow-up appointments with your surgeon, and many patients relax at a recovery resort or hotel. We provide detailed aftercare instructions.",
        },
        {
          q: "What if I have complications after returning home?",
          a: "While complications are rare, we provide follow-up support. You can contact your surgeon via email, and we can connect you with local doctors if needed. Many procedures include a follow-up video consultation.",
        },
        {
          q: "When can I fly home after surgery?",
          a: "Your surgeon will determine when it's safe to fly, typically 7-14 days after surgery depending on the procedure. We never rush patients to leave before they're ready.",
        },
      ],
    },
    {
      category: "Payment & Booking",
      questions: [
        {
          q: "Do I need to pay you a fee?",
          a: "No! Our service is completely free. You pay only the hospital directly for your surgery. We earn a referral fee from the hospitals, not from you.",
        },
        {
          q: "What payment methods are accepted?",
          a: "Hospitals accept credit cards, bank transfers, and cash. Some offer payment plans for Australian patients. Full payment is typically required before surgery.",
        },
        {
          q: "Is a deposit required?",
          a: "Most hospitals require a small deposit to confirm your booking, which is applied to your final bill. The amount varies by hospital and procedure.",
        },
      ],
    },
  ];

  // Flatten all FAQ items for schema
  const allFaqItems = faqs.flatMap((section) => section.questions);

  return (
    <PageLayout
      title="Frequently Asked Questions | Cosmetic Surgery Thailand"
      description="Common questions about cosmetic surgery in Thailand. Learn about safety, costs, recovery, and what to expect. Get answers from experts."
      keywords="cosmetic surgery thailand faq, plastic surgery thailand questions, medical tourism thailand"
      canonicalUrl="https://cosmeticsurgerythailand.com/faq"
    >
      <FAQPageSchema faqs={allFaqItems} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="mb-8">
            <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Frequently Asked
              <span className="block text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to the most common questions about cosmetic surgery in
              Thailand. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${sectionIndex}-${index}`}
                    className="bg-card rounded-xl border border-border/50 px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Get a free consultation and personalized
            answers to all your questions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQPage;

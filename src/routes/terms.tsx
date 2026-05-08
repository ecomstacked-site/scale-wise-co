import { SEO } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using EcomStacked (the “Site”), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please discontinue use of the Site.",
  },
  {
    title: "Use of Content",
    content:
      "All content on EcomStacked is provided for informational and educational purposes only. You may share short excerpts with proper attribution and a link back to the original article. You may not republish, redistribute, or create derivative works from our content at scale without prior written permission.",
  },
  {
    title: "No Professional Advice",
    content:
      "Content on EcomStacked is educational only. It is not legal, financial, tax, accounting, or investment advice, and it should not be relied on as a guarantee of any business outcome. For decisions that carry legal or financial weight, consult a qualified professional in the relevant jurisdiction.",
  },
  {
    title: "No Guarantees",
    content:
      "Software performance, marketing results, and business outcomes vary based on factors outside our control — including your offer, market, audience, execution, and budget. EcomStacked does not guarantee earnings, traffic growth, ad performance, conversion rates, or any other specific result from using the tools or strategies discussed on the Site.",
  },
  {
    title: "Accuracy of Information",
    content:
      "We make a reasonable effort to keep articles, tool features, and pricing information accurate and up to date. However, software changes frequently and we cannot warrant that all information is current at the time you read it. Always confirm pricing, features, and terms directly with the vendor before purchasing.",
  },
  {
    title: "User Responsibility",
    content:
      "You are responsible for evaluating any tool, service, or strategy referenced on the Site and for the decisions you make based on that research. This includes reviewing each vendor’s pricing, terms, refund policy, and suitability for your specific business before subscribing or purchasing.",
  },
  {
    title: "Affiliate Disclosure",
    content:
      "Some links on EcomStacked are affiliate links. If you sign up or purchase through one of these links, we may earn a commission at no additional cost to you. Affiliate relationships do not influence our editorial recommendations — we cover and rank tools based on independent evaluation, not commission rates. For full details, see our Editorial Policy and Disclaimer.",
  },
  {
    title: "External Links Disclaimer",
    content:
      "EcomStacked links to third-party websites, software vendors, and services we do not own or operate. We are not responsible for the content, accuracy, terms, pricing, privacy practices, or availability of these external sites. Visiting a third-party site is at your own discretion and subject to that site’s own terms.",
  },
  {
    title: "Third-Party Services",
    content:
      "Tools and services we discuss are operated by their respective providers. We make no warranties about the quality, reliability, security, or continued availability of any third-party tool. Any agreement you enter into with a vendor is solely between you and that vendor.",
  },
  {
    title: "Intellectual Property",
    content:
      "All original content, branding, logos, and visual design on EcomStacked are the intellectual property of EcomStacked unless otherwise stated. You may not use our trademarks, logos, or branding without prior written permission. Third-party trademarks remain the property of their respective owners.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, EcomStacked, its owners, and its contributors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Site or your reliance on any information published on it. The Site is provided on an “as is” and “as available” basis without warranties of any kind.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these Terms of Service from time to time to reflect changes in our practices, legal requirements, or the scope of the Site. Updates take effect when posted on this page. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "Contact",
    content:
      "For questions about these Terms of Service, contact us at hello@ecomstacked.io.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Terms of Service — EcomStacked"
        description="Terms and conditions for using the EcomStacked website, including editorial scope, affiliate disclosure, third-party links, and limitation of liability."
        canonical="https://www.ecomstacked.io/terms-of-service"
      />
      <Header />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-foreground">Terms of Service</h1>
            <p className="mt-2 text-xs text-muted-foreground">Last updated: April 2026</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              These Terms of Service govern your use of EcomStacked. Please read them alongside our Privacy Policy, Disclaimer, and Editorial Policy.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-lg font-bold text-foreground">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

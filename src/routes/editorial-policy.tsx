import { SEO } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "1. Our Mission",
    content:
      "EcomStacked exists to help ecommerce founders, Shopify store owners, and DTC brands discover the tools, strategies, and workflows that actually move the needle. We focus on practical, operator-level guidance — not hype — so readers can make informed decisions about the software they bring into their business.",
  },
  {
    title: "2. Editorial Independence",
    content:
      "Our editorial decisions are made independently of any commercial relationship. Affiliate partnerships, vendor outreach, or paid offers do not influence which tools we cover, how we rank them, or what we recommend. Reviews and comparisons are written based on our own evaluation criteria, and tools we believe underperform are either not covered or clearly noted as such.",
  },
  {
    title: "3. Research & Testing Process",
    content:
      "Our content may include any combination of the following methods, depending on the topic and category:",
    list: [
      "Hands-on testing of software interfaces and workflows",
      "Feature analysis and capability mapping",
      "Public research from vendor documentation, changelogs, and case studies",
      "Industry feedback from operators, communities, and practitioners",
      "Side-by-side product comparisons across consistent criteria",
      "Workflow evaluation in real ecommerce use cases (product testing, ad tracking, content production)",
    ],
  },
  {
    title: "4. Accuracy & Updates",
    content:
      "Software is a moving target. Features, pricing, plans, and integrations change frequently — sometimes weekly. We review and update articles periodically to reflect material changes, but we cannot guarantee real-time accuracy. Always confirm pricing and feature details directly with the vendor before purchasing.",
  },
  {
    title: "5. Affiliate Disclosure",
    content:
      "Some links on EcomStacked are affiliate links. If you sign up or purchase through one of these links, we may earn a commission at no additional cost to you. These commissions help fund our research, hosting, and editorial operations. Affiliate status does not change our recommendation — tools we recommend without an affiliate relationship are treated the same as those that have one.",
  },
  {
    title: "6. No Guarantees",
    content:
      "EcomStacked publishes informational and educational content. We do not guarantee any specific outcome from using the tools or strategies we cover, including but not limited to:",
    list: [
      "Earnings or revenue",
      "Business growth",
      "Ad performance or ROAS",
      "SEO rankings or organic traffic",
      "Marketing or conversion results",
    ],
  },
  {
    title: "7. AI-Assisted Content",
    content:
      "We use AI tools to assist with drafting, formatting, research synthesis, and editing. Every article is reviewed and edited by a human before publication. AI is treated as a productivity aid — not a substitute for editorial judgment, fact-checking, or original analysis.",
  },
  {
    title: "8. User Responsibility",
    content:
      "Readers are responsible for evaluating any tool, service, or strategy referenced on EcomStacked before making a purchasing or business decision. Our content is a starting point for research, not a replacement for your own due diligence.",
  },
  {
    title: "9. Corrections Policy",
    content:
      "If you spot outdated information, a factual error, or a feature that has changed, we want to know. Email hello@ecomstacked.io with the article URL and a short description of the issue. Verified corrections are typically applied within a few business days.",
  },
  {
    title: "10. Contact",
    content:
      "For editorial questions, corrections, partnerships, or general inquiries, contact us at hello@ecomstacked.io.",
  },
];

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Editorial Policy — EcomStacked"
        description="How EcomStacked researches, tests, writes, and updates its ecommerce software reviews and recommendations. Editorial independence, affiliate disclosure, and corrections policy."
        canonical="https://www.ecomstacked.io/editorial-policy"
      />
      <Header />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-foreground">Editorial Policy</h1>
            <p className="mt-2 text-xs text-muted-foreground">Last updated: April 2026</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              This page explains how EcomStacked produces its content, how we maintain editorial independence, and how we handle affiliate relationships, AI assistance, and corrections.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-lg font-bold text-foreground">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.content}</p>
              {section.list && (
                <ul className="mt-3 space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground list-disc">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

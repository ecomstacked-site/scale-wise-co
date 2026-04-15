import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — EcomStacked" },
      { name: "description", content: "Important disclaimers about EcomStacked content, affiliate relationships, and editorial independence." },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
          <h1 className="font-display text-3xl font-extrabold text-foreground">Disclaimer</h1>
          <p className="text-xs text-muted-foreground">Last updated: April 2026</p>

          {[
            { title: "General Disclaimer", content: "The information provided on EcomStacked is for general informational and educational purposes only. It is not intended as professional business, financial, or legal advice. Always do your own research and consult with qualified professionals before making business decisions." },
            { title: "Affiliate Disclosure", content: "This website may earn commissions from affiliate links. We only recommend tools we believe provide real value. Our affiliate relationships do not influence which tools we recommend or how we evaluate them. When we use affiliate links, we label them clearly." },
            { title: "Editorial Independence", content: "Our editorial process operates independently from our business relationships. Tool recommendations and reviews are based on real-world use cases, ease of setup, ROI impact, and user feedback. We never accept paid placements." },
            { title: "No Guarantees", content: "We do not guarantee any specific results from using the tools or strategies recommended on this site. Results vary depending on individual circumstances, market conditions, business model, and execution." },
            { title: "Product Information", content: "Tool features, pricing, and availability are subject to change by their respective providers. We make every effort to keep information current but cannot guarantee real-time accuracy. Always verify details directly with the tool provider." },
            { title: "Testimonials and Examples", content: "Any examples or case studies mentioned on this site are illustrative and do not guarantee similar outcomes. Individual results will vary." },
            { title: "External Links", content: "EcomStacked contains links to external websites and third-party services. We are not responsible for the content, accuracy, or practices of these external sites." },
            { title: "Contact", content: "If you have questions about this disclaimer, please contact us at hello@ecomstacked.io." },
          ].map((section) => (
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

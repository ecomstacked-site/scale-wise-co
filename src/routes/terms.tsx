import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — EcomStacked" },
      { name: "description", content: "Terms and conditions for using EcomStacked website and services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
          <h1 className="font-display text-3xl font-extrabold text-foreground">Terms of Service</h1>
          <p className="text-xs text-muted-foreground">Last updated: April 2026</p>

          {[
            { title: "Acceptance of Terms", content: "By accessing and using EcomStacked, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website." },
            { title: "Use of Content", content: "All content on EcomStacked is provided for informational and educational purposes only. You may not reproduce, distribute, or create derivative works from our content without prior written permission." },
            { title: "Accuracy of Information", content: "We strive to provide accurate and up-to-date information. However, we make no warranties or representations about the completeness, accuracy, or reliability of any content on this site. Tool features, pricing, and availability may change without notice." },
            { title: "Affiliate Links", content: "EcomStacked may contain affiliate links. When you click these links and make a purchase, we may earn a commission at no additional cost to you. Affiliate relationships do not influence our editorial recommendations." },
            { title: "Third-Party Services", content: "We link to and recommend third-party tools and services. We are not responsible for the quality, reliability, or practices of these third-party providers. Use them at your own discretion." },
            { title: "Intellectual Property", content: "All content, branding, and materials on EcomStacked are the intellectual property of EcomStacked unless otherwise stated. You may not use our trademarks, logos, or branding without permission." },
            { title: "Limitation of Liability", content: "EcomStacked shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided." },
            { title: "Changes to Terms", content: "We reserve the right to modify these terms at any time. Continued use of the site after changes constitutes acceptance of the updated terms." },
            { title: "Contact", content: "For questions about these terms, contact us at hello@ecomstacked.io." },
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

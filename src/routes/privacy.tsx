import { SEO } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy — EcomStacked"
        description="EcomStacked privacy policy — how we collect, use, and protect your data."
      />
      <Header />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
          <h1 className="font-display text-3xl font-extrabold text-foreground">Privacy Policy</h1>
          <p className="text-xs text-muted-foreground">Last updated: April 2026</p>

          {[
            { title: "Introduction", content: "EcomStacked (\"we,\" \"our,\" or \"us\") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard information when you visit our website." },
            { title: "Information We Collect", content: "We may collect information you voluntarily provide, such as your name and email address when subscribing to our newsletter or using our contact form. We also collect standard usage data through analytics tools, including pages visited, time spent on site, and referring URLs." },
            { title: "How We Use Your Information", content: "We use collected information to improve our content, send newsletters (with your consent), respond to inquiries, and analyze site usage patterns. We do not sell your personal information to third parties." },
            { title: "Cookies and Tracking", content: "Our site may use cookies and similar technologies for analytics and functionality purposes. You can control cookie preferences through your browser settings." },
            { title: "Third-Party Links", content: "Our website contains links to third-party tools and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies." },
            { title: "Affiliate Disclosure", content: "Some links on our site may be affiliate links. This means we may earn a commission if you make a purchase through these links, at no additional cost to you. This does not influence our editorial recommendations." },
            { title: "Data Security", content: "We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure." },
            { title: "Your Rights", content: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at hello@ecomstacked.io." },
            { title: "Changes to This Policy", content: "We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date." },
            { title: "Contact Us", content: "If you have questions about this privacy policy, please contact us at hello@ecomstacked.io." },
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

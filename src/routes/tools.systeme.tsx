import { ToolMoneyPage } from "@/components/ToolMoneyPage";

export default function SystemePage() {
  return (
    <ToolMoneyPage
      name="Systeme.io"
      goPath="/go/systeme"
      category="Funnels & Marketing Systems"
      seoTitle="Systeme.io Review (2026): Affordable Funnels, Email & Courses"
      seoDescription="Systeme.io review for solo founders and small teams. Build funnels, email sequences, and courses without ClickFunnels-level pricing. Features, pros, cons."
      heading="Systeme.io Review (2026): The Affordable ClickFunnels Alternative"
      intro="Systeme.io bundles funnels, email marketing, courses, and membership sites into a single low-cost platform. For solo founders building info products, lead magnets, or simple ecommerce funnels, it removes a stack of expensive subscriptions."
      whoItsFor="Systeme is a fit for solo founders, course creators, coaches, and lean ecommerce brands running lead-magnet style funnels. Large teams with complex segmentation needs will outgrow it."
      features={[
        { title: "Sales funnels", desc: "Drag-and-drop funnel builder with proven templates." },
        { title: "Email marketing", desc: "Broadcasts, automations, and segmentation included." },
        { title: "Online courses", desc: "Host and sell courses without a separate LMS." },
        { title: "Affiliate program", desc: "Run your own affiliate program natively." },
      ]}
      pros={[
        "Genuinely free tier that's actually usable",
        "Replaces ClickFunnels, Kajabi, and Mailchimp combined",
        "Fastest way for a solo founder to launch a funnel",
      ]}
      cons={[
        "Templates feel less polished than premium tools",
        "Advanced automation hits ceilings at scale",
      ]}
      verdict="Systeme.io is the obvious choice if you're a solo founder or small team starting from zero. If you're already on a mature stack, switching for the savings rarely pays off."
    />
  );
}

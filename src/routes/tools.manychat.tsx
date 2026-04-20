import { ToolMoneyPage } from "@/components/ToolMoneyPage";

export default function ManyChatPage() {
  return (
    <ToolMoneyPage
      name="ManyChat"
      goPath="/go/manychat"
      category="Chat Automation & CRM"
      seoTitle="ManyChat Review (2026): Turn DMs Into Sales on Autopilot"
      seoDescription="ManyChat review for Shopify and DTC brands. Features, pricing, pros, cons, and how to use chat automation to convert Instagram and Messenger traffic into sales."
      heading="ManyChat Review (2026): Automate DMs and Capture Sales"
      intro="ManyChat is the most established chat automation platform for Instagram, Facebook Messenger, and WhatsApp. For ecommerce brands sitting on social audiences, it's the bridge between viral content and actual revenue."
      whoItsFor="ManyChat is built for Shopify stores with active social audiences — brands posting on Instagram or running creator content where comments and DMs are stacking up unanswered. It's also a strong fit for product launches and giveaways."
      features={[
        { title: "Comment-to-DM automation", desc: "Trigger DMs when users comment a keyword on a post." },
        { title: "Multi-channel flows", desc: "Build sequences for Instagram, Messenger, and WhatsApp." },
        { title: "Lead capture", desc: "Collect emails and phone numbers inside chat." },
        { title: "Shopify integration", desc: "Send abandoned cart and post-purchase flows." },
      ]}
      pros={[
        "Industry standard with reliable Meta integrations",
        "Generous free tier to validate the workflow",
        "Strong template library to launch fast",
      ]}
      cons={[
        "Pro features required for serious automation",
        "Learning curve to build polished flows",
      ]}
      verdict="If a meaningful portion of your traffic comes from Instagram or Messenger, ManyChat captures revenue you're currently leaving on the table. For brands without a social presence, it's premature."
    />
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { ToolCard } from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Shield, Eye, FileSearch } from "lucide-react";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Recommended Tools — EcomStack" },
      { name: "description", content: "Curated directory of the best AI, tracking, automation, shipping, and growth tools for ecommerce brands and dropshippers." },
      { property: "og:title", content: "Recommended Tools — EcomStack" },
      { property: "og:description", content: "Browse our curated directory of ecommerce growth tools." },
    ],
  }),
  component: ToolsPage,
});

const allTools = [
  {
    name: "WeTracked",
    description: "Server-side tracking platform that connects your ad accounts to accurate first-party conversion data. Supports Facebook CAPI, Google Ads, and TikTok Events API with minimal setup on Shopify and WooCommerce.",
    bestFor: "Ecommerce brands running paid ads on Meta, Google, or TikTok",
    benefit: "Recover lost conversions and improve ROAS with accurate server-side attribution",
    category: "Tracking & Attribution",
    featured: true,
    href: "https://www.wetracked.io/?ref=ddf2eabf-bf17-4363-aaef-585e9c4e763a",
  },
  {
    name: "Holo AI",
    description: "AI-powered ad creative platform designed for ecommerce. Generate scroll-stopping video ads, product images, and ad copy variants in minutes — without a design team or expensive agencies.",
    bestFor: "Media buyers and creative teams scaling ad production",
    benefit: "Produce 10x more ad creatives with AI, reducing production costs and turnaround time",
    category: "AI Content & Ad Creation",
    featured: true,
    href: "https://tryholo.ai/?utm_medium=affiliate&utm_source=4988344&utm_campaign=41932&im_ref=VR4UEcxOMxyZW1iwCnQUZz87Uku1QdzxZTtOR00&utm_ad_id=3273895&irgwc=1&afsrc=1",
  },
  {
    name: "WeShop AI",
    description: "AI product photography and model generation tool. Create professional lifestyle images and model shots from simple product photos — ideal for stores that need high-quality visuals without studio shoots.",
    bestFor: "Dropshippers and DTC brands needing professional product imagery",
    benefit: "Generate studio-quality product and model photos without hiring photographers",
    category: "AI Content & Ad Creation",
    featured: true,
    href: "https://www.weshop.ai/?fpr=ecomstack",
  },
  {
    name: "ManyChat",
    description: "Automated messaging platform for Instagram, Facebook Messenger, and WhatsApp. Capture leads through DMs, automate responses, build conversation flows, and drive sales directly through chat.",
    bestFor: "Shopify stores with active social media audiences",
    benefit: "Convert DM conversations into paying customers with automated chat funnels",
    category: "Chat Automation & CRM",
    featured: true,
    href: "https://manychat.com/?irclickid=VnSTflW-KxycRDrzAA0SXwH3Ukpy-iUnJQllWI0&irgwc=1&utm_source=Affiliate&utm_content=LETHUY&utm_medium=Impact&utm_campaign=Online%20Tracking%20Link",
  },
  {
    name: "GoHighLevel",
    description: "All-in-one CRM and marketing automation platform. Manage leads, automate follow-ups, build funnels, and handle customer communication from a single dashboard — replacing multiple tools.",
    bestFor: "Ecommerce brands and agencies managing multiple client accounts",
    benefit: "Consolidate your CRM, email, SMS, and funnel tools into one platform",
    category: "Chat Automation & CRM",
    featured: false,
    href: "https://www.gohighlevel.com/?fp_ref=ecomstack",
  },
  {
    name: "Evebee",
    description: "Product research and store analytics tool built specifically for Etsy and Shopify sellers. Discover trending products, analyze competitor performance, and identify profitable niches with data-driven insights.",
    bestFor: "Dropshippers and store owners doing product research",
    benefit: "Find proven products and profitable niches before competitors using real marketplace data",
    category: "Product Research & Optimization",
    featured: false,
    href: "https://www.everbee.io/?via=EcomStack",
  },
  {
    name: "Easyship",
    description: "Global shipping platform that connects your store to 250+ courier services. Compare rates, generate labels, automate shipping rules, and provide real-time tracking to customers across 220+ countries.",
    bestFor: "Ecommerce stores shipping domestically or internationally",
    benefit: "Reduce shipping costs and delivery times with automated rate comparison and label generation",
    category: "Shipping & Fulfillment",
    featured: false,
    href: "https://www.easyship.com/?utm_campaign=4988344&utm_term=10435&utm_content=666308&utm_medium=affiliate&irclickid=1Sd0JU24pxyZWXzxnEWLWz28Uku1lr3BZTtIxE0&irgwc=1&afsrc=1&utm_source=LETHUY",
  },
  {
    name: "Systeme",
    description: "All-in-one marketing platform for building sales funnels, email campaigns, online courses, and membership sites. A cost-effective alternative to ClickFunnels and Kajabi for ecommerce operators building systems.",
    bestFor: "Solo founders and small teams building marketing funnels",
    benefit: "Build funnels, email sequences, and landing pages without paying for multiple subscriptions",
    category: "Funnels & Marketing Systems",
    featured: false,
    href: "https://systeme.io/?sa=sa0246910810ba30b29294f24dd70d00c490781e19",
  },
];

const categories = ["All", "Tracking & Attribution", "AI Content & Ad Creation", "Chat Automation & CRM", "Product Research & Optimization", "Shipping & Fulfillment", "Funnels & Marketing Systems"];

function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? allTools : allTools.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Curated Directory</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">Recommended Tools</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            A curated directory of the best software for ecommerce growth. Each tool is independently evaluated for real-world use cases, ease of setup, and value for operators.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "secondary"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="rounded-full text-xs"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-sm text-muted-foreground">No tools found in this category yet.</p>
          )}
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Standards</p>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">How We Evaluate Tools</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Every tool listed on EcomStack is evaluated based on real-world ecommerce use cases, ease of integration, pricing transparency, and the actual results operators report.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: FileSearch, title: "Research-Driven", desc: "We test tools in real workflows and compare alternatives before recommending." },
              { icon: Shield, title: "No Paid Placements", desc: "Rankings are never influenced by vendor payments or commission rates." },
              { icon: Eye, title: "Transparent Disclosure", desc: "Affiliate links are always clearly labeled. Our process is open." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-card border border-border">
                  <item.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mt-3 font-display text-sm font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { ToolCard } from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Shield, Eye, FileSearch, ArrowUpRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/tools/")({
  head: () => ({
    meta: [
      { title: "Recommended Tools — EcomStacked" },
      { name: "description", content: "Curated directory of the best AI, tracking, automation, shipping, and growth tools for ecommerce brands and dropshippers." },
      { property: "og:title", content: "Recommended Tools — EcomStacked" },
      { property: "og:description", content: "Browse our curated directory of ecommerce growth tools." },
    ],
  }),
  component: ToolsPage,
});

const allTools = [
  {
    name: "WeTracked",
    description: "Server-side tracking platform that connects your ad accounts to accurate first-party conversion data. Supports Facebook CAPI, Google Ads, and TikTok Events API.",
    bestFor: "Stores running paid ads on Meta, Google, or TikTok",
    benefit: "Recover lost conversions and improve ROAS with server-side attribution",
    category: "Tracking & Attribution",
    featured: true,
    extraBadge: "Best for Tracking",
    socialProof: "Used by performance marketers and media buyers",
    microHook: "Fix inaccurate tracking and recover lost ROAS",
    image: "/src/assets/tools/wetracked.jpg",
    href: "/go/wetracked",
  },
  {
    name: "Holo AI",
    description: "Ad creative platform for ecommerce. Generate video ads, product images, and ad copy variants in minutes — without a design team.",
    bestFor: "Media buyers and teams scaling ad production",
    benefit: "Produce more ad creatives at lower cost",
    category: "AI Content & Ad Creation",
    featured: true,
    extraBadge: "Best for Creatives",
    socialProof: "Popular among DTC brands and media buyers",
    microHook: "Scale ad creatives without a design team",
    image: "/src/assets/tools/holo-ai.jpg",
    href: "/go/holo-ai",
  },
  {
    name: "WeShop AI",
    description: "Product photography and model generation tool. Create professional lifestyle images from simple product photos — no studio or photographer needed.",
    bestFor: "Dropshippers and DTC brands needing professional imagery",
    benefit: "Generate studio-quality product photos in minutes",
    category: "AI Content & Ad Creation",
    featured: true,
    socialProof: "Used by ecommerce brands for product imagery",
    microHook: "Professional product photos in minutes, not days",
    image: "/src/assets/tools/weshop-ai.jpg",
    href: "/go/weshop-ai",
  },
  {
    name: "ManyChat",
    description: "Automated messaging for Instagram, Facebook Messenger, and WhatsApp. Capture leads through DMs, automate responses, and drive sales through chat.",
    bestFor: "Shopify stores with active social media audiences",
    benefit: "Convert DM conversations into paying customers automatically",
    category: "Chat Automation & CRM",
    featured: true,
    extraBadge: "Most Popular",
    socialProof: "Widely used by Shopify store owners",
    microHook: "Turn DM conversations into automated sales",
    image: "/src/assets/tools/manychat.jpg",
    href: "/go/manychat",
  },
  {
    name: "GoHighLevel",
    description: "All-in-one CRM and marketing automation platform. Manage leads, automate follow-ups, build funnels, and handle customer communication from one dashboard.",
    bestFor: "Ecommerce brands and agencies managing multiple accounts",
    benefit: "Consolidate CRM, email, SMS, and funnels into one platform",
    category: "Chat Automation & CRM",
    socialProof: "Used by agencies and ecommerce operators",
    microHook: "Replace multiple tools with one platform",
    image: "/src/assets/tools/gohighlevel.jpg",
    href: "/go/gohighlevel",
  },
  {
    name: "Evebee",
    description: "Product research and store analytics tool for Etsy and Shopify sellers. Discover trending products, analyze competitors, and identify profitable niches.",
    bestFor: "Dropshippers and store owners doing product research",
    benefit: "Find proven products before competitors using real data",
    category: "Product Research & Optimization",
    socialProof: "Used by ecommerce brands for product research",
    microHook: "Discover winning products with real marketplace data",
    image: "/src/assets/tools/evebee.jpg",
    href: "/go/everbee",
  },
  {
    name: "Easyship",
    description: "Global shipping platform connecting your store to 250+ courier services. Compare rates, generate labels, and automate shipping across 220+ countries.",
    bestFor: "Ecommerce stores shipping domestically or internationally",
    benefit: "Reduce shipping costs with automated rate comparison",
    category: "Shipping & Fulfillment",
    socialProof: "Used by ecommerce brands shipping worldwide",
    microHook: "Ship faster and cheaper with automated logistics",
    image: "/src/assets/tools/easyship.jpg",
    href: "/go/easyship",
  },
  {
    name: "Systeme",
    description: "All-in-one marketing platform for sales funnels, email campaigns, online courses, and membership sites. A cost-effective alternative to ClickFunnels.",
    bestFor: "Solo founders and small teams building marketing funnels",
    benefit: "Build funnels, email sequences, and pages without multiple subscriptions",
    category: "Funnels & Marketing Systems",
    socialProof: "Popular among solo founders and small teams",
    microHook: "Build your entire funnel stack for less",
    image: "/src/assets/tools/systeme.jpg",
    href: "/go/systeme",
  },
];

const categories = ["All", "Tracking & Attribution", "AI Content & Ad Creation", "Chat Automation & CRM", "Product Research & Optimization", "Shipping & Fulfillment", "Funnels & Marketing Systems"];

const comparisonTools = [
  { name: "WeTracked", bestFor: "Ad tracking & attribution", useCase: "Recover lost conversions from iOS changes", href: "/go/wetracked" },
  { name: "Holo AI", bestFor: "Ad creatives", useCase: "Scale video and image ad production", href: "/go/holo-ai" },
  { name: "ManyChat", bestFor: "Chat automation", useCase: "Automate DM-based sales funnels", href: "/go/manychat" },
  { name: "Easyship", bestFor: "Shipping & fulfillment", useCase: "Compare rates and automate labels globally", href: "/go/easyship" },
  { name: "Systeme", bestFor: "Funnels & email", useCase: "Build funnels and email sequences affordably", href: "/go/systeme" },
];

function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? allTools : allTools.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Curated Directory</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">Recommended Tools</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            A curated directory of software for ecommerce growth. Each tool is independently evaluated for real-world use cases, ease of setup, and value for operators.
          </p>
        </div>
      </section>

      {/* Intro guidance */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-xl font-bold text-foreground">How to Build Your Stack</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Every ecommerce operation has different needs, but the most effective stacks follow a logical order. Start with accurate data, then layer on creative production and automation to scale efficiently.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-brand">1.</span> <span><strong className="text-foreground">Tracking & attribution</strong> — fix your data foundation before spending on ads</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-brand">2.</span> <span><strong className="text-foreground">Creatives & content</strong> — produce ads and product visuals at scale</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 font-bold text-brand">3.</span> <span><strong className="text-foreground">Automation & systems</strong> — automate chat, shipping, funnels, and CRM</span></li>
          </ul>
        </div>
      </section>

      {/* Tools grid */}
      <section className="pb-16 sm:pb-20">
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

      {/* Comparison table */}
      <section className="bg-card py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-xl font-bold text-foreground text-center">Quick Comparison</h2>
          <p className="mt-2 text-sm text-muted-foreground text-center">A side-by-side look at the core tools in our recommended stack.</p>
          <div className="mt-8 rounded-xl border bg-background overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-display font-bold">Tool</TableHead>
                  <TableHead className="font-display font-bold">Best For</TableHead>
                  <TableHead className="font-display font-bold hidden sm:table-cell">Use Case</TableHead>
                  <TableHead className="font-display font-bold text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonTools.map((t) => (
                  <TableRow key={t.name}>
                    <TableCell className="font-medium text-foreground">{t.name}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{t.bestFor}</TableCell>
                    <TableCell className="text-muted-foreground text-sm hidden sm:table-cell">{t.useCase}</TableCell>
                    <TableCell className="text-right">
                      <a href={t.href} target="_blank" rel="noopener noreferrer nofollow">
                        <Button variant="ghost" size="sm" className="gap-1 text-xs text-brand hover:text-brand">
                          Explore <ArrowUpRight className="h-3 w-3" />
                        </Button>
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* How we evaluate */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Standards</p>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">How We Evaluate Tools</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Every tool listed on EcomStacked is evaluated based on real-world ecommerce use cases, ease of integration, pricing transparency, and the results operators report.
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

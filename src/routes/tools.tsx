import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { ToolCard } from "@/components/ToolCard";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Recommended Tools — EcomStack" },
      { name: "description", content: "Curated directory of the best AI, tracking, automation, and growth tools for ecommerce brands and dropshippers." },
      { property: "og:title", content: "Recommended Tools — EcomStack" },
      { property: "og:description", content: "Browse our curated directory of ecommerce growth tools." },
    ],
  }),
  component: ToolsPage,
});

const allTools = [
  { name: "WeTracked", description: "Accurate server-side tracking for Facebook, Google, and TikTok ads with first-party data collection.", bestFor: "Ecommerce brands running paid ads", benefit: "Recover lost conversions and improve ROAS by up to 20%", category: "Tracking & Attribution", featured: true },
  { name: "Holo AI", description: "AI-powered ad creative generation for ecommerce brands. Create winning video and image ads at scale.", bestFor: "Media buyers and creative teams", benefit: "Produce 10x more ad creatives in a fraction of the time", category: "AI Content & Ad Creation", featured: true },
  { name: "ManyChat", description: "Automated messaging for Instagram, Facebook Messenger, and WhatsApp. Capture leads and drive sales through conversations.", bestFor: "Shopify stores with social media presence", benefit: "Convert DM conversations into paying customers automatically", category: "Chat Automation", featured: true },
  { name: "Evebee", description: "Smart product recommendations and store optimization tools designed specifically for Shopify stores.", bestFor: "Shopify store owners", benefit: "Increase average order value and conversion rates", category: "Product Research & Optimization", featured: true },
  { name: "Triple Whale", description: "All-in-one analytics dashboard for ecommerce. Track attribution, LTV, and cohort performance in real time.", bestFor: "DTC brands spending $10K+/mo on ads", benefit: "See true ROAS and make better ad spend decisions", category: "Analytics & Reporting", featured: false },
  { name: "Klaviyo", description: "Email and SMS marketing platform built for ecommerce. Automate flows, segment audiences, and drive retention.", bestFor: "Ecommerce brands focused on retention", benefit: "Generate 20-30% of revenue from email automation", category: "CRM & Customer Follow-Up", featured: false },
  { name: "Hyros", description: "AI-powered ad tracking and attribution platform with call tracking and long-term customer journey analysis.", bestFor: "High-ticket and subscription brands", benefit: "Accurate attribution for complex sales funnels", category: "Tracking & Attribution", featured: false },
  { name: "AdCreative.ai", description: "Generate conversion-focused ad creatives using AI. Get data-backed suggestions for images and copy.", bestFor: "Solo founders and small teams", benefit: "Skip the design bottleneck with AI-generated creatives", category: "AI Content & Ad Creation", featured: false },
  { name: "Gorgias", description: "Helpdesk and customer support platform designed for ecommerce. Centralize support across all channels.", bestFor: "Growing Shopify stores", benefit: "Reduce response time and increase customer satisfaction", category: "CRM & Customer Follow-Up", featured: false },
  { name: "Minea", description: "All-in-one product research tool for dropshippers. Spy on competitor ads and discover winning products.", bestFor: "Dropshippers doing product research", benefit: "Find proven products before competitors do", category: "Product Research & Optimization", featured: false },
];

const categories = ["All", "Tracking & Attribution", "AI Content & Ad Creation", "Chat Automation", "Product Research & Optimization", "CRM & Customer Follow-Up", "Analytics & Reporting"];

function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? allTools : allTools.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">Recommended Tools</h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            A curated directory of the best software for ecommerce growth. Each tool is evaluated for real-world use cases, ease of setup, and value for ecommerce operators.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
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

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-sm text-muted-foreground">No tools found in this category yet.</p>
          )}
        </div>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-xl font-bold text-foreground">How We Evaluate Tools</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Every tool listed on EcomStack is evaluated based on real-world ecommerce use cases, ease of integration, pricing transparency, and the actual results operators report. We prioritize tools that solve genuine problems over those with the biggest marketing budgets.
          </p>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

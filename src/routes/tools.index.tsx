import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/lib/seo";
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


const allTools = [
  {
    name: "WeTracked",
    description: "Server-side tracking platform that connects your ad accounts to accurate first-party conversion data. Supports Facebook CAPI, Google Ads, and TikTok Events API.",
    bestFor: "Stores running paid ads on Meta, Google, or TikTok",
    benefit: "Recover lost conversions and improve reported ROAS with server-side attribution",
    category: "Tracking & Attribution",
    featured: true,
    extraBadge: "Best for Tracking",
    socialProof: "Used by performance marketers and media buyers",
    microHook: "Fix inaccurate tracking and recover lost ROAS",
    image: "/assets/tools/wetracked.jpg",
    href: "/tools/wetracked-review",
  },
  {
    name: "Holo AI",
    description: "Ad creative platform for ecommerce. Generate UGC-style videos, product images, and ad copy variations from a product URL — without a design team.",
    bestFor: "Media buyers and teams scaling ad production",
    benefit: "Produce more testable ad creatives at lower cost",
    category: "AI Content & Ad Creation",
    featured: true,
    extraBadge: "Best for Creatives",
    socialProof: "Popular among DTC brands and media buyers",
    microHook: "Scale ad creatives without a design team",
    image: "/assets/tools/holo-ai.jpg",
    href: "/tools/holo-ai",
  },
  {
    name: "WinningHunter",
    description: "Product and ad research platform built for dropshippers. Combines store spy, ad spy, and product validation into one workflow.",
    bestFor: "Dropshippers running paid ads on Meta and TikTok",
    benefit: "Surface validated products with real marketplace data",
    category: "Product Research & Optimization",
    featured: true,
    extraBadge: "Best for Research",
    socialProof: "Used by dropshippers and product researchers",
    microHook: "Find products with data, not gut feel",
    image: "/assets/tools/trendtrack.jpg",
    href: "/tools/winninghunter",
  },
];

const categories = ["All", "Tracking & Attribution", "AI Content & Ad Creation", "Product Research & Optimization"];

const comparisonTools = [
  { name: "WeTracked", bestFor: "Ad tracking & attribution", useCase: "Recover lost conversions from iOS changes", href: "/tools/wetracked-review" },
  { name: "Holo AI", bestFor: "Ad creatives", useCase: "Scale video and image ad production", href: "/tools/holo-ai" },
  { name: "WinningHunter", bestFor: "Product research", useCase: "Spy stores and validate products", href: "/tools/winninghunter" },
];

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? allTools : allTools.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen">
      <SEO
        title="Recommended Tools — EcomStacked"
        description="Curated directory of the best AI, tracking, automation, shipping, and growth tools for ecommerce brands and dropshippers."
        ogTitle="Recommended Tools — EcomStacked"
        ogDescription="Browse our curated directory of ecommerce growth tools."
      />
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
                      <Link to={t.href}>
                        <Button variant="ghost" size="sm" className="gap-1 text-xs text-brand hover:text-brand">
                          Read Review <ArrowUpRight className="h-3 w-3" />
                        </Button>
                      </Link>
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

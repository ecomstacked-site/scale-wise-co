import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { ToolCard } from "@/components/ToolCard";
import { ArticleCard } from "@/components/ArticleCard";
import {
  BarChart3, Bot, Eye, Search, Shield, Target,
  ArrowRight, CheckCircle2, Zap, TrendingUp, Users
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcomStack — Discover the Best AI & Growth Tools for Ecommerce" },
      { name: "description", content: "We research, test, and organize tools that help dropshippers and ecommerce brands improve tracking, automate workflows, create better ads, and scale profitably." },
      { property: "og:title", content: "EcomStack — Best AI & Growth Tools for Ecommerce" },
      { property: "og:description", content: "Discover curated tools for tracking, automation, AI ads, and ecommerce growth." },
    ],
  }),
  component: HomePage,
});

const featuredTools = [
  { name: "WeTracked", description: "Accurate server-side tracking for Facebook, Google, and TikTok ads with first-party data.", bestFor: "Ad tracking & attribution", benefit: "Recover lost conversions and improve ROAS", category: "Tracking", featured: true },
  { name: "Holo AI", description: "AI-powered ad creative generation for ecommerce brands. Create winning ads at scale.", bestFor: "Ad creative & content", benefit: "Produce more creatives in less time", category: "AI Content", featured: true },
  { name: "ManyChat", description: "Automated messaging for Instagram, Facebook, and WhatsApp to capture leads and drive sales.", bestFor: "Chat automation & DMs", benefit: "Convert conversations into customers", category: "Automation", featured: false },
  { name: "Evebee", description: "Smart product recommendations and store optimization tools for Shopify.", bestFor: "Store optimization", benefit: "Increase AOV and conversion rates", category: "Optimization", featured: false },
];

const categories = [
  { icon: Target, label: "Tracking & Attribution", desc: "Server-side tracking, pixel management, and ROAS optimization" },
  { icon: Bot, label: "AI Content & Ad Creation", desc: "AI-powered tools for creatives, copy, and content generation" },
  { icon: Zap, label: "Chat Automation", desc: "Automated messaging, lead capture, and customer engagement" },
  { icon: Search, label: "Product Research", desc: "Find winning products and optimize your store" },
  { icon: Users, label: "CRM & Follow-Up", desc: "Customer retention, email flows, and lifetime value growth" },
  { icon: BarChart3, label: "Analytics & Reporting", desc: "Data dashboards, cohort analysis, and performance metrics" },
];

const articles = [
  { title: "Best AI Tools for Dropshipping in 2026", excerpt: "A curated list of AI-powered tools that help dropshippers automate content, create ads, and optimize their stores.", category: "AI Tools", date: "April 10, 2026", readTime: "8 min read", slug: "best-ai-tools-dropshipping" },
  { title: "How to Improve Ecommerce Tracking Accuracy", excerpt: "Server-side tracking, CAPI setup, and first-party data strategies to recover lost conversions.", category: "Tracking", date: "April 8, 2026", readTime: "6 min read", slug: "improve-ecommerce-tracking" },
  { title: "Best Chat Automation Tools for Shopify Stores", excerpt: "Compare the top chat automation platforms for Shopify and learn how to turn DMs into revenue.", category: "Automation", date: "April 5, 2026", readTime: "7 min read", slug: "chat-automation-shopify" },
];

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-card py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-surface)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Badge variant="secondary" className="mb-6 px-3 py-1 text-xs font-medium">
            Independent Tool Recommendations for Ecommerce
          </Badge>
          <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Discover the Best AI & Growth Tools for Ecommerce
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We research, test, and organize tools that help dropshippers and ecommerce brands improve tracking, automate workflows, create better ads, and scale profitably.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/tools">
              <Button variant="brand" size="lg" className="gap-2">
                Explore Tools <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline" size="lg">Read Latest Guides</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Featured Tools</h2>
              <p className="mt-2 text-sm text-muted-foreground">Hand-picked software for ecommerce growth</p>
            </div>
            <Link to="/tools" className="hidden text-sm font-medium text-brand hover:underline sm:block">
              View all tools →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Browse by Category</h2>
            <p className="mt-2 text-sm text-muted-foreground">Find the right tools for every part of your ecommerce stack</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link to="/tools" key={cat.label}>
                <Card className="group h-full transition-shadow hover:shadow-md">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                      <cat.icon className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-card-foreground">{cat.label}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{cat.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Why Trust EcomStack</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">We're an independent publisher focused on helping ecommerce operators make better tool decisions.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: "Independent Reviews", desc: "We evaluate tools based on real use cases, not just marketing claims." },
              { icon: Eye, title: "Hands-On Testing", desc: "Our team tests tools in real ecommerce environments before recommending them." },
              { icon: TrendingUp, title: "Built for Operators", desc: "Content designed for people running stores, not just browsing." },
              { icon: CheckCircle2, title: "Transparent Process", desc: "We disclose our methodology and how we make recommendations." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-surface">
                  <item.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mt-4 font-display text-sm font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Latest Articles</h2>
              <p className="mt-2 text-sm text-muted-foreground">Guides, strategies, and tool breakdowns for ecommerce growth</p>
            </div>
            <Link to="/blog" className="hidden text-sm font-medium text-brand hover:underline sm:block">
              View all articles →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Stack */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">The Recommended Ecommerce Stack</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">A curated set of tools we recommend for dropshippers and ecommerce brands looking to grow with better systems.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { category: "Tracking", tool: "WeTracked", reason: "Accurate server-side ad tracking" },
              { category: "AI Ads", tool: "Holo AI", reason: "AI-generated ad creatives at scale" },
              { category: "Automation", tool: "ManyChat", reason: "Chat-based lead capture & sales" },
              { category: "Optimization", tool: "Evebee", reason: "Smart product recs for Shopify" },
            ].map((item) => (
              <Card key={item.tool} className="text-left">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface">
                    <span className="font-display text-sm font-bold text-surface-foreground">{item.tool.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-sm font-bold text-card-foreground">{item.tool}</h3>
                      <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.reason}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link to="/tools" className="mt-6 inline-block">
            <Button variant="brand" className="gap-2">
              See Full Tool Directory <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

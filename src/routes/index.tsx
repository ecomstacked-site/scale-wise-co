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
  ArrowRight, CheckCircle2, Zap, TrendingUp, Users,
  BookOpen, FileSearch, Layers, Quote
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
      <section className="relative overflow-hidden bg-card py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-surface)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-xs font-medium tracking-wide">
            Independent Ecommerce Software Publication
          </Badge>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Discover the Best AI &amp; Growth Tools for Ecommerce
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
            We research, test, and organize tools that help dropshippers and ecommerce brands improve tracking, automate workflows, create better ads, and scale profitably.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/tools">
              <Button variant="brand" size="lg" className="gap-2 px-6">
                Explore Tools <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline" size="lg" className="px-6">Read Latest Guides</Button>
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Trusted by 2,000+ ecommerce founders &amp; operators
          </p>
        </div>
      </section>

      {/* Editorial Bar */}
      <section className="border-b border-border bg-card py-5">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-xs font-medium text-muted-foreground sm:px-6">
          <span className="flex items-center gap-1.5"><FileSearch className="h-3.5 w-3.5 text-brand" /> 50+ Tools Reviewed</span>
          <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-brand" /> Weekly Editorial Content</span>
          <span className="flex items-center gap-1.5"><Layers className="h-3.5 w-3.5 text-brand" /> 6 Coverage Categories</span>
          <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-brand" /> Independent &amp; Transparent</span>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Curated Software</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">Featured Tools</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">Hand-picked software for ecommerce growth, evaluated for real-world performance.</p>
            </div>
            <Link to="/tools" className="hidden text-sm font-medium text-brand hover:underline sm:block">
              View all tools →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">What We Cover</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">Browse by Category</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">Find the right tools for every part of your ecommerce stack</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link to="/tools" key={cat.label}>
                <Card className="group h-full transition-all duration-200 hover:shadow-md hover:border-brand/20">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                      <cat.icon className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-card-foreground">{cat.label}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{cat.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Research Tools */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Process</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">How We Research Tools</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Every tool on EcomStack goes through a structured editorial process. We don't accept paid placements or rank tools based on commission rates. Our process is designed to surface tools that genuinely help ecommerce operators.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  { step: "01", title: "Identify Real Needs", desc: "We start with the problems ecommerce operators actually face — not vendor pitches." },
                  { step: "02", title: "Hands-On Evaluation", desc: "We test each tool in real ecommerce workflows, evaluating setup, usability, and results." },
                  { step: "03", title: "Compare Alternatives", desc: "We look at the competitive landscape to understand where each tool fits and who it serves best." },
                  { step: "04", title: "Publish Honest Assessments", desc: "We write editorial-style recommendations with clear strengths, limitations, and use cases." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface font-display text-xs font-bold text-brand">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Shield, title: "Editorial Independence", desc: "Our recommendations are based on research and testing — not advertising spend. We clearly disclose affiliate relationships." },
                { icon: Eye, title: "Transparency First", desc: "We explain our methodology, show our evaluation criteria, and always note when a link is an affiliate partnership." },
                { icon: TrendingUp, title: "Operator-Focused", desc: "We evaluate tools from the perspective of someone running a store, not a software reviewer. Practical value is what matters." },
                { icon: CheckCircle2, title: "Continuous Updates", desc: "Tools change, pricing shifts, and new alternatives emerge. We revisit and update our recommendations regularly." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface">
                      <item.icon className="h-4 w-4 text-brand" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Site Helps */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Audience</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">Who This Site Helps</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            EcomStack is built for people who run online businesses and want practical, trustworthy guidance on what software to use.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Dropshippers", desc: "Building and scaling stores with the right systems" },
              { title: "Shopify Store Owners", desc: "Optimizing operations, tracking, and performance" },
              { title: "Ecommerce Founders", desc: "Looking for better tools and automation stacks" },
              { title: "Media Buyers", desc: "Improving ad tracking, attribution, and ROAS" },
              { title: "Performance Marketers", desc: "Testing new tools for content, creative, and analytics" },
              { title: "Small Business Owners", desc: "Automating workflows and growing with fewer resources" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5 text-left">
                <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Readers Trust Us */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Trust &amp; Credibility</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">Why Readers Trust EcomStack</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            We're an independent publication focused on helping ecommerce operators make better tool decisions — not a sales funnel disguised as content.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: "No Pay-to-Play", desc: "We never rank tools based on commission rates or vendor payments." },
              { icon: Eye, title: "Full Disclosure", desc: "Affiliate links are always labeled. Our process is open and transparent." },
              { icon: BookOpen, title: "Editorial Standards", desc: "Every recommendation follows a structured research and evaluation process." },
              { icon: CheckCircle2, title: "Reader-First", desc: "We prioritize what's useful for our readers over what's profitable for us." },
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
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">From the Blog</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">Latest Articles</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">Guides, strategies, and tool breakdowns for ecommerce growth</p>
            </div>
            <Link to="/blog" className="hidden text-sm font-medium text-brand hover:underline sm:block">
              View all articles →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Stack */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Starter Stack</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">The Recommended Ecommerce Stack</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">A curated set of tools we recommend for dropshippers and ecommerce brands looking to grow with better systems.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
          <Link to="/tools" className="mt-8 inline-block">
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

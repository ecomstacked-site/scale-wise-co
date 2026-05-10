import { Link } from "react-router-dom";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { ArticleCard } from "@/components/ArticleCard";
import {
  BarChart3, Bot, Eye, Search, Shield, Target,
  ArrowRight, CheckCircle2, TrendingUp,
  BookOpen, FileSearch, Layers, Sparkles
} from "lucide-react";

// ---------- Featured Guides (educational hubs) ----------
const featuredGuides = [
  {
    title: "How to Build a Product Research Workflow",
    excerpt: "A repeatable system for finding, validating, and prioritising products — the way operators actually do it.",
    href: "/blog/how-to-build-product-research-workflow",
    tag: "Product Research",
  },
  {
    title: "The Ecommerce Product Validation Framework",
    excerpt: "Move beyond gut feeling. A structured framework for validating demand, margins, and creative angles before you spend.",
    href: "/blog/product-validation-framework",
    tag: "Validation",
  },
  {
    title: "How to Analyze TikTok Ads",
    excerpt: "What to look at in a competitor's TikTok ads — hooks, pacing, retention signals, and creative angles.",
    href: "/blog/how-to-analyze-tiktok-ads",
    tag: "TikTok Research",
  },
  {
    title: "The Ecommerce Ad Creative Framework",
    excerpt: "How modern brands structure creative testing across hooks, formats, and angles — without burning budget.",
    href: "/blog/ecommerce-ad-creative-framework",
    tag: "Creative Strategy",
  },
];

// ---------- Store & Competitor Research ----------
const storeResearch = [
  {
    title: "How to Spy on Shopify Stores",
    excerpt: "The practical workflow for analysing competitor Shopify stores — themes, apps, pricing, offers, and conversion flow.",
    href: "/blog/how-to-spy-on-shopify-stores",
  },
  {
    title: "Best Shopify Spy Tools",
    excerpt: "An operator-focused breakdown of the tools used to track Shopify competitors in 2026.",
    href: "/blog/best-shopify-spy-tools",
  },
  {
    title: "Best Tools for Shopify Store Analysis",
    excerpt: "From tech stacks to conversion mapping — the tools we use to understand how a store actually works.",
    href: "/blog/best-tools-for-shopify-store-analysis",
  },
];

// ---------- Comparisons ----------
const comparisons = [
  {
    tag: "Product Research",
    title: "Minea vs WinningHunter",
    excerpt: "Two ad-research platforms with very different workflows. How to choose based on how you actually research products.",
    href: "/blog/minea-vs-winninghunter",
  },
  {
    tag: "Store Analysis",
    title: "BrandSearch vs WinningHunter",
    excerpt: "Multichannel store intelligence vs TikTok-first ad discovery — which fits which type of operator.",
    href: "/blog/brandsearch-vs-winninghunter",
  },
  {
    tag: "Tracking",
    title: "WeTracked vs Triple Whale",
    excerpt: "Server-side tracking and attribution compared on cost, accuracy, setup time, and what each is built for.",
    href: "/blog/wetracked-vs-triple-whale",
  },
];

// ---------- Topical clusters ----------
const clusters = [
  { icon: Search, label: "Product Research", desc: "Workflows, frameworks, and tools for finding products that actually work.", href: "/blog/how-to-build-product-research-workflow" },
  { icon: Layers, label: "Shopify Store Analysis", desc: "Competitor research, store intelligence, and conversion teardowns.", href: "/blog/how-to-spy-on-shopify-stores" },
  { icon: Eye, label: "TikTok Ad Research", desc: "How to analyse TikTok ads and read creative performance signals.", href: "/blog/how-to-analyze-tiktok-ads" },
  { icon: Sparkles, label: "Creative Strategy", desc: "Frameworks for structuring ad creative testing at scale.", href: "/blog/ecommerce-ad-creative-framework" },
  { icon: Target, label: "Ad Tracking", desc: "Server-side tracking, attribution, and recovering lost conversions.", href: "/tools/wetracked-review" },
  { icon: Bot, label: "AI Ecommerce Tools", desc: "AI tools for ad creative, video, and ecommerce content production.", href: "/blog/best-ai-video-tools" },
];

// ---------- Latest articles ----------
const latestArticles = [
  { title: "Best Tools for Shopify Store Analysis (2026)", excerpt: "How operators actually research competitor Shopify stores — and the tools that make it faster.", category: "Guides", date: "April 28, 2026", readTime: "18 min read", slug: "best-tools-for-shopify-store-analysis", image: "/images/shopify-store-analysis-hero.png" },
  { title: "BrandSearch vs WinningHunter (2026)", excerpt: "An operator-focused comparison of two store-intelligence platforms — and how to choose based on workflow fit.", category: "Comparisons", date: "April 22, 2026", readTime: "16 min read", slug: "brandsearch-vs-winninghunter", image: "/images/brandsearch-vs-winninghunter-hero.png" },
  { title: "The Ecommerce Ad Creative Framework", excerpt: "How modern brands structure ad creative testing without burning through budget.", category: "Creative Strategy", date: "April 15, 2026", readTime: "15 min read", slug: "ecommerce-ad-creative-framework", image: "/images/winning-creative-framework-dashboard.png" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="EcomStacked — Ecommerce Research, Workflows & Tool Reviews"
        description="An independent ecommerce publication. Product research workflows, Shopify competitor analysis, TikTok ad research, creative frameworks, and operator-focused tool reviews."
        ogTitle="EcomStacked — Ecommerce Research, Workflows & Tool Reviews"
        ogDescription="Independent guides and tool reviews for ecommerce operators — product research, store analysis, TikTok ad research, and creative strategy."
      />
      <Header />

      {/* Hero — editorial publication tone */}
      <section className="relative overflow-hidden bg-card py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-surface)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-xs font-medium tracking-wide">
            Independent Ecommerce Publication
          </Badge>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Ecommerce tools, research workflows, and growth systems for modern operators.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
            EcomStacked is an editorial resource for Shopify store owners, DTC brands, and dropshippers — focused on product research, competitor intelligence, TikTok ad analysis, creative strategy, and the tools operators actually use day to day.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/blog">
              <Button variant="brand" size="lg" className="gap-2 px-6">
                Read the Guides <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/tools">
              <Button variant="outline" size="lg" className="px-6">Browse Tool Reviews</Button>
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Independent research · No paid placements · Updated regularly
          </p>
        </div>
      </section>

      {/* Editorial bar */}
      <section className="border-y border-border bg-card py-5">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-xs font-medium text-muted-foreground sm:px-6">
          <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-brand" /> Long-form research guides</span>
          <span className="flex items-center gap-1.5"><FileSearch className="h-3.5 w-3.5 text-brand" /> Operator-tested workflows</span>
          <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-brand" /> Editorial independence</span>
          <span className="flex items-center gap-1.5"><Layers className="h-3.5 w-3.5 text-brand" /> Six topical clusters</span>
        </div>
      </section>

      {/* Featured Guides — the authority hub pages */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Featured Guides</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">Where to start</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Long-form guides that anchor each of our research clusters — built to be referenced, not skimmed.
              </p>
            </div>
            <Link to="/blog" className="hidden text-sm font-medium text-brand hover:underline sm:block">
              All guides →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {featuredGuides.map((g) => (
              <Link to={g.href} key={g.href} className="group">
                <Card className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <CardContent className="flex h-full flex-col p-6">
                    <Badge variant="secondary" className="self-start text-[10px] uppercase tracking-wider">{g.tag}</Badge>
                    <h3 className="mt-3 font-display text-lg font-bold text-foreground group-hover:text-brand">{g.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{g.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand">
                      Read the guide <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Store & Competitor Research */}
      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">Store &amp; Competitor Research</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">Understand how competing stores actually work</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              How to research competitor Shopify stores — apps, themes, offers, and the tools that make the workflow repeatable.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {storeResearch.map((p) => (
              <Link to={p.href} key={p.href} className="group">
                <Card className="h-full transition-all hover:border-brand/30 hover:shadow-sm">
                  <CardContent className="flex h-full flex-col p-6">
                    <h3 className="font-display text-base font-bold text-foreground group-hover:text-brand">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">Editorial Comparisons</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">Tool comparisons, written for operators</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Side-by-side breakdowns based on workflow fit — not feature checklists.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {comparisons.map((c) => (
              <Card key={c.href} className="flex flex-col">
                <CardContent className="flex flex-1 flex-col p-6">
                  <Badge variant="secondary" className="self-start text-xs">{c.tag}</Badge>
                  <h3 className="mt-3 font-display text-lg font-bold text-foreground">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.excerpt}</p>
                  <Link to={c.href} className="mt-5 text-sm font-medium text-brand hover:underline">
                    Read the comparison →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topical clusters */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">What We Cover</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">Browse by topic</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Each cluster is anchored by a long-form hub guide and supported by deeper articles, frameworks, and tool reviews.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clusters.map((cat) => (
              <Link to={cat.href} key={cat.label}>
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

      {/* How We Research */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Process</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">How we research and write</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Every guide and review on EcomStacked goes through a structured editorial process. We don't accept paid placements and we don't rank tools based on commission rates.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  { step: "01", title: "Identify real operator problems", desc: "We start with workflows and decisions ecommerce operators actually face — not vendor pitches." },
                  { step: "02", title: "Hands-on evaluation", desc: "We test tools and frameworks in real research, creative, and tracking workflows." },
                  { step: "03", title: "Compare alternatives honestly", desc: "We map the competitive landscape so readers can see where each tool fits — and where it doesn't." },
                  { step: "04", title: "Publish, then update", desc: "Software changes constantly. We revisit guides and reviews as workflows evolve." },
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
              <div className="mt-8">
                <Link to="/editorial-policy" className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline">
                  Read our editorial policy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Shield, title: "Editorial Independence", desc: "Our recommendations are based on research and testing — not advertising spend. Affiliate relationships are clearly disclosed." },
                { icon: Eye, title: "Transparency First", desc: "We explain our methodology, show our evaluation criteria, and label every affiliate link." },
                { icon: TrendingUp, title: "Operator-Focused", desc: "We evaluate tools and workflows from the perspective of someone running a store. Practical value is what matters." },
                { icon: CheckCircle2, title: "Continuous Updates", desc: "Tools change, pricing shifts, and new alternatives emerge. We revisit and update our content regularly." },
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

      {/* Latest Articles */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">From the Blog</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">Latest articles</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">Recently published research, frameworks, and tool breakdowns.</p>
            </div>
            <Link to="/blog" className="hidden text-sm font-medium text-brand hover:underline sm:block">
              View all articles →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Who this site helps */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Audience</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">Who EcomStacked is for</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            We write for people who run online businesses and want practical, trustworthy guidance on the workflows and software that actually move the needle.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Shopify store owners", desc: "Operators optimising tracking, research, and conversion." },
              { title: "DTC brand teams", desc: "Looking for sharper research and creative workflows." },
              { title: "Dropshipping operators", desc: "Building systems for product testing at scale." },
              { title: "Media buyers", desc: "Improving ad tracking, attribution, and creative testing." },
              { title: "Performance marketers", desc: "Evaluating tools for content, creative, and analytics." },
              { title: "Founders & solo operators", desc: "Building lean stacks without bloating the workflow." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5 text-left">
                <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
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

import { Link } from "react-router-dom";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Shield,
  TrendingUp, RefreshCw, Target, Search, BarChart3, Bot, Zap, Layers,
  Clock, Star,
} from "lucide-react";

const featuredTools = [
  {
    name: "Winning Hunter",
    badge: "🔥 Best for Product Research",
    description: "Find trending winning products, proven ads, and new opportunities faster.",
    bullets: ["Winning product database", "Competitor ad intelligence"],
    href: "/go/trendtrack",
    image: "/assets/tools/trendtrack.jpg",
    primary: true,
  },
  {
    name: "WeTracked",
    badge: "🔥 Best for Tracking",
    description: "Improve Facebook, Google, and TikTok attribution with accurate server-side tracking.",
    bullets: ["Recover lost conversions", "Better ROAS data"],
    href: "/go/wetracked",
    image: "/assets/tools/wetracked.jpg",
  },
  {
    name: "Holo AI",
    badge: "🔥 Best for Creatives",
    description: "Generate ad creatives faster so you can test more winners at scale.",
    bullets: ["Faster ad production", "Scale creative testing"],
    href: "/go/holo-ai",
    image: "/assets/tools/holo-ai.jpg",
  },
  {
    name: "Trendtrack",
    badge: "🔥 Best for Trend Discovery",
    description: "Spot fast-moving products, stores, and market opportunities early.",
    bullets: ["Product trends", "Competitor research"],
    href: "/go/trendtrack",
    image: "/assets/tools/trendtrack.jpg",
  },
];

const popularGuides = [
  { title: "Winning Hunter Alternatives", desc: "The best tools to replace Winning Hunter for product research.", slug: "best-shopify-product-research-tools", category: "Product Research" },
  { title: "Minea Review", desc: "Honest breakdown of Minea's ad spy and product research features.", slug: "trendtrack-vs-minea", category: "Ad Spy" },
  { title: "Best TikTok Ad Spy Tools", desc: "Top platforms for tracking viral TikTok creatives in 2026.", slug: "best-ad-tracking-tools-2026", category: "Ad Spy" },
  { title: "Storeleads Alternatives", desc: "Better, cheaper options for store-level competitive intel.", slug: "best-shopify-product-research-tools", category: "Research" },
];

const trustPillars = [
  { icon: Star, title: "Real operator recommendations", desc: "Picks based on stores we've actually run — not vendor pitches." },
  { icon: Shield, title: "Honest pros and cons", desc: "Every review covers limitations, not just the marketing wins." },
  { icon: Target, title: "ROI-focused picks", desc: "We rank by impact on revenue, ROAS, and operational time saved." },
  { icon: RefreshCw, title: "Constantly updated tools", desc: "Reviews and rankings refreshed as pricing and features change." },
  { icon: TrendingUp, title: "Built for ecommerce growth", desc: "Stack recommendations tuned for Shopify scale and ad efficiency." },
];

const latestArticles = [
  { title: "Best AI Tools for Dropshipping in 2026", excerpt: "Curated AI tools to automate content, ads, and store ops.", date: "April 10, 2026", readTime: "8 min read", slug: "best-ai-tools-dropshipping", image: "/assets/blog/ai-tools-dropshipping.jpg", category: "AI Tools" },
  { title: "How to Improve Ecommerce Tracking Accuracy", excerpt: "Server-side tracking and CAPI to recover lost conversions.", date: "April 8, 2026", readTime: "6 min read", slug: "improve-ecommerce-tracking", image: "/assets/blog/tracking-accuracy.jpg", category: "Tracking" },
  { title: "Best Chat Automation Tools for Shopify Stores", excerpt: "Top chat platforms turning DMs into Shopify revenue.", date: "April 5, 2026", readTime: "7 min read", slug: "chat-automation-shopify", image: "/assets/blog/chat-automation.jpg", category: "Automation" },
];

const footerCategories: { label: string; icon: typeof Search }[] = [
  { label: "Product Research Tools", icon: Search },
  { label: "Ad Spy Tools", icon: Target },
  { label: "Tracking Tools", icon: BarChart3 },
  { label: "AI Ecommerce Tools", icon: Bot },
  { label: "Shopify Growth Tools", icon: TrendingUp },
  { label: "Automation Tools", icon: Zap },
];

export default function HomePage() {
  return (
    <div className="theme-dark-premium min-h-screen bg-background">
      <SEO
        title="Best Ecommerce Tools 2026 — Curated Software for Shopify Growth | EcomStacked"
        description="Discover the best ecommerce tools for product research, ad tracking, creatives, and automation. 50+ tools reviewed and ranked by ROI for Shopify and DTC brands."
        keywords="best ecommerce tools, ecommerce software, best shopify tools, tools for ecommerce growth, ad tracking, product research"
        ogTitle="Best Ecommerce Tools 2026 — EcomStacked"
        ogDescription="Curated software for product research, ad tracking, creatives, and automation. ROI-focused picks for ecommerce brands."
      />
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="bg-radial-glow absolute inset-0" aria-hidden="true" />
        <div className="grid-pattern absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pb-28 sm:pt-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Curated software stack for ecommerce growth
          </div>
          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Find The Best Ecommerce <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand to-foreground bg-clip-text text-transparent">Tools Faster</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Curated software for product research, ad tracking, creatives, automation, and smarter growth — without wasting money on overhyped tools.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/tools">
              <Button variant="brand" size="lg" className="gap-2 px-7 shadow-lg shadow-brand/20">
                Explore Top Tools <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/blog/best-ad-tracking-tools-2026">
              <Button variant="outline" size="lg" className="border-border bg-card/40 px-7 backdrop-blur hover:bg-card">
                See Best Picks
              </Button>
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-brand" /> 50+ tools reviewed</span>
            <span className="flex items-center gap-1.5"><RefreshCw className="h-3.5 w-3.5 text-brand" /> Updated monthly</span>
            <span className="flex items-center gap-1.5"><Target className="h-3.5 w-3.5 text-brand" /> ROI-focused picks</span>
            <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-brand" /> No fluff rankings</span>
          </div>
        </div>
      </section>

      {/* FEATURED TOOLS */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Curated Software</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Tools That Actually Help <br className="hidden sm:block" />Ecommerce Brands Grow
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Hand-picked tools chosen for performance, value, and real use cases.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            {/* Primary card spans 6 cols on lg */}
            {featuredTools.map((tool, idx) => (
              <article
                key={tool.name}
                className={`premium-card group relative flex flex-col overflow-hidden rounded-2xl ${
                  tool.primary ? "lg:col-span-6 lg:row-span-2" : "lg:col-span-6"
                }`}
              >
                <div className={`relative overflow-hidden ${tool.primary ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
                  <img
                    src={tool.image}
                    alt={`${tool.name} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <Badge className="absolute left-4 top-4 border-0 bg-card/80 text-foreground backdrop-blur">
                    {tool.badge}
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className={`font-display font-bold text-foreground ${tool.primary ? "text-2xl" : "text-xl"}`}>
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
                  <ul className="mt-4 space-y-2">
                    {tool.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a href={tool.href} rel="noopener noreferrer nofollow">
                      <Button variant={tool.primary ? "brand" : "outline"} size="sm" className={`gap-1.5 ${tool.primary ? "shadow-md shadow-brand/20" : "border-border bg-card/60 hover:bg-card"}`}>
                        Learn More <ArrowUpRight className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                  </div>
                </div>
                {idx === 0 && (
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/15 blur-3xl" />
                )}
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/tools" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
              View All Tools <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* POPULAR GUIDES */}
      <section className="relative border-t border-border/60 bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Editorial</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Popular Guides</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Deep-dive comparisons and alternatives for the tools ecommerce operators search most.
              </p>
            </div>
            <Link to="/blog" className="hidden text-sm font-semibold text-brand hover:underline sm:inline-flex sm:items-center sm:gap-1.5">
              See All Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {popularGuides.map((g) => (
              <Link key={g.title} to={`/blog/${g.slug}`} className="premium-card group flex h-full flex-col rounded-2xl p-6">
                <Badge variant="secondary" className="self-start bg-card/60 text-xs font-medium text-muted-foreground">
                  {g.category}
                </Badge>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-brand">
                  {g.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Read guide <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              See All Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Trust &amp; Authority</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Sellers Use EcomStacked
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Independent research, operator perspective, and a relentless focus on what actually moves revenue.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trustPillars.map((p, i) => (
              <div
                key={p.title}
                className={`premium-card rounded-2xl p-6 ${i === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                  <p.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="border-t border-border/60 bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Latest Articles</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Fresh Insights for Ecommerce Operators
              </h2>
            </div>
            <Link to="/blog" className="hidden text-sm font-semibold text-brand hover:underline sm:inline-flex sm:items-center sm:gap-1.5">
              Visit the blog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestArticles.map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="premium-card group flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <Badge variant="secondary" className="bg-card/60 text-muted-foreground">{a.category}</Badge>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" /> {a.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-brand">
                    {a.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{a.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO FOOTER LINKS */}
      <section className="border-t border-border/60 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Browse the Stack</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              The Best Ecommerce Tools, by Category
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              From product research to automation — explore the full ecommerce software landscape.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {footerCategories.map((c) => (
              <Link
                key={c.label}
                to="/tools"
                className="group flex items-center justify-between rounded-xl border border-border bg-card/40 px-5 py-4 backdrop-blur transition-all hover:border-brand/40 hover:bg-card"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/25">
                    <c.icon className="h-4 w-4 text-brand" />
                  </span>
                  <span className="font-display text-sm font-semibold text-foreground">{c.label}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand" />
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-border bg-card/40 p-8 text-center backdrop-blur sm:p-10">
            <Layers className="h-7 w-7 text-brand" />
            <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Build your ecommerce stack with tools that actually work.
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Stop testing software in the dark. Use vetted picks ranked by real operators.
            </p>
            <Link to="/tools" className="mt-2">
              <Button variant="brand" size="lg" className="gap-2 px-7 shadow-lg shadow-brand/20">
                Explore Top Tools <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

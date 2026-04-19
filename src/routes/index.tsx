import { Link } from "react-router-dom";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Shield,
  TrendingUp, RefreshCw, Target, Search, BarChart3, Bot, Zap,
  Clock, Star, AlertTriangle, Eye, Wrench, Users,
} from "lucide-react";
import winningHunterImg from "/assets/tools/winning-hunter.jpg?url";
import wetrackedImg from "/assets/tools/wetracked.jpg?url";
import holoAiImg from "/assets/tools/holo-ai.jpg?url";
import trendtrackImg from "/assets/tools/trendtrack.jpg?url";

const heroTool = {
  name: "Winning Hunter",
  badge: "🔥 #1 Product Research Tool",
  topTag: "Most Popular Tool This Month",
  hook: "Find Winning Products BEFORE Your Competitors",
  support: "Skip the guesswork and launch products backed by real data from millions of live ads and stores.",
  bullets: ["Proven winning ads database", "Spy competitors in seconds"],
  href: "/go/trendtrack",
  image: winningHunterImg,
  cta: "Find Winning Products",
  microTrust: "Used daily by top dropshippers",
};

const sideTools = [
  {
    name: "WeTracked",
    badge: "🔥 Best for Tracking",
    hook: "Recover Lost Revenue From Broken Tracking",
    support: "Fix attribution issues and unlock real ROAS.",
    bullets: ["Accurate server-side tracking", "Better conversion visibility"],
    href: "/go/wetracked",
    image: wetrackedImg,
    cta: "Fix Tracking Now",
    microTrust: "Fix tracking in under 10 minutes",
  },
  {
    name: "Holo AI",
    badge: "🔥 Best for Creatives",
    hook: "Launch High-Converting Ads in Minutes",
    support: "Create scroll-stopping ads without a team.",
    bullets: ["AI ad generation", "Scale creatives fast"],
    href: "/go/holo-ai",
    image: holoAiImg,
    cta: "Create Ads Faster",
    microTrust: "No design skills needed",
  },
  {
    name: "Trendtrack",
    badge: "🔥 Best for Trends",
    hook: "Find Viral Products Before They Explode",
    support: "Discover trends before the market saturates.",
    bullets: ["Real-time trend tracking", "Competitor insights"],
    href: "/go/trendtrack",
    image: trendtrackImg,
    cta: "Discover Trends Early",
    microTrust: "Updated with real-time data",
  },
];

const popularGuides = [
  { title: "Winning Hunter Alternatives", hook: "Better & cheaper options that still win.", slug: "best-shopify-product-research-tools", category: "Product Research", cta: "See Alternatives" },
  { title: "Minea Review", hook: "Is it worth it? Real, no-BS breakdown.", slug: "trendtrack-vs-minea", category: "Ad Spy", cta: "Read Review" },
  { title: "Best TikTok Ad Spy Tools", hook: "Find viral ads faster than your competitors.", slug: "best-ad-tracking-tools-2026", category: "Ad Spy", cta: "Explore Tools" },
  { title: "Storeleads Alternatives", hook: "Smarter Shopify research at a fraction of the price.", slug: "best-shopify-product-research-tools", category: "Research", cta: "Compare Tools" },
];

const trustPillars = [
  { icon: Wrench, title: "We test tools ourselves", desc: "Every recommendation comes from running real Shopify stores — not press releases." },
  { icon: BarChart3, title: "We track real performance", desc: "Rankings backed by ROAS, conversion lift, and time saved on actual campaigns." },
  { icon: Shield, title: "We don't list tools we wouldn't use", desc: "If it doesn't earn a spot in our own stack, it doesn't make the cut." },
  { icon: Target, title: "We focus on ROI, not hype", desc: "No vendor pitches, no inflated reviews — only tools that pay for themselves." },
  { icon: RefreshCw, title: "Constantly updated stack", desc: "Pricing, features, and rankings refreshed monthly so you act on current data." },
];

const latestArticles = [
  { title: "Best AI Tools for Dropshipping in 2026", excerpt: "AI tools that actually move revenue — not just hype.", date: "April 10, 2026", readTime: "8 min read", slug: "best-ai-tools-dropshipping", image: "/assets/blog/ai-tools-dropshipping.jpg", category: "AI Tools" },
  { title: "How to Improve Ecommerce Tracking Accuracy", excerpt: "Server-side tracking and CAPI to recover lost conversions.", date: "April 8, 2026", readTime: "6 min read", slug: "improve-ecommerce-tracking", image: "/assets/blog/tracking-accuracy.jpg", category: "Tracking" },
  { title: "Best Chat Automation Tools for Shopify Stores", excerpt: "Turn DMs and abandoned carts into Shopify revenue.", date: "April 5, 2026", readTime: "7 min read", slug: "chat-automation-shopify", image: "/assets/blog/chat-automation.jpg", category: "Automation" },
];

const footerCategories: { label: string; icon: typeof Search }[] = [
  { label: "Product Research Tools", icon: Search },
  { label: "Ad Spy Tools", icon: Eye },
  { label: "Tracking Tools", icon: BarChart3 },
  { label: "AI Ecommerce Tools", icon: Bot },
  { label: "Shopify Growth Tools", icon: TrendingUp },
  { label: "Automation Tools", icon: Zap },
];

export default function HomePage() {
  return (
    <div className="theme-dark-premium min-h-screen bg-background">
      <SEO
        title="Best Ecommerce Tools 2026 — Stop Wasting Money on Bad Software | EcomStacked"
        description="Curated, operator-tested ecommerce tools for product research, ad tracking, creatives, and automation. Used by 1,000+ Shopify operators. Updated monthly."
        keywords="best ecommerce tools, ecommerce software, best shopify tools, product research, ad tracking, ad spy, dropshipping tools"
        ogTitle="Stop Wasting Money on Bad Ecommerce Tools — EcomStacked"
        ogDescription="We test, filter, and rank the tools that actually help Shopify brands scale faster."
      />
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="bg-radial-glow absolute inset-0" aria-hidden="true" />
        <div className="grid-pattern absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pb-24 sm:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Operator-tested ecommerce stack
          </div>
          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Stop Wasting Money on <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand to-foreground bg-clip-text text-transparent">Bad Ecommerce Tools</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We test, filter, and rank the tools that actually help Shopify brands scale faster — so you stop burning ad spend on software that doesn't deliver.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/tools">
              <Button variant="brand" size="lg" className="gap-2 px-7 shadow-lg shadow-brand/20">
                Explore Winning Tools <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/blog/best-ad-tracking-tools-2026">
              <Button variant="outline" size="lg" className="border-border bg-card/40 px-7 backdrop-blur hover:bg-card">
                See Top Picks <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-brand" /> Used by 1,000+ ecommerce operators</span>
            <span className="flex items-center gap-1.5"><RefreshCw className="h-3.5 w-3.5 text-brand" /> Updated monthly</span>
            <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-brand" /> No fluff tools</span>
          </div>
        </div>
      </section>

      {/* FEATURED TOOLS */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">The Stack</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Tools Top Shopify Operators <br className="hidden sm:block" />Are Using Right Now
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Hand-picked, battle-tested, and ranked by real performance — not vendor marketing.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            {featuredTools.map((tool, idx) => (
              <article
                key={tool.name}
                className={`premium-card group relative flex flex-col overflow-hidden rounded-2xl ${
                  tool.primary ? "lg:col-span-12 xl:col-span-12" : "lg:col-span-4"
                }`}
              >
                <div className={`relative overflow-hidden ${tool.primary ? "aspect-[16/8]" : "aspect-[16/9]"}`}>
                  <img
                    src={tool.image}
                    alt={`${tool.name} interface`}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  <Badge className="absolute left-4 top-4 border-0 bg-card/85 text-foreground backdrop-blur">
                    {tool.badge}
                  </Badge>
                </div>
                <div className={`flex flex-1 flex-col p-6 ${tool.primary ? "sm:p-8" : ""}`}>
                  <h3 className={`font-display font-bold text-foreground ${tool.primary ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                    {tool.name}
                  </h3>
                  <p className={`mt-2 leading-relaxed text-muted-foreground ${tool.primary ? "text-base sm:text-lg" : "text-sm"}`}>
                    {tool.hook}
                  </p>
                  <ul className={`mt-4 grid gap-2 ${tool.primary ? "sm:grid-cols-2" : ""}`}>
                    {tool.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a href={tool.href} rel="noopener noreferrer nofollow">
                      <Button
                        variant={tool.primary ? "brand" : "outline"}
                        size={tool.primary ? "lg" : "sm"}
                        className={`gap-1.5 ${tool.primary ? "px-6 shadow-md shadow-brand/25" : "border-border bg-card/60 hover:bg-card"}`}
                      >
                        {tool.cta} <ArrowUpRight className={tool.primary ? "h-4 w-4" : "h-3.5 w-3.5"} />
                      </Button>
                    </a>
                  </div>
                </div>
                {idx === 0 && (
                  <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
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

      {/* MONEY STRIP */}
      <section className="relative border-y border-border/60">
        <div className="bg-radial-glow absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand/15 ring-1 ring-brand/30">
              <AlertTriangle className="h-6 w-6 text-brand" />
            </div>
            <div className="flex-1">
              <p className="font-display text-xl font-bold leading-snug text-foreground sm:text-2xl">
                Most ecommerce brands waste <span className="text-brand">30–50% of ad spend</span> using the wrong tools.
              </p>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">We help you avoid that — with a stack tested on real stores.</p>
            </div>
            <Link to="/tools" className="shrink-0">
              <Button variant="brand" size="lg" className="gap-2 shadow-lg shadow-brand/20">
                See Tools That Actually Work <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* POPULAR GUIDES */}
      <section className="relative bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Editorial Picks</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Guides That Save You Money</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Deep comparisons and honest alternatives — pick the right tool the first time.
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
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{g.hook}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  {g.cta} <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Operator Authority</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Sellers Use EcomStacked
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We're operators first, publishers second. Every pick is filtered through real campaigns and real P&Ls.
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
      <section className="border-t border-border/60 bg-surface py-16 sm:py-20">
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
                className="premium-card group flex items-center justify-between rounded-xl px-5 py-4"
              >
                <span className="flex items-center gap-3 text-sm font-semibold text-foreground">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/25">
                    <c.icon className="h-4 w-4 text-brand" />
                  </span>
                  {c.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowRight, CheckCircle2, Crown, TrendingUp, Eye, Search, Zap } from "lucide-react";

const AFF = "https://trendtrack.io?fpr=stacked45";

export const Route = createFileRoute("/tools/product-research")({
  head: () => ({
    meta: [
      { title: "Best Shopify Product Research Tools 2026 — Find Winning Products" },
      { name: "description", content: "Compare the best Shopify product research tools of 2026. Spy on stores, track winning products, and pick the right tool for dropshipping or scaling ecommerce." },
      { name: "keywords", content: "shopify product research, product research tools, spy shopify stores, dropshipping tools, trendtrack, minea, dropship.io" },
      { property: "og:title", content: "Best Shopify Product Research Tools 2026" },
      { property: "og:description", content: "Find winning Shopify products before they saturate with the best research tools of 2026." },
    ],
  }),
  component: ProductResearchPage,
});

const tools = [
  {
    rank: 1,
    name: "Trendtrack",
    crown: true,
    bestFor: "Spying Shopify stores & finding winning products fast",
    why: "The most accurate Shopify spy tool with real-time revenue data, competitor ad library, and instant product launch alerts. Built for operators who need to move first.",
    pros: ["Real-time Shopify store database", "Live competitor ad library", "Revenue & sales velocity estimates", "New product launch alerts"],
    href: AFF,
    review: "/tools/trendtrack-review",
    cta: "Find Winning Products Now",
  },
  {
    rank: 2,
    name: "Minea",
    bestFor: "Cross-platform ad spying (Facebook, TikTok, Pinterest)",
    why: "Strong ad spy library across multiple ad platforms. Better for creative inspiration than store-level revenue tracking.",
    pros: ["Multi-platform ad library", "Influencer post tracking", "Decent filtering options"],
    href: AFF,
    cta: "Start Scaling Now",
  },
  {
    rank: 3,
    name: "Dropship.io",
    bestFor: "Beginners exploring product ideas",
    why: "Easy entry-level tool for browsing trending products. Less depth than Trendtrack but a solid starting point for new dropshippers.",
    pros: ["Beginner-friendly UI", "Curated product database", "Basic competitor insights"],
    href: AFF,
    cta: "Start Scaling Now",
  },
  {
    rank: 4,
    name: "Sell The Trend",
    bestFor: "AI-suggested products & all-in-one workflow",
    why: "Combines product research with AliExpress integration. Useful if you want everything in one place, but data depth lags behind dedicated spy tools.",
    pros: ["AI product suggestions", "Built-in AliExpress importer", "Profit calculator"],
    href: AFF,
    cta: "Start Scaling Now",
  },
];

function ProductResearchPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Badge variant="secondary" className="mb-4">Product Research Tools</Badge>
          <h1 className="font-display text-3xl font-extrabold text-foreground sm:text-5xl">
            Find Winning Shopify Products Before Everyone Else
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The best product research and Shopify spy tools of 2026 — ranked by how fast they help you find profitable products.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={AFF} target="_blank" rel="noopener noreferrer nofollow">
              <Button variant="brand" size="lg" className="gap-2">
                Find Winning Products Now <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
            <Link to="/tools/trendtrack-review">
              <Button variant="outline" size="lg">Read Trendtrack Review</Button>
            </Link>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">No more guessing. See what's already working.</p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-foreground">Why Product Research Decides Whether You Win</h2>
          <p className="mt-3 text-base leading-relaxed text-foreground">
            Most dropshippers don't fail because of bad ads — they fail because they pick dead products. Picking a proven winner solves 80% of the work before you spend a single dollar on Meta or TikTok.
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground">
            <strong>Most winning products get saturated within days.</strong> The right research tool doesn't just show you trending products — it shows you the stores making money <em>right now</em>, the ads they're running, and how to model the same playbook before the market catches up.
          </p>
        </div>
      </section>

      {/* Ranked tools */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-foreground text-center">The Best Product Research Tools (Ranked)</h2>
          <div className="mt-10 space-y-6">
            {tools.map((t) => (
              <Card key={t.name} className={t.crown ? "border-brand/40 shadow-md" : ""}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 font-display text-sm font-bold text-brand">
                        #{t.rank}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-xl font-bold text-foreground">{t.name}</h3>
                          {t.crown && <Crown className="h-4 w-4 text-brand" />}
                        </div>
                        <p className="text-xs text-muted-foreground">Best for: {t.bestFor}</p>
                      </div>
                    </div>
                    {t.crown && <Badge variant="default" className="bg-brand text-brand-foreground">Top Pick</Badge>}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground">{t.why}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {t.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-foreground">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" /> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <a href={t.href} target="_blank" rel="noopener noreferrer nofollow">
                      <Button variant="brand" size="sm" className="gap-1.5">
                        {t.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                    {t.review && (
                      <Link to={t.review as "/tools/trendtrack-review"}>
                        <Button variant="outline" size="sm">Read Full Review</Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-foreground">How to Choose the Right Tool</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Search, t: "If you're a beginner", d: "Start with Trendtrack. It shows you stores already making money so you can model winners." },
              { icon: TrendingUp, t: "If you're scaling", d: "Use Trendtrack + Minea together — Trendtrack for store data, Minea for creative variations." },
              { icon: Eye, t: "If you spy ads", d: "Trendtrack's ad library tells you which competitor creatives have been running longest = winning." },
            ].map((b) => (
              <Card key={b.t}>
                <CardContent className="p-5">
                  <b.icon className="h-5 w-5 text-brand" />
                  <h3 className="mt-3 font-display text-sm font-bold text-foreground">{b.t}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{b.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand/5 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <Zap className="mx-auto h-8 w-8 text-brand" />
          <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Stop Researching. Start Selling.</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Trendtrack pays for itself the moment you find one winning product. Skip the months of guessing.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={AFF} target="_blank" rel="noopener noreferrer nofollow">
              <Button variant="brand" size="lg" className="gap-2">
                Find Winning Products Now <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
            <Link to="/tools/trendtrack-review">
              <Button variant="outline" size="lg" className="gap-2">
                Read Full Review <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

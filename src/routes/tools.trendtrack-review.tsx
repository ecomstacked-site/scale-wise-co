import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CheckCircle2, XCircle, TrendingUp, Eye, Search, Zap } from "lucide-react";

const AFF = "/go/trendtrack";

export const Route = createFileRoute("/tools/trendtrack-review")({
  head: () => ({
    meta: [
      { title: "Trendtrack Review 2026 — Find Winning Shopify Products Before Everyone Else" },
      { name: "description", content: "Honest Trendtrack review: how to spy on Shopify stores, find winning products, and scale dropshipping faster. Pricing, pros, cons, and alternatives compared." },
      { property: "og:title", content: "Trendtrack Review — Find Winning Shopify Products First" },
      { property: "og:description", content: "Spy on Shopify stores, track competitors, and find winning products faster." },
    ],
  }),
  component: TrendtrackReview,
});

function CTA({ label = "Find Winning Products Now" }: { label?: string }) {
  return (
    <a href={AFF} target="_blank" rel="noopener noreferrer nofollow">
      <Button variant="brand" size="lg" className="gap-2">
        {label} <ArrowUpRight className="h-4 w-4" />
      </Button>
    </a>
  );
}

function TrendtrackReview() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Badge variant="secondary" className="mb-4">Tool Review · Editor's Pick</Badge>
          <h1 className="font-display text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Find Winning Shopify Products Before Everyone Else
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Trendtrack lets you spy on top Shopify stores, track product launches in real time, and uncover winning products before they go saturated. Here's our full hands-on review.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CTA label="Find Winning Products Now" />
            <a href={AFF} target="_blank" rel="noopener noreferrer nofollow">
              <Button variant="outline" size="lg">Spy Shopify Stores</Button>
            </a>
          </div>
        </div>
      </section>

      <article className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-10">

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">What is Trendtrack?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Trendtrack is a Shopify spy and product research platform built for dropshippers, ecommerce operators, and media buyers. It tracks millions of Shopify stores, surfaces trending products, and shows you exactly what's selling — and which ads are driving the sales.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Instead of guessing what to sell, you get to see real revenue signals from competitors: store sales estimates, top products, ad creatives, traffic sources, and product launches as they happen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Who Is It For?</h2>
            <ul className="mt-4 space-y-3">
              {[
                ["Dropshippers", "Find proven winning products before they saturate."],
                ["Ecommerce Marketers", "Reverse-engineer what's working in your niche."],
                ["Media Buyers", "Pull live ad creatives and angles from top spenders."],
                ["Shopify Brand Owners", "Benchmark competitors and spot category trends."],
              ].map(([t, d]) => (
                <li key={t} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{t}</p>
                    <p className="text-xs text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Key Benefits</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { icon: TrendingUp, t: "Find Winning Products", d: "Live feed of trending Shopify products with sales velocity data." },
                { icon: Eye, t: "Spy Competitor Ads", d: "See exactly which Facebook and TikTok ads are driving conversions." },
                { icon: Search, t: "Track Stores", d: "Monitor any Shopify store's revenue, top products, and launches." },
                { icon: Zap, t: "Move Faster", d: "Catch products in the early curve before they saturate the market." },
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
            <div className="mt-8 text-center">
              <CTA label="Start Scaling Today" />
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Real Use Case: Finding a Winning Product</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Say you want to launch in the home goods space. Open Trendtrack, filter by category and revenue range, and within minutes you'll see a list of stores doing 6 and 7 figures. Click into any store and you'll see their top-selling products, traffic sources, and the exact ads they're running.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              From there it's simple: pick a product with rising sales velocity, source it, model the ad angle, and launch. Most operators we've talked to find a testable product within a single research session — instead of weeks of guessing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Pros and Cons</h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-sm font-bold text-foreground">Pros</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Massive Shopify store database",
                    "Live ad library with creative breakdowns",
                    "Revenue and product-level estimates",
                    "Fast, modern interface",
                    "Strong filters for niche research",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-foreground">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-sm font-bold text-foreground">Cons</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Learning curve for advanced filters",
                    "Best value comes from higher-tier plans",
                    "Niche stores in tiny verticals can be limited",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-foreground">
                      <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Pricing</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Trendtrack offers flexible monthly plans. Entry tiers cover store and product tracking, while higher tiers unlock the full ad library and advanced filters. For active dropshippers, the cost is typically recovered within the first winning product. Check live pricing on their site.
            </p>
            <div className="mt-6"><CTA label="See Live Pricing" /></div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Alternatives</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="rounded-lg border border-border bg-card p-4">
                <p className="font-bold text-foreground">Minea</p>
                <p className="mt-1 text-xs text-muted-foreground">Strong ad spy across Meta, TikTok, and Pinterest. Less depth on Shopify store-level data. See our <Link to="/blog/$slug" params={{ slug: "trendtrack-vs-minea" }} className="text-brand hover:underline">Trendtrack vs Minea comparison</Link>.</p>
              </li>
              <li className="rounded-lg border border-border bg-card p-4">
                <p className="font-bold text-foreground">Dropship.io</p>
                <p className="mt-1 text-xs text-muted-foreground">Solid for store tracking but lighter on real-time ad creative data.</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Final Verdict</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              If you're serious about finding winning products and scaling a Shopify or dropshipping business, Trendtrack is the most complete combination of store spying, product research, and ad intelligence we've tested. It pays for itself the moment you find your next winner.
            </p>
            <div className="mt-8 rounded-2xl border border-brand/30 bg-brand/5 p-6 text-center">
              <h3 className="font-display text-xl font-bold text-foreground">Ready to find your next winner?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Stop guessing. Start using the same data top dropshippers rely on.</p>
              <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <CTA label="Find Winning Products Now" />
                <a href={AFF} target="_blank" rel="noopener noreferrer nofollow">
                  <Button variant="outline" size="lg">Spy Shopify Stores</Button>
                </a>
              </div>
            </div>
          </section>

          <div className="rounded-lg bg-surface p-4">
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Disclosure:</strong> Some links on this page are affiliate links. We may earn a commission at no extra cost to you. Our recommendation is based on independent testing.
            </p>
          </div>
        </div>
      </article>

      <Newsletter />
      <Footer />
    </div>
  );
}

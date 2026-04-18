import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CheckCircle2, XCircle, TrendingUp, Eye, Search, Zap, Clock, Users, DollarSign } from "lucide-react";

const AFF = "https://trendtrack.io?fpr=stacked45";

export const Route = createFileRoute("/tools/trendtrack-review")({
  head: () => ({
    meta: [
      { title: "Trendtrack Review 2026: Pricing, Features & Why Dropshippers Love It" },
      { name: "description", content: "Honest Trendtrack review for 2026. Spy Shopify stores, find winning products before they saturate, see real pricing, pros, cons, and how to use it to scale dropshipping fast." },
      { name: "keywords", content: "trendtrack review, trendtrack pricing, trendtrack dropshipping, shopify product research tool, spy shopify stores" },
      { property: "og:title", content: "Trendtrack Review 2026 — Find Winning Shopify Products First" },
      { property: "og:description", content: "Spy on Shopify stores, track competitors, and find winning products before they go saturated." },
      { property: "og:type", content: "article" },
    ],
  }),
  component: TrendtrackReview,
});

function CTABlock({ primary = "Find Winning Products Now", secondary = "Spy Shopify Stores" }: { primary?: string; secondary?: string }) {
  return (
    <div className="my-8 rounded-2xl border border-brand/30 bg-brand/5 p-6 text-center">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a href={AFF} target="_blank" rel="noopener noreferrer nofollow">
          <Button variant="brand" size="lg" className="gap-2">
            {primary} <ArrowUpRight className="h-4 w-4" />
          </Button>
        </a>
        <a href={AFF} target="_blank" rel="noopener noreferrer nofollow">
          <Button variant="outline" size="lg">{secondary}</Button>
        </a>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">No more guessing. See what's already working.</p>
    </div>
  );
}

function TrendtrackReview() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Badge variant="secondary" className="mb-4">Trendtrack Review · Updated 2026</Badge>
          <h1 className="font-display text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Stop Guessing: Find Winning Shopify Products Before Everyone Else
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Discover products already making money and scale faster with real data.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={AFF} target="_blank" rel="noopener noreferrer nofollow">
              <Button variant="brand" size="lg" className="gap-2">
                Find Winning Products Now <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
            <a href={AFF} target="_blank" rel="noopener noreferrer nofollow">
              <Button variant="outline" size="lg">Spy Shopify Stores</Button>
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">No more guessing. See what's already working.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5 text-brand" /> Used by ecommerce marketers</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-brand" /> Real-time product tracking</span>
            <span className="inline-flex items-center gap-1"><DollarSign className="h-3.5 w-3.5 text-brand" /> Pays for itself with one winner</span>
          </div>
        </div>
      </section>

      <article className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-10">

          {/* Intro */}
          <section>
            <p className="text-base leading-relaxed text-foreground">
              Most dropshippers fail for one reason: they pick the wrong product. They burn through ad budget testing dead products while someone else quietly scales the next big winner to six figures a month.
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              Here's the brutal truth — <strong>most winning products get saturated within days</strong>. By the time a product hits TikTok "viral product" lists, the early movers have already cashed out. If you're still relying on guesswork, AliExpress trending pages, or random Facebook groups, you're always going to be late.
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              That's the gap <strong>Trendtrack</strong> closes. Instead of guessing, you see exactly what's selling on Shopify right now, who's selling it, and which ads are driving the orders. This Trendtrack review breaks down the features, pricing, real use cases, and whether it's worth it for dropshipping in 2026.
            </p>
          </section>

          {/* What is Trendtrack */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">What Is Trendtrack?</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              Trendtrack is a <strong>Shopify product research tool</strong> and store spy platform built for dropshippers, ecommerce operators, and media buyers. It tracks millions of Shopify stores in real time and surfaces the products that are actually generating revenue — not just getting clicks.
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              In one dashboard you get:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Live feed of trending Shopify products with sales velocity data</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Revenue and traffic estimates for any Shopify store</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Ad library showing the exact creatives competitors are running</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> New product launch alerts the moment they go live</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Filters by niche, price, country, and revenue range</li>
            </ul>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              Think of it as having a behind-the-scenes pass to every successful Shopify store on the internet.
            </p>
          </section>

          {/* Who it's for */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Who Is Trendtrack For?</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              Trendtrack is built for anyone who makes money — or wants to — selling physical products online.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                ["Dropshippers", "Find proven winning products before they saturate. Stop testing duds with your ad spend."],
                ["Ecommerce Brand Owners", "Reverse-engineer what's working in your niche and benchmark against competitors."],
                ["Media Buyers & Agencies", "Pull live ad creatives and angles from the top spenders to model winning campaigns."],
                ["Print-on-Demand Sellers", "Spot trending designs and angles before the rest of the market catches on."],
                ["Beginners", "Skip the 6-month learning curve and start with products that are already proven sellers."],
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

          <CTABlock />

          {/* How it helps you make money */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">How Trendtrack Helps You Actually Make Money</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              Most "product research" tools dump a list of products on you and call it a day. Trendtrack is different because it shows you the <strong>full money trail</strong> — the product, the store selling it, the ads driving traffic, and the revenue it's generating.
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              Here's what that translates to in practice:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { icon: TrendingUp, t: "Skip dead products", d: "Only test products with proven sales velocity instead of burning $500 on guesses." },
                { icon: Zap, t: "Move first", d: "Catch products in the early curve before they hit saturation and CPMs explode." },
                { icon: Eye, t: "Steal winning angles", d: "See the exact ad creatives, hooks, and offers your competitors are scaling." },
                { icon: DollarSign, t: "Scale faster", d: "Model what's already working at $100K/month instead of building from zero." },
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
          </section>

          {/* Key features */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Key Features (Built for Profit, Not Vanity Metrics)</h2>

            <div className="mt-5 space-y-5">
              <div>
                <h3 className="font-display text-base font-bold text-foreground">1. Real-Time Shopify Store Spy</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  Search any Shopify store and instantly see estimated revenue, traffic sources, top products, and recent launches. Perfect for picking apart 7-figure stores in your niche.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">2. Winning Product Feed</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  A live, filterable feed of products gaining sales velocity right now. Filter by category, price range, country, and revenue tier to find your next test.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">3. Competitor Ad Library</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  Pull every Facebook and TikTok ad a competitor is running, with the creative, copy, and how long it's been live. Long-running ads = winning ads. Model accordingly.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">4. Product Launch Alerts</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  Get notified the moment a tracked store launches a new product. Be first to test, first to scale, first to cash out before saturation kicks in.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">5. Advanced Niche Filters</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  Drill into hyper-specific niches — beauty, pet, home, fitness, gadgets — and find under-the-radar winners that haven't been touched by the masses yet.
                </p>
              </div>
            </div>
          </section>

          <CTABlock primary="Start Scaling Today" />

          {/* Real use case */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Real Use Case: Finding a Winning Product in Under 30 Minutes</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              Here's the exact workflow most operators use to find a testable winner in a single research session:
            </p>
            <ol className="mt-4 space-y-3 text-sm text-foreground">
              <li className="rounded-lg border border-border bg-card p-4">
                <p className="font-bold">Step 1 — Pick a niche</p>
                <p className="mt-1 text-muted-foreground">Open Trendtrack and filter by a category you understand (e.g. home goods, pet, fitness). Set revenue filter to $50K+/month.</p>
              </li>
              <li className="rounded-lg border border-border bg-card p-4">
                <p className="font-bold">Step 2 — Identify rising stores</p>
                <p className="mt-1 text-muted-foreground">Sort by growth and find stores that are climbing fast — those are the early winners before everyone copies them.</p>
              </li>
              <li className="rounded-lg border border-border bg-card p-4">
                <p className="font-bold">Step 3 — Spy their top product</p>
                <p className="mt-1 text-muted-foreground">Click into the store, view their top-selling product, and check sales velocity over the last 30 days.</p>
              </li>
              <li className="rounded-lg border border-border bg-card p-4">
                <p className="font-bold">Step 4 — Pull their ads</p>
                <p className="mt-1 text-muted-foreground">Open the ad library, look at their longest-running creative. That's the proven hook you should model.</p>
              </li>
              <li className="rounded-lg border border-border bg-card p-4">
                <p className="font-bold">Step 5 — Source and launch</p>
                <p className="mt-1 text-muted-foreground">Source the product from AliExpress or a private supplier, build a clean product page, launch with the modeled angle, and scale what converts.</p>
              </li>
            </ol>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              That's it. No guessing, no $1,000 testing budgets to "see what sticks." You're starting with proof.
            </p>
          </section>

          {/* Pros & Cons */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Trendtrack Pros and Cons</h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-sm font-bold text-foreground">Pros</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Massive Shopify store database updated in real time",
                    "Live ad library with creative breakdowns and run time",
                    "Accurate revenue and product-level sales estimates",
                    "Fast, modern interface — easy to navigate",
                    "Powerful filters for niche-level research",
                    "Product launch alerts for first-mover advantage",
                    "Works across all major dropshipping geos",
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
                    "Slight learning curve to master advanced filters",
                    "Best value sits in higher-tier plans",
                    "Tiny micro-niches can have limited store coverage",
                    "Not ideal if you're not actively running ads",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-foreground">
                      <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Trendtrack Pricing</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              Trendtrack runs flexible monthly plans designed to scale with your operation:
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              <li className="rounded-lg border border-border bg-card p-4">
                <p className="font-bold">Starter tier</p>
                <p className="mt-1 text-muted-foreground">Core store and product tracking. Perfect for beginners validating their first niche.</p>
              </li>
              <li className="rounded-lg border border-border bg-card p-4">
                <p className="font-bold">Growth tier</p>
                <p className="mt-1 text-muted-foreground">Full ad library access, advanced filters, and product launch alerts. The sweet spot for active dropshippers.</p>
              </li>
              <li className="rounded-lg border border-border bg-card p-4">
                <p className="font-bold">Pro / Agency tier</p>
                <p className="mt-1 text-muted-foreground">Higher limits, multi-user access, and deeper data exports. Built for teams and agencies.</p>
              </li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              For active dropshippers, the cost is typically recovered <strong>within the first winning product</strong>. One $30/day winner pays for the tool many times over. Check the live pricing page for current rates and any active promos.
            </p>
            <CTABlock primary="See Live Pricing" secondary="Start Scaling Today" />
          </section>

          {/* Alternatives */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Trendtrack vs Alternatives</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              The two tools most often compared to Trendtrack are Minea and Dropship.io. Here's the honest breakdown:
            </p>

            <div className="mt-5 overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-xs">
                <thead className="bg-card">
                  <tr>
                    <th className="p-3 font-bold text-foreground">Feature</th>
                    <th className="p-3 font-bold text-foreground">Trendtrack</th>
                    <th className="p-3 font-bold text-foreground">Minea</th>
                    <th className="p-3 font-bold text-foreground">Dropship.io</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-t border-border">
                    <td className="p-3 font-medium text-foreground">Shopify store data</td>
                    <td className="p-3">Excellent</td>
                    <td className="p-3">Limited</td>
                    <td className="p-3">Good</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3 font-medium text-foreground">Ad library</td>
                    <td className="p-3">Strong (FB + TikTok)</td>
                    <td className="p-3">Excellent (multi-platform)</td>
                    <td className="p-3">Basic</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3 font-medium text-foreground">Real-time launches</td>
                    <td className="p-3">Yes</td>
                    <td className="p-3">Partial</td>
                    <td className="p-3">No</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3 font-medium text-foreground">Best for</td>
                    <td className="p-3">Scaling dropshippers</td>
                    <td className="p-3">Ad creative research</td>
                    <td className="p-3">Beginner spy</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground">
              Read our full <Link to="/blog/trendtrack-vs-minea" className="font-semibold text-brand hover:underline">Trendtrack vs Minea comparison</Link> for the deep breakdown, or check the <Link to="/blog/best-shopify-product-research-tools" className="font-semibold text-brand hover:underline">best Shopify product research tools roundup</Link>.
            </p>
          </section>

          {/* Final verdict */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">Final Verdict: Is Trendtrack Worth It?</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              Short answer: <strong>yes — if you're serious about making money with ecommerce.</strong>
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              Trendtrack is the most complete combination of Shopify store spy, product research, and ad intelligence we've tested in 2026. It removes the single biggest reason dropshippers fail — picking the wrong product — and replaces it with cold, hard sales data.
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              If you're testing products without it, you're competing blindfolded against operators who can see exactly what's working. That's not a fight you win. The tool pays for itself the moment you find your next winner — and most users find a testable product in their first session.
            </p>

            <div className="mt-8 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-brand/5 p-6 text-center">
              <h3 className="font-display text-xl font-bold text-foreground">Ready to find your next winner?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Stop guessing. Start using the same data top dropshippers rely on.</p>
              <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a href={AFF} target="_blank" rel="noopener noreferrer nofollow">
                  <Button variant="brand" size="lg" className="gap-2">
                    Find Winning Products Now <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href={AFF} target="_blank" rel="noopener noreferrer nofollow">
                  <Button variant="outline" size="lg">Start Scaling Today</Button>
                </a>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">No more guessing. See what's already working.</p>
            </div>
          </section>

          <div className="rounded-lg bg-surface p-4">
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Disclosure:</strong> Some links on this page are affiliate links. We may earn a commission at no extra cost to you. Our recommendation is based on independent testing and real operator feedback.
            </p>
          </div>
        </div>
      </article>

      <Newsletter />
      <Footer />
    </div>
  );
}

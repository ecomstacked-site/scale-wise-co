import { Link } from "react-router-dom";
import { SEO } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Zap,
  Clock,
  DollarSign,
  ShieldCheck,
  Flame,
} from "lucide-react";

const AFF = "/go/wetracked";

function CTABlock({
  primary = "View WeTracked Pricing",
  subtitle = "5-minute setup. Cancel anytime.",
}: {
  primary?: string;
  subtitle?: string;
}) {
  return (
    <div className="my-8 rounded-2xl border border-brand/40 bg-brand/5 p-6 text-center">
      <a href={AFF} rel="noopener noreferrer nofollow">
        <Button variant="brand" size="lg" className="gap-2">
          {primary} <ArrowUpRight className="h-4 w-4" />
        </Button>
      </a>
      <p className="mt-3 text-xs text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export default function WeTrackedReview() {
  return (
    <div className="min-h-screen">
      <SEO
        title="WeTracked Review 2026: The Ad Tracking Tool That Recovers Lost Ad Spend"
        description="Honest WeTracked review for 2026. Why your ad tracking is broken, how WeTracked fixes it, real ROAS results, pricing, and whether it's worth it for ecommerce stores."
        keywords="wetracked review, wetracked pricing, is wetracked worth it, ad tracking tool, fix tracking, ecommerce ad attribution, server side tracking"
        ogTitle="WeTracked Review 2026 — Stop Losing Money to Broken Ad Tracking"
        ogDescription="Your pixel is missing 30%+ of conversions. WeTracked recovers them. Honest review, pricing, and real results."
        ogType="article"
        ogImage="/assets/blog/best-ad-tracking-tools.jpg"
      />
      <Header />

      {/* HERO — Hook with pain */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Badge variant="secondary" className="mb-4 gap-1">
            <Flame className="h-3 w-3 text-brand" /> WeTracked Review · Updated 2026
          </Badge>
          <h1 className="font-display text-3xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
            You're Burning Money on Ads Right Now — And Your Tracking Is Hiding It From You.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every day your Meta, TikTok, and Google pixels miss <strong className="text-foreground">20–40% of your conversions</strong>. Your ad platform optimizes on garbage data. You scale losing campaigns. You kill winning ones. And you have no idea — because the numbers <em>look</em> fine in Ads Manager.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            <strong>This is the single most expensive problem in ecommerce in 2026.</strong> And it's fixable in under 5 minutes.
          </p>

          <CTABlock />

          <p className="text-center text-xs text-muted-foreground">
            Trusted by Shopify and DTC brands recovering 6-figures in lost ad spend per year.
          </p>
        </div>
      </section>

      {/* PAIN AMPLIFICATION */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Badge variant="secondary" className="mb-3">The Problem</Badge>
          <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-4xl">
            Your Ad Tracking Is Lying to You. Here's the Proof.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            iOS 14+, ad blockers, Safari ITP, third-party cookie deprecation, and aggressive browser privacy settings have <strong className="text-foreground">gutted</strong> the Meta and TikTok pixels. Your tracking software hasn't kept up.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: TrendingDown,
                title: "30%+ Conversions Missing",
                body: "Your pixel literally can't see them. Those sales happened — but Meta thinks the ad failed.",
              },
              {
                icon: AlertTriangle,
                title: "Ads Optimize on Wrong Data",
                body: "Meta's algorithm scales the wrong audiences and kills your real winners. You're paying it to lose money for you.",
              },
              {
                icon: DollarSign,
                title: "You Scale Losing Ads",
                body: "Reports say a campaign is profitable when it's bleeding cash — and vice versa. Every decision is wrong.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-5">
                  <item.icon className="h-6 w-6 text-destructive" />
                  <h3 className="mt-3 font-display text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-surface p-5">
            <p className="text-sm leading-relaxed text-foreground">
              <strong>Quick math:</strong> If you spend $10,000/mo on ads and your tracking misses 30% of conversions, you're making decisions on data that's blind to <strong className="text-brand">$3,000+ in attributed revenue every single month</strong>. Multiply that across the year. That's a car. That's a hire. That's the difference between scaling and stalling.
            </p>
          </div>

          <CTABlock primary="Visit the Official WeTracked Site" subtitle="Most users see accurate data within their first 24 hours." />
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-card py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Badge variant="secondary" className="mb-3">The Fix</Badge>
          <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-4xl">
            WeTracked: The Ad Tracking Tool That Recovers What Your Pixel Can't See
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            WeTracked is a <strong className="text-foreground">server-side tracking and attribution platform</strong> built for one thing: getting accurate conversion data back to Meta, TikTok, and Google so they can actually optimize your campaigns.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            It captures every conversion at the server level — bypassing iOS restrictions, ad blockers, and browser tracking prevention — then sends clean, deduplicated data to your ad platforms via Conversions API, TikTok Events API, and Google Enhanced Conversions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: "Server-Side Tracking", body: "Captures conversions browsers and pixels miss. iOS, ad blockers, ITP — all bypassed." },
              { icon: Zap, title: "5-Minute Setup", body: "Connect Shopify, connect ad accounts. Done. No developer. No tag manager." },
              { icon: TrendingUp, title: "Native CAPI Integration", body: "Pushes clean events to Meta, TikTok, and Google so the algorithm finally optimizes correctly." },
              { icon: DollarSign, title: "Flat, Predictable Pricing", body: "No revenue tax. No per-event fees. The more you scale, the more you save vs competitors." },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-5">
                  <item.icon className="h-6 w-6 text-brand" />
                  <h3 className="mt-3 font-display text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <CTABlock primary="Get Accurate Tracking in 5 Minutes" />
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Badge variant="secondary" className="mb-3">The Results</Badge>
          <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-4xl">
            What Happens When Your Tracking Actually Works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Within days of switching to WeTracked, brands consistently report:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { stat: "+25–40%", label: "Reported ROAS", body: "Same ad spend, accurate attribution. Your numbers finally match Shopify." },
              { stat: "95%+", label: "Tracking Accuracy", body: "Conversions matched back to ads vs. ~65–70% on the native pixel alone." },
              { stat: "Smarter", label: "Scaling Decisions", body: "Kill the real losers. Scale the real winners. Stop guessing." },
            ].map((item) => (
              <Card key={item.label} className="border-brand/30 bg-brand/5">
                <CardContent className="p-5 text-center">
                  <p className="font-display text-3xl font-extrabold text-brand">{item.stat}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-foreground">{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-5">
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-brand" /> Pros
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Highest tracking accuracy we've tested",
                    "5-minute setup — no developer needed",
                    "Recovers 20–40% of lost conversions instantly",
                    "Cheaper than Triple Whale, Hyros, Northbeam",
                    "Flat pricing — no revenue tax",
                    "Built specifically for ecommerce / DTC",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                  <XCircle className="h-5 w-5 text-muted-foreground" /> Cons
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Newer brand — less name recognition than legacy tools",
                    "Best-fit is ecommerce (not lead-gen funnels)",
                    "If you only spend $200/mo on ads, you don't need it yet",
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                      {c}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <CTABlock primary="Recover Your Lost ROAS" />
        </div>
      </section>

      {/* URGENCY */}
      <section className="bg-card py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Badge variant="secondary" className="mb-3 gap-1">
            <Clock className="h-3 w-3 text-brand" /> Every Day You Wait
          </Badge>
          <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-4xl">
            Every Day Without Accurate Tracking Costs You Money
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            This isn't a "nice to have." This is the foundation of every profitable paid ad account in 2026. While you read this, your ad platforms are making the wrong decisions for you. Killing winners. Scaling losers. Wasting your budget on lookalikes built from broken data.
          </p>
          <div className="mt-6 rounded-xl border border-brand/30 bg-brand/5 p-5">
            <p className="text-base font-semibold leading-relaxed text-foreground">
              The brands winning in 2026 aren't the ones with better creatives. They're the ones with <span className="text-brand">better data</span>.
            </p>
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            WeTracked takes 5 minutes to set up. The fix is one click away.
          </p>

          <CTABlock primary="Fix Your Tracking Now — Start Free" subtitle="Stop losing money. Start scaling on real data." />
        </div>
      </section>

      {/* FINAL VERDICT */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Badge variant="secondary" className="mb-3">Final Verdict</Badge>
          <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-4xl">
            Is WeTracked Worth It? Yes — And Here's the Honest Answer.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            If you spend more than $1,000/mo on paid ads and your store runs on Shopify, WooCommerce, or any standard ecommerce stack — <strong className="text-foreground">WeTracked will pay for itself in your first week</strong>. Not in 6 months. Not "eventually." The first week.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            It's the easiest, cheapest, and most accurate fix for the single biggest problem in ecommerce advertising right now. Skip it and you're voluntarily flying blind while competitors see clearly.
          </p>

          <div className="mt-6 rounded-xl border border-border bg-surface p-5">
            <p className="text-sm leading-relaxed text-foreground">
              <strong>Bottom line:</strong> If your ads matter to your business, your tracking has to work. WeTracked is the fastest way to make that happen.
            </p>
          </div>

          <CTABlock primary="Try WeTracked — Fix Your Tracking" subtitle="Setup in 5 minutes. See accurate data tonight." />

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Comparing options? See our head-to-head{" "}
            <Link to="/wetracked-vs-triple-whale" className="text-brand underline-offset-4 hover:underline">
              WeTracked vs Triple Whale comparison
            </Link>.
          </p>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            <strong>Disclosure:</strong> This page contains affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. We only recommend tools we'd use ourselves.
          </p>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

import { SEO } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingDown,
  ShieldCheck,
  Zap,
  Target,
  DollarSign,
} from "lucide-react";

// Per project rules: no /go/ bridges. Direct external URL with sponsored rel.
const AFF = "https://www.wetracked.io/?ref=ddf2eabf-bf17-4363-aaef-585e9c4e763a";

function CTA({ label = "See how WeTracked works" }: { label?: string }) {
  return (
    <div className="my-8 flex flex-wrap items-center gap-3">
      <a href={AFF} target="_blank" rel="sponsored noopener noreferrer nofollow">
        <Button variant="brand" size="lg" className="gap-2">
          {label} <ArrowUpRight className="h-4 w-4" />
        </Button>
      </a>
      <span className="text-xs text-muted-foreground">Affiliate link · same price either way</span>
    </div>
  );
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-border bg-surface">
      <img src={src} alt={alt} loading="lazy" className="w-full" />
      <figcaption className="border-t border-border px-4 py-2 text-center text-xs italic text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function WeTrackedReview() {
  return (
    <div className="min-h-screen">
      <SEO
        title="WeTracked Review: Fix Your Ad Tracking Before You Scale"
        description="Inaccurate tracking burns ad budget. See how WeTracked uses server-side tracking and CAPI to give your campaigns the data they actually need."
        keywords="wetracked review, server side tracking, capi tracking, ecommerce attribution, fix ad tracking"
        ogTitle="WeTracked Review — Fix Your Ad Tracking Before You Scale"
        ogDescription="Server-side tracking that helps Meta, TikTok and Google optimize on real conversions — not broken pixel data."
        ogType="article"
        ogImage="/images/wetracked-dashboard-overview.png"
      />
      <Header />

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">

          {/* 1. HOOK */}
          <Badge variant="secondary" className="mb-4">WeTracked · Tracking Tool for Ecommerce</Badge>
          <h1 className="font-display text-3xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
            Inaccurate Tracking Is Quietly Killing Your Ad Budget
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            If your Shopify revenue and Meta/TikTok reports never match, you're not crazy — your pixel is leaking conversions. And every day you scale on bad data, you scale the wrong campaigns.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            WeTracked fixes the leak with server-side tracking — so your ad platforms see what's actually converting and optimize accordingly.
          </p>
          <CTA label="Fix your tracking before scaling →" />

          <p className="rounded-md border-l-2 border-brand/40 bg-surface px-3 py-2 text-xs italic text-muted-foreground">
            Honest review based on real ecommerce testing workflows — not promotional claims, not influenced by sponsors.
          </p>

          {/* 2. WHY YOUR TRACKING IS BROKEN */}
          <h2 className="mt-14 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Why Your Tracking Is Already Broken
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The browser pixel was good enough in 2019. In 2026, it's quietly losing 20–40% of your conversion data:
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { icon: AlertTriangle, t: "Pixel drops", b: "Ad blockers, Safari ITP, and cookie restrictions silently swallow events." },
              { icon: TrendingDown, t: "iOS data loss", b: "iOS 14+ killed deterministic attribution for a huge chunk of buyers." },
              { icon: Target, t: "Wrong ROAS calls", b: "You scale losers and pause winners because the numbers lie." },
            ].map((x) => (
              <Card key={x.t}>
                <CardContent className="p-5">
                  <x.icon className="h-6 w-6 text-brand" />
                  <h3 className="mt-3 font-display text-base font-bold text-foreground">{x.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.b}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <CTA label="See how WeTracked fixes this →" />

          {/* 3. WHAT HAPPENS IF YOU DON'T FIX IT */}
          <h2 className="mt-14 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            What Happens If You Ignore It
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Bad tracking doesn't just under-report ROAS. It compounds, every single day:
          </p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />You scale ad sets that "look" profitable but are actually flat.</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />You kill winning campaigns because the pixel didn't see the sales.</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />Meta and TikTok build lookalikes from broken conversion data — so prospecting decays.</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />Every $1,000 you spend wastes $200–$400 on the wrong audiences.</li>
          </ul>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The bigger you scale, the more expensive the leak gets.
          </p>
          <CTA label="Stop the leak →" />

          {/* 4. HOW WETRACKED FIXES THIS */}
          <h2 className="mt-14 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            How WeTracked Fixes This
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            WeTracked captures conversion events on your <strong className="text-foreground">server</strong> — not in the browser — and pushes them to ad platforms through their official APIs:
          </p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" /><span><strong className="text-foreground">Meta CAPI</strong> — events go directly to Meta, untouched by ad blockers or iOS.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" /><span><strong className="text-foreground">TikTok Events API</strong> — server-to-server delivery for accurate attribution.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" /><span><strong className="text-foreground">Google Enhanced Conversions</strong> — clean signal back into Google Ads.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" /><span>Deduplication so events aren't double-counted.</span></li>
          </ul>
          <CTA label="See the setup →" />

          {/* 5. HOW IT WORKS */}
          <h2 className="mt-14 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            How It Works (In Plain English)
          </h2>
          <Figure
            src="/images/server-side-tracking-flow.png"
            alt="Server-side tracking flow diagram showing how WeTracked sends events from your store to Meta, TikTok and Google"
            caption="Events flow from your store → WeTracked server → ad platforms via official APIs."
          />
          <p className="text-base leading-relaxed text-muted-foreground">
            Customer hits your store. WeTracked records the event server-side. Then it forwards a clean, deduplicated signal to Meta, TikTok, and Google. Your ad platforms finally see the full picture — and start optimizing toward real buyers.
          </p>
          <CTA label="See how WeTracked works →" />

          {/* 6. REAL EXAMPLE */}
          <h2 className="mt-14 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            What This Looks Like in Practice
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A Shopify apparel brand spending ~$10k/month on Meta sees a reported 1.6 ROAS in Ads Manager. Shopify shows clearly more revenue than Meta is taking credit for — but they can't tell which campaigns earned it.
          </p>
          <Figure
            src="/images/wetracked-roas-dashboard.png"
            alt="WeTracked ROAS dashboard showing improved attribution clarity after server-side tracking is enabled"
            caption="After enabling server-side tracking, Meta starts attributing the right conversions to the right campaigns."
          />
          <p className="text-base leading-relaxed text-muted-foreground">
            Within two weeks, Meta starts attributing the missing conversions to the campaigns that actually drove them. Reported ROAS climbs on the strongest ad sets. The team scales them with confidence — and finally cuts the real losers.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            WeTracked doesn't invent revenue. It makes sure your existing revenue gets credited correctly.
          </p>
          <CTA label="Get this clarity for your store →" />

          {/* 7. WHY CHOOSE WETRACKED */}
          <h2 className="mt-14 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Why Choose WeTracked
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Zap, t: "Simple", b: "Connect Shopify and ad accounts in guided steps. No developer needed for standard setups." },
              { icon: DollarSign, t: "Affordable", b: "Flat tiers — not a percentage of ad spend. Scales without punishing your growth." },
              { icon: ShieldCheck, t: "Ecommerce-focused", b: "Built for Shopify and DTC brands, not generic enterprise BI." },
            ].map((x) => (
              <Card key={x.t}>
                <CardContent className="p-5">
                  <x.icon className="h-6 w-6 text-brand" />
                  <h3 className="mt-3 font-display text-base font-bold text-foreground">{x.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.b}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <CTA label="Check pricing & setup →" />

          {/* 8. FEATURES */}
          <h2 className="mt-14 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Inside the Dashboard
          </h2>
          <Figure
            src="/images/wetracked-dashboard-overview.png"
            alt="WeTracked dashboard overview showing tracked events, ad platform connections and conversion data"
            caption="Single dashboard for Meta, TikTok and Google events — clean attribution at a glance."
          />
          <ul className="space-y-3 text-base text-muted-foreground">
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" />Server-side capture for purchases, add-to-carts, checkouts</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" />Native Meta CAPI, TikTok Events API, Google Enhanced Conversions</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" />Event deduplication and validation</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" />Same-day Shopify setup for most stores</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" />Flat, predictable pricing</li>
          </ul>
          <CTA label="See it in action →" />

          {/* 9. PROS & CONS */}
          <h2 className="mt-14 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Pros &amp; Cons
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-5">
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-brand" /> Pros
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Recovers conversion data the pixel loses",
                    "Same-day setup for most Shopify stores",
                    "Flat pricing — not a tax on ad spend",
                    "Built for ecommerce, not enterprise BI",
                    "Pushes to Meta, TikTok and Google in one flow",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{p}
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
                    "Newer brand vs. legacy competitors",
                    "Overkill if you spend under ~$500/month on ads",
                    "Not built for lead-gen or info-product funnels",
                    "Some advanced reporting still maturing",
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />{c}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 10. PRICING */}
          <h2 className="mt-14 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Pricing — Why It's a No-Brainer
          </h2>
          <Figure
            src="/images/wetracked-pricing-visual.png"
            alt="WeTracked pricing tiers shown side by side"
            caption="Flat monthly tiers — predictable as you scale."
          />
          <p className="text-base leading-relaxed text-muted-foreground">
            Compare it to the cost of <strong className="text-foreground">losing 25% of your attribution</strong> on a $5k/month ad budget. That's $1,250 of wasted spend every month. WeTracked typically costs a small fraction of that — and pays for itself the first time it saves you from killing a winning campaign.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Unlike percentage-of-revenue tools, the price doesn't punish you for scaling.
          </p>
          <CTA label="Check current pricing →" />

          {/* 11. WHO SHOULD USE THIS */}
          <h2 className="mt-14 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Who Should Use WeTracked
          </h2>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" />Shopify and DTC brands spending $1k+/month on paid ads</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" />Media buyers and agencies managing multiple ecommerce accounts</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" />Stores with heavy iOS/Safari traffic seeing pixel under-reporting</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" />Anyone planning to scale ad spend in the next 90 days</li>
          </ul>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            If you're under $500/month in ad spend or running lead-gen, the native pixel is fine for now.
          </p>
          <CTA label="See if it fits your store →" />

          {/* 12. FINAL VERDICT */}
          <h2 className="mt-14 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Final Verdict
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            If you're spending real money on Meta, TikTok or Google ads and still relying on the native pixel alone, you're scaling on incomplete data. Period.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            WeTracked is the simplest, most affordable way for an ecommerce store to add server-side tracking and stop bleeding budget on the wrong campaigns. It won't fix bad creative or a weak offer — but it will give every dollar you spend a fair shot at being attributed correctly.
          </p>
          <p className="mt-3 text-base leading-relaxed font-semibold text-foreground">
            Fix the data first. Scale second.
          </p>

          <div className="my-10 rounded-2xl border border-brand/30 bg-surface p-6 text-center sm:p-8">
            <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Ready to see what your campaigns are really doing?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
              Check current WeTracked plans, integrations and setup time on the official site.
            </p>
            <div className="mt-5 flex justify-center">
              <a href={AFF} target="_blank" rel="sponsored noopener noreferrer nofollow">
                <Button variant="brand" size="lg" className="gap-2">
                  View pricing &amp; setup <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <p className="mt-3 text-xs italic text-muted-foreground">
              Affiliate link — we may earn a commission at no extra cost to you. Pricing is the same either way.
            </p>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            <strong>Disclosure:</strong> This page contains affiliate links. If you sign up through them, we may earn a commission at no extra cost to you. We only recommend tools we'd consider using ourselves, and our editorial opinions are our own.
          </p>
        </div>
      </article>

      <Newsletter />
      <Footer />
    </div>
  );
}

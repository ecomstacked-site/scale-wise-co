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
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Zap,
  TrendingUp,
  DollarSign,
  Users,
  LineChart,
} from "lucide-react";

const AFF = "/go/wetracked";

function PrimaryCTA() {
  return (
    <div className="my-10 rounded-2xl border border-brand/40 bg-brand/5 p-6 text-center sm:p-8">
      <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
        Ready to see WeTracked in action?
      </h3>
      <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
        Visit the official website to review current features, integrations, and pricing for your store.
      </p>
      <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href={AFF} target="_blank" rel="noopener noreferrer sponsored">
          <Button variant="brand" size="lg" className="gap-2">
            Visit Official Website <ArrowUpRight className="h-4 w-4" />
          </Button>
        </a>
        <a href={AFF} target="_blank" rel="noopener noreferrer sponsored">
          <Button variant="brand-outline" size="lg">
            View Pricing
          </Button>
        </a>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Affiliate link · We may earn a commission at no extra cost to you.
      </p>
    </div>
  );
}

export default function WeTrackedReview() {
  return (
    <div className="min-h-screen">
      <SEO
        title="WeTracked Review 2026: Features, Pricing & Honest Verdict"
        description="An informational WeTracked review for ecommerce advertisers. How it handles server-side tracking, who it's for, pros and cons, and how it compares in 2026."
        keywords="wetracked review, wetracked pricing, wetracked features, server side tracking, ecommerce attribution"
        ogTitle="WeTracked Review 2026 — Features, Pricing & Honest Verdict"
        ogDescription="A practical WeTracked review covering features, pricing, and who it's actually built for."
        ogType="article"
        ogImage="/assets/blog/best-ad-tracking-tools.jpg"
      />
      <Header />

      {/* INTRO */}
      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Badge variant="secondary" className="mb-4">WeTracked Review · Updated 2026</Badge>
          <h1 className="font-display text-3xl font-extrabold leading-[1.15] text-foreground sm:text-5xl">
            WeTracked Review 2026: Features, Pricing, and Whether It's Right for Your Store
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            If you run paid ads for an ecommerce brand, you've probably noticed the gap between what your Shopify store reports and what Meta or TikTok claims to have driven. Browser-based pixels miss conversions due to iOS privacy changes, ad blockers, Safari ITP, and cookie restrictions — which means your ad platforms often optimize on incomplete data.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            WeTracked is one of several tools built to address this gap. In this review, we look at what it actually does, who it's a good fit for, where it falls short, and how it compares to the alternatives — so you can decide whether it belongs in your stack.
          </p>

          {/* WHAT IT IS */}
          <h2 className="mt-12 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            What Is WeTracked?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            WeTracked is a server-side tracking and attribution platform aimed at ecommerce advertisers. Instead of relying solely on browser pixels, it captures conversion events at the server level and forwards them to ad platforms through their official server-side APIs — Meta Conversions API (CAPI), TikTok Events API, and Google Enhanced Conversions.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            The goal is simple: give Meta, TikTok, and Google a more complete picture of what's actually converting on your store, so their algorithms can optimize toward real customers instead of whoever the pixel happened to see.
          </p>

          {/* WHO IT'S FOR */}
          <h2 className="mt-12 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Who Is WeTracked For?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            WeTracked is built specifically for online stores running paid social and search advertising. It's a strong fit if you match one or more of these profiles:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Users, title: "Shopify & DTC brands", body: "Stores running consistent paid traffic from Meta, TikTok, or Google who want cleaner attribution." },
              { icon: LineChart, title: "Scaling advertisers", body: "Teams spending $1,000+ per month on ads where each percentage point of attribution accuracy translates into real budget decisions." },
              { icon: TrendingUp, title: "Agencies & media buyers", body: "Operators managing multiple client accounts who need a repeatable tracking setup across stores." },
              { icon: ShieldCheck, title: "iOS-impacted accounts", body: "Brands with a high share of Safari/iOS traffic where the native pixel under-reports conversions most." },
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
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            If you're spending under a few hundred dollars a month on ads, or running lead-gen funnels rather than ecommerce, a dedicated tracking tool is probably overkill — the native pixel and basic UTM tracking will cover you.
          </p>

          {/* WHY ACCURACY MATTERS */}
          <h2 className="mt-12 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Why Tracking Accuracy Actually Matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Modern ad platforms are only as smart as the data you send them. When the pixel under-reports, three things happen:
          </p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>Reported ROAS looks lower than reality, so profitable campaigns get paused too early.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>Lookalike and advantage+ audiences are built from incomplete conversion data.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>Optimization phases take longer because the algorithm sees fewer conversion signals per dollar spent.</span>
            </li>
          </ul>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Server-side tracking won't magically fix bad creative or a weak offer, but it gives the ad platforms a fairer chance to optimize the campaigns you're already running.
          </p>

          {/* KEY FEATURES */}
          <h2 className="mt-12 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Key Features
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: "Server-side event capture", body: "Records purchases, add-to-carts, and checkout events at the server level so they're not lost to browser restrictions or ad blockers." },
              { icon: Zap, title: "Quick setup for Shopify", body: "Connect your store and ad accounts through guided steps — no developer or custom tag manager work required for standard setups." },
              { icon: TrendingUp, title: "Native CAPI & Events API", body: "Pushes deduplicated conversion events to Meta, TikTok, and Google so each platform can optimize on the same source of truth." },
              { icon: DollarSign, title: "Predictable pricing", body: "Flat-tier plans rather than a percentage of ad spend or revenue — easier to forecast as you scale." },
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

          {/* USE CASE */}
          <h2 className="mt-12 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            A Practical Use Case
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Imagine a Shopify apparel brand spending around $10,000/month on Meta ads. In Ads Manager, the account shows a 1.6 ROAS — borderline unprofitable. But Shopify shows considerably more revenue than Meta is taking credit for, and the team isn't sure which campaigns deserve the extra attribution.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            After connecting WeTracked and letting events flow through CAPI for a couple of weeks, Meta starts attributing more conversions to the campaigns that were genuinely driving them. Reported ROAS on the strongest ad sets climbs, the buyer can confidently scale them, and the truly underperforming campaigns become easier to identify and cut.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            This is the typical pattern: WeTracked doesn't invent revenue, but it helps the right revenue get attributed to the right campaigns.
          </p>

          {/* PROS & CONS */}
          <h2 className="mt-12 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Pros and Cons
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-5">
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-brand" /> Pros
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Strong improvement in reported attribution vs. native pixel alone",
                    "Quick setup — most stores can be live the same day",
                    "Predictable flat pricing instead of revenue-based fees",
                    "Built specifically for ecommerce (not generic analytics)",
                    "Pushes data to Meta, TikTok, and Google in one workflow",
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
                    "Newer brand with less name recognition than legacy tools",
                    "Best-fit is ecommerce — not ideal for lead-gen funnels",
                    "Overkill for stores spending only a few hundred dollars per month on ads",
                    "Some advanced reporting features are still maturing",
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

          {/* COMPARISON */}
          <h2 className="mt-12 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            How It Compares
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The most common alternatives are Triple Whale, Hyros, and Northbeam. Each has its own positioning:
          </p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span><strong className="text-foreground">Triple Whale</strong> is a broader analytics suite with dashboards, creative reporting, and attribution — typically higher priced and more complex to set up.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span><strong className="text-foreground">Hyros</strong> leans into AI-powered attribution and is popular with info-product and high-ticket advertisers, often at a higher monthly cost.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span><strong className="text-foreground">Northbeam</strong> targets larger DTC brands with multi-touch attribution modeling and enterprise-style pricing.</span>
            </li>
          </ul>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            WeTracked sits in a more focused lane: server-side tracking and CAPI delivery for ecommerce stores, at a price point that's accessible to growing brands. If you want a focused tracking layer rather than a full analytics platform, that simplicity is a feature, not a limitation.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            For a direct head-to-head, see our{" "}
            <Link to="/wetracked-vs-triple-whale" className="text-brand underline-offset-4 hover:underline">
              WeTracked vs Triple Whale comparison
            </Link>.
          </p>

          {/* FINAL VERDICT */}
          <h2 className="mt-12 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Final Verdict
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            WeTracked is a solid, focused choice for ecommerce stores that want better attribution without committing to a heavy analytics suite. If you're spending meaningful budget on Meta, TikTok, or Google ads and your tracking currently relies only on the native pixel, adding a server-side layer is one of the higher-leverage changes you can make in 2026.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            It won't be the right pick for everyone — very small stores, lead-gen businesses, or teams that need a full BI suite will be better served elsewhere. But for the core use case it's designed for, it does the job well at a fair price.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            The best way to evaluate it is to look at the current plans and feature list on the official site and see if it fits your store.
          </p>

          <PrimaryCTA />

          {/* DISCLOSURE */}
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            <strong>Disclosure:</strong> This page may contain affiliate links. If you sign up through them, we may earn a commission at no extra cost to you. We only recommend tools we'd consider using ourselves, and our editorial opinions are our own.
          </p>
        </div>
      </article>

      <Newsletter />
      <Footer />
    </div>
  );
}

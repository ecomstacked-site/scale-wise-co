import { Link } from "react-router-dom";
import { SEO } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CheckCircle2, XCircle, Clock, User, Zap, Target, TrendingUp } from "lucide-react";

const GO_PATH =
  "https://tryholo.ai/?utm_medium=affiliate&utm_source=4988344&utm_campaign=41932&im_ref=VR4UEcxOMxyZW1iwCnQUZz87Uku1QdzxZTtOR00&utm_ad_id=3273895&irgwc=1&afsrc=1";

function CtaButton({ children = "Start generating ad creatives" }: { children?: React.ReactNode }) {
  return (
    <a href={GO_PATH} rel="sponsored noopener noreferrer">
      <Button variant="brand" size="lg" className="gap-1.5">
        {children} <ArrowUpRight className="h-4 w-4" />
      </Button>
    </a>
  );
}

function ImageBlock({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-border bg-surface">
      <img src={src} alt={alt} loading="lazy" className="h-auto w-full" />
      <figcaption className="border-t border-border bg-surface px-4 py-3 text-center text-xs italic text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function HoloAiPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Holo AI Review (2026): The Ad Creative Engine for Ecommerce"
        description="Honest Holo AI review from a media buyer. Generate 10+ winning ad creatives in minutes, scale ad testing, and fix the real bottleneck killing your ROAS."
        ogTitle="Holo AI Review (2026): The Ad Creative Engine for Ecommerce"
        ogDescription="Generate 10+ ad creatives in minutes. Built for ecommerce brands that need volume to win on Meta and TikTok."
        ogImage="https://www.ecomstacked.io/images/hero-holo-ai-dashboard.webp"
        ogType="article"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ecomstacked.io/" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.ecomstacked.io/tools" },
              { "@type": "ListItem", position: 3, name: "Holo AI" },
            ],
          }),
        }}
      />
      <Header />

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Badge variant="secondary" className="mb-3">AI Content & Ad Creation</Badge>
          <h1 className="font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Holo AI Review (2026): The Ad Creative Engine for Ecommerce
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> EcomStacked Editorial</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 4 min read</span>
            <span>Last updated: April 2026</span>
          </div>

          {/* Top CTA — soft */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={GO_PATH} rel="sponsored noopener noreferrer">
              <Button variant="brand-outline" size="lg" className="gap-1.5">
                See how it works <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
            <Link to="/blog/holo-ai-review" className="text-xs text-muted-foreground underline-offset-2 hover:underline">
              Read the full review
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-5 rounded-md border-l-2 border-brand/40 bg-surface px-3 py-2 text-xs italic text-muted-foreground">
            This page is based on real testing workflows — not promotional claims. We evaluate tools on actual usage, not sponsorship.
          </p>

          <div className="mt-8 space-y-10">
            {/* INTRO — pain-first */}
            <section className="space-y-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your ROAS is sliding. CAC keeps creeping up. Creatives that worked last week are dead by Friday.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                You launch 2 or 3 ads, wait for results, then start over. Meanwhile, your competitors are pushing 20+ variations a week.
              </p>
              <p className="text-sm font-semibold leading-relaxed text-foreground">
                This isn't a targeting problem. It's a creative volume problem.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Holo AI was built to solve exactly that — turn one product into a stack of testable ad creatives in a single session.
              </p>
              <p className="text-sm font-semibold leading-relaxed text-foreground">
                This isn't about replacing creative strategy — it's about removing the production bottleneck.
              </p>
            </section>

            <ImageBlock
              src="/images/hero-holo-ai-dashboard.webp"
              alt="Holo AI dashboard for ecommerce ad creative generation"
              caption="The dashboard where most of the actual ad testing workflow happens day to day."
            />

            {/* QUICK POSITIONING */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">What Holo AI Actually Is</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Holo AI is an ecommerce-focused AI ad generator. It takes a product URL and outputs UGC-style videos, product images, and ad copy variations — designed for paid testing on Meta and TikTok.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                It replaces the slow, expensive UGC workflow most brands rely on: briefing creators, waiting on edits, paying per asset.
              </p>
            </section>

            {/* PROOF BLOCK */}
            <section className="rounded-xl border border-border bg-surface p-6">
              <h2 className="font-display text-lg font-bold text-foreground">What You Actually Get</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <span>Generate <strong className="text-foreground">10–20 ad creatives per session</strong> from a single product.</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <span>Cut creative production from <strong className="text-foreground">days to minutes</strong>, no editor required.</span>
                </li>
                <li className="flex gap-3">
                  <Target className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <span>Test <strong className="text-foreground">multiple angles, hooks, and formats</strong> in parallel instead of one at a time.</span>
                </li>
              </ul>
              <p className="mt-4 rounded-lg border border-border bg-background p-4 text-sm italic text-foreground">
                Instead of testing 3 ads next week, you can test 12+ this afternoon.
              </p>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-foreground">
                Most brands never find a winning ad — not because it doesn't exist, but because they never test enough to see it.
              </p>
            </section>

            {/* WHO IT'S FOR */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Who Holo AI Is Built For</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• <strong className="text-foreground">Dropshippers</strong> testing new products weekly and burning through creatives.</li>
                <li>• <strong className="text-foreground">Ecommerce founders</strong> running multi-SKU stores who can't afford a full creative team.</li>
                <li>• <strong className="text-foreground">Media buyers</strong> managing Meta and TikTok ad spend who need fresh angles every few days.</li>
              </ul>
            </section>

            {/* WHO IT'S NOT FOR */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Who This Tool Is NOT For</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Holo AI isn't the right fit for every brand. Skip it (or wait) if any of these apply:
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• You need cinematic, high-production brand films with custom shots.</li>
                <li>• You're not actively running paid ads and have no plan to test creatives.</li>
                <li>• Your offer, pricing, or product page is the actual reason ads aren't converting — fix that first.</li>
                <li>• You expect a one-click button with zero strategic input.</li>
              </ul>
            </section>

            {/* KEY FEATURES */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Key Features</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• <strong className="text-foreground">AI video ads</strong> — UGC-style videos from a product URL.</li>
                <li>• <strong className="text-foreground">Product image generation</strong> — lifestyle and studio shots without a photographer.</li>
                <li>• <strong className="text-foreground">Ad copy variations</strong> — multiple hooks, bodies, and CTAs per product.</li>
                <li>• <strong className="text-foreground">Multi-angle testing</strong> — pain point, social proof, demo, comparison angles in one batch.</li>
              </ul>
            </section>

            <ImageBlock
              src="/images/holo-ai-multiple-creatives.webp"
              alt="Multiple ad creative variations generated by Holo AI"
              caption="Testing more variations is what actually improves performance — not perfect editing."
            />

            {/* WHY THIS WORKS */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Why This Actually Works</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-border bg-surface p-4">
                  <TrendingUp className="h-5 w-5 text-brand" />
                  <p className="mt-2 text-sm font-semibold text-foreground">More creatives</p>
                  <p className="mt-1 text-xs text-muted-foreground">→ more tests in flight</p>
                </div>
                <div className="rounded-lg border border-border bg-surface p-4">
                  <Target className="h-5 w-5 text-brand" />
                  <p className="mt-2 text-sm font-semibold text-foreground">More tests</p>
                  <p className="mt-1 text-xs text-muted-foreground">→ more winners surface</p>
                </div>
                <div className="rounded-lg border border-border bg-surface p-4">
                  <Zap className="h-5 w-5 text-brand" />
                  <p className="mt-2 text-sm font-semibold text-foreground">More winners</p>
                  <p className="mt-1 text-xs text-muted-foreground">→ better ROAS, faster</p>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-foreground">
                Brands that test faster always outperform brands that test less. Speed is the advantage in 2026.
              </p>
              <p className="mt-3 text-sm italic leading-relaxed text-muted-foreground">
                The goal isn't better ads. It's more shots on goal.
              </p>
            </section>

            {/* PROS & CONS */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Honest Pros &amp; Cons</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-display text-sm font-bold text-foreground">Pros</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {["Fast — minutes per batch, not days", "Scales with your testing volume", "Built ecommerce-first, not generic AI", "Replaces a chunk of UGC creator spend"].map((p) => (
                        <li key={p} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-display text-sm font-bold text-foreground">Cons</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {["Output quality depends on your product input", "Not built for cinematic, premium-brand ads", "Subscription cost stacks at high volume"].map((c) => (
                        <li key={c} className="flex gap-2">
                          <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* COMPARISON */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Holo AI vs Generic AI Tools</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tools like Pictory and Runway can generate video — but they weren't built for ecommerce ad testing. You spend more time prompting than producing.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Holo AI starts from your product. The workflow is built around the actual job: ship more testable ads, faster. See our{" "}
                <Link to="/blog/holo-ai-vs-pictory" className="text-brand underline-offset-2 hover:underline">
                  Holo AI vs Pictory comparison
                </Link>{" "}
                for a side-by-side breakdown.
              </p>
            </section>

            {/* FINAL DECISION */}
            <section className="rounded-xl border border-border bg-surface p-6">
              <h2 className="font-display text-xl font-bold text-foreground">The Real Decision</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                If you're still producing ads one by one, you're not running a testing system — you're guessing.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Holo AI doesn't guarantee winning ads. Nothing does. What it gives you is the <strong className="text-foreground">volume needed to actually find them</strong>.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                While you're testing 2 ads this week, someone else is testing 20+. That's the gap that decides who scales and who stalls.
              </p>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground">
                The longer you wait to increase creative volume, the more data you lose.
              </p>
            </section>

            {/* FINAL CTA — soft */}
            <section className="rounded-xl border border-brand/20 bg-brand/5 p-6 text-center">
              <h3 className="font-display text-lg font-bold text-foreground">
                See if Holo AI fits your workflow
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Visit the official site to check current pricing and plans.
              </p>
              <div className="mt-4 flex justify-center">
                <a href={GO_PATH} rel="sponsored noopener noreferrer">
                  <Button variant="brand" size="lg" className="gap-1.5">
                    Check current pricing <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Still deciding? Read our{" "}
                <Link to="/blog/holo-ai-review" className="text-brand underline-offset-2 hover:underline">
                  full Holo AI review
                </Link>{" "}
                or compare{" "}
                <Link to="/blog/holo-ai-vs-pictory" className="text-brand underline-offset-2 hover:underline">
                  Holo AI vs Pictory
                </Link>.
              </p>
              <p className="mt-4 text-xs italic text-muted-foreground">
                Disclosure: This page contains affiliate links. We may earn a commission at no extra cost to you — pricing is the same for you either way.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Newsletter />
      <Footer />
    </div>
  );
}

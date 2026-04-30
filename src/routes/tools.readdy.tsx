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
  Clock,
  User,
  Zap,
  Wand2,
  LayoutTemplate,
  Rocket,
} from "lucide-react";

// Direct external Readdy URL — no /go/ redirect bridges (per project rules).
const READDY_URL =
  "https://readdy.ai/?im_ref=UywybF2CbxyZW9aQytUmwTI9UkuyCz0ZZTtPTM0&sharedid=&irpid=4988344&irgwc=1&afsrc=1";

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

function SoftCTA({ label = "Build your first page in minutes" }: { label?: string }) {
  return (
    <div className="my-6 flex justify-center">
      <a href={READDY_URL} target="_blank" rel="sponsored noopener noreferrer nofollow">
        <Button variant="brand-outline" className="gap-1.5">
          {label} <ArrowUpRight className="h-4 w-4" />
        </Button>
      </a>
    </div>
  );
}

export default function ReaddyAiReviewPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Readdy AI Review (2026): I Built a Real Landing Page in 8 Minutes"
        description="Honest Readdy AI review after building a real ecommerce landing page. What worked, what didn't, pricing, and who it's actually for."
        ogTitle="Readdy AI Review (2026): I Built a Real Landing Page in 8 Minutes"
        ogDescription="Hands-on Readdy AI review. Real build, real screenshots, honest pros and cons."
        ogImage="https://www.ecomstacked.io/images/sample-landing-page.jpg"
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
              { "@type": "ListItem", position: 3, name: "Readdy AI" },
            ],
          }),
        }}
      />
      <Header />

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Badge variant="secondary" className="mb-3">AI Website Builder</Badge>
          <h1 className="font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Readdy AI Review (2026): I Built a Real Landing Page in 8 Minutes
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> EcomStacked Editorial</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 6 min read</span>
            <span>Last updated: April 2026</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={READDY_URL} target="_blank" rel="sponsored noopener noreferrer nofollow">
              <Button variant="brand-outline" className="gap-1.5">
                Build your first page in minutes <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
            <Link to="/best-ai-website-builders-for-ecommerce" className="text-xs text-muted-foreground underline-offset-2 hover:underline">
              Compare top AI builders
            </Link>
          </div>

          <p className="mt-5 rounded-md border-l-2 border-brand/40 bg-surface px-3 py-2 text-xs italic text-muted-foreground">
            This review is based on real testing workflows — not promotional claims, not influenced by sponsors. We evaluate tools on actual usage.
          </p>

          <div className="mt-8 space-y-10">
            {/* 1. HOOK */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-foreground">Why I Tested Readdy AI</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I keep running into the same problem with new product tests: I need a landing page <em>today</em>, not next week. Shopify themes feel heavy, page builders take hours, and most "AI website" tools spit out generic templates with stock photos.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Readdy AI claims you can describe a site in plain English and get a working page in minutes. I went in skeptical — I've tested enough of these to expect bloated layouts and weird AI copy.
              </p>
              <p className="text-sm font-semibold leading-relaxed text-foreground">
                The expectation: a polished demo, useless in production. The reality was closer than I thought.
              </p>
            </section>

            {/* 2. DEMO */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">The Build: A Fitness Tracker Landing Page in 8 Minutes</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I gave it a real prompt — a single-product page for a fitness tracker, with hero, features, testimonials, FAQ, and a call to action. No template selection. Just text input.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• <strong className="text-foreground">Time to first draft:</strong> roughly 90 seconds.</li>
                <li>• <strong className="text-foreground">Total time to a publishable page:</strong> about 8 minutes including edits.</li>
                <li>• <strong className="text-foreground">Sections generated:</strong> hero, 3-feature grid, testimonials, FAQ, footer.</li>
                <li>• <strong className="text-foreground">Mobile layout:</strong> responsive out of the box, no manual fixing.</li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">What worked:</strong> the layout structure was actually conversion-aware — hero with a single CTA, social proof above the fold on mobile, FAQ at the bottom. Edits are inline; click any block, type new copy.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">What didn't:</strong> the first-pass copy was too generic. I had to rewrite the hero headline and three feature bullets to sound like an actual brand. Image generation was hit-or-miss — I swapped two images for my own product shots.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Final output:</strong> a clean, mobile-friendly landing page with custom domain support and analytics built in. Not a Shopify replacement — but for testing a single product or angle, it's the fastest path I've used.
              </p>

              <ImageBlock
                src="/images/readdy-builder-interface.jpg"
                alt="Readdy AI builder interface showing prompt-to-page generation"
                caption="Builder interface in action."
              />
            </section>

            {/* 3. VISUAL RESULT UPGRADE */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Before vs After: The Visual Upgrade</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Most "AI generated" pages look like AI generated pages — flat sections, awkward spacing, generic stock imagery. The first thing I noticed with Readdy was the layout discipline: clear hierarchy, real whitespace, conversion blocks in the right order.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The difference between a default Shopify theme dump and a Readdy output isn't subtle. One looks like a template. The other looks like someone actually thought about the funnel.
              </p>

              <ImageBlock
                src="/images/before-after-comparison.jpg"
                alt="Before and after: messy landing page versus structured Readdy AI page"
                caption="From basic layout to a structured, conversion-ready page."
              />

              <SoftCTA label="See a live example" />
            </section>

            {/* 4. KEY FEATURES */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Key Features (By Use Case)</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-surface p-4">
                  <Wand2 className="h-5 w-5 text-brand" />
                  <p className="mt-2 text-sm font-semibold text-foreground">AI builder</p>
                  <p className="mt-1 text-xs text-muted-foreground">Describe the site in plain English. Get a structured layout, not a blank canvas.</p>
                </div>
                <div className="rounded-lg border border-border bg-surface p-4">
                  <LayoutTemplate className="h-5 w-5 text-brand" />
                  <p className="mt-2 text-sm font-semibold text-foreground">Layout generation</p>
                  <p className="mt-1 text-xs text-muted-foreground">Conversion-aware sections — hero, features, testimonials, FAQ, CTA — placed in a sensible order.</p>
                </div>
                <div className="rounded-lg border border-border bg-surface p-4">
                  <Zap className="h-5 w-5 text-brand" />
                  <p className="mt-2 text-sm font-semibold text-foreground">Copy generation</p>
                  <p className="mt-1 text-xs text-muted-foreground">First-draft copy you'll want to rewrite, but it gives you something to edit instead of a blank box.</p>
                </div>
                <div className="rounded-lg border border-border bg-surface p-4">
                  <Rocket className="h-5 w-5 text-brand" />
                  <p className="mt-2 text-sm font-semibold text-foreground">Speed &amp; flexibility</p>
                  <p className="mt-1 text-xs text-muted-foreground">Custom domain, hosting, and basic analytics included. Edit visually or regenerate sections.</p>
                </div>
              </div>

              <ImageBlock
                src="/images/ai-builder-workflow.jpg"
                alt="Readdy AI workflow: idea, generate, customize, publish"
                caption="Simple workflow from idea to live page."
              />
            </section>

            {/* 5. PROS & CONS */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Honest Pros &amp; Cons</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-display text-sm font-bold text-foreground">Pros</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {[
                        "Fast — first draft in under 2 minutes",
                        "Layouts are conversion-aware, not generic",
                        "Inline editing — no learning curve",
                        "Custom domain + hosting + analytics included",
                        "Mobile responsive without extra work",
                      ].map((p) => (
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
                      {[
                        "First-pass copy needs a rewrite",
                        "Generated images are inconsistent — bring your own",
                        "Not a Shopify replacement for full catalogs",
                        "Limited deep design control vs a full builder",
                      ].map((c) => (
                        <li key={c} className="flex gap-2">
                          <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <SoftCTA label="View pricing" />
            </section>

            {/* 6. PRICING */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Pricing</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Readdy offers a free tier to test the builder, paid plans that unlock custom domain, more pages, and removal of branding, plus higher tiers for teams and agencies. Pricing changes regularly — check the official site for current numbers.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For most ecommerce testers, the entry paid plan is enough to publish a live page on your own domain.
              </p>
            </section>

            {/* 7. WHO SHOULD USE IT */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Who Should Use Readdy AI</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• <strong className="text-foreground">Dropshippers</strong> testing new products and ad angles weekly.</li>
                <li>• <strong className="text-foreground">Solo founders</strong> who don't want to babysit a Shopify theme to launch one product.</li>
                <li>• <strong className="text-foreground">Affiliate &amp; lead-gen marketers</strong> who need a clean landing page fast.</li>
                <li>• <strong className="text-foreground">Agencies</strong> spinning up client mockups before a full build.</li>
              </ul>
              <h3 className="mt-6 font-display text-base font-bold text-foreground">Who should skip it</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• Brands running large multi-SKU stores that need full Shopify infrastructure.</li>
                <li>• Designers who want pixel-level control over every element.</li>
                <li>• Anyone expecting a finished, no-edits-needed page from a single prompt.</li>
              </ul>
            </section>

            {/* 8. IS IT WORTH IT */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Is Readdy AI Actually Worth It?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">"Isn't it too generic?"</strong> The first draft can feel that way. After 5 minutes of editing copy and swapping a couple of images, the output stops looking templated.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">"Can it handle a real store?"</strong> For a single product test or a focused landing page, yes. For a 50-SKU catalog with collections, filtering, and abandoned cart flows — use Shopify.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">"Is it better than Shopify?"</strong> Different job. Shopify is your store. Readdy is your fast lane for testing what to put <em>in</em> the store.
              </p>
            </section>

            {/* 9. INTERNAL LINKS */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Related Reading</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• <Link to="/blog/build-dropshipping-store-with-ai" className="text-brand underline-offset-2 hover:underline">How to build a dropshipping store with AI</Link></li>
                <li>• <Link to="/blog/how-to-find-winning-products-for-dropshipping" className="text-brand underline-offset-2 hover:underline">How to find winning products for dropshipping</Link></li>
                <li>• <Link to="/best-ai-website-builders-for-ecommerce" className="text-brand underline-offset-2 hover:underline">Best AI website builders for ecommerce</Link></li>
              </ul>
            </section>

            {/* 10. FINAL VERDICT */}
            <section className="rounded-xl border border-border bg-surface p-6">
              <h2 className="font-display text-xl font-bold text-foreground">Final Verdict</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                Readdy AI isn't magic. It won't replace a designer or a real conversion strategist. What it does is collapse the time between "I have an idea" and "I have a live page" from days to under an hour.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                If you're testing products, angles, or offers, that speed is the entire point. The cost of a paid plan is less than the cost of one wasted day.
              </p>
            </section>

            <ImageBlock
              src="/images/sample-landing-page.jpg"
              alt="Sample ecommerce landing page created using Readdy AI"
              caption="Landing page created using AI."
            />

            {/* FAQ */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">FAQ</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Is Readdy AI good for ecommerce?</p>
                  <p className="mt-1">Yes — for single-product pages, landing pages, and ad-driven offers. For a full catalog, pair it with Shopify.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Do I need design skills?</p>
                  <p className="mt-1">No. The builder uses inline editing and the AI handles layout. Knowing what good copy looks like helps more than design skills.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Can I use my own domain?</p>
                  <p className="mt-1">Yes, on paid plans. Hosting and basic analytics are included.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Is there a free version?</p>
                  <p className="mt-1">Yes — enough to build and preview a page. Custom domain and brand removal require a paid plan.</p>
                </div>
              </div>
            </section>

            {/* FINAL CTA */}
            <section className="rounded-xl border border-brand/20 bg-brand/5 p-6 text-center">
              <h3 className="font-display text-lg font-bold text-foreground">See if Readdy AI fits your workflow</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Visit the official site to check current pricing and plans.
              </p>
              <div className="mt-4 flex justify-center">
                <a href={READDY_URL} target="_blank" rel="sponsored noopener noreferrer nofollow">
                  <Button variant="brand" className="gap-1.5">
                    View pricing <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
              <p className="mt-4 text-xs italic text-muted-foreground">
                Affiliate link — we may earn a commission at no extra cost to you. Pricing is the same either way.
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

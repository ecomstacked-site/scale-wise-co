import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())} — EcomStack` },
      { name: "description", content: "In-depth guide for ecommerce founders on tools, strategies, and growth tactics." },
      { property: "og:title", content: `${params.slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())} — EcomStack` },
      { property: "og:description", content: "In-depth guide for ecommerce founders." },
    ],
  }),
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-2xl font-bold text-foreground">Article Not Found</h1>
        <Link to="/blog" className="mt-4 inline-block text-sm text-brand hover:underline">Back to Blog</Link>
      </div>
    </div>
  ),
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen">
      <Header />

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link to="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <Badge variant="secondary" className="mb-3">Guide</Badge>
          <h1 className="font-display text-2xl font-extrabold leading-tight text-foreground sm:text-4xl">{title}</h1>

          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> EcomStack Team</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 8 min read</span>
            <span>April 2026</span>
          </div>

          {/* Table of Contents */}
          <Card className="mt-8">
            <CardContent className="p-5">
              <h2 className="font-display text-sm font-bold text-foreground">Table of Contents</h2>
              <ul className="mt-3 space-y-1.5">
                {["Introduction", "Key Features to Look For", "Top Recommended Tools", "How to Choose the Right Tool", "Implementation Tips", "Conclusion"].map((item, i) => (
                  <li key={item} className="text-sm text-muted-foreground hover:text-foreground">
                    <span className="mr-2 text-xs text-brand">{i + 1}.</span>{item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="prose-custom mt-10 space-y-8">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Introduction</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The ecommerce landscape in 2026 is more competitive than ever. With rising ad costs, stricter privacy regulations, and increasingly sophisticated consumer expectations, having the right tools in your stack isn't optional — it's essential. In this guide, we break down the most impactful tools available to ecommerce operators today.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Key Features to Look For</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                When evaluating any ecommerce tool, focus on these core criteria: ease of integration with your existing stack, quality of data and reporting, customer support responsiveness, and transparent pricing. The best tools solve a specific problem exceptionally well rather than trying to do everything.
              </p>
              <ul className="mt-4 space-y-2">
                {["Easy setup and onboarding", "Reliable data accuracy", "Strong Shopify integration", "Responsive customer support", "Clear and transparent pricing"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Callout Box */}
            <div className="rounded-xl border border-brand/20 bg-brand/5 p-5">
              <h3 className="font-display text-sm font-bold text-foreground">💡 Pro Tip</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Don't try to implement every tool at once. Start with your biggest bottleneck — whether that's tracking, creative production, or customer communication — and build from there. A focused approach leads to faster ROI.
              </p>
            </div>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Top Recommended Tools</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Based on our research and hands-on testing, here are the tools that consistently deliver results for ecommerce operators. Each has been evaluated on real-world performance, ease of use, and value for money.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                From server-side tracking solutions that recover lost conversions to AI-powered creative tools that produce winning ads at scale, these tools represent the current best-in-class options for ecommerce growth.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">How to Choose the Right Tool</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The right tool depends on your stage, budget, and biggest pain point. Early-stage stores should prioritize tracking and basic automation. Growing brands should invest in better analytics and creative tools. Scaling businesses need comprehensive attribution and advanced CRM capabilities.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Implementation Tips</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Start with one tool at a time. Give each tool at least 2-4 weeks of consistent use before evaluating its impact. Document your baseline metrics before implementation so you can measure actual improvement. And don't forget to train your team — a powerful tool is only as good as the people using it.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Conclusion</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The ecommerce tools landscape will continue to evolve, but the fundamentals remain the same: accurate data, efficient workflows, and strong customer relationships. By carefully selecting and implementing the right tools, you can build a more profitable and sustainable ecommerce business.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl bg-surface p-6 text-center">
            <h3 className="font-display text-lg font-bold text-foreground">Ready to Upgrade Your Stack?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Browse our full directory of recommended ecommerce tools.</p>
            <Link to="/tools" className="mt-4 inline-block">
              <Button variant="brand" className="gap-2">
                Explore Tools <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="font-display text-lg font-bold text-foreground">Related Articles</h3>
            <div className="mt-4 space-y-3">
              {[
                { title: "How to Improve Ecommerce Tracking Accuracy", slug: "improve-ecommerce-tracking" },
                { title: "Best Chat Automation Tools for Shopify Stores", slug: "chat-automation-shopify" },
                { title: "How to Scale Ecommerce Ads with Better Attribution", slug: "scale-ads-attribution" },
              ].map((article) => (
                <Link
                  key={article.slug}
                  to="/blog/$slug"
                  params={{ slug: article.slug }}
                  className="block rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-sm"
                >
                  <h4 className="font-display text-sm font-bold text-foreground">{article.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Newsletter />
      <Footer />
    </div>
  );
}

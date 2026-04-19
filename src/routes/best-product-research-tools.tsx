import { Link } from "react-router-dom";
import { SEO } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const tools = [
  {
    name: "WinningHunter",
    tagline: "All-in-one product, store, and ad spy built for dropshippers.",
    bestFor: "Operators who want store spy, ad spy, and validation in one platform.",
    href: "/tools/winninghunter",
    featured: true,
  },
  {
    name: "Trendtrack",
    tagline: "Tracks live Shopify stores and surfaces what's actually selling.",
    bestFor: "Finding proven winners by reverse-engineering live stores.",
    href: "/tools/trendtrack-review",
    featured: false,
  },
  {
    name: "Minea",
    tagline: "Strong ad library coverage across Meta, TikTok, and Pinterest.",
    bestFor: "Creative research and ad-angle inspiration.",
    href: "/blog/trendtrack-vs-minea",
    featured: false,
  },
];

export default function BestProductResearchToolsPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Best Product Research Tools for Dropshipping (2026)"
        description="The best product research tools for dropshipping in 2026. Compare features, pricing, and use cases — and see which platform actually finds winning products."
        ogTitle="Best Product Research Tools for Dropshipping (2026)"
        ogDescription="Honest comparison of the top product research tools for finding winning dropshipping products in 2026."
        ogType="article"
      />
      <Header />

      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Authority Guide</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Best Product Research Tools for Dropshipping in 2026
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            We tested the platforms dropshippers actually use to find winning products. Here's an honest, operator-focused breakdown.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Picking the right product research tool is the difference between burning $2K testing dead products and finding a scalable winner in your first month. Below are our top picks for 2026, ranked by how well they fit a real dropshipping workflow — store spy, ad spy, and demand validation.
          </p>

          <div className="mt-10 space-y-5">
            {tools.map((tool, i) => (
              <Card key={tool.name} className={tool.featured ? "border-brand/40 bg-brand/5" : ""}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand">#{i + 1} Pick</p>
                      <h2 className="mt-1 font-display text-xl font-bold text-foreground">{tool.name}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.tagline}</p>
                      <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                        <span><strong className="text-foreground">Best for:</strong> {tool.bestFor}</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <Link to={tool.href}>
                      <Button variant={tool.featured ? "brand" : "outline"} size="sm" className="gap-1.5">
                        {tool.featured ? "View Pricing" : "Read Review"} <ArrowUpRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-surface p-5">
            <h3 className="font-display text-base font-bold text-foreground">Need the workflow, not just the tools?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Read our full step-by-step guide on{" "}
              <Link to="/blog/how-to-find-winning-products-for-dropshipping" className="text-brand underline-offset-2 hover:underline">
                how to find winning products for dropshipping
              </Link>
              {" "}— the exact filter, validation steps, and weekly cadence experienced operators use.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

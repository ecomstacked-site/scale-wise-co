import { Link } from "react-router-dom";
import { SEO } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CheckCircle2, XCircle, Clock, User } from "lucide-react";

export interface ToolMoneyPageProps {
  /** Tool brand, e.g. "Holo AI" */
  name: string;
  /** Affiliate redirect path, e.g. "/go/holo-ai" */
  goPath: string;
  /** Short tagline / category label */
  category: string;
  /** SEO title */
  seoTitle: string;
  /** SEO meta description */
  seoDescription: string;
  /** H1 */
  heading: string;
  /** Lead paragraph */
  intro: string;
  /** Who it's for */
  whoItsFor: string;
  /** 3-5 bullet feature highlights */
  features: { title: string; desc: string }[];
  /** Pros */
  pros: string[];
  /** Cons */
  cons: string[];
  /** Verdict copy */
  verdict: string;
  /** Estimated read time */
  readTime?: string;
}

export function ToolMoneyPage({
  name,
  goPath,
  category,
  seoTitle,
  seoDescription,
  heading,
  intro,
  whoItsFor,
  features,
  pros,
  cons,
  verdict,
  readTime = "5 min read",
}: ToolMoneyPageProps) {
  return (
    <div className="min-h-screen">
      <SEO
        title={seoTitle}
        description={seoDescription}
        ogTitle={seoTitle}
        ogDescription={seoDescription}
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
              { "@type": "ListItem", position: 3, name: name },
            ],
          }),
        }}
      />
      <Header />

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Badge variant="secondary" className="mb-3">{category}</Badge>
          <h1 className="font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            {heading}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> EcomStacked Editorial</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {readTime}</span>
            <span>Last updated: April 2026</span>
          </div>

          {/* Top CTA */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={goPath} rel="sponsored noopener noreferrer">
              <Button variant="brand" className="gap-1.5">
                Visit {name} <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
            <Link to="/tools" className="text-xs text-muted-foreground underline-offset-2 hover:underline">
              Browse all tools
            </Link>
          </div>

          <div className="prose-custom mt-8 space-y-8">
            <section>
              <p className="text-sm leading-relaxed text-muted-foreground">{intro}</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Who It's For</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{whoItsFor}</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Key Features</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {features.map((f) => (
                  <li key={f.title}>
                    • <strong className="text-foreground">{f.title}</strong> — {f.desc}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Pros &amp; Cons</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-display text-sm font-bold text-foreground">Pros</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {pros.map((p) => (
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
                      {cons.map((c) => (
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

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Final Verdict</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{verdict}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Compare with{" "}
                <Link to="/tools" className="text-brand underline-offset-2 hover:underline">
                  other tools in our directory
                </Link>{" "}
                or read our{" "}
                <Link to="/best-product-research-tools" className="text-brand underline-offset-2 hover:underline">
                  best product research tools guide
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Related Guides &amp; Reviews</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• <Link to="/tools/winninghunter" className="text-brand underline-offset-2 hover:underline">WinningHunter Review</Link> — our top-rated product research tool</li>
                <li>• <Link to="/tools/trendtrack-review" className="text-brand underline-offset-2 hover:underline">Trendtrack Review</Link> — best Shopify store spy</li>
                <li>• <Link to="/tools/wetracked-review" className="text-brand underline-offset-2 hover:underline">WeTracked Review</Link> — server-side ad attribution</li>
                <li>• <Link to="/blog/winning-hunter-alternatives" className="text-brand underline-offset-2 hover:underline">WinningHunter Alternatives</Link> — 6 tools compared</li>
                <li>• <Link to="/blog/best-ad-tracking-tools-2026" className="text-brand underline-offset-2 hover:underline">Best Ad Tracking Tools 2026</Link></li>
              </ul>
            </section>

            <section className="rounded-xl border border-brand/20 bg-brand/5 p-6 text-center">
              <h3 className="font-display text-lg font-bold text-foreground">Try {name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Visit the official website to view current pricing and plans.
              </p>
              <div className="mt-4 flex justify-center">
                <a href={goPath} rel="sponsored noopener noreferrer">
                  <Button variant="brand" className="gap-1.5">
                    Visit Official Website <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
              <p className="mt-4 text-xs italic text-muted-foreground">
                This page contains affiliate links. We may earn a commission at no extra cost to you.
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

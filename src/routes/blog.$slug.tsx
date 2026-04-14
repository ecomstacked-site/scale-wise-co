import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, User } from "lucide-react";
import { articlesMeta, getArticleContent } from "@/lib/articles";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const article = articlesMeta.find((a) => a.slug === params.slug);
    const title = article?.title ?? params.slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    const desc = article?.excerpt ?? "In-depth guide for ecommerce founders on tools, strategies, and growth tactics.";
    return {
      meta: [
        { title: `${title} — EcomStack` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — EcomStack` },
        { property: "og:description", content: desc },
      ],
    };
  },
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
  const article = articlesMeta.find((a) => a.slug === slug);
  const content = getArticleContent(slug);

  const title = article?.title ?? slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const readTime = article?.readTime ?? "8 min read";
  const date = article?.date ?? "April 2026";
  const category = article?.category ?? "Guide";
  const toc = article?.toc ?? [];

  const relatedArticles = articlesMeta.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link to="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <Badge variant="secondary" className="mb-3">{category}</Badge>
          <h1 className="font-display text-2xl font-extrabold leading-tight text-foreground sm:text-4xl">{title}</h1>

          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> EcomStack Team</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {readTime}</span>
            <span>{date}</span>
          </div>

          {toc.length > 0 && (
            <Card className="mt-8">
              <CardContent className="p-5">
                <h2 className="font-display text-sm font-bold text-foreground">Table of Contents</h2>
                <ul className="mt-3 space-y-1.5">
                  {toc.map((item, i) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      <span className="mr-2 text-xs text-brand">{i + 1}.</span>{item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <div className="prose-custom mt-10">
            {content ?? (
              <p className="text-sm text-muted-foreground">This article is coming soon.</p>
            )}
          </div>

          {/* Affiliate Disclosure */}
          <div className="mt-10 rounded-lg bg-surface p-4">
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Disclosure:</strong> Some links in this article are affiliate links. If you click through and make a purchase, we may earn a small commission at no additional cost to you. This does not affect our editorial recommendations — every tool mentioned was selected based on independent research and evaluation.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="font-display text-lg font-bold text-foreground">Related Articles</h3>
            <div className="mt-4 space-y-3">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  to="/blog/$slug"
                  params={{ slug: a.slug }}
                  className="block rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-sm"
                >
                  <h4 className="font-display text-sm font-bold text-foreground">{a.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{a.excerpt.slice(0, 120)}…</p>
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

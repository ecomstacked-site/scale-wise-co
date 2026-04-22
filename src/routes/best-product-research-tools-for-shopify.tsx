import { Link } from "react-router-dom";
import { SEO } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { articlesMeta, getArticleContent } from "@/lib/articles";

export default function BestProductResearchToolsForShopifyPage() {
  const slug = "best-product-research-tools-for-shopify";
  const article = articlesMeta.find((a) => a.slug === slug);
  const content = getArticleContent(slug);
  const title = article?.title ?? "Best Product Research Tools for Shopify (2026 Guide)";
  const excerpt = article?.excerpt ?? "Compare the best Shopify product research tools for finding winning products faster in 2026.";

  return (
    <div className="min-h-screen">
      <SEO
        title={`${title} — EcomStacked`}
        description={excerpt}
        ogTitle={`${title} — EcomStacked`}
        ogDescription={excerpt}
        ogImage={article?.image}
        ogType="article"
      />
      <Header />
      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <Badge variant="secondary" className="mb-3">{article?.category ?? "Guides"}</Badge>
          <h1 className="font-display text-2xl font-extrabold leading-tight text-foreground sm:text-4xl">{title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span>By Daniel Pereira, EcomStacked Editorial</span>
            <span>{article?.readTime ?? "16 min read"}</span>
            <span>Last updated: {article?.date ?? "April 22, 2026"}</span>
          </div>
          <p className="mt-3 text-xs italic text-muted-foreground">
            We independently evaluate ecommerce tools based on practical use cases, research workflows, and operator value.
          </p>
          <div className="prose-custom mt-10">
            {content ?? <p className="text-sm text-muted-foreground">This guide is coming soon.</p>}
          </div>
        </div>
      </article>
      <Newsletter />
      <Footer />
    </div>
  );
}

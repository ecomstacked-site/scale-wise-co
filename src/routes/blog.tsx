import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — EcomStack" },
      { name: "description", content: "Guides, strategies, and tool breakdowns for ecommerce founders, dropshippers, and media buyers." },
      { property: "og:title", content: "Blog — EcomStack" },
      { property: "og:description", content: "Practical guides and tool reviews for ecommerce growth." },
    ],
  }),
  component: BlogPage,
});

const allArticles = [
  { title: "Best AI Tools for Dropshipping in 2026", excerpt: "A comprehensive breakdown of AI-powered tools that help dropshippers automate content, create ads, optimize stores, and scale faster with less manual work.", category: "AI Tools", date: "April 10, 2026", readTime: "8 min read", slug: "best-ai-tools-dropshipping", featured: true },
  { title: "How to Improve Ecommerce Tracking Accuracy", excerpt: "Server-side tracking, CAPI setup, and first-party data strategies that help ecommerce brands recover lost conversions and get accurate attribution data.", category: "Tracking", date: "April 8, 2026", readTime: "6 min read", slug: "improve-ecommerce-tracking" },
  { title: "Best Chat Automation Tools for Shopify Stores", excerpt: "Compare the top chat automation platforms for Shopify and learn how to turn DM conversations into real revenue.", category: "Automation", date: "April 5, 2026", readTime: "7 min read", slug: "chat-automation-shopify" },
  { title: "How to Scale Ecommerce Ads with Better Attribution", excerpt: "Understanding multi-touch attribution and how better tracking data leads to more profitable ad scaling decisions.", category: "Tracking", date: "April 2, 2026", readTime: "9 min read", slug: "scale-ads-attribution" },
  { title: "Tools That Help Ecommerce Brands Work Faster", excerpt: "A roundup of productivity and automation tools that save ecommerce teams hours every week on repetitive tasks.", category: "Productivity", date: "March 30, 2026", readTime: "5 min read", slug: "ecommerce-productivity-tools" },
  { title: "The Complete Guide to Shopify Store Optimization", excerpt: "From page speed to conversion rate, here's how to optimize every aspect of your Shopify store for more sales.", category: "Optimization", date: "March 27, 2026", readTime: "10 min read", slug: "shopify-store-optimization" },
];

const blogCategories = ["All", "AI Tools", "Tracking", "Automation", "Optimization", "Productivity"];

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = allArticles.find((a) => a.featured);
  const filtered = allArticles.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">Blog</h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Practical guides, tool reviews, and growth strategies for ecommerce founders and operators.
          </p>
        </div>
      </section>

      {featured && (
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="mb-4 font-display text-sm font-bold text-muted-foreground uppercase tracking-wider">Featured Article</h2>
            <ArticleCard {...featured} featured />
          </div>
        </section>
      )}

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-full text-xs"
                >
                  {cat}
                </Button>
              ))}
            </div>
            <div className="relative sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-sm text-muted-foreground">No articles found matching your criteria.</p>
          )}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

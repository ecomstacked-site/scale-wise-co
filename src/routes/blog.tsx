import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { articlesMeta } from "@/lib/articles";

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

const blogCategories = ["All", "AI Tools", "Tracking", "Automation", "Productivity"];

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = articlesMeta.find((a) => a.featured);
  const filtered = articlesMeta.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Editorial Content</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">Blog</h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Practical guides, tool reviews, and growth strategies for ecommerce founders and operators.
          </p>
        </div>
      </section>

      {featured && (
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand">Featured Article</p>
            <ArticleCard {...featured} featured />
          </div>
        </section>
      )}

      <section className="py-10 sm:py-14">
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

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

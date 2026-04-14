import { Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

export function ArticleCard({ title, excerpt, category, date, readTime, slug, featured }: ArticleCardProps) {
  return (
    <Link to="/blog/$slug" params={{ slug }}>
      <Card className={`group h-full overflow-hidden transition-shadow duration-200 hover:shadow-md ${featured ? "sm:col-span-2" : ""}`}>
        <div className={`aspect-video bg-surface ${featured ? "sm:aspect-[21/9]" : ""}`}>
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-lg font-bold text-surface-foreground/30">EcomStack</span>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">{category}</Badge>
            <span className="text-xs text-muted-foreground">{readTime}</span>
          </div>
          <h3 className="mt-2.5 font-display text-base font-bold leading-snug text-card-foreground group-hover:text-brand transition-colors sm:text-lg">
            {title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {excerpt}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">{date}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

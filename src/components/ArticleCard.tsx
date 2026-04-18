import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
  image?: string;
}

export function ArticleCard({ title, excerpt, category, date, readTime, slug, featured, image }: ArticleCardProps) {
  return (
    <Link to={`/blog/${slug}`}>
      <Card className={`group h-full overflow-hidden transition-all duration-200 hover:shadow-md hover:border-brand/20 ${featured ? "sm:col-span-2" : ""}`}>
        <div className={`bg-surface overflow-hidden ${featured ? "aspect-[21/9]" : "aspect-[16/9]"}`}>
          {image ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              width={800}
              height={512}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-display text-lg font-bold text-surface-foreground/20">EcomStacked</span>
            </div>
          )}
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">{category}</Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" /> {readTime}
            </span>
          </div>
          <h3 className="mt-3 font-display text-base font-bold leading-snug text-card-foreground group-hover:text-brand transition-colors sm:text-lg">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {excerpt}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">{date}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

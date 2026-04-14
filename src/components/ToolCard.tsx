import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  bestFor: string;
  benefit: string;
  category: string;
  featured?: boolean;
  href?: string;
  socialProof?: string;
  microHook?: string;
  extraBadge?: string;
  image?: string;
}

export function ToolCard({ name, description, bestFor, benefit, category, featured, href, socialProof, microHook, extraBadge, image }: ToolCardProps) {
  return (
    <Card className={`group relative overflow-hidden transition-all duration-200 hover:shadow-md hover:border-brand/20 ${featured ? "border-brand/20" : ""}`}>
      <CardContent className="flex h-full flex-col p-0">
        {/* 1. Tool image */}
        <div className="aspect-[16/10] overflow-hidden bg-surface">
          {image ? (
            <img
              src={image}
              alt={`${name} dashboard`}
              loading="lazy"
              width={800}
              height={512}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-display text-sm font-bold text-surface-foreground/20">{name.charAt(0)}</span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          {/* 2. Name + badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display text-lg font-bold text-card-foreground">{name}</h3>
            {featured && <Badge variant="default" className="bg-brand text-brand-foreground text-[10px] leading-tight">Editor's Pick</Badge>}
            {extraBadge && <Badge variant="outline" className="text-[10px] leading-tight">{extraBadge}</Badge>}
          </div>

          {/* 3. Description */}
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>

          {/* 4. Benefits (max 2) */}
          <div className="mt-4 space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
              <span className="text-xs text-card-foreground">{bestFor}</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
              <span className="text-xs text-card-foreground">{benefit}</span>
            </div>
          </div>

          {/* 5. Social proof */}
          {socialProof && (
            <p className="mt-3 text-[11px] italic text-muted-foreground">{socialProof}</p>
          )}

          {/* 6. Category tag */}
          <div className="mt-auto pt-5">
            <Badge variant="secondary" className="text-xs">{category}</Badge>
          </div>

          {/* 7. Micro hook + 8. CTA */}
          <div className="mt-3">
            {microHook && (
              <p className="mb-2 text-[11px] font-medium text-foreground/70">{microHook}</p>
            )}
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer nofollow" className="block">
                <Button variant="brand-outline" size="sm" className="w-full gap-1 text-xs">
                  Visit Website <ArrowUpRight className="h-3 w-3" />
                </Button>
              </a>
            ) : (
              <Button variant="brand-outline" size="sm" className="w-full gap-1 text-xs">
                Learn More <ArrowUpRight className="h-3 w-3" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

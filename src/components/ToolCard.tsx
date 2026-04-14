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
}

export function ToolCard({ name, description, bestFor, benefit, category, featured }: ToolCardProps) {
  return (
    <Card className={`group relative overflow-hidden transition-all duration-200 hover:shadow-md hover:border-brand/20 ${featured ? "border-brand/20" : ""}`}>
      {featured && (
        <div className="absolute right-3 top-3">
          <Badge variant="default" className="bg-brand text-brand-foreground text-xs">Editor's Pick</Badge>
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface">
          <span className="font-display text-sm font-bold text-surface-foreground">{name.charAt(0)}</span>
        </div>
        <h3 className="mt-4 font-display text-lg font-bold text-card-foreground">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
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
        <div className="mt-5 flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">{category}</Badge>
          <Button variant="ghost" size="sm" className="gap-1 text-xs text-brand hover:text-brand">
            Learn More <ArrowUpRight className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

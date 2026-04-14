import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield } from "lucide-react";

export function Newsletter() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
          Stay Ahead of the Curve
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
          Get weekly tool recommendations, ecommerce growth strategies, and automation tips delivered to your inbox.
        </p>
        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            placeholder="you@example.com"
            className="h-12 rounded-xl border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 sm:w-72"
          />
          <Button variant="brand" size="lg" type="submit" className="h-12">
            Subscribe
          </Button>
        </form>
        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-primary-foreground/50">
          <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> No spam, ever</span>
          <span>·</span>
          <span>Unsubscribe anytime</span>
          <span>·</span>
          <span>2,000+ subscribers</span>
        </div>
      </div>
    </section>
  );
}

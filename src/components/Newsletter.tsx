import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
          Stay Ahead of the Curve
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
          Get weekly tool recommendations, ecommerce growth strategies, and automation tips delivered to your inbox. No spam, ever.
        </p>
        <form
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            placeholder="you@example.com"
            className="h-11 rounded-xl border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 sm:w-72"
          />
          <Button variant="brand" size="lg" type="submit">
            Subscribe
          </Button>
        </form>
        <p className="mt-3 text-xs text-primary-foreground/50">
          Join 2,000+ ecommerce founders. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

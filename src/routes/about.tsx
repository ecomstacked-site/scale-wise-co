import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Shield, Eye, Target, Users, BookOpen, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EcomStack" },
      { name: "description", content: "EcomStack is an independent publisher helping ecommerce founders discover the best tools, systems, and software for growth." },
      { property: "og:title", content: "About — EcomStack" },
      { property: "og:description", content: "Independent tool recommendations and growth resources for ecommerce operators." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">About EcomStack</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We publish practical resources, software recommendations, and educational content to help ecommerce businesses grow with better systems, automation, and performance tools.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-16">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The ecommerce tool landscape is overwhelming. New software launches daily, and it's hard to know what's worth your time and budget. EcomStack exists to cut through the noise. We research, test, and organize the best tools so ecommerce founders can make informed decisions faster.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground">What We Cover</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Target, label: "Ad Tracking & Attribution", desc: "Server-side tracking, pixel management, and conversion recovery tools" },
                { icon: Eye, label: "AI Content & Ad Creation", desc: "Tools that use AI to generate creatives, copy, and marketing content" },
                { icon: Users, label: "Chat Automation & Lead Capture", desc: "Messaging platforms for automated engagement and sales" },
                { icon: TrendingUp, label: "Analytics & Growth", desc: "Data dashboards, reporting, and performance optimization tools" },
                { icon: BookOpen, label: "Product Research", desc: "Winning product discovery and store optimization tools" },
                { icon: Shield, label: "CRM & Retention", desc: "Customer follow-up, email flows, and lifetime value tools" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface">
                      <item.icon className="h-4 w-4 text-brand" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-foreground">{item.label}</h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Who This Site Is For</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              EcomStack is built for people who run online businesses and want practical, trustworthy guidance on what software to use. Our audience includes:
            </p>
            <ul className="mt-4 space-y-2">
              {["Dropshippers building and scaling stores", "Shopify store owners optimizing their operations", "Ecommerce founders looking for better systems", "Media buyers improving ad tracking and ROAS", "Performance marketers testing new tools", "Small online business owners automating workflows"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground">How We Evaluate Tools</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We take a structured, editorial approach to evaluating software. Every tool we feature goes through a review process that considers:
            </p>
            <div className="mt-5 space-y-3">
              {[
                { title: "Real-World Use Cases", desc: "We evaluate tools in the context of actual ecommerce workflows, not theoretical scenarios." },
                { title: "Ease of Setup & Use", desc: "We consider how quickly a team can implement and start getting value from the tool." },
                { title: "Value for Money", desc: "We look at pricing relative to the results the tool can deliver for ecommerce operators." },
                { title: "Integration & Compatibility", desc: "We check how well the tool works with popular platforms like Shopify, Meta, and Google." },
                { title: "Support & Documentation", desc: "We assess the quality of customer support and available learning resources." },
              ].map((item) => (
                <div key={item.title} className="rounded-lg bg-surface p-4">
                  <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-brand/20 bg-brand/5 p-6 text-center">
            <h2 className="font-display text-lg font-bold text-foreground">Independent & Transparent</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              EcomStack is an independent publication. While some of our links may be affiliate partnerships, our recommendations are based on genuine evaluation. We always prioritize our readers' interests and clearly disclose our process.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

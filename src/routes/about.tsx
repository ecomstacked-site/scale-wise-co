import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Shield, Eye, Target, Users, BookOpen, TrendingUp, CheckCircle2, FileSearch, Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">About Us</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">We Help Ecommerce Brands Find Better Tools</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            EcomStack is an independent editorial publication. We research, test, and organize the best software for ecommerce operators — so you can make informed decisions without the noise.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-20">

          {/* Mission */}
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Mission</p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">Cut Through the Noise</h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                The ecommerce tool landscape is overwhelming. New software launches daily, and it's hard to know what's worth your time and budget. EcomStack exists to solve that problem. We take a research-driven, editorial approach to identifying the tools that genuinely help ecommerce businesses grow — and we present our findings in a clear, practical, and honest way.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We are not a marketplace or a lead generation platform. We are a publication. Our content is written for operators, by people who understand the ecommerce space.
              </p>
            </div>
          </div>

          {/* What We Cover */}
          <div>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Coverage Areas</p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">What We Cover</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                We focus on the software categories that matter most to ecommerce growth and operations.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Target, label: "Ad Tracking & Attribution", desc: "Server-side tracking, pixel management, and conversion recovery tools" },
                { icon: Eye, label: "AI Content & Ad Creation", desc: "Tools that use AI to generate creatives, copy, and marketing content" },
                { icon: Users, label: "Chat Automation & Lead Capture", desc: "Messaging platforms for automated engagement and sales" },
                { icon: TrendingUp, label: "Analytics & Growth", desc: "Data dashboards, reporting, and performance optimization tools" },
                { icon: BookOpen, label: "Product Research", desc: "Winning product discovery and store optimization tools" },
                { icon: Shield, label: "CRM & Retention", desc: "Customer follow-up, email flows, and lifetime value tools" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface">
                      <item.icon className="h-4 w-4 text-brand" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-foreground">{item.label}</h3>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who This Site Is For */}
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Audience</p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">Who This Site Helps</h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                EcomStack is built for people who run online businesses and want practical, trustworthy guidance on what software to use.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Dropshippers building and scaling stores",
                  "Shopify store owners optimizing their operations",
                  "Ecommerce founders looking for better systems",
                  "Media buyers improving ad tracking and ROAS",
                  "Performance marketers testing new tools",
                  "Small online business owners automating workflows"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How We Evaluate Tools */}
          <div>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Process</p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">How We Evaluate Tools</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                We take a structured, editorial approach to evaluating software. Every tool we feature goes through a review process.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Real-World Use Cases", desc: "We evaluate tools in the context of actual ecommerce workflows, not theoretical scenarios." },
                { title: "Ease of Setup & Use", desc: "We consider how quickly a team can implement and start getting value from the tool." },
                { title: "Value for Money", desc: "We look at pricing relative to the results the tool can deliver for ecommerce operators." },
                { title: "Integration & Compatibility", desc: "We check how well the tool works with popular platforms like Shopify, Meta, and Google." },
                { title: "Support & Documentation", desc: "We assess the quality of customer support and available learning resources." },
                { title: "Competitive Landscape", desc: "We compare alternatives and identify where each tool offers a genuine advantage." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Values */}
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Editorial Values</p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">Independent, Transparent, Reader-First</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                EcomStack is an independent publication. We are committed to providing honest, useful guidance that serves our readers above all else.
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { icon: Shield, title: "No Pay-to-Play", desc: "We don't accept paid placements or rank tools based on commission rates." },
                { icon: Eye, title: "Full Disclosure", desc: "When we use affiliate links, we label them clearly. Our process is always transparent." },
                { icon: FileSearch, title: "Research-Driven", desc: "Every recommendation is backed by structured evaluation, not vendor relationships." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-surface">
                    <item.icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="mt-3 font-display text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-display text-lg font-bold text-foreground">Ready to find the right tools?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Browse our curated directory of ecommerce software.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/tools">
                <Button variant="brand" className="gap-2">Explore Tools <ArrowRight className="h-4 w-4" /></Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline">Read the Blog</Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import { SEO } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Shield, Eye, Target, CheckCircle2, FileSearch, ArrowRight, Package, Layers, MessageSquare, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="About — EcomStacked"
        description="EcomStacked is a resource for ecommerce founders, marketers, and Shopify store owners looking to scale with better tools."
        ogTitle="About — EcomStacked"
        ogDescription="Independent tool recommendations and growth resources for ecommerce operators."
      />
      <Header />

      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">About Us</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">We Help Ecommerce Brands Find Better Tools</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            EcomStacked is a resource for ecommerce founders, marketers, and Shopify store owners looking to scale with better tools. We research, test, and organize software for tracking, AI ad creatives, automation, and growth — so you don't have to.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-20">

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">What We Do</p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">Research, Test, Organize</h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                The ecommerce software landscape is noisy. Hundreds of tools launch every year, each promising better results. For busy operators running stores, managing ads, and handling fulfillment, there isn't time to test everything.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                EcomStacked exists to solve that. We take a hands-on approach to identifying tools that genuinely help ecommerce businesses grow. We test tools in real workflows, compare alternatives, and publish practical recommendations designed for operators — not software reviewers.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We are not a marketplace or a lead generation platform. We're a resource. Our goal is to be the most useful place for ecommerce software recommendations on the internet.
              </p>
            </div>
          </div>

          <div>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Coverage Areas</p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">What We Cover</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                We focus on the software categories that have the biggest impact on ecommerce growth and daily operations.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Target, label: "Tracking & Attribution", desc: "Server-side tracking, conversion recovery, and ad attribution tools for accurate data" },
                { icon: Eye, label: "AI Content & Ad Creation", desc: "Platforms for generating ad creatives, product photos, and marketing copy at scale" },
                { icon: MessageSquare, label: "Chat Automation & CRM", desc: "Automated messaging, lead capture, and customer relationship tools for DM-driven sales" },
                { icon: TrendingUp, label: "Product Research & Optimization", desc: "Tools for finding products, analyzing competitors, and optimizing store performance" },
                { icon: Package, label: "Shipping & Fulfillment", desc: "Platforms that streamline shipping, reduce costs, and improve delivery speed" },
                { icon: Layers, label: "Funnels & Marketing Systems", desc: "Platforms for building sales funnels, email campaigns, and marketing automation" },
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

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Audience</p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">Who This Site Helps</h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                EcomStacked is built for people who run online stores and want practical, trustworthy guidance on what software to use — whether you're launching your first store or scaling an established brand.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Dropshippers building and scaling their stores",
                  "Shopify brands looking to optimize operations and profitability",
                  "Ecommerce founders evaluating tools for tracking, automation, and growth",
                  "Media buyers improving ad attribution, creative production, and ROAS",
                  "Small online business owners automating workflows to save time",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Process</p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">How We Evaluate Tools</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Every tool we feature goes through a structured review before it appears on EcomStacked.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Real-World Use Cases", desc: "We evaluate tools in the context of actual ecommerce workflows. Does it solve a real problem for a real operator?" },
                { title: "Ease of Setup & Use", desc: "We consider how quickly a team can implement the tool and start getting results. Complex onboarding is a real cost." },
                { title: "ROI Impact", desc: "We look at pricing relative to results. A $200/month tool that saves 10 hours per week is a better investment than a $29 tool that sits unused." },
                { title: "Integration & Compatibility", desc: "We check how well the tool works with Shopify, Meta Ads, Google Ads, and TikTok. Poor integration is a dealbreaker." },
                { title: "Support & Documentation", desc: "We assess customer support quality and onboarding resources. Good tools with bad support create more problems than they solve." },
                { title: "Competitive Landscape", desc: "We compare alternatives and identify where each tool offers a genuine advantage at a similar price point." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Editorial Values</p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">Independent, Transparent, Reader-First</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                EcomStacked is an independent resource. We provide honest, useful guidance that serves our readers above all else.
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { icon: Shield, title: "No Pay-to-Play", desc: "We don't accept paid placements or rank tools based on commission rates. Recommendations are based on research, not revenue." },
                { icon: Eye, title: "Full Disclosure", desc: "When we use affiliate links, we label them clearly. We believe transparency builds trust." },
                { icon: FileSearch, title: "Research-Driven", desc: "Every recommendation is backed by structured evaluation and real-world testing — not vendor relationships." },
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

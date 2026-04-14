import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Handshake } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — EcomStack" },
      { name: "description", content: "Get in touch with EcomStack for business inquiries, partnerships, feedback, or editorial questions." },
      { property: "og:title", content: "Contact — EcomStack" },
      { property: "og:description", content: "Reach out for partnerships, inquiries, and feedback." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">Contact Us</h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            We'd love to hear from you. Whether it's a business inquiry, partnership opportunity, or general feedback — reach out below.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-display text-lg font-bold text-foreground">Send a Message</h2>
                  <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-foreground">Name</label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-foreground">Email</label>
                        <Input type="email" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-foreground">Subject</label>
                      <Input placeholder="What's this about?" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-foreground">Message</label>
                      <textarea
                        className="flex min-h-[120px] w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        placeholder="Tell us more..."
                      />
                    </div>
                    <Button variant="brand" type="submit" className="w-full sm:w-auto">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 lg:col-span-2">
              {[
                { icon: Mail, title: "Email", desc: "For general inquiries and questions", detail: "hello@ecomstack.com" },
                { icon: Handshake, title: "Partnerships", desc: "For tool submissions and sponsorships", detail: "partners@ecomstack.com" },
                { icon: MessageSquare, title: "Feedback", desc: "Help us improve our content", detail: "We read every message" },
              ].map((item) => (
                <Card key={item.title}>
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface">
                      <item.icon className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
                      <p className="mt-1 text-xs font-medium text-brand">{item.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

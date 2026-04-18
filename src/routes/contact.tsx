import { useState } from "react";
import { SEO } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Handshake } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!subject.trim()) newErrors.subject = "Subject is required";
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:hello@ecomstacked.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact — EcomStacked"
        description="Get in touch with EcomStacked for partnerships, tool submissions, or support."
        ogTitle="Contact — EcomStacked"
        ogDescription="Reach out for partnerships, tool submissions, or support."
      />
      <Header />

      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">Contact Us</h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            For partnerships, tool submissions, or support, feel free to reach out.
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
                  <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-foreground">Name</label>
                        <Input placeholder="Your name" value={name} onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }} />
                        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-foreground">Email</label>
                        <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }} />
                        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-foreground">Subject</label>
                      <Input placeholder="What's this about?" value={subject} onChange={(e) => { setSubject(e.target.value); setErrors((p) => ({ ...p, subject: "" })); }} />
                      {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-foreground">Message</label>
                      <textarea
                        className="flex min-h-[120px] w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        placeholder="Tell us more..."
                        value={message}
                        onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: "" })); }}
                      />
                      {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                    </div>
                    <Button variant="brand" type="submit" className="w-full sm:w-auto">Send Message</Button>
                    <p className="text-xs text-muted-foreground">
                      Or email us directly at{" "}
                      <a href="mailto:hello@ecomstacked.io" className="font-medium text-brand hover:underline">hello@ecomstacked.io</a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 lg:col-span-2">
              {[
                { icon: Mail, title: "Email", desc: "For general inquiries and questions", detail: "hello@ecomstacked.io" },
                { icon: Handshake, title: "Partnerships", desc: "Tool submissions and sponsorship inquiries", detail: "hello@ecomstacked.io" },
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

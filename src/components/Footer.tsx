import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-sm font-bold text-primary-foreground">E</span>
              </div>
              <span className="font-display text-lg font-bold text-foreground">EcomStack</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Helping ecommerce founders discover the best AI and growth tools to scale their businesses.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Navigate</h4>
            <ul className="mt-3 space-y-2">
              {[
                { to: "/" as const, label: "Home" },
                { to: "/tools" as const, label: "Tools" },
                { to: "/blog" as const, label: "Blog" },
                { to: "/about" as const, label: "About" },
                { to: "/contact" as const, label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Categories</h4>
            <ul className="mt-3 space-y-2">
              {["Tracking & Attribution", "AI Content & Ads", "Chat Automation", "Product Research", "CRM & Follow-Up", "Analytics"].map((cat) => (
                <li key={cat}>
                  <Link to="/tools" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-3 space-y-2">
              {[
                { to: "/privacy" as const, label: "Privacy Policy" },
                { to: "/terms" as const, label: "Terms of Service" },
                { to: "/disclaimer" as const, label: "Disclaimer" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} EcomStack. All rights reserved. Independent tool recommendations for ecommerce growth.
          </p>
        </div>
      </div>
    </footer>
  );
}

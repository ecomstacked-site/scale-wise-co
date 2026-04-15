import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-sm font-bold text-primary-foreground">E</span>
              </div>
              <span className="font-display text-lg font-bold text-foreground">EcomStacked</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A resource for ecommerce founders, marketers, and Shopify store owners looking to scale with better tools.
            </p>
            <p className="mt-3 text-xs text-muted-foreground/70">
              This website may earn commissions from affiliate links. We only recommend tools we believe provide real value.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Navigate</h4>
            <ul className="mt-4 space-y-2.5">
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
            <ul className="mt-4 space-y-2.5">
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
            <ul className="mt-4 space-y-2.5">
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
            <div className="mt-6 rounded-lg bg-surface p-3">
              <p className="text-xs font-medium text-foreground">Editorial Independence</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                All recommendations are based on independent research. We never accept paid placements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} EcomStacked. All rights reserved.
          </p>
          <div className="mt-3 flex gap-4 sm:mt-0">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground">Terms</Link>
            <Link to="/disclaimer" className="text-xs text-muted-foreground hover:text-foreground">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/tools", label: "Tools", end: false },
    { to: "/blog", label: "Blog", end: false },
    { to: "/about", label: "About", end: false },
    { to: "/contact", label: "Contact", end: false },
  ];

  const baseClass = "rounded-lg px-3 py-2 text-sm font-medium transition-colors";
  const inactive = "text-muted-foreground hover:bg-accent hover:text-foreground";
  const active = "text-foreground bg-accent";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="font-display text-sm font-bold text-primary-foreground">E</span>
          </div>
          <span className="font-display text-lg font-bold text-foreground">EcomStacked</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `${baseClass} ${isActive ? active : inactive}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/tools">
            <Button variant="brand" size="sm">Browse Reviews</Button>
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-accent md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `${baseClass.replace("py-2", "py-2.5")} ${isActive ? active : inactive}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-3">
            <Link to="/tools" onClick={() => setMobileOpen(false)}>
              <Button variant="brand" className="w-full">Browse Reviews</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

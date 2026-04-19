import { Routes, Route, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import HomePage from "./routes/index";
import AboutPage from "./routes/about";
import BlogPage from "./routes/blog.index";
import BlogPostPage from "./routes/blog.$slug";
import ContactPage from "./routes/contact";
import DisclaimerPage from "./routes/disclaimer";
import PrivacyPage from "./routes/privacy";
import TermsPage from "./routes/terms";
import ToolsPage from "./routes/tools.index";
import ProductResearchPage from "./routes/tools.product-research";
import TrendtrackReview from "./routes/tools.trendtrack-review";
import WeTrackedReview from "./routes/tools.wetracked-review";
import WeTrackedVsTripleWhale from "./routes/wetracked-vs-triple-whale";
import { Navigate } from "react-router-dom";

// Brand-specific affiliate destinations.
// Each /go/[brand] route resolves to the matching destination below
// after a short, visible transition page. This preserves Google Ads
// compliance (no bridge page / no system circumvention) while still
// giving us a single internal hop where we can fire analytics.
const affiliateLinks: Record<string, { url: string; name: string }> = {
  trendtrack: {
    url: "https://trendtrack.io?fpr=stacked45",
    name: "Trendtrack",
  },
  wetracked: {
    url: "https://www.wetracked.io/?ref=ddf2eabf-bf17-4363-aaef-585e9c4e763a",
    name: "WeTracked",
  },
  "holo-ai": {
    url: "https://tryholo.ai/?utm_medium=affiliate&utm_source=4988344&utm_campaign=41932&im_ref=VR4UEcxOMxyZW1iwCnQUZz87Uku1QdzxZTtOR00&utm_ad_id=3273895&irgwc=1&afsrc=1",
    name: "Holo AI",
  },
  manychat: {
    url: "https://manychat.com/?irclickid=VnSTflW-KxycRDrzAA0SXwH3Ukpy-iUnJQllWI0&irgwc=1&utm_source=Affiliate&utm_content=LETHUY&utm_medium=Impact&utm_campaign=Online%20Tracking%20Link",
    name: "ManyChat",
  },
  everbee: {
    url: "https://www.everbee.io/?via=EcomStack",
    name: "Everbee",
  },
  easyship: {
    url: "https://www.easyship.com/?utm_campaign=4988344&utm_term=10435&utm_content=666308&utm_medium=affiliate&irclickid=1Sd0JU24pxyZWXzxnEWLWz28Uku1lr3BZTtIxE0&irgwc=1&afsrc=1&utm_source=LETHUY",
    name: "Easyship",
  },
  systeme: {
    url: "https://systeme.io/?sa=sa0246910810ba30b29294f24dd70d00c490781e19",
    name: "Systeme.io",
  },
  gohighlevel: {
    url: "https://www.gohighlevel.com/?fp_ref=ecomstack",
    name: "GoHighLevel",
  },
  "weshop-ai": {
    url: "https://www.weshop.ai/?fpr=ecomstack",
    name: "WeShop AI",
  },
  pictory: {
    url: "https://pictory.ai?ref=ecomstacked",
    name: "Pictory",
  },
};

const REDIRECT_DELAY_MS = 1500;

function GoRedirect() {
  const { tool } = useParams<{ tool: string }>();
  const entry = tool ? affiliateLinks[tool] : undefined;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!entry) return;
    const timer = window.setTimeout(() => {
      window.location.href = entry.url;
    }, REDIRECT_DELAY_MS);
    const visibleTimer = window.setTimeout(() => setReady(true), 250);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(visibleTimer);
    };
  }, [entry]);

  if (!entry) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Tool not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We couldn't find that destination.
          </p>
          <Link
            to="/tools"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse all tools
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Helmet>
        <title>Redirecting to {entry.name}…</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="max-w-md text-center">
        <div
          className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-muted border-t-primary"
          aria-hidden="true"
        />
        <h1 className="mt-6 font-display text-xl font-semibold text-foreground">
          Redirecting to {entry.name}…
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Taking you to the official {entry.name} website.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/80">
          This page may contain affiliate links. We may earn a commission at no extra cost to you.
        </p>
        {ready && (
          <a
            href={entry.url}
            rel="noopener noreferrer nofollow"
            className="mt-6 inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Click here if you are not redirected
          </a>
        )}
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="/tools/product-research" element={<ProductResearchPage />} />
      <Route path="/tools/trendtrack-review" element={<TrendtrackReview />} />
      <Route path="/tools/wetracked-review" element={<WeTrackedReview />} />
      <Route path="/wetracked-vs-triple-whale" element={<WeTrackedVsTripleWhale />} />
      <Route path="/best-ad-tracking-tools" element={<Navigate to="/blog/best-ad-tracking-tools-2026" replace />} />
      <Route path="/blog/wetracked-review" element={<Navigate to="/tools/wetracked-review" replace />} />
      <Route path="/go/:tool" element={<GoRedirect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

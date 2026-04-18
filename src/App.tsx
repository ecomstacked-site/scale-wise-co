import { Routes, Route, Link, useParams } from "react-router-dom";
import { useEffect } from "react";
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
import { Navigate } from "react-router-dom";

const affiliateLinks: Record<string, string> = {
  trendtrack: "https://trendtrack.io?fpr=stacked45",
  wetracked: "https://www.wetracked.io/?ref=ddf2eabf-bf17-4363-aaef-585e9c4e763a",
  "holo-ai": "https://tryholo.ai/?utm_medium=affiliate&utm_source=4988344&utm_campaign=41932&im_ref=VR4UEcxOMxyZW1iwCnQUZz87Uku1QdzxZTtOR00&utm_ad_id=3273895&irgwc=1&afsrc=1",
  manychat: "https://manychat.com/?irclickid=VnSTflW-KxycRDrzAA0SXwH3Ukpy-iUnJQllWI0&irgwc=1&utm_source=Affiliate&utm_content=LETHUY&utm_medium=Impact&utm_campaign=Online%20Tracking%20Link",
  everbee: "https://www.everbee.io/?via=EcomStack",
  easyship: "https://www.easyship.com/?utm_campaign=4988344&utm_term=10435&utm_content=666308&utm_medium=affiliate&irclickid=1Sd0JU24pxyZWXzxnEWLWz28Uku1lr3BZTtIxE0&irgwc=1&afsrc=1&utm_source=LETHUY",
  systeme: "https://systeme.io/?sa=sa0246910810ba30b29294f24dd70d00c490781e19",
  gohighlevel: "https://www.gohighlevel.com/?fp_ref=ecomstack",
  "weshop-ai": "https://www.weshop.ai/?fpr=ecomstack",
};

function GoRedirect() {
  const { tool } = useParams<{ tool: string }>();
  const url = tool ? affiliateLinks[tool] : undefined;

  useEffect(() => {
    if (url) window.location.replace(url);
  }, [url]);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: 16, color: "#555" }}>Redirecting…</p>
        {url ? (
          <p style={{ marginTop: 12, fontSize: 13, color: "#888" }}>
            If you are not redirected,{" "}
            <a href={url} rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline" }}>click here</a>.
          </p>
        ) : (
          <p style={{ marginTop: 12, fontSize: 13, color: "#888" }}>
            Tool not found. <Link to="/" style={{ color: "#2563eb", textDecoration: "underline" }}>Go home</Link>.
          </p>
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
      <Route path="/best-ad-tracking-tools" element={<Navigate to="/blog/best-ad-tracking-tools-2026" replace />} />
      <Route path="/blog/wetracked-review" element={<Navigate to="/tools/wetracked-review" replace />} />
      <Route path="/go/:tool" element={<GoRedirect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

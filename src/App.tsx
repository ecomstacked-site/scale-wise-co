import { Routes, Route, Link, Navigate } from "react-router-dom";
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
import WeTrackedReview from "./routes/tools.wetracked-review";
import WeTrackedVsTripleWhale from "./routes/wetracked-vs-triple-whale";
import WinningHunterPage from "./routes/tools.winninghunter";
import WinningHunterReviewPage from "./routes/tools.winninghunter-review";
import HoloAiPage from "./routes/tools.holo-ai";
import BestProductResearchToolsPage from "./routes/best-product-research-tools";
import BestProductResearchToolsForShopifyPage from "./routes/best-product-research-tools-for-shopify";
import BestTikTokAdSpyToolsPage from "./routes/best-tiktok-ad-spy-tools";
import BestAIVideoToolsRoute from "./routes/best-ai-video-tools";
import BestAIWebsiteBuildersForEcommerceRoute from "./routes/best-ai-website-builders-for-ecommerce";
import HoloAiReviewRoute from "./routes/holo-ai-review";
import HoloAiVsPictoryRoute from "./routes/holo-ai-vs-pictory";

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
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/terms-of-service" element={<TermsPage />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="/tools/product-research" element={<ProductResearchPage />} />
      <Route path="/tools/wetracked-review" element={<WeTrackedReview />} />
      <Route path="/tools/winninghunter" element={<WinningHunterPage />} />
      <Route path="/tools/winninghunter-review" element={<WinningHunterReviewPage />} />
      <Route path="/tools/holo-ai" element={<HoloAiPage />} />
      {/* Removed monetization for these tools — redirect old URLs to the directory */}
      <Route path="/tools/trendtrack-review" element={<Navigate to="/tools" replace />} />
      <Route path="/tools/manychat" element={<Navigate to="/tools" replace />} />
      <Route path="/tools/weshop-ai" element={<Navigate to="/tools" replace />} />
      <Route path="/tools/gohighlevel" element={<Navigate to="/tools" replace />} />
      <Route path="/tools/everbee" element={<Navigate to="/tools" replace />} />
      <Route path="/tools/easyship" element={<Navigate to="/tools" replace />} />
      <Route path="/tools/systeme" element={<Navigate to="/tools" replace />} />
      <Route path="/best-product-research-tools" element={<BestProductResearchToolsPage />} />
      <Route path="/best-product-research-tools-for-shopify" element={<BestProductResearchToolsForShopifyPage />} />
      <Route path="/best-tiktok-ad-spy-tools" element={<BestTikTokAdSpyToolsPage />} />
      <Route path="/best-ai-video-tools" element={<BestAIVideoToolsRoute />} />
      <Route path="/best-ai-website-builders-for-ecommerce" element={<BestAIWebsiteBuildersForEcommerceRoute />} />
      <Route path="/holo-ai-review" element={<HoloAiReviewRoute />} />
      <Route path="/holo-ai-vs-pictory" element={<HoloAiVsPictoryRoute />} />
      <Route path="/wetracked-vs-triple-whale" element={<WeTrackedVsTripleWhale />} />
      <Route path="/blog/wetracked-vs-triple-whale" element={<WeTrackedVsTripleWhale />} />
      <Route path="/best-ad-tracking-tools" element={<Navigate to="/blog/best-ad-tracking-tools-2026" replace />} />
      {/* /blog/wetracked-review now serves real informational content via BlogPostPage */}
      {/* Removed /go/ redirect routes — all affiliate links now use direct external URLs */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

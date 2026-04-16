import { createFileRoute } from "@tanstack/react-router";

const affiliateLinks: Record<string, string> = {
  wetracked: "https://www.wetracked.io/?ref=ddf2eabf-bf17-4363-aaef-585e9c4e763a",
  "holo-ai": "https://tryholo.ai/?utm_medium=affiliate&utm_source=4988344&utm_campaign=41932&im_ref=VR4UEcxOMxyZW1iwCnQUZz87Uku1QdzxZTtOR00&utm_ad_id=3273895&irgwc=1&afsrc=1",
  manychat: "https://manychat.com/?irclickid=VnSTflW-KxycRDrzAA0SXwH3Ukpy-iUnJQllWI0&irgwc=1&utm_source=Affiliate&utm_content=LETHUY&utm_medium=Impact&utm_campaign=Online%20Tracking%20Link",
  everbee: "https://www.everbee.io/?via=EcomStack",
  easyship: "https://www.easyship.com/?utm_campaign=4988344&utm_term=10435&utm_content=666308&utm_medium=affiliate&irclickid=1Sd0JU24pxyZWXzxnEWLWz28Uku1lr3BZTtIxE0&irgwc=1&afsrc=1&utm_source=LETHUY",
  systeme: "https://systeme.io/?sa=sa0246910810ba30b29294f24dd70d00c490781e19",
  gohighlevel: "https://www.gohighlevel.com/?fp_ref=ecomstack",
  "weshop-ai": "https://www.weshop.ai/?fpr=ecomstack",
};

export const Route = createFileRoute("/go/$tool")({
  component: RedirectPage,
});

function RedirectPage() {
  const { tool } = Route.useParams();
  const url = affiliateLinks[tool];

  if (url && typeof window !== "undefined") {
    window.location.replace(url);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "16px", color: "#555" }}>Redirecting…</p>
        {url ? (
          <p style={{ marginTop: "12px", fontSize: "13px", color: "#888" }}>
            If you are not redirected automatically,{" "}
            <a href={url} rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline" }}>
              click here
            </a>.
          </p>
        ) : (
          <p style={{ marginTop: "12px", fontSize: "13px", color: "#888" }}>
            Tool not found. <a href="/" style={{ color: "#2563eb", textDecoration: "underline" }}>Go back home</a>.
          </p>
        )}
      </div>
    </div>
  );
}

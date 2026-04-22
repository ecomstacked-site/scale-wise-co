import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";

const HelmetCompat = Helmet as unknown as ({ children }: { children: ReactNode }) => JSX.Element;

export interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function SEO({ title, description, ogTitle, ogDescription, ogImage, ogType, keywords, noIndex, canonical }: SEOProps) {
  return (
    <HelmetCompat>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      {ogType && <meta property="og:type" content={ogType} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      <meta name="twitter:title" content={ogTitle ?? title} />
      <meta name="twitter:description" content={ogDescription ?? description} />
    </HelmetCompat>
  );
}

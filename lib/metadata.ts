import type { Metadata } from "next";

/**
 * Site-wide defaults. These values are inherited by every page unless
 * explicitly overridden via the `generatePageMetadata` helper.
 *
 * Update this object once to apply changes across the entire site.
 */
export const siteMetadata: Metadata = {
  metadataBase: new URL("https://acme.com"),
  title: {
    // Shown on individual pages as: "<page title> | Acme"
    // Shown on the root layout (no segment) as: "Acme"
    template: "%s | Acme",
    default: "Acme",
  },
  description:
    "Acme — building tools that help teams move faster and ship with confidence.",
  keywords: ["Acme", "SaaS", "productivity", "tools"],
  authors: [{ name: "Acme", url: "https://acme.com" }],
  creator: "Acme",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://acme.com",
    siteName: "Acme",
    title: {
      template: "%s | Acme",
      default: "Acme",
    },
    description:
      "Acme — building tools that help teams move faster and ship with confidence.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Acme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@acme",
    creator: "@acme",
    title: {
      template: "%s | Acme",
      default: "Acme",
    },
    description:
      "Acme — building tools that help teams move faster and ship with confidence.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Page-level metadata overrides.
 *
 * Every field is optional. Provided fields are merged shallowly on top of
 * `siteMetadata`. Nested objects (openGraph, twitter) are replaced entirely
 * when supplied, so include all desired sub-fields when overriding them.
 *
 * Example usage inside any page file:
 *
 *   export const metadata = generatePageMetadata({
 *     title: "Contact",
 *     description: "Get in touch with the Acme team.",
 *   });
 */
export function generatePageMetadata(overrides: Metadata): Metadata {
  return {
    ...siteMetadata,
    ...overrides,
    // Preserve the title template when only a string title is given
    title: overrides.title ?? siteMetadata.title,
    openGraph: {
      ...(siteMetadata.openGraph ?? {}),
      ...(overrides.openGraph ?? {}),
      // Sync the page title into openGraph unless the caller provided a full
      // openGraph override with its own title
      title:
        overrides.openGraph?.title ??
        overrides.title ??
        siteMetadata.openGraph?.title,
      description:
        overrides.openGraph?.description ??
        overrides.description ??
        siteMetadata.openGraph?.description,
    },
    twitter: {
      ...(siteMetadata.twitter ?? {}),
      ...(overrides.twitter ?? {}),
      title:
        overrides.twitter?.title ??
        overrides.title ??
        siteMetadata.twitter?.title,
      description:
        overrides.twitter?.description ??
        overrides.description ??
        siteMetadata.twitter?.description,
    },
  };
}

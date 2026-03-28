# Metadata Pattern

This document explains how to add SEO and social metadata to any page in this
Next.js App Router project.

---

## Overview

All metadata is centrally managed from `lib/metadata.ts`. This file exports:

| Export | Purpose |
|---|---|
| `siteMetadata` | Site-wide defaults used by the root layout and inherited by every page |
| `generatePageMetadata(overrides)` | Helper that merges per-page values on top of `siteMetadata` |

The root layout (`app/layout.tsx`) sets `siteMetadata` as the default. Every
page can then call `generatePageMetadata` with only the fields it needs to
override. Fields that are not overridden automatically inherit the site defaults.

---

## Adding Metadata to a New Page

### Step 1 — Import the helper and Next.js `Metadata` type

```ts
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
```

### Step 2 — Export a `metadata` constant before the page component

```ts
export const metadata: Metadata = generatePageMetadata({
  title: "Pricing",
  description: "Simple, transparent pricing that grows with your team.",
});
```

The `title` value is automatically inserted into the template defined in
`siteMetadata`, so the browser tab will read **"Pricing | Acme"**.

### Step 3 — No further changes needed

The `openGraph` and `twitter` fields in `siteMetadata` are picked up
automatically. The helper copies the `title` and `description` overrides into
both social cards unless you supply your own `openGraph` or `twitter` object.

---

## Full Example — a new Pricing page

```ts
// app/pricing/page.tsx
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Pricing",
  description: "Simple, transparent pricing that grows with your team.",
  openGraph: {
    url: "https://acme.com/pricing",
  },
});

export default function PricingPage() {
  return (
    // ... page JSX
  );
}
```

The resulting metadata for this page will be:

- **Browser title:** Pricing | Acme
- **Meta description:** Simple, transparent pricing that grows with your team.
- **og:title:** Pricing | Acme
- **og:description:** Simple, transparent pricing...
- **og:image:** /og-default.png (inherited from siteMetadata)
- **og:url:** https://acme.com/pricing (overridden)
- **twitter:card:** summary_large_image (inherited)

---

## Providing a Custom OG Image

Pass a full `openGraph` object when you need a page-specific social image. You
must repeat any site defaults you want to keep, because the `openGraph` key is
merged shallowly.

```ts
export const metadata: Metadata = generatePageMetadata({
  title: "Launch Week",
  description: "Five days of announcements you won't want to miss.",
  openGraph: {
    url: "https://acme.com/launch",
    images: [
      {
        url: "/og-launch-week.png",
        width: 1200,
        height: 630,
        alt: "Acme Launch Week",
      },
    ],
  },
});
```

---

## Updating Site-Wide Defaults

Edit `lib/metadata.ts` directly. Every page that does not explicitly override a
field will immediately reflect the new default — no page-level changes required.

Fields most commonly updated:

- `metadataBase` — the canonical base URL (important for absolute og:url)
- `title.template` — the title suffix appended to every page title
- `description` — the fallback meta description
- `openGraph.images` — the default social sharing image
- `twitter.site` — the site's Twitter/X handle

---

## Reference — `generatePageMetadata` Merge Behaviour

| Field | Behaviour |
|---|---|
| Top-level scalars (`title`, `description`, `keywords`, …) | Override replaces the default |
| `openGraph` | Shallow merge; then `title` and `description` are synced from the top-level overrides if not explicitly set in `openGraph` |
| `twitter` | Same as `openGraph` |
| Anything not provided in `overrides` | Falls back to `siteMetadata` value |

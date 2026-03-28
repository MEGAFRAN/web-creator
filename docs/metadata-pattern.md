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
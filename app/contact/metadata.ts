import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Get in touch with the Acme team. Fill out the form and we'll get back to you within 24 hours.",
  openGraph: {
    url: "https://acme.com/contact",
  },
});

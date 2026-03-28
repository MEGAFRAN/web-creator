import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description:
    "Learn about Alex Morgan — full-stack web developer, open-source contributor, and occasional conference speaker based in San Francisco.",
});

import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Services",
  description:
    "Full-stack web development services — from bespoke web applications to performance audits and technical consulting.",
});

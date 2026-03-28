import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Alex Morgan — Full-Stack Web Developer",
  description:
    "I design and build fast, modern web applications. Available for freelance projects and full-time roles.",
});

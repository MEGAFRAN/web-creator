import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Work",
  description:
    "Selected case studies and portfolio projects — web applications, platforms, and developer tools built by Alex Morgan.",
});

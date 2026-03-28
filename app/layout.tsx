import fs from "fs";
import path from "path";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { siteMetadata } from "@/lib/metadata";
import type { Theme } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = siteMetadata;

function buildCssVars(theme: Theme): string {
  return `
    :root {
      --theme-primary: ${theme.colors.primary};
      --theme-primaryFg: ${theme.colors.primaryFg};
      --theme-background: ${theme.colors.background};
      --theme-foreground: ${theme.colors.foreground};
      --theme-muted: ${theme.colors.muted};
      --theme-mutedBg: ${theme.colors.mutedBg};
      --theme-border: ${theme.colors.border};
      --theme-destructive: ${theme.colors.destructive};
      --theme-destructiveFg: ${theme.colors.destructiveFg};
      --theme-radius-sm: ${theme.borderRadius.sm};
      --theme-radius-md: ${theme.borderRadius.md};
      --theme-radius-lg: ${theme.borderRadius.lg};
      --theme-radius-full: ${theme.borderRadius.full};
      --theme-font-family: ${theme.typography.fontFamily};
      --theme-font-size-base: ${theme.typography.fontSizeBase};
      --theme-font-weight-heading: ${theme.typography.fontWeightHeading};
      --theme-font-weight-body: ${theme.typography.fontWeightBody};
      --theme-line-height-base: ${theme.typography.lineHeightBase};
      --theme-container-max-width: ${theme.spacing.containerMaxWidth};
      --theme-section-padding-y: ${theme.spacing.sectionPaddingY};
    }
  `.trim();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themePath = path.join(process.cwd(), "lib", "theme.json");
  const theme = JSON.parse(fs.readFileSync(themePath, "utf-8")) as Theme;
  const cssVars = buildCssVars(theme);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar
          logo="Alex Morgan"
          links={[
            { label: "Services", href: "services" },
            { label: "Work", href: "work" },
            { label: "About", href: "about" },
            { label: "Contact", href: "contact" },
          ]}
          ctaLabel="Hire Me"
        />
        <main className="flex-1">{children}</main>
        <Footer
          columns={[
            {
              title: "Navigation",
              links: [
                { label: "Services", href: "services" },
                { label: "Work", href: "work" },
                { label: "About", href: "about" },
                { label: "Contact", href: "contact" },
              ],
            },
            {
              title: "Connect",
              links: [
                { label: "GitHub", href: "https://github.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Twitter / X", href: "https://x.com" },
                { label: "Resume (PDF)", href: "/resume.pdf" },
              ],
            },
          ]}
          copyright="© 2026 Alex Morgan. All rights reserved."
        />
      </body>
    </html>
  );
}

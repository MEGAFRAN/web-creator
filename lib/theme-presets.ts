import type { Theme } from "./theme";

export const minimalist: Theme = {
  colors: {
    primary: "#000000",
    primaryFg: "#ffffff",
    background: "#ffffff",
    foreground: "#000000",
    muted: "#737373",
    mutedBg: "#fafafa",
    border: "#e5e5e5",
    destructive: "#dc2626",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "600",
    fontWeightBody: "400",
    lineHeightBase: "1.5",
  },
  spacing: {
    containerMaxWidth: "64rem",
    sectionPaddingY: "4rem",
  },
  borderRadius: {
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.375rem",
    full: "9999px",
  },
};

export const modern: Theme = {
  colors: {
    primary: "#6366f1",
    primaryFg: "#ffffff",
    background: "#0f172a",
    foreground: "#f8fafc",
    muted: "#94a3b8",
    mutedBg: "#1e293b",
    border: "#334155",
    destructive: "#ef4444",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Inter, sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "700",
    fontWeightBody: "400",
    lineHeightBase: "1.6",
  },
  spacing: {
    containerMaxWidth: "72rem",
    sectionPaddingY: "5rem",
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "1rem",
    full: "9999px",
  },
};

export const yellowBlack: Theme = {
  colors: {
    primary: "#facc15",
    primaryFg: "#000000",
    background: "#000000",
    foreground: "#ffffff",
    muted: "#a3a3a3",
    mutedBg: "#171717",
    border: "#404040",
    destructive: "#ef4444",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial Black, sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "900",
    fontWeightBody: "400",
    lineHeightBase: "1.5",
  },
  spacing: {
    containerMaxWidth: "72rem",
    sectionPaddingY: "5rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
};

export const professional: Theme = {
  colors: {
    primary: "#1d4ed8",
    primaryFg: "#ffffff",
    background: "#ffffff",
    foreground: "#1e3a5f",
    muted: "#64748b",
    mutedBg: "#f8fafc",
    border: "#e2e8f0",
    destructive: "#dc2626",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Inter, var(--font-geist-sans), sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "700",
    fontWeightBody: "400",
    lineHeightBase: "1.5",
  },
  spacing: {
    containerMaxWidth: "72rem",
    sectionPaddingY: "5rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
};

export const presets: Record<string, Theme> = {
  minimalist,
  modern,
  yellowBlack,
  professional,
};

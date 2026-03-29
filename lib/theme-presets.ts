import { createTheme } from "./theme-utils";
import { defaultTheme } from "./theme";
import type { Theme } from "./theme";

export const minimalist: Theme = createTheme(defaultTheme, {
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
});

export const modern: Theme = createTheme(defaultTheme, {
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
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "1rem",
    full: "9999px",
  },
});

export const yellowBlack: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#facc15",      
    primaryFg: "#000000",    
    background: "#000000",
    foreground: "#ffffff",
    muted: "#a3a3a3",
    mutedBg: "#171717",
    border: "#713f12",
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
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
});

export const professional: Theme = createTheme(defaultTheme, {
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
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
});

export const warmEarth: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#c2500f",
    primaryFg: "#ffffff",
    background: "#faf7f2",
    foreground: "#2c1f14",
    muted: "#8c7b6b",
    mutedBg: "#f0e8de",
    border: "#d9cec3",
    destructive: "#b91c1c",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "700",
    fontWeightBody: "400",
    lineHeightBase: "1.65",
  },
  spacing: {
    containerMaxWidth: "68rem",
    sectionPaddingY: "6rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    full: "9999px",
  },
});

export const midnightJewel: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#10b981",
    primaryFg: "#ffffff",
    background: "#0d1117",
    foreground: "#e8edf2",
    muted: "#6b7f94",
    mutedBg: "#161d27",
    border: "#253144",
    destructive: "#f87171",
    destructiveFg: "#1a0a0a",
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Inter, 'DM Sans', sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "600",
    fontWeightBody: "400",
    lineHeightBase: "1.6",
  },
  spacing: {
    containerMaxWidth: "80rem",
    sectionPaddingY: "5rem",
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "1.25rem",
    full: "9999px",
  },
});

/**
 * Target client: Independent restaurants, cafes, food trucks, catering businesses
 * Mood: warm, indulgent, inviting, artisanal, rich
 */
export const bistro: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#c8860a",
    primaryFg: "#fdf8ee",
    background: "#1e1209",
    foreground: "#f5e6cc",
    muted: "#a88a6a",
    mutedBg: "#2c1c0e",
    border: "#4a2e14",
    destructive: "#c0392b",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Georgia, 'Palatino Linotype', serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "700",
    fontWeightBody: "400",
    lineHeightBase: "1.65",
  },
  spacing: {
    containerMaxWidth: "72rem",
    sectionPaddingY: "6rem",
  },
  borderRadius: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    full: "9999px",
  },
});

/**
 * Target client: Juice bars, health food cafes, organic grocery stores, meal-prep delivery services
 * Mood: fresh, healthy, clean, vibrant, light
 */
export const freshMint: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#0d9e7e",
    primaryFg: "#ffffff",
    background: "#ffffff",
    foreground: "#0f2620",
    muted: "#5a8a7a",
    mutedBg: "#f0faf7",
    border: "#b8e4d8",
    destructive: "#e53e3e",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Inter, var(--font-geist-sans), sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "600",
    fontWeightBody: "400",
    lineHeightBase: "1.55",
  },
  spacing: {
    containerMaxWidth: "72rem",
    sectionPaddingY: "5rem",
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.625rem",
    lg: "1rem",
    full: "9999px",
  },
});

/**
 * Target client: Yoga studios, meditation coaches, therapists, wellness retreat centers, holistic practitioners
 * Mood: calm, grounded, mindful, serene, natural
 */
export const zenith: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#7a9e7e",
    primaryFg: "#ffffff",
    background: "#fdfaf6",
    foreground: "#2e2a24",
    muted: "#8c8278",
    mutedBg: "#f5f0ea",
    border: "#d6cfc4",
    destructive: "#b85c50",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Georgia, 'Book Antiqua', Palatino, serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "600",
    fontWeightBody: "400",
    lineHeightBase: "1.75",
  },
  spacing: {
    containerMaxWidth: "68rem",
    sectionPaddingY: "6rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    full: "9999px",
  },
});

/**
 * Target client: Personal trainers, CrossFit gyms, martial arts studios, sports performance coaches
 * Mood: powerful, intense, bold, disciplined, energetic
 */
export const ironClad: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#d4230a",
    primaryFg: "#ffffff",
    background: "#0a0a0a",
    foreground: "#f5f5f5",
    muted: "#888888",
    mutedBg: "#141414",
    border: "#2a2a2a",
    destructive: "#ff2222",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "'Arial Black', 'Impact', var(--font-geist-sans), sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "900",
    fontWeightBody: "400",
    lineHeightBase: "1.4",
  },
  spacing: {
    containerMaxWidth: "72rem",
    sectionPaddingY: "4rem",
  },
  borderRadius: {
    sm: "0",
    md: "0",
    lg: "0",
    full: "9999px",
  },
});

/**
 * Target client: Hair salons, nail studios, estheticians, makeup artists, beauty subscription services
 * Mood: elegant, soft, feminine, luxurious, delicate
 */
export const blush: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#c47a85",
    primaryFg: "#ffffff",
    background: "#fdf6f6",
    foreground: "#3a1f24",
    muted: "#a87880",
    mutedBg: "#faeaec",
    border: "#e8c4ca",
    destructive: "#be3a3a",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Inter, var(--font-geist-sans), 'Helvetica Neue', sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "300",
    fontWeightBody: "400",
    lineHeightBase: "1.65",
  },
  spacing: {
    containerMaxWidth: "68rem",
    sectionPaddingY: "5rem",
  },
  borderRadius: {
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    full: "9999px",
  },
});

/**
 * Target client: High-end hair colorists, luxury spa brands, premium skincare lines, editorial makeup artists
 * Mood: luxurious, editorial, sophisticated, dramatic, premium
 */
export const noirBeauty: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#c9a84c",
    primaryFg: "#000000",
    background: "#000000",
    foreground: "#f5f0e8",
    muted: "#888070",
    mutedBg: "#0f0f0f",
    border: "#2a2520",
    destructive: "#cc3333",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Georgia, 'Times New Roman', 'Didot', serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "300",
    fontWeightBody: "400",
    lineHeightBase: "1.6",
  },
  spacing: {
    containerMaxWidth: "72rem",
    sectionPaddingY: "4.5rem",
  },
  borderRadius: {
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.375rem",
    full: "9999px",
  },
});

/**
 * Target client: Photographers, illustrators, graphic designers, architects, interior designers
 * Mood: minimal, gallery-like, refined, spacious, confident
 */
export const canvas: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#000000",
    primaryFg: "#ffffff",
    background: "#f9f9f9",
    foreground: "#111111",
    muted: "#666666",
    mutedBg: "#f0f0f0",
    border: "#dedede",
    destructive: "#cc2200",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Inter, var(--font-geist-sans), 'Helvetica Neue', sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "600",
    fontWeightBody: "400",
    lineHeightBase: "1.55",
  },
  spacing: {
    containerMaxWidth: "76rem",
    sectionPaddingY: "7rem",
  },
  borderRadius: {
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.375rem",
    full: "9999px",
  },
});

/**
 * Target client: Motion designers, digital artists, music producers, creative agencies targeting younger audiences
 * Mood: creative, bold, expressive, digital, youthful
 */
export const neonStudio: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#a020f0",
    primaryFg: "#ffffff",
    background: "#111118",
    foreground: "#eeeeff",
    muted: "#8888aa",
    mutedBg: "#1a1a28",
    border: "#2e2e44",
    destructive: "#ff4466",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Inter, var(--font-geist-sans), 'DM Sans', sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "700",
    fontWeightBody: "400",
    lineHeightBase: "1.6",
  },
  spacing: {
    containerMaxWidth: "72rem",
    sectionPaddingY: "5.5rem",
  },
  borderRadius: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.75rem",
    full: "9999px",
  },
});

/**
 * Target client: Real estate agents, mortgage brokers, property managers, luxury home builders
 * Mood: trustworthy, authoritative, established, premium, classic
 */
export const estate: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#0f2d52",
    primaryFg: "#ffffff",
    background: "#ffffff",
    foreground: "#0f1f30",
    muted: "#607080",
    mutedBg: "#f4f6f8",
    border: "#c8c0b0",
    destructive: "#b91c1c",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Georgia, 'Palatino Linotype', 'Book Antiqua', serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "700",
    fontWeightBody: "400",
    lineHeightBase: "1.6",
  },
  spacing: {
    containerMaxWidth: "80rem",
    sectionPaddingY: "5rem",
  },
  borderRadius: {
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.375rem",
    full: "9999px",
  },
});

/**
 * Target client: Interior designers, home stagers, renovation contractors, furniture boutiques, cleaning services
 * Mood: cozy, welcoming, domestic, warm, approachable
 */
export const hearth: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#b5451b",
    primaryFg: "#ffffff",
    background: "#faf8f5",
    foreground: "#2c1f18",
    muted: "#8a7060",
    mutedBg: "#f0ebe2",
    border: "#ddd0c0",
    destructive: "#a61c1c",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Inter, var(--font-geist-sans), 'DM Sans', sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "500",
    fontWeightBody: "400",
    lineHeightBase: "1.65",
  },
  spacing: {
    containerMaxWidth: "72rem",
    sectionPaddingY: "5.5rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.875rem",
    full: "9999px",
  },
});

/**
 * Target client: Business consultants, accountants, financial advisors, HR consultants, legal services
 * Mood: trustworthy, precise, intelligent, calm, credible
 */
export const clarity: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#2d4a7a",
    primaryFg: "#ffffff",
    background: "#ffffff",
    foreground: "#1a2a3a",
    muted: "#5a6a7a",
    mutedBg: "#f6f8fa",
    border: "#dde2e8",
    destructive: "#c0392b",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Inter, var(--font-geist-sans), 'Helvetica Neue', sans-serif",
    fontSizeBase: "1.0625rem",
    fontWeightHeading: "600",
    fontWeightBody: "400",
    lineHeightBase: "1.6",
  },
  spacing: {
    containerMaxWidth: "76rem",
    sectionPaddingY: "5.5rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
});

/**
 * Target client: Life coaches, business coaches, executive coaches, career advisors, organizational development consultants
 * Mood: insightful, approachable, growth-oriented, balanced, professional
 */
export const sageConsulting: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#2d5a3d",
    primaryFg: "#ffffff",
    background: "#f4f7f4",
    foreground: "#1a2e22",
    muted: "#5e7a64",
    mutedBg: "#eaf0ea",
    border: "#c0d4c4",
    destructive: "#b05020",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Inter, var(--font-geist-sans), 'DM Sans', sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "500",
    fontWeightBody: "400",
    lineHeightBase: "1.75",
  },
  spacing: {
    containerMaxWidth: "72rem",
    sectionPaddingY: "5.5rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.875rem",
    full: "9999px",
  },
});

/**
 * Target client: General e-commerce stores, boutique product shops, handmade goods sellers, direct-to-consumer brands
 * Mood: clean, commercial, bright, versatile, accessible
 */
export const shopfront: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#e8602c",
    primaryFg: "#ffffff",
    background: "#ffffff",
    foreground: "#1a1a1a",
    muted: "#6b7280",
    mutedBg: "#f9fafb",
    border: "#e5e7eb",
    destructive: "#dc2626",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Inter, var(--font-geist-sans), sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "600",
    fontWeightBody: "400",
    lineHeightBase: "1.5",
  },
  spacing: {
    containerMaxWidth: "76rem",
    sectionPaddingY: "4rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    full: "9999px",
  },
});

/**
 * Target client: Vintage clothing stores, record shops, indie bookstores, artisan product brands
 * Mood: nostalgic, warm, characterful, indie, atmospheric
 */
export const duskMarket: Theme = createTheme(defaultTheme, {
  colors: {
    primary: "#c8920a",
    primaryFg: "#1c1410",
    background: "#1c1410",
    foreground: "#f0e0c0",
    muted: "#9a7a50",
    mutedBg: "#261c14",
    border: "#5a3e28",
    destructive: "#cc3322",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "Inter, var(--font-geist-sans), 'DM Sans', sans-serif",
    fontSizeBase: "1rem",
    fontWeightHeading: "600",
    fontWeightBody: "400",
    lineHeightBase: "1.65",
  },
  spacing: {
    containerMaxWidth: "72rem",
    sectionPaddingY: "5rem",
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.625rem",
    lg: "1rem",
    full: "9999px",
  },
});

export const presets: Record<string, Theme> = {
  minimalist,
  modern,
  yellowBlack,
  professional,
  warmEarth,
  midnightJewel,
  bistro,
  freshMint,
  zenith,
  ironClad,
  blush,
  noirBeauty,
  canvas,
  neonStudio,
  estate,
  hearth,
  clarity,
  sageConsulting,
  shopfront,
  duskMarket,
};

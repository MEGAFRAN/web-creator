"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presets = exports.midnightJewel = exports.warmEarth = exports.professional = exports.yellowBlack = exports.modern = exports.minimalist = void 0;
const theme_utils_1 = require("./theme-utils");
const theme_1 = require("./theme");
exports.minimalist = (0, theme_utils_1.createTheme)(theme_1.defaultTheme, {
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
exports.modern = (0, theme_utils_1.createTheme)(theme_1.defaultTheme, {
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
exports.yellowBlack = (0, theme_utils_1.createTheme)(theme_1.defaultTheme, {
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
exports.professional = (0, theme_utils_1.createTheme)(theme_1.defaultTheme, {
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
exports.warmEarth = (0, theme_utils_1.createTheme)(theme_1.defaultTheme, {
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
exports.midnightJewel = (0, theme_utils_1.createTheme)(theme_1.defaultTheme, {
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
exports.presets = {
    minimalist: exports.minimalist,
    modern: exports.modern,
    yellowBlack: exports.yellowBlack,
    professional: exports.professional,
    warmEarth: exports.warmEarth,
    midnightJewel: exports.midnightJewel,
};

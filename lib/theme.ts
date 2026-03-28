export type Theme = {
  colors: {
    primary: string;
    primaryFg: string;
    background: string;
    foreground: string;
    muted: string;
    mutedBg: string;
    border: string;
    destructive: string;
    destructiveFg: string;
  };
  typography: {
    fontFamily: string;
    fontSizeBase: string;
    fontWeightHeading: string;
    fontWeightBody: string;
    lineHeightBase: string;
  };
  spacing: {
    containerMaxWidth: string;
    sectionPaddingY: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
};

export const defaultTheme: Theme = {
  colors: {
    primary: "#111827",
    primaryFg: "#ffffff",
    background: "#ffffff",
    foreground: "#111827",
    muted: "#6b7280",
    mutedBg: "#f9fafb",
    border: "#e5e7eb",
    destructive: "#dc2626",
    destructiveFg: "#ffffff",
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
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
    lg: "0.75rem",
    full: "9999px",
  },
};

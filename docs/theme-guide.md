# Theme Guide

The theme system lets you change colors, typography, spacing, and border radius at runtime — no rebuild required. Changes are made by writing to `lib/theme.json` directly or via the API endpoint.

---

## How it works

1. `lib/theme.json` is the live theme file
2. `app/layout.tsx` reads it on every request and injects CSS variables into `<head>`
3. All components consume those variables via Tailwind semantic classes (`bg-primary`, `text-foreground`, etc.)

---

## Theme tokens

| Axis | Token | What it controls |
|------|-------|-----------------|
| **colors** | `primary` | Buttons, CTAs, dark section backgrounds |
| | `primaryFg` | Text on top of `primary` |
| | `background` | Page background |
| | `foreground` | Default body text |
| | `muted` | Secondary/subdued text |
| | `mutedBg` | Card and section backgrounds |
| | `border` | All borders and dividers |
| | `destructive` | Error states |
| | `destructiveFg` | Text on destructive background |
| **typography** | `fontFamily` | Global font stack |
| | `fontSizeBase` | Base font size (default `1rem`) |
| | `fontWeightHeading` | Heading weight |
| | `fontWeightBody` | Body weight |
| | `lineHeightBase` | Line height |
| **spacing** | `containerMaxWidth` | Max width of `Container` component |
| | `sectionPaddingY` | Vertical padding for `Section` component |
| **borderRadius** | `sm` / `md` / `lg` / `full` | Component corner rounding |

---

## Applying a full preset

Replace `lib/theme.json` with one of the built-in presets from `lib/theme-presets.ts`:

| Preset | Style |
|--------|-------|
| `minimalist` | White bg, black text, tight radius, system font |
| `modern` | Dark slate bg, indigo primary, generous radius |
| `yellowBlack` | Black bg, yellow-400 primary, bold headings |
| `professional` | White bg, blue-700 primary, conservative radius |

**Via API:**
```bash
curl -X POST http://localhost:3000/api/theme \
  -H "Content-Type: application/json" \
  -d @lib/theme-presets.ts  # export the preset as JSON and pipe it in
```

Or write the JSON directly:
```bash
# Switch to yellowBlack preset
curl -X POST http://localhost:3000/api/theme \
  -H "Content-Type: application/json" \
  -d '{
    "colors": {
      "primary": "#facc15",
      "primaryFg": "#000000",
      "background": "#000000",
      "foreground": "#ffffff",
      "muted": "#a3a3a3",
      "mutedBg": "#171717",
      "border": "#404040"
    },
    "typography": { "fontWeightHeading": "900" }
  }'
```

---

## Partial updates

The API deep-merges — you only need to send the tokens you want to change:

```bash
# Just change the primary color
curl -X POST http://localhost:3000/api/theme \
  -H "Content-Type: application/json" \
  -d '{ "colors": { "primary": "#7c3aed", "primaryFg": "#ffffff" } }'

# Just change typography
curl -X POST http://localhost:3000/api/theme \
  -H "Content-Type: application/json" \
  -d '{ "typography": { "fontFamily": "Georgia, serif", "fontWeightHeading": "800" } }'

# Just change border radius (sharp look)
curl -X POST http://localhost:3000/api/theme \
  -H "Content-Type: application/json" \
  -d '{ "borderRadius": { "sm": "0", "md": "0", "lg": "0" } }'
```

---

## Read the current theme

```bash
curl http://localhost:3000/api/theme
```

---

## Edit `lib/theme.json` directly

You can also edit `lib/theme.json` by hand and refresh the page:

```json
{
  "colors": {
    "primary": "#111827",
    "primaryFg": "#ffffff",
    "background": "#ffffff",
    "foreground": "#111827",
    "muted": "#6b7280",
    "mutedBg": "#f9fafb",
    "border": "#e5e7eb",
    "destructive": "#dc2626",
    "destructiveFg": "#ffffff"
  },
  "typography": {
    "fontFamily": "var(--font-geist-sans), Arial, sans-serif",
    "fontSizeBase": "1rem",
    "fontWeightHeading": "700",
    "fontWeightBody": "400",
    "lineHeightBase": "1.5"
  },
  "spacing": {
    "containerMaxWidth": "72rem",
    "sectionPaddingY": "5rem"
  },
  "borderRadius": {
    "sm": "0.25rem",
    "md": "0.375rem",
    "lg": "0.75rem",
    "full": "9999px"
  }
}
```

---

## Adding a new preset

Use `createTheme` from `lib/theme-utils.ts` — never write raw theme object literals.

`createTheme(base?, overrides?)` accepts an optional base preset and optional slice overrides. Only pass the slices that actually differ from the base.

```ts
import { createTheme } from "./theme-utils"
import { defaultTheme } from "./theme"
import { modernPreset } from "./theme-presets"

// Full custom theme (only pass slices that differ from defaultTheme)
export const myTheme = createTheme(defaultTheme, {
  colors: {
    primary: "#7c3aed",
    primaryFg: "#ffffff",
    background: "#0f0f0f",
    foreground: "#f5f5f5",
    muted: "#a3a3a3",
    mutedBg: "#1a1a1a",
    border: "#2e2e2e",
    destructive: "#ef4444",
    destructiveFg: "#ffffff",
  },
})

// Variant of an existing preset — only override what changes
export const modernPurple = createTheme(modernPreset, {
  colors: { primary: "#7c3aed", primaryFg: "#ffffff" },
})
```

Then register it in the `presets` map at the bottom of `lib/theme-presets.ts` so `npm run set-theme` can apply it:

```ts
export const presets: Record<string, Theme> = {
  // ...existing presets
  myTheme,
  modernPurple,
}
```

To activate the new preset, write its resolved value to `lib/theme.json` or run:

```bash
npm run set-theme myTheme
```

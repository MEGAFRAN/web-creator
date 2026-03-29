"use strict";
/**
 * theme-utils.ts
 *
 * Composable theme creation utilities.
 *
 * Usage:
 *   import { createTheme } from "@/lib/theme-utils";
 *   import { modern } from "@/lib/theme-presets";
 *
 *   // Full preset
 *   const theme = createTheme(modern);
 *
 *   // Preset + override one slice
 *   const theme = createTheme(modern, { colors: myColors });
 *
 *   // Fully custom (falls back to defaultTheme for any unspecified slice)
 *   const theme = createTheme(undefined, { colors, typography, spacing });
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMergeObjects = deepMergeObjects;
exports.createTheme = createTheme;
const theme_1 = require("./theme");
// ---------------------------------------------------------------------------
// Internal deep-merge helper
// ---------------------------------------------------------------------------
/**
 * Recursively merges `override` into `base`. Values present in `override`
 * win; plain objects are merged deeply; everything else is replaced.
 *
 * This is intentionally kept narrow — it only handles plain objects (no
 * arrays, no class instances) which is sufficient for Theme slices.
 */
function deepMergeObjects(base, override) {
    const result = Object.assign({}, base);
    for (const key in override) {
        const overrideVal = override[key];
        const baseVal = base[key];
        if (overrideVal !== null &&
            overrideVal !== undefined &&
            typeof overrideVal === "object" &&
            !Array.isArray(overrideVal) &&
            baseVal !== null &&
            typeof baseVal === "object" &&
            !Array.isArray(baseVal)) {
            result[key] = deepMergeObjects(baseVal, overrideVal);
        }
        else if (overrideVal !== undefined) {
            result[key] = overrideVal;
        }
    }
    return result;
}
// ---------------------------------------------------------------------------
// createTheme
// ---------------------------------------------------------------------------
/**
 * Creates a complete Theme by composing a base preset with optional slice
 * overrides. Both arguments are optional:
 *
 * - When `base` is omitted, `defaultTheme` from lib/theme.ts is used.
 * - When `overrides` is omitted (or a slice key is absent), the
 *   corresponding slice from `base` is used as-is.
 *
 * The returned value is a plain Theme object — it is **not** automatically
 * written to theme.json. Use the set-theme script or POST /api/theme to
 * apply it to the live site.
 *
 * @example
 * // Full preset
 * createTheme(modern)
 *
 * @example
 * // Preset + override one slice
 * createTheme(modern, { colors: { primary: "#7c3aed", primaryFg: "#fff" } })
 *
 * @example
 * // Fully custom (all other slices fall back to defaultTheme)
 * createTheme(undefined, { colors, typography, spacing })
 */
function createTheme(base, overrides) {
    const resolved = base !== null && base !== void 0 ? base : theme_1.defaultTheme;
    if (!overrides) {
        return resolved;
    }
    return {
        colors: overrides.colors !== undefined
            ? deepMergeObjects(resolved.colors, overrides.colors)
            : resolved.colors,
        typography: overrides.typography !== undefined
            ? deepMergeObjects(resolved.typography, overrides.typography)
            : resolved.typography,
        spacing: overrides.spacing !== undefined
            ? deepMergeObjects(resolved.spacing, overrides.spacing)
            : resolved.spacing,
        borderRadius: overrides.borderRadius !== undefined
            ? deepMergeObjects(resolved.borderRadius, overrides.borderRadius)
            : resolved.borderRadius,
    };
}

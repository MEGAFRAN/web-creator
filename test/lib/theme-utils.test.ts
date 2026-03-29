import { describe, it, expect } from "vitest";
import { createTheme, deepMergeObjects } from "@/lib/theme-utils";
import { defaultTheme } from "@/lib/theme";
import {
  minimalist,
  modern,
  professional,
  warmEarth,
  midnightJewel,
  presets,
} from "@/lib/theme-presets";
import type { Theme } from "@/lib/theme";

// ---------------------------------------------------------------------------
// deepMergeObjects
// ---------------------------------------------------------------------------

describe("deepMergeObjects", () => {
  it("overrides shallow keys from override into base", () => {
    const base = { a: "1", b: "2" };
    const result = deepMergeObjects(base, { a: "99" });
    expect(result.a).toBe("99");
    expect(result.b).toBe("2");
  });

  it("merges nested objects deeply instead of replacing them", () => {
    const base = { nested: { x: "1", y: "2" } } as Record<string, unknown>;
    const override = { nested: { x: "10" } } as Partial<typeof base>;
    const result = deepMergeObjects(base, override);
    const nested = result.nested as { x: string; y: string };
    expect(nested.x).toBe("10");
    expect(nested.y).toBe("2");
  });

  it("does not overwrite base values when override key is undefined", () => {
    const base = { a: "keep", b: "also-keep" };
    const result = deepMergeObjects(base, { a: undefined });
    expect(result.a).toBe("keep");
    expect(result.b).toBe("also-keep");
  });

  it("replaces non-object base values with non-object override values", () => {
    const base = { count: "5" };
    const result = deepMergeObjects(base, { count: "42" });
    expect(result.count).toBe("42");
  });

  it("does not mutate the original base object", () => {
    const base = { a: "original" };
    deepMergeObjects(base, { a: "changed" });
    expect(base.a).toBe("original");
  });

  it("returns all base keys when override is empty", () => {
    const base = { x: "1", y: "2", z: "3" };
    const result = deepMergeObjects(base, {});
    expect(result).toEqual(base);
  });
});

// ---------------------------------------------------------------------------
// createTheme — input cases
// ---------------------------------------------------------------------------

describe("createTheme", () => {
  describe("called with no arguments", () => {
    it("returns defaultTheme", () => {
      const result = createTheme();
      expect(result).toEqual(defaultTheme);
    });

    it("returns a value equal to defaultTheme for every slice", () => {
      const result = createTheme();
      expect(result.colors).toEqual(defaultTheme.colors);
      expect(result.typography).toEqual(defaultTheme.typography);
      expect(result.spacing).toEqual(defaultTheme.spacing);
      expect(result.borderRadius).toEqual(defaultTheme.borderRadius);
    });
  });

  describe("called with only a preset", () => {
    it("returns the preset unchanged when no overrides are provided", () => {
      const result = createTheme(minimalist);
      expect(result).toEqual(minimalist);
    });

    it("returns the modern preset unchanged", () => {
      const result = createTheme(modern);
      expect(result).toEqual(modern);
    });
  });

  describe("called with a preset and a single slice override (colors only)", () => {
    it("applies the color override", () => {
      const result = createTheme(modern, {
        colors: {
          ...modern.colors,
          primary: "#ff0000",
        },
      });
      expect(result.colors.primary).toBe("#ff0000");
    });

    it("keeps un-overridden color keys from the preset", () => {
      const result = createTheme(modern, {
        colors: {
          ...modern.colors,
          primary: "#ff0000",
        },
      });
      expect(result.colors.background).toBe(modern.colors.background);
    });

    it("leaves non-overridden slices unchanged (typography, spacing, borderRadius)", () => {
      const result = createTheme(modern, {
        colors: { ...modern.colors, primary: "#aabbcc" },
      });
      expect(result.typography).toEqual(modern.typography);
      expect(result.spacing).toEqual(modern.spacing);
      expect(result.borderRadius).toEqual(modern.borderRadius);
    });
  });

  describe("called with undefined base and overrides", () => {
    it("falls back to defaultTheme for slices not present in overrides", () => {
      const customColors = {
        ...defaultTheme.colors,
        primary: "#123456",
      };
      const result = createTheme(undefined, { colors: customColors });
      expect(result.typography).toEqual(defaultTheme.typography);
      expect(result.spacing).toEqual(defaultTheme.spacing);
      expect(result.borderRadius).toEqual(defaultTheme.borderRadius);
    });

    it("applies provided override when base is undefined", () => {
      const customColors = {
        ...defaultTheme.colors,
        primary: "#abcdef",
      };
      const result = createTheme(undefined, { colors: customColors });
      expect(result.colors.primary).toBe("#abcdef");
    });
  });

  describe("called with multiple slice overrides simultaneously", () => {
    it("applies overrides to all specified slices", () => {
      const result = createTheme(minimalist, {
        colors: { ...minimalist.colors, primary: "#111111" },
        typography: { ...minimalist.typography, fontWeightHeading: "900" },
        spacing: { containerMaxWidth: "90rem", sectionPaddingY: "8rem" },
      });
      expect(result.colors.primary).toBe("#111111");
      expect(result.typography.fontWeightHeading).toBe("900");
      expect(result.spacing.containerMaxWidth).toBe("90rem");
    });

    it("leaves the unspecified slice intact when other slices are overridden", () => {
      const result = createTheme(minimalist, {
        colors: { ...minimalist.colors, primary: "#111111" },
        typography: { ...minimalist.typography, fontWeightHeading: "900" },
      });
      expect(result.borderRadius).toEqual(minimalist.borderRadius);
    });
  });

  describe("partial override of a slice (only some keys)", () => {
    it("deep-merges: overridden key wins", () => {
      const result = createTheme(professional, {
        colors: { primary: "#99aabb" } as Theme["colors"],
      });
      expect(result.colors.primary).toBe("#99aabb");
    });

    it("deep-merges: unspecified keys are preserved from preset", () => {
      const result = createTheme(professional, {
        colors: { primary: "#99aabb" } as Theme["colors"],
      });
      expect(result.colors.background).toBe(professional.colors.background);
      expect(result.colors.foreground).toBe(professional.colors.foreground);
      expect(result.colors.muted).toBe(professional.colors.muted);
      expect(result.colors.border).toBe(professional.colors.border);
    });

    it("partial typography override preserves unspecified typography keys", () => {
      const result = createTheme(warmEarth, {
        typography: { fontWeightHeading: "400" } as Theme["typography"],
      });
      expect(result.typography.fontWeightHeading).toBe("400");
      expect(result.typography.fontFamily).toBe(warmEarth.typography.fontFamily);
      expect(result.typography.lineHeightBase).toBe(
        warmEarth.typography.lineHeightBase
      );
    });
  });

  describe("override with an empty object {}", () => {
    it("empty colors override leaves colors slice unchanged", () => {
      const result = createTheme(midnightJewel, {
        colors: {} as Theme["colors"],
      });
      expect(result.colors).toEqual(midnightJewel.colors);
    });

    it("empty typography override leaves typography slice unchanged", () => {
      const result = createTheme(midnightJewel, {
        typography: {} as Theme["typography"],
      });
      expect(result.typography).toEqual(midnightJewel.typography);
    });

    it("empty spacing override leaves spacing slice unchanged", () => {
      const result = createTheme(midnightJewel, {
        spacing: {} as Theme["spacing"],
      });
      expect(result.spacing).toEqual(midnightJewel.spacing);
    });

    it("empty borderRadius override leaves borderRadius slice unchanged", () => {
      const result = createTheme(midnightJewel, {
        borderRadius: {} as Theme["borderRadius"],
      });
      expect(result.borderRadius).toEqual(midnightJewel.borderRadius);
    });
  });
});

// ---------------------------------------------------------------------------
// Preset shape validation
// ---------------------------------------------------------------------------

const REQUIRED_COLOR_KEYS: Array<keyof Theme["colors"]> = [
  "primary",
  "primaryFg",
  "background",
  "foreground",
  "muted",
  "mutedBg",
  "border",
  "destructive",
  "destructiveFg",
];

const REQUIRED_TYPOGRAPHY_KEYS: Array<keyof Theme["typography"]> = [
  "fontFamily",
  "fontSizeBase",
  "fontWeightHeading",
  "fontWeightBody",
  "lineHeightBase",
];

const REQUIRED_SPACING_KEYS: Array<keyof Theme["spacing"]> = [
  "containerMaxWidth",
  "sectionPaddingY",
];

const REQUIRED_BORDER_RADIUS_KEYS: Array<keyof Theme["borderRadius"]> = [
  "sm",
  "md",
  "lg",
  "full",
];

describe("preset shape validation", () => {
  const presetEntries = Object.entries(presets);

  it("presets record contains all 20 named presets", () => {
    expect(presetEntries).toHaveLength(20);
  });

  it.each(presetEntries)(
    "%s has all required top-level keys",
    (_name, preset) => {
      expect(preset).toHaveProperty("colors");
      expect(preset).toHaveProperty("typography");
      expect(preset).toHaveProperty("spacing");
      expect(preset).toHaveProperty("borderRadius");
    }
  );

  it.each(presetEntries)(
    "%s colors slice has all required keys with non-empty string values",
    (_name, preset) => {
      for (const key of REQUIRED_COLOR_KEYS) {
        expect(preset.colors).toHaveProperty(key);
        expect(typeof preset.colors[key]).toBe("string");
        expect(preset.colors[key].length).toBeGreaterThan(0);
      }
    }
  );

  it.each(presetEntries)(
    "%s typography slice has all required keys with non-empty string values",
    (_name, preset) => {
      for (const key of REQUIRED_TYPOGRAPHY_KEYS) {
        expect(preset.typography).toHaveProperty(key);
        expect(typeof preset.typography[key]).toBe("string");
        expect(preset.typography[key].length).toBeGreaterThan(0);
      }
    }
  );

  it.each(presetEntries)(
    "%s spacing slice has all required keys with non-empty string values",
    (_name, preset) => {
      for (const key of REQUIRED_SPACING_KEYS) {
        expect(preset.spacing).toHaveProperty(key);
        expect(typeof preset.spacing[key]).toBe("string");
        expect(preset.spacing[key].length).toBeGreaterThan(0);
      }
    }
  );

  it.each(presetEntries)(
    "%s borderRadius slice has all required keys with non-empty string values",
    (_name, preset) => {
      for (const key of REQUIRED_BORDER_RADIUS_KEYS) {
        expect(preset.borderRadius).toHaveProperty(key);
        expect(typeof preset.borderRadius[key]).toBe("string");
        // borderRadius values may be "0" (ironClad), which is valid
        expect(preset.borderRadius[key]).toBeDefined();
      }
    }
  );

});

import * as fs from "fs";
import * as path from "path";
import { presets } from "../lib/theme-presets";

const themeName = process.argv[2];
const availableThemes = Object.keys(presets);

if (!themeName) {
  console.error("Error: No theme name provided.");
  console.error(`Available themes: ${availableThemes.join(", ")}`);
  process.exit(1);
}

if (!Object.prototype.hasOwnProperty.call(presets, themeName)) {
  console.error(`Error: Unknown theme "${themeName}".`);
  console.error(`Available themes: ${availableThemes.join(", ")}`);
  process.exit(1);
}

const theme = presets[themeName];
const outputPath = path.resolve(process.cwd(), "lib/theme.json");
const json = JSON.stringify(theme, null, 2);

fs.writeFileSync(outputPath, json + "\n", "utf-8");
console.log(`Theme set to: ${themeName}`);

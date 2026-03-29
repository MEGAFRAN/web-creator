"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const theme_presets_1 = require("../lib/theme-presets");
const themeName = process.argv[2];
const availableThemes = Object.keys(theme_presets_1.presets);
if (!themeName) {
    console.error("Error: No theme name provided.");
    console.error(`Available themes: ${availableThemes.join(", ")}`);
    process.exit(1);
}
if (!Object.prototype.hasOwnProperty.call(theme_presets_1.presets, themeName)) {
    console.error(`Error: Unknown theme "${themeName}".`);
    console.error(`Available themes: ${availableThemes.join(", ")}`);
    process.exit(1);
}
const theme = theme_presets_1.presets[themeName];
const outputPath = path.resolve(process.cwd(), "lib/theme.json");
const json = JSON.stringify(theme, null, 2);
fs.writeFileSync(outputPath, json + "\n", "utf-8");
console.log(`Theme set to: ${themeName}`);

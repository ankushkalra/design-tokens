import fs from "fs";
import StyleDictionary from "style-dictionary";

const darkSD = new StyleDictionary({
  source: ["tokens/base/*.tokens.json", "tokens/dark/*.tokens.json"],
  platforms: {
    css: {
      buildPath: "dist/css/",
      transformGroup: "css",
      files: [
        {
          destination: "_dark.css",
          format: "css/variables",
          options: {
            selector: ":root",
          },
        },
      ],
    },
  },
  log: {
    verbosity: "verbose",
  },
});

const lightSD = new StyleDictionary({
  source: ["tokens/base/*.tokens.json", "tokens/light/*.tokens.json"],
  platforms: {
    css: {
      buildPath: "dist/css/",
      transformGroup: "css",
      files: [
        {
          destination: "_light.css",
          format: "css/variables",
          options: {
            selector: '[data-theme="light"]',
          },
        },
      ],
    },
  },
  log: {
    verbosity: "verbose",
  },
});

await darkSD.buildAllPlatforms();
await lightSD.buildAllPlatforms();

const dark = fs.readFileSync("dist/css/_dark.css", "utf8");
const light = fs.readFileSync("dist/css/_light.css", "utf8");
fs.writeFileSync("dist/css/variables.css", dark + "\n" + light);

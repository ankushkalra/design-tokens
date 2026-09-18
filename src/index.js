import fs from "fs";
import StyleDictionary from "style-dictionary";

StyleDictionary.registerFormat({
  name: "css/custom-media",
  format: function ({ dictionary }) {
    const breakpoints = dictionary.allTokens.filter(
      (token) => token.path[0] === "breakpoint",
    );

    if (breakpoints.length === 0) {
      return `/* No breakpoints found under the 'breakpoint' path key */`;
    }

    return breakpoints
      .map((token) => {
        const name = token.path[1];
        const value = token.$value;
        return `@custom-media --breakpoint-${name} (min-width: ${value});`;
      })
      .join("\n");
  },
});

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
        {
          destination: "_media-queries.css",
          format: "css/custom-media",
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
const mediaQueries = fs.readFileSync("dist/css/_media-queries.css", "utf8");

fs.writeFileSync(
  "dist/css/variables.css",
  dark + "\n" + light + "\n" + mediaQueries,
);

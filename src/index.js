import { StyleDictionary } from "style-dictionary-utils";
import { outputReferencesTransformed } from "style-dictionary/utils";

const myStyleDictionary = new StyleDictionary();

const config = {
  source: ["tokens/**/*.tokens.json"],
  platforms: {
    css: {
      buildPath: "dist/css/",
      transformGroup: "css",
      files: [
        {
          format: "css/variables",
          destination: "variables.css",
          options: {
            outputReferences: false,
          },
        },
      ],
    },
  },
};

const sd = await myStyleDictionary.extend(config);
sd.buildAllPlatforms();

import { defineConfig } from "@pandacss/dev";

import { colors } from "@lib/theme/colors";
import { fonts } from "@lib/theme/fonts";
import { layerStyles } from "@lib/theme/layerStyles";
import { textStyles } from "@lib/theme/textStyles";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors,
      fonts,
    },
    extend: {
      layerStyles,
      textStyles,
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});

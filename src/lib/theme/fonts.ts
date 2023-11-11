import { defineTokens } from "@pandacss/dev";

export const fonts = defineTokens.fonts({
  heading: { value: "var(--font-dm-sans)" },
  body: { value: [`var(--font-dm-sans)`, "sans-serif"] },
});

import { defineTextStyles, TextStyles } from "@pandacss/dev";

export const textStyles: TextStyles = defineTextStyles({
  h1: {
    value: {
      fontWeight: "700",
      fontSize: "40px",
      lineHeight: "48px",
      letterSpacing: "4.17px",
    },
  },
  h2: {
    value: {
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "25px",
      letterSpacing: "4.17px",
    },
  },
  h3: {
    value: {
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "25px",
      letterSpacing: "4.17px",
    },
  },
  h4: {
    value: {
      fontWeight: "700",
      fontSize: "12px",
      lineHeight: "15.62px",
      letterSpacing: "2px",
    },
  },
  body: {
    value: {
      fontWeight: "400",
      fontSize: "15px",
      lineHeight: "25px",
    },
  },
});

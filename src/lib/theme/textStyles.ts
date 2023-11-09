import { defineTextStyles, TextStyles } from "@pandacss/dev";

export const textStyles: TextStyles = defineTextStyles({
  // format: textStyleName: {value: {...styles}}
  h1: {
    value: {
      fontWeight: "bold",
      fontSize: "45px",
    },
  },
});

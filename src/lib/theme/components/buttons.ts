import { cva, type RecipeVariantProps } from "styled-system/css";

/**
 * @todo
 * - use layerStyle to define the colors combinations + hover styling
 */

export const button = cva({
  base: {
    minW: "9rem",
    textTransform: "uppercase",
    textAlign: "center",
    cursor: "pointer",
    textStyle: "button",
    transition: "background .3s ease-out",
    _hover: {
      bg: "light_grey",
      color: "pure_black",
    },
  },
  variants: {
    visual: {
      dark: { bg: "pure_black", color: "pure_white" },
      light: { bg: "pure_white", color: "pure_black" },
      transparent_dark: { bg: "transparent", color: "pure_white" },
      transparent_light: {
        bg: "transparent",
        color: "pure_black",
        _hover: {
          bg: "transparent",
          textDecoration: "underline",
        },
      },
    },
    type: {
      primary: { py: "0.75rem", px: "1.5rem" },
      secondary: { py: "0", px: "0", minW: "8rem" },
    },
  },
});

export type ButtonVariants = RecipeVariantProps<typeof button>;

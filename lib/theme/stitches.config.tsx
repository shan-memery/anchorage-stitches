import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
export type { VariantProps } from "@stitches/react";
import { colors, darkColors } from "./foundations/colors";
import typography from "./foundations/typography";
import radii from "./foundations/radii";
import zIndices from "./foundations/z-index";
import { icons, darkIcons } from "./foundations/icons";

export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config } =
  createStitches({
    prefix: "anchorage",
    media: {
      xss: "(min-width: 320px)",
      xs: "(min-width: 392px)",
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1150px)",
      xl: "(min-width: 1325px)",
      "2xl": "(min-width: 1536px)",

      // sometimes I want to know the inverse...
      xssMax: "(max-width: 320px)",
      xsMax: "(max-width: 392px)",
      smMax: "(max-width: 640px)",
      mdMax: "(max-width: 768px)",
      lgMax: "(max-width: 1150px)",
      xlMax: "(max-width: 1325px)",
      "2xlMax": "(max-width: 1536px)",

      // usually I think in terms of this for design
      isMobile: "(max-width: 768px)",
      isDesktop: "not (max-width: 768px)",
    },
    theme: {
      sizes: {
        vh: "100vh",
      },
      colors,
      ...typography,
      radii,
      zIndices,
      icons,
    },
  });

export const darkTheme = createTheme("dark", {
  colors: darkColors,
  icons: darkIcons,
});

export type CSS = Stitches.CSS<typeof config>;

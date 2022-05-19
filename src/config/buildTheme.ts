import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import defaultThemeColors from "./theme/defaultThemeColors";
import defaultThemeFonts from "./theme/defaultThemeFonts";
import themeComponents from "./theme/themeComponents";

type Colors = string | { [key: string]: Colors };

type Fonts = {
  body: string;
  heading: string;
};

export default function buildTheme(
  colors: Colors = defaultThemeColors,
  fonts: Fonts = defaultThemeFonts
): ThemeOverride {
  return extendTheme({ colors, fonts, components: themeComponents });
}

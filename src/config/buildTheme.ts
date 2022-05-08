import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import themeComponents from './theme/themeComponents';

type Colors = string | { [key: string]: Colors };

type Fonts = {
  body: string;
  heading: string;
};

export default function buildTheme(
  colors: Colors,
  fonts: Fonts
): ThemeOverride {
  return extendTheme({ colors, fonts, components: themeComponents });
}

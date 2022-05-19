import { ColorMode } from '@chakra-ui/react';
import buildTheme from 'config/buildTheme';
import defaultThemeColors from 'config/theme/defaultThemeColors';
import DoersProvider from 'config/DoersProvider';
import { ReactNode } from 'react';
import defaultThemeFonts from 'config/theme/defaultThemeFonts';

type StorybookWrapperProps = {
  children: ReactNode;
  colorMode?: ColorMode;
};

export default function StorybookWrapper({
  children,
  colorMode = 'light',
}: StorybookWrapperProps) {
  const theme = buildTheme(defaultThemeColors, defaultThemeFonts);

  return (
    <DoersProvider theme={theme} colorMode={colorMode}>
      {children}
    </DoersProvider>
  );
}

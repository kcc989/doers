import {
  ChakraProvider,
  ColorMode,
  ColorModeOptions,
  ColorModeProvider,
  ThemeOverride,
} from '@chakra-ui/react';

type DoersProviderProps = {
  colorMode: ColorMode;
  children?: React.ReactNode;
  options?: ColorModeOptions;
  colorModeManager?: StorageManager;
  theme: ThemeOverride;
};

export default function DoersProvider({
  theme,
  colorMode,
  options = {},
  children,
}: DoersProviderProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider value={colorMode} options={options}>
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  );
}

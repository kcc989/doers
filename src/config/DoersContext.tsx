import { ColorMode, ColorModeOptions, ThemeOverride } from '@chakra-ui/react';
import { createContext } from 'react';

interface DoersConfig {
  value?: ColorMode;
  children?: React.ReactNode;
  options: ColorModeOptions;
  colorModeManager?: StorageManager;
  theme: ThemeOverride;
}

// export const DoersConfigContext =
//   createContext<DoersConfig | undefined>(undefined);

// export const Doers

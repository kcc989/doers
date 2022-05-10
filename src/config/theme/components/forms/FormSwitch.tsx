import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const FormSwitch: ComponentMultiStyleConfig = {
  parts: ['control', 'label', 'helper', 'error'],
  baseStyle: ({ colorMode }) => {
    const isDark = colorMode === 'dark';

    return {
      control: {
        bg: isDark ? 'bg.darkPrimary' : 'bg.primary',
        display: 'flex',
        alignItems: 'center',
      },
      label: {
        fontWeight: 'bold',
        color: isDark ? 'text.darkPrimary' : 'text.primary',
      },
      helper: {
        color: isDark ? 'text.darkSecondary' : 'text.secondary',
        fontStyle: 'italic',
      },
      error: {
        color: isDark ? 'red.300' : 'red.600',
      },
    };
  },
  defaultProps: {
    colorScheme: 'primary',
  },
};

export default FormSwitch;

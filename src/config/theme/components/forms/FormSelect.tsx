import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const FormSelect: ComponentMultiStyleConfig = {
  parts: ['control', 'label', 'input', 'helper', 'error'],
  baseStyle: ({ colorMode }) => {
    const isDark = colorMode === 'dark';

    return {
      control: {
        bg: isDark ? 'bg.darkPrimary' : 'bg.primary',
      },
      input: {
        bg: isDark ? 'bg.darkSecondary' : 'bg.secondary',
        boxShadow: 'none',
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
};

export default FormSelect;

import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const FormTextInput: ComponentMultiStyleConfig = {
  parts: ['control', 'label', 'input', 'helper', 'error'],
  baseStyle: ({ colorMode }) => {
    const isDark = colorMode === 'dark';

    return {
      control: {
        bg: isDark ? 'bg.darkPrimary' : 'bg.primary',
      },
      label: {
        fontWeight: 'bold',
        color: isDark ? 'text.darkPrimary' : 'text.primary',
      },
      input: {
        borderRadius: 'md',
        color: isDark ? 'text.darkPrimary' : 'text.primary',
        borderColor: isDark ? 'border.darkPrimary' : 'border.primary',
        bg: isDark ? 'bg.darkSecondary' : 'bg.secondary',
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

export default FormTextInput;

import { ComponentStyleConfig } from '@chakra-ui/react';

const Form: ComponentStyleConfig = {
  baseStyle: ({ colorMode }) => {
    const isDark = colorMode === 'dark';
    return {
      p: 4,
      m: 2,
      borderRadius: 'md',
      color: isDark ? 'text.darkPrimary' : 'text.primary',
      bg: isDark ? 'bg.darkPrimary' : 'bg.primary',
      boxShadow: 'sm',
    };
  },
};

export default Form;

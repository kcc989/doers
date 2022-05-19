import { ComponentStyleConfig } from '@chakra-ui/react';

const Card: ComponentStyleConfig = {
  baseStyle: ({ colorMode }) => {
    const isDark = colorMode === 'dark';
    return {
      p: 4,
      m: 2,
      borderRadius: 'md',
      color: isDark ? 'text.darkPrimary' : 'text.primary',
      bg: isDark ? 'bg.darkSecondary' : 'bg.primary',
      boxShadow: 'sm',
    };
  },
  variants: {
    outline: ({ colorMode }) => {
      const isDark = colorMode === 'dark';
      return {
        borderWidth: '1px',
        borderColor: isDark ? 'border.darkPrimary' : 'border.primary',
      };
    },
    primary: {},
  },
  defaultProps: {
    variant: 'primary',
  },
};

export default Card;

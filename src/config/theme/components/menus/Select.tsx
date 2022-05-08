import { ComponentStyleConfig } from '@chakra-ui/react';
import {
  anatomy,
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
} from '@chakra-ui/theme-tools';

const selectAnatomy = anatomy('Select').parts('button', 'options', 'option');

const baseButtonStyles: SystemStyleFunction = ({ colorMode }) => {
  const isDark = colorMode === 'dark';

  return {
    borderRadius: 'md',
    borderWidth: '1px',
    boxShadow: 'md',
    borderColor: isDark ? 'border.darkPrimary' : 'border.primary',
    bg: isDark ? 'bg.darkPrimary' : 'bg.primary',
    color: isDark ? 'text.darkPrimary' : 'text.primary',
    px: '4',
    py: '2',
  };
};

const baseOptionsStyles: SystemStyleFunction = ({ colorMode }) => {
  const isDark = colorMode === 'dark';

  return {
    borderRadius: 'md',
    borderWidth: '1px',
    borderColor: isDark ? 'border.darkPrimary' : 'border.primary',
    bg: isDark ? 'bg.darkPrimary' : 'bg.primary',
    color: isDark ? 'text.darkPrimary' : 'text.primary',
    py: '2',
    mt: '2',
  };
};

const baseOptionStyles: SystemStyleFunction = ({ colorMode }) => {
  const isDark = colorMode === 'dark';

  return {
    bg: isDark ? 'bg.darkPrimary' : 'bg.primary',
    color: isDark ? 'text.darkPrimary' : 'text.primary',
    cursor: 'pointer',
    _hover: { bg: isDark ? 'primary.800' : 'primary.300' },
    _focus: { borderWidth: 0 },
    px: '5',
    my: '1',
  };
};

const baseStyle: PartsStyleFunction = props => {
  return {
    button: baseButtonStyles(props),
    options: baseOptionsStyles(props),
    option: baseOptionStyles(props),
  };
};

const Select: ComponentStyleConfig = {
  parts: selectAnatomy.keys,
  baseStyle,
  variants: {
    primary: {},
    secondary: props => {
      const isDark = props.colorMode === 'dark';
      return {
        button: {
          bg: isDark ? 'bg.darkSecondary' : 'bg.secondary',
        },
        option: {
          bg: isDark ? 'bg.darkSecondary' : 'bg.secondary',
        },
        options: {
          bg: isDark ? 'bg.darkSecondary' : 'bg.secondary',
        },
      };
    },
  },
  defaultProps: {
    variant: 'primary',
  },
};

export default Select;

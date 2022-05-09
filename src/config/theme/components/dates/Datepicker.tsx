import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const Datepicker: ComponentMultiStyleConfig = {
  parts: [
    'input',
    'icon',
    'placeholder',
    'popContent',
    'popBody',
    'shortcutButtonGroup',
    'shortcutButton',
    'divider',
    'navigationContainer',
    'navigationButton',
    'navigationLabel',
    'calendarContainer',
    'dayLabelContainer',
    'dayLabel',
    'calendarMatrixContainer',
    'calendarMatrixDay',
    'todayButtonGroup',
    'todayButton',
  ],

  baseStyle: ({ colorMode, colorScheme = 'primary', theme }) => {
    const isDark = colorMode === 'dark';

    return {
      input: {
        bg: isDark ? 'bg.darkSecondary' : 'bg.secondary',
        color: isDark ? 'text.darkPrimary' : 'text.primary',
        borderColor: isDark ? 'border.darkPrimary' : 'border.primary',
      },

      icon: {
        borderColor: isDark ? 'border.darkPrimary' : 'border.primary',
      },

      placeholder: {
        borderColor: isDark ? 'border.darkPrimary' : 'border.primary',
      },

      popContent: {
        _focus: {
          outline: 'none',
        },
      },

      popBody: {
        shadow: 'md',
        borderRadius: 'md',
        bg: isDark ? 'gray.900' : 'bg.secondary',
      },

      shortcutButtonGroup: {
        color: isDark ? 'text.darkSecondary' : 'text.secondary',
        marginBottom: 2,
        spacing: 2,
      },

      shortcutButton: {
        fontWeight: 'normal',

        _focus: {
          outline: 'none',
        },
      },

      divider: {
        marginBottom: 2,
      },

      navigationContainer: {
        alignItems: 'baseline',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 2,
      },

      navigationButton: {
        backgroundColor: isDark ? 'bg.darkSecondary' : 'bg.secondary',
        borderColor: isDark ? 'border.darkPrimary' : 'border.primary',
        color: isDark ? 'text.darkSecondary' : 'text.secondary',

        borderWidth: 1,
        shadow: 'sm',

        _active: {
          shadow: 'none',
        },

        _focus: {
          outline: 'none',
        },

        _hover: {
          backgroundColor: 'unset',
          shadow: 'md',
        },
      },

      navigationLabel: {
        color: isDark
          ? theme.colors[colorScheme][300]
          : theme.colors[colorScheme][600],
        fontWeight: 'bold',
      },

      calendarContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 2,
      },

      dayLabelContainer: {
        display: 'flex',
      },

      dayLabel: {
        alignItems: 'center',
        color: isDark ? 'text.darkSecondary' : 'text.secondary',
        display: 'flex',
        fontSize: 'sm',
        height: 10,
        justifyContent: 'center',
        width: '100%',
      },

      calendarMatrixContainer: {
        display: 'flex',
      },

      calendarMatrixDay: {
        color: isDark ? 'text.darkSecondary' : 'text.primary',
        fontWeight: 'semibold',
        alignItems: 'center',
        borderRadius: 4,
        display: 'flex',
        height: 10,
        justifyContent: 'center',
        width: '100%',

        _hover: {
          backgroundColor: 'none',
          color: isDark
            ? theme.colors[colorScheme][300]
            : theme.colors[colorScheme][600],
          cursor: 'pointer',
        },

        '&[data-in-range="false"]': {
          color: isDark ? 'text.darkSecondary' : 'text.secondary',
        },

        '&[data-selected="true"]': {
          backgroundColor: isDark
            ? theme.colors[colorScheme][300]
            : theme.colors[colorScheme][600],
          color: isDark ? 'text.darkSecondary' : 'text.secondary',
          shadow: 'md',

          _hover: {
            backgroundColor: 'none',
          },

          '&[data-today="true"]': {
            color: isDark ? 'text.darkSecondary' : 'text.secondary',
          },
        },

        '&[data-today="true"]': {
          borderColor: isDark
            ? theme.colors[colorScheme][300]
            : theme.colors[colorScheme][600],
          borderWidth: 1,
          color: isDark
            ? theme.colors[colorScheme][300]
            : theme.colors[colorScheme][600],
        },

        '&[data-dont-round="true"]': {
          borderRadius: 0,
          backgroundColor: isDark ? 'bg.darkSecondary' : 'bg.secondary',
          color: isDark ? 'text.darkPrimary' : 'text.primary',
          shadow: 'none',
        },

        '&[data-dont-round-left="true"]': {
          borderLeftRadius: 0,
        },

        '&[data-dont-round-right="true"]': {
          borderRightRadius: 0,
        },
      },

      todayButtonGroup: {
        justifyContent: 'center',
        spacing: '2',
        variant: 'ghost',
        width: '100%',
      },

      todayButton: {
        fontWeight: 'normal',

        _focus: {
          outline: 'none',
        },
      },
    };
  },

  defaultProps: {
    colorScheme: 'primary',
  },
};

export default Datepicker;

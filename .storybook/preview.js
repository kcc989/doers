import StorybookWrapper from '../src/components/StorybookWrapper';
import { Box } from '@chakra-ui/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  colorMode: {
    name: 'Color Mode',
    defaultValue: 'light',
    toolbar: {
      icon: 'lightning',
      items: ['dark', 'light'],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <StorybookWrapper colorMode={context.globals.colorMode}>
        <Box m={'20px'}>
          <Story />
        </Box>
      </StorybookWrapper>
    );
  },
];

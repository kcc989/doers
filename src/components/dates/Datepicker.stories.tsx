import StorybookWrapper from '../StorybookWrapper';
import { ComponentStory } from '@storybook/react';
import React from 'react';

import Datepicker from './Datepicker';
import { Box } from '@chakra-ui/react';

export default {
  title: 'Dates/Datepicker',
  component: Datepicker,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template: ComponentStory<typeof Datepicker> = (args: any) => (
  <Box h="500px">
    <Datepicker {...args} />
  </Box>
);

export const SingleSelect = Template.bind({});
SingleSelect.args = {};

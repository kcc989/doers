import StorybookWrapper from '../StorybookWrapper';
import { ComponentStory } from '@storybook/react';
import React from 'react';

import Text from './Text';

export default {
  title: 'Text/Text',
  component: Text,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template: ComponentStory<typeof Text> = (args: any) => (
  <StorybookWrapper>
    <Text {...args} />
  </StorybookWrapper>
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  children: 'Test',
};

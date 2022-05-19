import StorybookWrapper from '../StorybookWrapper';
import { ComponentStory } from '@storybook/react';
import React from 'react';

import Select from './Select';

export default {
  title: 'Menus/Select',
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      default: 'primary',
    },
  },
};

const Template: ComponentStory<typeof Select> = (args: any) => (
  <Select {...args} />
);

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
  placeholder: 'Pick a person',
  options: [
    { key: 1, value: 'Casey' },
    { key: 2, value: 'Anne' },
  ],
  variant: 'primary',
};

import StorybookWrapper from '../StorybookWrapper';
import { ComponentStory } from '@storybook/react';
import React from 'react';

import Card from './Card';
import { Heading, Text } from '@chakra-ui/react';

export default {
  title: 'Cards/Card',
  component: Card,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template: ComponentStory<typeof Card> = (args: any) => <Card {...args} />;

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  children: 'Test',
};

export const OutlinedCard = Template.bind({});
OutlinedCard.args = {
  children: 'Test',
  variant: 'outline',
};

export const CardWithHeading = Template.bind({});
CardWithHeading.args = {
  children: (
    <>
      <Heading>Heading</Heading>
      <Text>Content</Text>
    </>
  ),
  variant: 'outline',
};

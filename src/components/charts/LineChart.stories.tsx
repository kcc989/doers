import { ComponentStory } from '@storybook/react';
import React from 'react';

import LineChart from './LineChart';

import { z } from 'zod';
import { Box } from '@chakra-ui/react';

const email = z.string().min(1, 'Email is required').email();

const EmailLogin = z.object({
  email,
  story: z.string(),
  cookies: z.boolean(),
  country: z.string(),
});

export default {
  title: 'Charts/LineChart',
  component: LineChart,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template: ComponentStory<typeof LineChart> = (args: any) => (
  <Box m="10">
    <LineChart {...args} />
  </Box>
);

export const EmptyChart = Template.bind({});
EmptyChart.args = {
  emptyState: <>Test</>,
  data: [],
  title: 'Name',
  options: {},
};

export const SimpleChart = Template.bind({});
SimpleChart.args = {
  emptyState: <>Test</>,
  data: [
    {
      name: 'test data',
      data: [
        {
          x: new Date('05-01-22'),
          y: 1,
        },
        {
          x: new Date('05-02-22'),
          y: 2,
        },
        {
          x: new Date('05-03-22'),
          y: 4,
        },
        {
          x: new Date('05-04-22'),
          y: 8,
        },
        {
          x: new Date('05-05-22'),
          y: 16,
        },
        {
          x: new Date('06-01-22'),
          y: 32,
        },
        {
          x: new Date('07-02-22'),
          y: 48,
        },
        {
          x: new Date('08-03-22'),
          y: 56,
        },
        {
          x: new Date('09-04-22'),
          y: 60,
        },
        {
          x: new Date('10-05-22'),
          y: 61,
        },
      ],
    },
  ],
  title: 'Name',
  options: {
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeFormatter: {
          year: 'yyyy',
          month: "MMM 'yy",
          day: 'dd MMM',
          hour: 'HH:mm',
        },
      },
    },
  },
};

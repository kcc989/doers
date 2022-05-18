import { Box, Heading, useToken } from '@chakra-ui/react';
import Chart from 'react-apexcharts';
import { ReactNode } from 'react';
import { LineChartConfiguration, Series } from './types';

const colors = [
  'primary.400',
  'orange.400',
  'green.400',
  'blue.400',
  'purple.400',
  'red.400',
  'yellow.400',
  'teal.400',
];

const type = 'line';

type LineChartProps = {
  title?: string;
  emptyState: ReactNode;
  data: Series[];
  options: LineChartConfiguration;
};

export default function LineChart({
  title,
  emptyState,
  data,
  options,
}: LineChartProps) {
  const themeColors = useToken('colors', colors);

  if (data.filter(d => d.data.length !== 0).length === 0) {
    return <Box>{emptyState}</Box>;
  }

  return (
    <Box p="4">
      <Heading textAlign={'center'}>{title}</Heading>
      <Chart
        type={type}
        options={{ ...options, colors: themeColors }}
        series={data}
      />
    </Box>
  );
}

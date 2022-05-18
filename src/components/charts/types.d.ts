export type Series = {
  name: string;
  data:
    | number[]
    | {
        x: any;
        y: number;
      }[];
};

interface GridConfiguration {
  show?: boolean;
  borderColor?: string;
  strokeDashArray?: number;
  position?: 'front' | 'back';
  xaxis?: {
    lines: {
      show: boolean;
    };
  };
  yaxis?: {
    lines: {
      show: boolean;
    };
  };
  opacity?: number;
}

interface ChartConfiguration {
  background?: string;
  fontFamily?: string;

  grid?: GridConfiguration;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
}

interface LineChartConfiguration extends ChartConfiguration {
  offsetX?: number;
  offsetY?: number;
}

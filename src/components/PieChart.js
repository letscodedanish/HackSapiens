import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieCharts({data}) {
  return (
    <PieChart
      series={[
        {
          data,
        },
      ]}
      width={400}
      height={200}
      colors={['#f44336', '#4caf50']}
    />
  );
}
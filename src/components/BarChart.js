import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [72.3, 64.2, 69.2, 49.7, 69.7, 74.3, 95.2];
const pData = [71.9, 63, 67.5, 58.7, 67.8, 71, 69];
const xLabels = [
  'Ganacologist',
  'Physician',
  'Dermatologist',
  'Cardiologist',
  'Neurologist',
  'Orthopedic',
  'Psychiatrist',
];

export default function BarCharts() {
  return (
    <BarChart
      width={700}
      height={400}
      series={[
        { data: pData, label: '2021', id: 'pvId' },
        { data: uData, label: '2022', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}
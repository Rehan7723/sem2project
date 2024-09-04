import { BarChart } from '@mui/x-charts/BarChart';
import * as React from 'react';


const pData = [83, 85, 71, 77, 94, 93, 86, 84 ];
const xLabels = [
  'Java',
  'DAA',
  'SE',
  'C Networks',
  'Research Methodology',
  'UI/UX',
  'Social Network Analysis',
  'Fullstack'
];

export default function Graph() {
  return (
    <BarChart className='bar-chart'
      series={[
        { data: pData, label: 'Marks for 100', id: 'pvId', color:'#7C93C3' },
        // { data: uData, label: 'uv', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}

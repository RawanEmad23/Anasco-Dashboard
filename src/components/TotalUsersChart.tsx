'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { TooltipContentProps } from 'recharts/types/component/Tooltip';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const data = [
  { name: 'Jan', currentWeek: 12000000, previousWeek: 8000000 },
  { name: 'Feb', currentWeek: 9000000, previousWeek: 18000000 },
  { name: 'Mar', currentWeek: 7000000, previousWeek: 16000000 },
  { name: 'Apr', currentWeek: 11000000, previousWeek: 12000000 },
  { name: 'May', currentWeek: 15000000, previousWeek: 11000000 },
  { name: 'Jun', currentWeek: 19000000, previousWeek: 14000000 },
  { name: 'Jul', currentWeek: 20000000, previousWeek: 22000000 },
];

const formatYAxis = (tick: number) => `${tick / 1000000}M`;

const CustomTooltip = ({ active, payload }: TooltipContentProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#3d3d3d] text-white text-sm px-3 py-1 rounded-md shadow">
        {payload[0].value.toLocaleString()}
      </div>
    );
  }
  return null;
};

export default function TotalUsersChart() {
  return (
    <div className="bg-[#f8fafc] p-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-2">Total Users</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatYAxis} domain={[0, 30000000]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="previousWeek"
            stroke="#cbd5e1"
            strokeWidth={3}
            dot={{ r: 4, stroke: 'white', strokeWidth: 2 }}
            activeDot={{ r: 6, stroke: 'white', strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="currentWeek"
            stroke="#000"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
            strokeDasharray="0 0 0 0 0 0 10 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

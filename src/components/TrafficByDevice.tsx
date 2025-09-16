'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const data = [
  { name: 'Linux', value: 18 },
  { name: 'Mac', value: 23 },
  { name: 'iOS', value: 19 },
  { name: 'Windows', value: 25 },
  { name: 'Android', value: 10 },
  { name: 'Other', value: 22 },
];

const COLORS = ['#A8A8F0', '#C3F7C3', '#000000', '#B8E9F5', '#A0BCD6', '#C3F7C3'];

export default function TrafficByDevice() {
  return (
    <div className="bg-[#f8fafc] p-6 rounded-xl w-full max-w-3xl">
      <h2 className="text-lg font-semibold mb-4">Traffic by Device</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          barCategoryGap="30%" 
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${value}M`} domain={[0, 30]} />
          <Tooltip formatter={(value) => `${value}M`} />
          <Bar
            dataKey="value"
            barSize={20} 
            radius={[4, 4, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

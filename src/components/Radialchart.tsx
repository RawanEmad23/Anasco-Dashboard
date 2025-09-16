'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';

const data = [
  { name: 'United States', value: 38.6 },
  { name: 'Canada', value: 22.5 },
  { name: 'Mexico', value: 30.8 },
  { name: 'Other', value: 8.1 },
];

const COLORS = ['#000000', '#C3F7C3', '#A8B3FF', '#B8E9F5'];

export default function Radialchart() {
  return (
    <div className="bg-[#f7f9fb] rounded-xl p-6 flex flex-col md:flex-row items-center">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              // cornerRadius={5} ← ❌ تم حذفه لأنه غير مدعوم
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      {/* Labels */}
      <div className="mt-6 md:mt-0 md:ml-10 space-y-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center text-sm md:text-base">
            <span
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            <span className="text-gray-700 w-32">{entry.name}</span>
            <span className="ml-auto text-gray-500">{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

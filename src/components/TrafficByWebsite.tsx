'use client';
import React from 'react';

const platforms = [
  { name: 'Google', value: 40 },
  { name: 'YouTube', value: 30 },
  { name: 'Instagram', value: 80, active: true },
  { name: 'Pinterest', value: 25 },
  { name: 'Facebook', value: 35 },
  { name: 'Twitter', value: 28 },
  { name: 'Tumblr', value: 20 },
];

export default function TrafficByWebsite() {
  return (
    <div className="bg-[#f7f9fb] p-6 rounded-xl w-full max-w-sm">
      <h2 className="text-lg font-semibold mb-4">Traffic by Website</h2>
      <div className="space-y-4">
        {platforms.map((platform) => (
          <div key={platform.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-900">{platform.name}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  platform.active ? 'bg-black' : 'bg-gray-300'
                }`}
                style={{ width: `${platform.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

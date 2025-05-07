import React from 'react';

export default function ResourceCard({ title, value, color }) {
  let barColor = 'bg-blue-500';
  if (color === 'green') barColor = 'bg-green-500';
  if (color === 'purple') barColor = 'bg-purple-500';
  
  return (
    <div className="bg-gray-50 rounded p-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <span className="text-sm font-medium text-gray-900">{value}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${barColor}`} 
          style={{ width: value }}
        ></div>
      </div>
    </div>
  );
}
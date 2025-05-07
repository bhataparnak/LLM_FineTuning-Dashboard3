import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function StatsCard({ title, value, icon, change, positive }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold text-gray-800 mt-1">{value}</p>
        </div>
        <div className="p-2 rounded-md bg-gray-50">
          {icon}
        </div>
      </div>
      {change && (
        <div className="mt-4 flex items-center">
          {positive !== null && (
            positive ? 
            <ChevronRight size={16} className="text-green-500 rotate-90" /> : 
            <ChevronRight size={16} className="text-red-500 -rotate-90" />
          )}
          <span className={`text-xs ${
            positive === null ? 'text-gray-500' : positive ? 'text-green-500' : 'text-red-500'
          }`}>
            {change}
          </span>
        </div>
      )}
    </div>
  );
}
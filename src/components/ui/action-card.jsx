import React from 'react';

export default function ActionCard({ icon, title, description }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition cursor-pointer">
      <div className="flex items-start">
        <div className="p-2 rounded-md bg-blue-50 text-blue-600">
          {icon}
        </div>
        <div className="ml-3">
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}
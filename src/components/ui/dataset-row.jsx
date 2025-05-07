import React from 'react';
import { FileText, Settings, Archive } from 'lucide-react';

export default function DatasetRow({ name, size, rows, created }) {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 items-center text-sm">
      <div className="col-span-4 font-medium text-gray-800">{name}</div>
      <div className="col-span-2 text-gray-600">{size}</div>
      <div className="col-span-2 text-gray-600">{rows}</div>
      <div className="col-span-2 text-gray-600">{created}</div>
      <div className="col-span-2 flex space-x-2">
        <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100">
          <FileText size={16} />
        </button>
        <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100">
          <Settings size={16} />
        </button>
        <button className="p-1.5 text-gray-500 hover:text-red-600 rounded-md hover:bg-gray-100">
          <Archive size={16} />
        </button>
      </div>
    </div>
  );
}
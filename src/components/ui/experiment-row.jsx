import React from 'react';
import { BarChart, MessageSquare, Settings } from 'lucide-react';

export default function ExperimentRow({ name, model, dataset, status, metrics }) {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 items-center text-sm">
      <div className="col-span-3 font-medium text-gray-800">{name}</div>
      <div className="col-span-2 text-gray-600">{model}</div>
      <div className="col-span-2 text-gray-600">{dataset}</div>
      <div className="col-span-1">
        <div className={`px-2 py-1 rounded-full text-xs font-medium text-center ${
          status === 'running' ? 'bg-blue-100 text-blue-800' :
          status === 'completed' ? 'bg-green-100 text-green-800' :
          status === 'queued' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {status === 'running' ? 'Running' :
           status === 'completed' ? 'Completed' :
           status === 'queued' ? 'Queued' :
           'Failed'}
        </div>
      </div>
      <div className="col-span-2 flex flex-col space-y-1">
        <div className="text-xs">
          <span className="font-medium">Loss:</span> {metrics.loss}
        </div>
        <div className="text-xs">
          <span className="font-medium">Perplexity:</span> {metrics.perplexity}
        </div>
      </div>
      <div className="col-span-2 flex space-x-2">
        <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100">
          <BarChart size={16} />
        </button>
        <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100">
          <MessageSquare size={16} />
        </button>
        <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100">
          <Settings size={16} />
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import { Clock } from 'lucide-react';

export default function ExperimentItem({ name, model, status, progress, runtime }) {
  return (
    <div className="p-3 border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-800">{name}</h4>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
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
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <span className="mr-4">{model}</span>
        <Clock size={14} className="mr-1" />
        <span>{runtime}</span>
      </div>
      {status === 'running' && (
        <div className="mt-3">
          <div className="flex justify-between text-xs mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
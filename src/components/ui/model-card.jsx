import React from 'react';
import { Save, GitBranch } from 'lucide-react';

export default function ModelCard({ name, baseModel, size, created, metrics, isDeployed }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-gray-800">{name}</h4>
            <p className="text-xs text-gray-500 mt-1">Based on {baseModel}</p>
          </div>
          {isDeployed && (
            <div className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Deployed
            </div>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500">Size</p>
            <p className="text-sm font-medium text-gray-800">{size}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Created</p>
            <p className="text-sm font-medium text-gray-800">{created}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500">Loss</p>
            <p className="text-sm font-medium text-gray-800">{metrics.loss}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Perplexity</p>
            <p className="text-sm font-medium text-gray-800">{metrics.perplexity}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">
            View Details
          </button>
          <button className="flex items-center text-xs font-medium text-gray-700">
            <Save size={14} className="mr-1" />
            Export
          </button>
          <button className="flex items-center text-xs font-medium text-gray-700">
            <GitBranch size={14} className="mr-1" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
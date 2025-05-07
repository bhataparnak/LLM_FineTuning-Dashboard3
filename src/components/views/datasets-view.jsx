import React from 'react';
import DatasetRow from '@/components/ui/dataset-row';

export default function DatasetsView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-800">Your Datasets</h3>
          <p className="text-sm text-gray-500">Manage your training and evaluation datasets</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Import Dataset
          </button>
          <button className="bg-blue-600 rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Upload Dataset
          </button>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 font-medium text-sm text-gray-700">
          <div className="col-span-4">Dataset Name</div>
          <div className="col-span-2">Size</div>
          <div className="col-span-2">Rows</div>
          <div className="col-span-2">Created</div>
          <div className="col-span-2">Actions</div>
        </div>

        <DatasetRow 
          name="Customer Support Conversations" 
          size="2.4 GB" 
          rows="42,156" 
          created="May 1, 2025" 
        />
        <DatasetRow 
          name="Medical Summaries" 
          size="845 MB" 
          rows="12,892" 
          created="Apr 28, 2025" 
        />
        <DatasetRow 
          name="Legal Q&A Pairs" 
          size="1.1 GB" 
          rows="18,526" 
          created="Apr 22, 2025" 
        />
        <DatasetRow 
          name="Financial Reports" 
          size="3.2 GB" 
          rows="8,921" 
          created="Apr 15, 2025" 
        />
        <DatasetRow 
          name="Technical Documentation" 
          size="980 MB" 
          rows="15,632" 
          created="Apr 10, 2025" 
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          Showing 5 of 8 datasets
        </div>
        <div className="flex space-x-2">
          <button className="border border-gray-300 rounded-md px-3 py-1 text-sm">Previous</button>
          <button className="bg-blue-600 text-white rounded-md px-3 py-1 text-sm">Next</button>
        </div>
      </div>
    </div>
  );
}
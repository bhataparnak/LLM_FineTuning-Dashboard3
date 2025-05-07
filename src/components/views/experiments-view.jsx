import React from 'react';
import ExperimentRow from '@/components/ui/experiment-row';

export default function ExperimentsView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-800">Fine-Tuning Experiments</h3>
          <p className="text-sm text-gray-500">Monitor and manage your fine-tuning jobs</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Compare Experiments
          </button>
          <button className="bg-blue-600 rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Create Experiment
          </button>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 font-medium text-sm text-gray-700">
          <div className="col-span-3">Experiment Name</div>
          <div className="col-span-2">Base Model</div>
          <div className="col-span-2">Dataset</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-2">Metrics</div>
          <div className="col-span-2">Actions</div>
        </div>

        <ExperimentRow 
          name="Customer Support Bot v2" 
          model="Llama-2-7b" 
          dataset="Customer Support Conversations" 
          status="running" 
          metrics={{ loss: "0.842", perplexity: "4.28" }}
        />
        <ExperimentRow 
          name="Medical Summarization Model" 
          model="Mistral-7b" 
          dataset="Medical Summaries" 
          status="completed" 
          metrics={{ loss: "0.723", perplexity: "3.64" }}
        />
        <ExperimentRow 
          name="Legal Q&A Assistant" 
          model="Llama-2-13b" 
          dataset="Legal Q&A Pairs" 
          status="queued" 
          metrics={{ loss: "-", perplexity: "-" }}
        />
        <ExperimentRow 
          name="Financial Report Analysis" 
          model="Mistral-7b" 
          dataset="Financial Reports" 
          status="failed" 
          metrics={{ loss: "N/A", perplexity: "N/A" }}
        />
        <ExperimentRow 
          name="Technical Documentation Helper" 
          model="Llama-2-7b" 
          dataset="Technical Documentation" 
          status="completed" 
          metrics={{ loss: "0.768", perplexity: "3.98" }}
        />
      </div>
    </div>
  );
}
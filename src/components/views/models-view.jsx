import React from 'react';
import ModelCard from '@/components/ui/model-card';

export default function ModelsView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-800">Your Fine-Tuned Models</h3>
          <p className="text-sm text-gray-500">Manage and deploy your fine-tuned models</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Import Model
          </button>
          <button className="bg-blue-600 rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Deploy Model
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ModelCard 
          name="Customer Support Bot v2" 
          baseModel="Llama-2-7b" 
          size="6.8 GB"
          created="May 1, 2025"
          metrics={{ loss: "0.842", perplexity: "4.28" }}
          isDeployed={true}
        />
        <ModelCard 
          name="Medical Summarization Model" 
          baseModel="Mistral-7b" 
          size="7.2 GB"
          created="Apr 28, 2025"
          metrics={{ loss: "0.723", perplexity: "3.64" }}
          isDeployed={true}
        />
        <ModelCard 
          name="Technical Documentation Helper" 
          baseModel="Llama-2-7b" 
          size="6.9 GB"
          created="Apr 10, 2025"
          metrics={{ loss: "0.768", perplexity: "3.98" }}
          isDeployed={false}
        />
        <ModelCard 
          name="Content Generator v1" 
          baseModel="Mistral-7b" 
          size="7.1 GB"
          created="Apr 5, 2025"
          metrics={{ loss: "0.912", perplexity: "4.72" }}
          isDeployed={false}
        />
        <ModelCard 
          name="Academic Research Assistant" 
          baseModel="Llama-2-13b" 
          size="12.6 GB"
          created="Mar 24, 2025"
          metrics={{ loss: "0.683", perplexity: "3.42" }}
          isDeployed={true}
        />
        <ModelCard 
          name="Code Completion Helper" 
          baseModel="Mistral-7b" 
          size="7.3 GB"
          created="Mar 15, 2025"
          metrics={{ loss: "0.798", perplexity: "4.12" }}
          isDeployed={false}
        />
      </div>
    </div>
  );
}
import React from 'react';
import { Play, Database, Check, Settings, Upload, PlusCircle, MessageSquare, Download } from 'lucide-react';
import StatsCard from '@/components/ui/stats-card';
import ActionCard from '@/components/ui/action-card';
import ResourceCard from '@/components/ui/resource-card';
import ExperimentItem from '@/components/ui/experiment-item';

export default function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Active Experiments" 
          value="3" 
          icon={<Play className="text-blue-500" />}
          change="+1 since yesterday"
          positive={true}
        />
        <StatsCard 
          title="Datasets" 
          value="8" 
          icon={<Database className="text-purple-500" />}
          change="2 uploaded this week"
          positive={true}
        />
        <StatsCard 
          title="Completed Models" 
          value="12" 
          icon={<Check className="text-green-500" />}
          change="+3 this month"
          positive={true}
        />
        <StatsCard 
          title="GPU Usage" 
          value="68%" 
          icon={<Settings className="text-amber-500" />}
          change="2 GPUs active"
          positive={null}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Experiments</h3>
          <div className="space-y-3">
            <ExperimentItem 
              name="Customer Support Bot" 
              model="Llama-2-7b" 
              status="running" 
              progress={67} 
              runtime="14h 23m"
            />
            <ExperimentItem 
              name="Medical Text Summarization" 
              model="Mistral-7b" 
              status="completed" 
              progress={100} 
              runtime="8h 45m"
            />
            <ExperimentItem 
              name="Legal Document Analysis" 
              model="Llama-2-13b" 
              status="queued" 
              progress={0} 
              runtime="-"
            />
          </div>
          <div className="mt-4 text-center">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All Experiments
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <ActionCard 
              icon={<Upload size={24} />}
              title="Upload Dataset"
              description="Add a new dataset for fine-tuning"
            />
            <ActionCard 
              icon={<PlusCircle size={24} />}
              title="New Experiment"
              description="Create a new fine-tuning experiment"
            />
            <ActionCard 
              icon={<MessageSquare size={24} />}
              title="Test Model"
              description="Chat with your fine-tuned model"
            />
            <ActionCard 
              icon={<Download size={24} />}
              title="Export Model"
              description="Export a model to Hugging Face"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">System Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ResourceCard title="GPU Memory" value="68%" color="blue" />
          <ResourceCard title="CPU Usage" value="42%" color="green" />
          <ResourceCard title="Disk Space" value="23%" color="purple" />
        </div>
      </div>
    </div>
  );
}
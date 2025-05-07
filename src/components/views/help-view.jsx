import React from 'react';
import { HelpCircle, Users, MessageSquare } from 'lucide-react';

export default function HelpView() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800">Help Center</h3>
        <p className="text-sm text-gray-500">Get help with LLM fine-tuning tasks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="text-lg font-medium text-gray-800 mb-4">Quick Start Guide</h4>
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                  1
                </div>
              </div>
              <div>
                <h5 className="font-medium text-gray-700">Upload Your Dataset</h5>
                <p className="text-sm text-gray-500">Prepare and upload your training data in CSV format</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                  2
                </div>
              </div>
              <div>
                <h5 className="font-medium text-gray-700">Configure Experiment</h5>
                <p className="text-sm text-gray-500">Choose base model and set hyperparameters</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                  3
                </div>
              </div>
              <div>
                <h5 className="font-medium text-gray-700">Train Your Model</h5>
                <p className="text-sm text-gray-500">Start training and monitor progress</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                  4
                </div>
              </div>
              <div>
                <h5 className="font-medium text-gray-700">Evaluate and Deploy</h5>
                <p className="text-sm text-gray-500">Test model performance and deploy for production</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Detailed Documentation
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="text-lg font-medium text-gray-800 mb-4">Frequently Asked Questions</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium text-gray-700">What format should my dataset be in?</h5>
              <p className="text-sm text-gray-500">Your dataset should be in CSV format with columns for input text and expected output.</p>
            </div>
            <div>
              <h5 className="font-medium text-gray-700">How much GPU memory do I need?</h5>
              <p className="text-sm text-gray-500">For 7B parameter models, we recommend at least 24GB of GPU memory.</p>
            </div>
            <div>
              <h5 className="font-medium text-gray-700">How long does fine-tuning typically take?</h5>
              <p className="text-sm text-gray-500">Depending on dataset size and model, fine-tuning can take from a few hours to several days.</p>
            </div>
            <div>
              <h5 className="font-medium text-gray-700">Can I use my own custom base model?</h5>
              <p className="text-sm text-gray-500">Yes, you can import custom models from Hugging Face or local files.</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All FAQs
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h4 className="text-lg font-medium text-gray-800 mb-4">Contact Support</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <HelpCircle size={36} className="mx-auto mb-3 text-blue-600" />
            <h5 className="font-medium text-gray-700">Documentation</h5>
            <p className="text-sm text-gray-500 mb-3">Browse our comprehensive guides and tutorials</p>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Docs
            </button>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <Users size={36} className="mx-auto mb-3 text-blue-600" />
            <h5 className="font-medium text-gray-700">Community Forum</h5>
            <p className="text-sm text-gray-500 mb-3">Connect with other users and share your experience</p>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Join Forum
            </button>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <MessageSquare size={36} className="mx-auto mb-3 text-blue-600" />
            <h5 className="font-medium text-gray-700">Email Support</h5>
            <p className="text-sm text-gray-500 mb-3">Get direct help from our technical team</p>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
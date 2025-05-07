'use client';

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function ChatView() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are now chatting with your fine-tuned model "Customer Support Bot v2" based on Llama-2-7b.' },
    { role: 'user', content: 'How do I reset my password?' },
    { role: 'assistant', content: 'To reset your password, please follow these steps:\n\n1. Go to the login page\n2. Click on "Forgot Password" below the login form\n3. Enter your email address\n4. Check your email for a password reset link\n5. Click the link and follow the instructions to create a new password\n\nIf you don\'t receive the email within a few minutes, please check your spam folder. If you still need help, let me know and I can assist you further.' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { role: 'user', content: newMessage }]);
      setNewMessage('');
      
      // Simulate AI response after a short delay
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "I'm processing your request about \"" + newMessage.trim() + "\". As this is a demo interface, I'm showing a simulated response. In a real implementation, this would be the actual response from your fine-tuned model."
        }]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-800">Chat with your Model</h3>
          <p className="text-sm text-gray-500">Test your fine-tuned model's capabilities</p>
        </div>
        <div className="flex space-x-3">
          <div className="bg-gray-100 rounded-md px-4 py-2 text-sm">
            <span className="font-medium">Model:</span> Customer Support Bot v2
          </div>
          <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Change Model
          </button>
        </div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow overflow-hidden flex flex-col">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center">
            <MessageSquare size={16} className="text-blue-600 mr-2" />
            <h4 className="font-medium text-gray-800">Customer Support Bot v2</h4>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            message.role !== 'system' && (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-3/4 rounded-lg p-3 ${
                  message.role === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            )
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button 
              onClick={handleSendMessage}
              className="bg-blue-600 rounded-md px-4 py-2 text-white font-medium hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
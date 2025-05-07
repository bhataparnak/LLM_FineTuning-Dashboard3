'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  // Determine the header title and button text based on the current path
  let title = 'Dashboard';
  let buttonText = 'Quick Start';
  
  if (pathname === '/datasets') {
    title = 'Datasets';
    buttonText = 'New Dataset';
  } else if (pathname === '/experiments') {
    title = 'Experiments';
    buttonText = 'New Experiment';
  } else if (pathname === '/chat') {
    title = 'Chat with Model';
    buttonText = '';
  } else if (pathname === '/models') {
    title = 'Models';
    buttonText = 'Import Model';
  } else if (pathname === '/help') {
    title = 'Help Center';
    buttonText = '';
  }

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      {buttonText && (
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {buttonText}
          </button>
        </div>
      )}
    </header>
  );
}
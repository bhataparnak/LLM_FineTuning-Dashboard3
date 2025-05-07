import React from 'react';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/layouts/sidebar';
import Header from '@/components/layouts/header';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LLM Fine-Tuning',
  description: 'Fine-tune large language models with a user-friendly interface',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
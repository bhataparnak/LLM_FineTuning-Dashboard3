'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, BarChart, Database, Settings, MessageSquare, FileText, HelpCircle, Users } from 'lucide-react';
import NavItem from '@/components/ui/nav-item';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} bg-blue-900 text-white transition-all duration-300 ease-in-out flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b border-blue-800">
        <h1 className={`font-bold ${collapsed ? 'hidden' : 'block'}`}>LLM Fine-Tuning</h1>
        <button onClick={() => setCollapsed(!collapsed)} className="text-white">
          <Menu size={20} />
        </button>
      </div>
      
      <nav className="flex-1 p-2">
        <NavItem 
          href="/"
          icon={<BarChart size={20} />} 
          label="Dashboard" 
          isActive={pathname === '/'} 
          collapsed={collapsed}
        />
        <NavItem 
          href="/datasets"
          icon={<Database size={20} />} 
          label="Datasets" 
          isActive={pathname === '/datasets'} 
          collapsed={collapsed}
        />
        <NavItem 
          href="/experiments"
          icon={<Settings size={20} />} 
          label="Experiments" 
          isActive={pathname === '/experiments'} 
          collapsed={collapsed}
        />
        <NavItem 
          href="/chat"
          icon={<MessageSquare size={20} />} 
          label="Chat" 
          isActive={pathname === '/chat'} 
          collapsed={collapsed}
        />
        <NavItem 
          href="/models"
          icon={<FileText size={20} />} 
          label="Models" 
          isActive={pathname === '/models'} 
          collapsed={collapsed}
        />
        <NavItem 
          href="/help"
          icon={<HelpCircle size={20} />} 
          label="Help" 
          isActive={pathname === '/help'} 
          collapsed={collapsed}
        />
      </nav>
      
      <div className="p-4 border-t border-blue-800">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'}`}>
          <Users size={20} />
          {!collapsed && <span className="ml-2">Community</span>}
        </div>
      </div>
    </div>
  );
}
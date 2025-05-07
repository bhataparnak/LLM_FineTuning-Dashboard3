import React from 'react';
import Link from 'next/link';

export default function NavItem({ href, icon, label, isActive, collapsed }) {
  return (
    <Link 
      href={href} 
      className={`flex items-center w-full p-3 mb-1 rounded ${
        isActive ? 'bg-blue-800' : 'hover:bg-blue-800'
      } transition`}
    >
      <span className="text-white">{icon}</span>
      {!collapsed && <span className="ml-3 text-white">{label}</span>}
    </Link>
  );
}
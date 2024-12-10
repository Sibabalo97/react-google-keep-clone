// Sidebar.js
import React from 'react';
import { Lightbulb, Bell, Tag, Archive, Trash2 } from 'lucide-react';

const Sidebar = ({ menuExpanded, setMenuExpanded }) => {
  const menuItems = [
    { icon: <Lightbulb className="w-5 h-5" />, label: "Notes", active: true },
    { icon: <Bell className="w-5 h-5" />, label: "Reminders" },
    { icon: <Tag className="w-5 h-5" />, label: "Labels" },
    { icon: <Archive className="w-5 h-5" />, label: "Archive" },
    { icon: <Trash2 className="w-5 h-5" />, label: "Trash" },
  ];

  return (
    <aside className={`${menuExpanded ? 'w-72' : 'w-20'} transition-all duration-200 p-2 bg-gray-50`}>
      <nav className="space-y-1">
        {menuItems.map((item, index) => (
          <button key={index} className={`w-full flex items-center gap-8 px-6 py-3 rounded-r-full hover:bg-gray-100 text-gray-800 ${item.active ? 'bg-yellow-50' : ''}`}>
            <div className="w-6">{item.icon}</div>
            {menuExpanded && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

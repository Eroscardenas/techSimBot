import React from 'react';
import { BarChart2, Database, FileText } from 'lucide-react';

export const ChatHeader: React.FC = () => {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <div className="bg-blue-600 text-white p-1.5 rounded mr-3">
          <Database size={20} />
        </div>
        <div>
          <h1 className="font-semibold text-gray-800">Data Mining Assistant</h1>
          <p className="text-xs text-gray-500">AI-powered insights for your data</p>
        </div>
      </div>
      <div className="flex space-x-1">
        <button 
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          title="Analytics"
        >
          <BarChart2 size={18} />
        </button>
        <button 
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          title="Documentation"
        >
          <FileText size={18} />
        </button>
      </div>
    </div>
  );
};
import React from 'react';
import { BarChart, PieChart, LineChart } from 'lucide-react';

export const DataVisualizationPlaceholder: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Data Visualization</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50">
        <div className="flex justify-center space-x-4 mb-4">
          <BarChart size={24} className="text-blue-600" />
          <PieChart size={24} className="text-purple-600" />
          <LineChart size={24} className="text-indigo-600" />
        </div>
        <p className="text-gray-600 mb-2">Data visualization will appear here</p>
        <p className="text-sm text-gray-500">
          Connect your data sources or upload files to visualize insights
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Connect Data Source
        </button>
      </div>
    </div>
  );
};
import React from 'react';
import { Scenario } from '../types';
import { scenarios } from '../utils/scenarios';
import { Wrench, AlertTriangle, Settings, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

interface ScenarioSelectorProps {
  onSelectScenario: (scenario: Scenario) => void;
}

const getCategoryIcon = (category: Scenario['category']) => {
  switch (category) {
    case 'maintenance':
      return <Wrench className="w-5 h-5" />;
    case 'safety':
      return <AlertTriangle className="w-5 h-5" />;
    case 'operation':
      return <Settings className="w-5 h-5" />;
    case 'emergency':
      return <Gauge className="w-5 h-5" />;
    default:
      return null;
  }
};

export const ScenarioSelector: React.FC<ScenarioSelectorProps> = ({ onSelectScenario }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      {scenarios.map((scenario, index) => (
        <motion.button
          key={scenario.id}
          onClick={() => onSelectScenario(scenario)}
          className="flex items-start p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="mr-4 mt-1 text-blue-600">
            {getCategoryIcon(scenario.category)}
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-800 text-lg">{scenario.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{scenario.description}</p>
            <div className="mt-3 flex items-center text-xs text-blue-600">
              <span>Comenzar entrenamiento</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
};
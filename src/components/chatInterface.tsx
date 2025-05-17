import React from 'react';
import { ChatHeader } from './chatHeader';
import { ChatContainer } from './chatContainer';
import { ChatInput } from './chatInput';
import { ScenarioSelector } from './scenarioSelector';
import { useChat } from '../context/chatContext';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const ChatInterface: React.FC = () => {
  const { addMessage, isTyping, startScenario, currentScenario, resetScenario } = useChat();

  const handleSendMessage = (text: string) => {
    addMessage(text, 'user');
  };

  return (
    <div className="flex flex-col h-full border rounded-lg shadow-lg overflow-hidden bg-white">
      <ChatHeader />
      {currentScenario ? (
        <>
          <div className="bg-gray-50 p-2 border-b flex items-center">
            <motion.button
              onClick={resetScenario}
              className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={16} className="mr-1" />
              Volver a escenarios
            </motion.button>
            <div className="ml-3 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm">
              {currentScenario.title}
            </div>
          </div>
          <ChatContainer />
          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
        </>
      ) : (
        <ScenarioSelector onSelectScenario={startScenario} />
      )}
    </div>
  );
};
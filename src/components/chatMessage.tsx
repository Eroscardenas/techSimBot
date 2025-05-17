import React from 'react';
import { Message } from '../types';
import { Bot, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <motion.div 
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`flex ${isBot ? 'flex-row' : 'flex-row-reverse'} max-w-[85%]`}>
        <div 
          className={`flex items-center justify-center h-8 w-8 rounded-full flex-shrink-0 ${
            isBot ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
          } mr-2`}
        >
          {isBot ? <Bot size={16} /> : <User size={16} />}
        </div>
        
        <motion.div
          className={`px-4 py-3 rounded-lg shadow-sm ${
            isBot 
              ? 'bg-white border border-gray-200 text-gray-800' 
              : 'bg-green-600 text-white'
          }`}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-sm whitespace-pre-wrap">{message.text}</div>
          {message.category && (
            <span className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full ${
              isBot ? 'bg-gray-100 text-gray-600' : 'bg-green-700 text-white'
            }`}>
              {message.category}
            </span>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
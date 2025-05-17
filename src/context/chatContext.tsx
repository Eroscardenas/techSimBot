import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';
import { Message, ChatContextType, Scenario } from '../types';
import { getScenarioResponse } from '../utils/scenarios';

const ChatContext = createContext<ChatContextType | undefined>(undefined);


export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Bienvenido a TechSimBot! Soy tu asistente de entrenamiento técnico. ¿En qué área te gustaría practicar hoy?',
      sender: 'bot',
      timestamp: new Date(),
      category: 'instruction'
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);

  const addMessage = useCallback(async (text: string, sender: 'user' | 'bot', category?: Message['category']) => {
    const newMessage: Message = {
      id: Date.now().toString(),  // Usando Date.now() para un ID único
      text,
      sender,
      timestamp: new Date(),
      category
    };

    setMessages(prev => [...prev, newMessage]);

    if (sender === 'user') {
      setIsTyping(true);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
        const response = getScenarioResponse(text, currentScenario);
        
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: response,
          sender: 'bot',
          timestamp: new Date(),
          category: 'feedback'
        };
        
        setMessages(prev => [...prev, botResponse]);
      } catch (error) {
        console.error('Error generando respuesta:', error);
        
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Lo siento, hubo un error procesando tu respuesta. Por favor, intenta de nuevo.',
          sender: 'bot',
          timestamp: new Date(),
          category: 'error'
        };
        
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
      }
    }
  }, [currentScenario]);

  const startScenario = useCallback((scenario: Scenario) => {
    setCurrentScenario(scenario);
    setMessages([{
      id: Date.now().toString(),
      text: `Iniciando escenario: ${scenario.title}\n\n${scenario.description}\n\n¿Estás listo para comenzar?`,
      sender: 'bot',
      timestamp: new Date(),
      category: 'instruction'
    }]);
  }, []);

  const resetScenario = useCallback(() => {
    setCurrentScenario(null);
    setMessages([{
      id: Date.now().toString(),
      text: '¡Bienvenido de nuevo! ¿Qué escenario te gustaría practicar ahora?',
      sender: 'bot',
      timestamp: new Date(),
      category: 'instruction'
    }]);
  }, []);

  const value = {
    messages,
    currentScenario,
    addMessage,
    startScenario,
    resetScenario,
    isTyping
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat debe ser usado dentro de un ChatProvider');
  }
  return context;
};

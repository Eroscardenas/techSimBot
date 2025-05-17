export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
    category?: 'question' | 'feedback' | 'instruction' | 'error';
  }
  
  export interface Scenario {
    id: string;
    title: string;
    description: string;
    category: 'maintenance' | 'safety' | 'operation' | 'emergency';
  }
  
  export type ChatContextType = {
    messages: Message[];
    currentScenario: Scenario | null;
    addMessage: (text: string, sender: 'user' | 'bot', category?: Message['category']) => void;
    startScenario: (scenario: Scenario) => void;
    resetScenario: () => void;
    isTyping: boolean;
  };
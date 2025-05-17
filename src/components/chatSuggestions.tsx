import React from 'react';

interface ChatSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

export const ChatSuggestions: React.FC<ChatSuggestionsProps> = ({ onSuggestionClick }) => {
  const suggestions = [
    "Help me analyze my dataset",
    "What clustering algorithms should I use?",
    "How to handle big data processing?",
    "Explain data mining techniques"
  ];

  return (
    <div className="mx-4 my-3">
      <h3 className="text-xs font-medium text-gray-500 mb-2">SUGGESTED QUERIES</h3>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1.5 rounded-full transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};
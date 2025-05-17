import React, { useEffect, useRef } from 'react';
import { ChatMessage } from './chatMessage';  // Asegúrate de que la importación sea correcta
import { TypingIndicator } from './typingIndicator';  // Asegúrate de que la importación sea correcta
import { useChat } from '../context/chatContext';  // Asegúrate de que la importación sea correcta
import { motion } from 'framer-motion';

export const ChatContainer: React.FC = () => {
    // Obtenemos los mensajes y el estado de isTyping desde el contexto
    const { messages, isTyping } = useChat();

    // Ref para hacer scroll al final de los mensajes
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Función para hacer scroll hacia el final
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Efecto para hacer scroll hacia el final cada vez que cambian los mensajes o el estado de isTyping
    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    return (
        <motion.div 
            className="flex-1 overflow-y-auto p-4 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {/* Renderizamos los mensajes */}
            {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
            ))}
            
            {/* Si está escribiendo, mostramos el indicador */}
            {isTyping && <TypingIndicator />}
            
            {/* Esta referencia se utiliza para hacer scroll hacia el final */}
            <div ref={messagesEndRef} />
        </motion.div>
    );
};

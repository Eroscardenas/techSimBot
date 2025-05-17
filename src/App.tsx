import { ChatProvider } from './context/chatContext';
import { ChatInterface } from './components/chatInterface';
import { HardHat } from 'lucide-react';

function App() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
        <header className="mb-6 flex items-center">
          <div className="bg-blue-600 text-white p-2 rounded-lg mr-4">
            <HardHat size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">TechSimBot</h1>
            <p className="text-gray-600">Entrenamiento Técnico Interactivo</p>
          </div>
        </header>
        
        <main className="max-w-6xl mx-auto">
          <div className="h-[600px]">
            <ChatInterface />
          </div>
        </main>
        
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TechSimBot - Asistente de Entrenamiento Técnico</p>
        </footer>
      </div>
    </ChatProvider>
  );
}

export default App;

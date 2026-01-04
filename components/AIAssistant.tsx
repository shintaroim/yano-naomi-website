
import React, { useState } from 'react';
import { MessageSquare, Send, User, Bot, Loader2 } from 'lucide-react';
import { getBusinessAdvice } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: 'こんにちは！矢野尚美のAIアシスタントです。ビジネスのアドバイスや、提供しているサービスについて何でもお聞きください。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const botResponse = await getBusinessAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 md:w-96 flex flex-col max-h-[500px]">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-orange-600 rounded-t-2xl text-white">
            <h3 className="font-bold flex items-center gap-2">
              <Bot size={20} /> AI アシスタント
            </h3>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-orange-100 text-orange-900 rounded-tr-none' 
                    : 'bg-slate-100 text-slate-800 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 rounded-2xl p-3 rounded-tl-none">
                  <Loader2 className="animate-spin text-orange-600" size={18} />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="質問を入力..."
              className="flex-1 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-600 text-white p-4 rounded-full shadow-2xl hover:bg-orange-700 transition-all hover:scale-110 flex items-center gap-2"
        >
          <MessageSquare />
          <span className="hidden md:inline font-medium">AIに相談する</span>
        </button>
      )}
    </div>
  );
};

const X = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

export default AIAssistant;

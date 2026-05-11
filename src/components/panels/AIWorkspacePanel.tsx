import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Bot, User } from 'lucide-react';

// The analyzing animation using geometric shapes merging
const AnalyzingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 h-40 md:h-48 relative transform scale-75 md:scale-100">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Triangle / Polygon */}
        <motion.div
          className="absolute w-12 h-12 bg-blue-500 mix-blend-screen rounded-tl-full rounded-br-full opacity-80"
          animate={{
            x: [0, 15, -15, 0],
            y: [0, -15, 15, 0],
            rotate: [0, 90, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Circle */}
        <motion.div
          className="absolute w-12 h-12 bg-purple-500 mix-blend-screen rounded-full opacity-80"
          animate={{
            x: [0, -20, 20, 0],
            y: [0, 10, -10, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        {/* Square */}
        <motion.div
          className="absolute w-10 h-10 bg-indigo-500 mix-blend-screen rounded-sm opacity-80"
          animate={{
            x: [0, 10, -20, 0],
            y: [0, 20, -20, 0],
            rotate: [0, -90, -180, -360],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        />
        <motion.div 
          className="absolute inset-0 border border-blue-400/30 rounded-full"
          animate={{ scale: [1, 1.5, 2], opacity: [0.8, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </div>
      <motion.p 
        className="mt-6 md:mt-4 text-sm md:text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Analyzing financial correlations...
      </motion.p>
    </div>
  );
};

export const AIWorkspacePanel: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hi, I am DataBuddy. I can help you analyze the Financial_Data workspace. What would you like to know about Q1_Earnings_Report?' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    setIsAnalyzing(true);

    // Simulate AI response
    setTimeout(() => {
      setIsAnalyzing(false);
      setMessages(prev => [...prev, { role: 'ai', content: 'Based on my analysis, the MACD indicator shows a bullish divergence for AAPL in Q1, while P/E ratios across the tech sector have normalized. Would you like me to plot these correlations?' }]);
    }, 4000);
  };

  return (
    <div className="w-full md:w-80 bg-zinc-950 flex flex-col h-full overflow-hidden">
      <div className="px-4 py-3 md:py-2 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-purple-400 md:w-4 md:h-4" />
          <span className="text-base md:text-sm font-semibold text-zinc-200">AI Workspace</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 md:w-6 md:h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-1 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-purple-600/20 text-purple-400 border border-purple-500/30'}`}>
              {msg.role === 'user' ? <User size={16} className="text-white md:w-3 md:h-3" /> : <Bot size={16} className="md:w-3 md:h-3" />}
            </div>
            <div className={`p-4 md:p-3 rounded-lg text-base md:text-sm leading-relaxed ${msg.role === 'user' ? 'bg-blue-600/20 text-blue-100 border border-blue-500/30 rounded-tr-none' : 'bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-tl-none'}`}>
              {msg.content}
            </div>
          </div>
        ))}
        
        <AnimatePresence>
          {isAnalyzing && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <AnalyzingAnimation />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-zinc-800 bg-zinc-900 flex-shrink-0 pb-6 md:pb-4">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isAnalyzing}
            placeholder={isAnalyzing ? "AI is processing..." : "Ask DataBuddy..."}
            className="w-full bg-zinc-950 border border-zinc-700 rounded-md py-3 md:py-2.5 pl-4 md:pl-3 pr-12 md:pr-10 text-base md:text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 disabled:opacity-50 transition-all"
          />
          <button 
            type="submit" 
            disabled={isAnalyzing || !input.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-purple-400 disabled:opacity-50 transition-colors"
          >
            <Send size={20} className="md:w-4 md:h-4" />
          </button>
        </form>
        <div className="text-center mt-3 md:mt-2 hidden md:block">
          <span className="text-[10px] text-zinc-600">Press Enter to send. DataBuddy uses local context.</span>
        </div>
      </div>
    </div>
  );
};

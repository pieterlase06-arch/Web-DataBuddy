import React from 'react';
import { Minus, Square, X } from 'lucide-react';

export const TitleBar: React.FC = () => {
  return (
    <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-3 select-none flex-shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
          <span className="text-[10px] font-bold text-white leading-none">D</span>
        </div>
        <span className="text-xs font-semibold text-zinc-300">DataBuddy</span>
      </div>
      
      <div className="flex items-center">
        <button className="h-8 w-10 flex items-center justify-center hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors">
          <Minus size={14} />
        </button>
        <button className="h-8 w-10 flex items-center justify-center hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors">
          <Square size={12} />
        </button>
        <button className="h-8 w-10 flex items-center justify-center hover:bg-red-500 hover:text-white text-zinc-400 transition-colors">
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

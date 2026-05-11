import React from 'react';
import { ChevronRight, ChevronDown, Folder, FileJson, FileSpreadsheet } from 'lucide-react';

export const FolderTreePanel: React.FC = () => {
  return (
    <div className="w-full md:w-64 bg-zinc-900 flex flex-col h-full overflow-hidden">
      <div className="px-4 md:px-3 py-3 md:py-2 text-sm md:text-xs font-semibold text-zinc-400 uppercase tracking-wider border-b border-zinc-800 flex-shrink-0">
        Workspace
      </div>
      <div className="flex-1 overflow-y-auto p-4 md:p-2 custom-scrollbar">
        <div className="flex items-center gap-2 md:gap-1.5 py-3 md:py-1 px-3 md:px-2 rounded hover:bg-zinc-800/50 cursor-pointer text-base md:text-sm text-zinc-300">
          <ChevronDown size={18} className="text-zinc-500 md:w-3.5 md:h-3.5" />
          <Folder size={20} className="text-blue-400 md:w-3.5 md:h-3.5" />
          <span>Financial_Data</span>
        </div>
        
        <div className="pl-6 md:pl-5">
          <div className="flex items-center gap-2 md:gap-1.5 py-3 md:py-1 px-3 md:px-2 rounded bg-blue-500/10 text-blue-400 cursor-pointer text-base md:text-sm">
            <FileSpreadsheet size={18} className="md:w-3.5 md:h-3.5" />
            <span>Q1_Earnings_Report.csv</span>
          </div>
          <div className="flex items-center gap-2 md:gap-1.5 py-3 md:py-1 px-3 md:px-2 rounded hover:bg-zinc-800/50 cursor-pointer text-base md:text-sm text-zinc-400">
            <FileSpreadsheet size={18} className="md:w-3.5 md:h-3.5" />
            <span>Historical_Stocks.csv</span>
          </div>
          <div className="flex items-center gap-2 md:gap-1.5 py-3 md:py-1 px-3 md:px-2 rounded hover:bg-zinc-800/50 cursor-pointer text-base md:text-sm text-zinc-400">
            <FileJson size={18} className="text-yellow-400 md:w-3.5 md:h-3.5" />
            <span>config.json</span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-1.5 py-3 md:py-1 px-3 md:px-2 mt-2 md:mt-1 rounded hover:bg-zinc-800/50 cursor-pointer text-base md:text-sm text-zinc-300">
          <ChevronRight size={18} className="text-zinc-500 md:w-3.5 md:h-3.5" />
          <Folder size={20} className="text-zinc-500 md:w-3.5 md:h-3.5" />
          <span>Models</span>
        </div>
        <div className="flex items-center gap-2 md:gap-1.5 py-3 md:py-1 px-3 md:px-2 rounded hover:bg-zinc-800/50 cursor-pointer text-base md:text-sm text-zinc-300">
          <ChevronRight size={18} className="text-zinc-500 md:w-3.5 md:h-3.5" />
          <Folder size={20} className="text-zinc-500 md:w-3.5 md:h-3.5" />
          <span>Exports</span>
        </div>
      </div>
    </div>
  );
};

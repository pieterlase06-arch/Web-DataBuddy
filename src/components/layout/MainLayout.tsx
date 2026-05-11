import React, { useState } from 'react';
import { TitleBar } from './TitleBar';
import { FolderTreePanel } from '../panels/FolderTreePanel';
import { DataGridPanel } from '../panels/DataGridPanel';
import { AIWorkspacePanel } from '../panels/AIWorkspacePanel';
import { Folder, FileSpreadsheet, Bot } from 'lucide-react';

type Tab = 'files' | 'grid' | 'ai';

export const MainLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('grid');

  return (
    <div className="flex flex-col h-[100dvh] w-screen overflow-hidden bg-zinc-950 text-zinc-300 font-sans">
      {/* Custom Title Bar - hidden on mobile */}
      <div className="hidden md:block">
        <TitleBar />
      </div>
      
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Panel: Folder Tree */}
        <div className={`md:flex ${activeTab === 'files' ? 'flex' : 'hidden'} flex-1 md:flex-none w-full md:w-64 border-r-0 md:border-r border-zinc-800`}>
          <FolderTreePanel />
        </div>
        
        {/* Middle Panel: Data Grid */}
        <div className={`md:flex ${activeTab === 'grid' ? 'flex' : 'hidden'} flex-1 w-full md:w-auto`}>
          <DataGridPanel />
        </div>
        
        {/* Right Panel: AI Workspace */}
        <div className={`md:flex ${activeTab === 'ai' ? 'flex' : 'hidden'} flex-1 md:flex-none w-full md:w-80 border-l-0 md:border-l border-zinc-800`}>
          <AIWorkspacePanel />
        </div>
      </div>

      {/* Bottom Navigation Bar - visible only on mobile */}
      <div className="md:hidden flex h-16 bg-zinc-900 border-t border-zinc-800 flex-shrink-0">
        <button 
          onClick={() => setActiveTab('files')}
          className={`flex-1 flex flex-col items-center justify-center gap-1 ${activeTab === 'files' ? 'text-blue-400' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          <Folder size={20} />
          <span className="text-[10px] font-medium">Files</span>
        </button>
        <button 
          onClick={() => setActiveTab('grid')}
          className={`flex-1 flex flex-col items-center justify-center gap-1 ${activeTab === 'grid' ? 'text-blue-400' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          <FileSpreadsheet size={20} />
          <span className="text-[10px] font-medium">Data Grid</span>
        </button>
        <button 
          onClick={() => setActiveTab('ai')}
          className={`flex-1 flex flex-col items-center justify-center gap-1 ${activeTab === 'ai' ? 'text-blue-400' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          <Bot size={20} />
          <span className="text-[10px] font-medium">AI Chat</span>
        </button>
      </div>
    </div>
  );
};

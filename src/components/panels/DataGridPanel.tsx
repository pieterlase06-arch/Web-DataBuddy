import React from 'react';

export const DataGridPanel: React.FC = () => {
  // Generate some dummy data to show density
  const headers = ['Date', 'Symbol', 'Open', 'High', 'Low', 'Close', 'Volume', 'Market Cap', 'P/E Ratio', 'Dividend Yield', 'Beta', 'RSI', 'MACD', 'Volume_Avg'];
  const rows = Array.from({ length: 50 }).map((_, i) => [
    `2023-10-${String((i % 31) + 1).padStart(2, '0')}`,
    ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA'][i % 5],
    (150 + Math.random() * 50).toFixed(2),
    (155 + Math.random() * 50).toFixed(2),
    (145 + Math.random() * 50).toFixed(2),
    (152 + Math.random() * 50).toFixed(2),
    Math.floor(Math.random() * 10000000).toLocaleString(),
    `$${(Math.random() * 2 + 1).toFixed(2)}T`,
    (20 + Math.random() * 10).toFixed(2),
    (0.5 + Math.random() * 2).toFixed(2) + '%',
    (0.8 + Math.random() * 0.5).toFixed(2),
    (30 + Math.random() * 40).toFixed(2),
    (Math.random() * 2 - 1).toFixed(2),
    Math.floor(Math.random() * 10000000).toLocaleString(),
  ]);

  return (
    <div className="flex-1 bg-[#1e1e1e] flex flex-col h-full w-full overflow-hidden relative">
      {/* File Tabs */}
      <div className="flex items-center bg-[#181818] border-b border-[#2d2d2d] flex-shrink-0 overflow-x-auto custom-scrollbar">
        <div className="px-4 py-3 md:py-1.5 bg-[#1e1e1e] border-t-2 border-t-blue-500 border-r border-r-[#2d2d2d] text-sm md:text-xs font-medium text-zinc-200 whitespace-nowrap">
          Q1_Earnings_Report.csv
        </div>
        <div className="px-4 py-3 md:py-1.5 border-r border-r-[#2d2d2d] text-sm md:text-xs font-medium text-zinc-500 hover:text-zinc-300 hover:bg-[#252525] cursor-pointer whitespace-nowrap">
          Historical_Stocks.csv
        </div>
      </div>

      {/* Grid Container */}
      <div className="flex-1 overflow-auto bg-[#1e1e1e] custom-scrollbar">
        <table className="w-full text-xs text-left whitespace-nowrap border-collapse">
          <thead className="sticky top-0 bg-[#252525] z-10">
            <tr>
              <th className="px-3 md:px-2 py-3 md:py-0.5 border border-[#333] text-zinc-400 font-semibold bg-[#2a2a2a] w-12 text-center sticky left-0 z-20 shadow-[1px_0_0_#333]">#</th>
              {headers.map((header, idx) => (
                <th key={idx} className="px-3 md:px-2 py-3 md:py-0.5 border border-[#333] text-zinc-400 font-semibold truncate max-w-[120px] text-sm md:text-xs">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-mono text-xs md:text-[11px] text-zinc-300">
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-[#2a2d35]">
                <td className="px-3 md:px-2 py-3 md:py-0.5 border border-[#333] text-zinc-500 text-center sticky left-0 bg-[#252525] z-10 group-hover:bg-[#2a2d35] shadow-[1px_0_0_#333]">
                  {rowIdx + 1}
                </td>
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className={`px-3 md:px-2 py-3 md:py-0.5 border border-[#333] truncate max-w-[120px] ${cellIdx > 1 ? 'text-right' : ''}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer Info */}
      <div className="h-8 md:h-6 bg-blue-600 flex items-center px-4 md:px-3 text-[11px] md:text-[10px] text-white font-medium flex-shrink-0 flex justify-between overflow-x-auto">
        <div className="flex items-center gap-4">
          <span>Ready</span>
          <span>Row: 1, Col: 1</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline">UTF-8</span>
          <span className="hidden md:inline">CRLF</span>
          <span>CSV</span>
        </div>
      </div>
    </div>
  );
};

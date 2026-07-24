"use client";

import { ReactNode } from "react";
import { Maximize2, Minus, X } from "lucide-react";

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Window({ title, children, className = "" }: WindowProps) {
  return (
    <div className={`flex flex-col bg-card border border-border shadow-2xl w-full h-full md:w-[85vw] md:h-[80vh] md:max-w-6xl md:max-h-[900px] overflow-hidden ${className}`}>
      {/* Title Bar */}
      <div className="flex items-center justify-between bg-zinc-900 border-b border-border px-4 py-2 shrink-0">
        <div className="flex items-center gap-4">
          <div className="font-mono text-xs font-semibold text-white tracking-wide">
            {title}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button className="h-4 w-4 bg-transparent hover:bg-zinc-800 border border-zinc-600 flex items-center justify-center transition-colors text-zinc-400 hover:text-white group">
            <Minus className="h-3 w-3" />
          </button>
          <button className="h-4 w-4 bg-transparent hover:bg-zinc-800 border border-zinc-600 flex items-center justify-center transition-colors text-zinc-400 hover:text-white group">
            <Maximize2 className="h-3 w-3" />
          </button>
          <button className="h-4 w-4 bg-transparent hover:bg-red-500/20 hover:border-red-500 border border-zinc-600 flex items-center justify-center transition-colors text-zinc-400 hover:text-red-400 group">
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="hidden sm:flex items-center gap-4 bg-zinc-900/50 border-b border-border px-4 py-1 shrink-0 font-mono text-[11px] text-zinc-400">
        <span className="hover:text-primary cursor-pointer hover:bg-primary/10 px-2 py-0.5 transition-colors">File</span>
        <span className="hover:text-primary cursor-pointer hover:bg-primary/10 px-2 py-0.5 transition-colors">Edit</span>
        <span className="hover:text-primary cursor-pointer hover:bg-primary/10 px-2 py-0.5 transition-colors">View</span>
        <span className="hover:text-primary cursor-pointer hover:bg-primary/10 px-2 py-0.5 transition-colors">Navigate</span>
        <span className="hover:text-primary cursor-pointer hover:bg-primary/10 px-2 py-0.5 transition-colors">Help</span>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto relative bg-background flex flex-col">
        <div className="flex-1">
          {children}
        </div>
        
        {/* Status Bar */}
        <div className="shrink-0 h-6 bg-zinc-900 border-t border-border flex items-center justify-between px-3 font-mono text-[10px] text-zinc-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              SYSTEM OPERATIONAL
            </span>
            <span className="hidden md:inline-block">|</span>
            <span className="hidden md:inline-block text-zinc-400">{title}</span>
          </div>
          <div>ANLABS.OS v2.0</div>
        </div>
      </div>
    </div>
  );
}

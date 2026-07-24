"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Window from "@/components/os/Window";
import { Terminal as TerminalIcon } from "lucide-react";

interface CommandRecord {
  input: string;
  output: React.ReactNode;
}

export default function TerminalPage() {
  const router = useRouter();
  const [history, setHistory] = useState<CommandRecord[]>([
    {
      input: "",
      output: (
        <div className="text-zinc-400 mb-4">
          ANLABS OS [Version 2.0.4]<br/>
          (c) ANLABS Corporation. All rights reserved.<br/>
          <br/>
          Type <span className="text-primary font-bold">help</span> to see available commands.
        </div>
      )
    }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Focus input on any click
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    let output: React.ReactNode = null;

    if (trimmedCmd === "") {
      // Do nothing
    } else if (trimmedCmd === "help") {
      output = (
        <div className="text-zinc-400 pl-4 py-2 space-y-1">
          <div><span className="text-primary w-20 inline-block font-bold">help</span> - Display this help message</div>
          <div><span className="text-primary w-20 inline-block font-bold">projects</span> - View engineering projects</div>
          <div><span className="text-primary w-20 inline-block font-bold">notes</span> - Read architecture notes</div>
          <div><span className="text-primary w-20 inline-block font-bold">services</span> - View capabilities & modules</div>
          <div><span className="text-primary w-20 inline-block font-bold">contact</span> - Execute connect.exe</div>
          <div><span className="text-primary w-20 inline-block font-bold">resume</span> - Download resume.pdf</div>
          <div><span className="text-primary w-20 inline-block font-bold">clear</span> - Clear the terminal output</div>
        </div>
      );
    } else if (trimmedCmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (trimmedCmd === "projects") {
      output = <div className="text-primary animate-pulse py-1">Executing projects.exe...</div>;
      setTimeout(() => router.push("/projects"), 800);
    } else if (trimmedCmd === "notes") {
      output = <div className="text-primary animate-pulse py-1">Opening engineering_journal.md...</div>;
      setTimeout(() => router.push("/notes"), 800);
    } else if (trimmedCmd === "services") {
      output = <div className="text-primary animate-pulse py-1">Loading system modules...</div>;
      setTimeout(() => router.push("/services"), 800);
    } else if (trimmedCmd === "contact") {
      output = <div className="text-primary animate-pulse py-1">Executing connect.exe...</div>;
      setTimeout(() => router.push("/contact"), 800);
    } else if (trimmedCmd === "resume") {
      output = <div className="text-primary animate-pulse py-1">Downloading resume.pdf...</div>;
      setTimeout(() => window.open("/resume.pdf", "_blank"), 800);
    } else {
      output = <div className="text-red-400 py-1">Command not found: {trimmedCmd}</div>;
    }

    setHistory((prev) => [...prev, { input: cmd, output }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <Window title="C:\ANLABS\SYSTEM32\CMD.EXE">
      <div 
        className="p-4 md:p-6 font-mono h-full w-full bg-black cursor-text overflow-y-auto"
        onClick={handleContainerClick}
      >
        {history.map((record, index) => (
          <div key={index} className="mb-2">
            {record.input && (
              <div className="flex items-center text-zinc-300">
                <span className="text-zinc-500 mr-2">C:\Users\Anandu&gt;</span>
                {record.input}
              </div>
            )}
            {record.output}
          </div>
        ))}

        <div className="flex items-center text-white">
          <span className="text-zinc-500 mr-2">C:\Users\Anandu&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} className="h-4" />
      </div>
    </Window>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderGit2, TerminalSquare, Briefcase, Mail, FileText, Terminal } from "lucide-react";

export default function DesktopEnvironment() {
  const pathname = usePathname();

  const items = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Notes", href: "/notes", icon: TerminalSquare },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Resume", href: "/resume.pdf", icon: FileText, external: true },
    { name: "Terminal", href: "/terminal", icon: Terminal },
  ];

  return (
    <>
      {/* Desktop Icons (Hidden on Mobile) */}
      <div className="hidden md:flex flex-col gap-6 absolute top-8 left-8 z-0 pointer-events-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          
          const content = (
            <div className={`flex flex-col items-center gap-2 group cursor-pointer w-24 p-2 rounded-sm transition-colors ${isActive ? 'bg-primary/20 border border-primary/50' : 'hover:bg-white/5 border border-transparent'}`}>
              <div className="p-3 bg-zinc-900 border border-zinc-700 shadow-lg group-hover:border-zinc-500 transition-colors">
                <Icon className={`h-8 w-8 ${isActive ? 'text-primary' : 'text-zinc-300 group-hover:text-white'}`} />
              </div>
              <span className={`text-xs font-mono text-center drop-shadow-md px-1 ${isActive ? 'bg-primary text-black' : 'text-zinc-300'}`}>
                {item.name}
              </span>
            </div>
          );

          if (item.external) {
            return (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            );
          }

          return (
            <Link key={item.name} href={item.href}>
              {content}
            </Link>
          );
        })}
      </div>

      {/* Mobile Dock (Hidden on Desktop) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex justify-center pointer-events-none">
        <div className="flex items-center gap-1 bg-zinc-950/90 backdrop-blur-md border border-border p-2 pointer-events-auto shadow-2xl overflow-x-auto hide-scrollbar max-w-full">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            const content = (
              <div
                className={`flex flex-col items-center justify-center w-12 h-12 shrink-0 transition-colors ${
                  isActive ? "text-primary bg-primary/10 border border-primary/30" : "text-zinc-400 hover:text-white hover:bg-zinc-800 border border-transparent"
                }`}
              >
                <Icon className="h-5 w-5" />
                {isActive && (
                  <div className="absolute bottom-1 w-1 h-1 bg-primary rounded-full" />
                )}
              </div>
            );

            if (item.external) {
              return (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="relative group">
                  {content}
                </a>
              );
            }

            return (
              <Link key={item.name} href={item.href} className="relative group">
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

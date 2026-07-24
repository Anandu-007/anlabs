"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderGit2, TerminalSquare, Briefcase, Mail } from "lucide-react";

export default function Dock() {
  const pathname = usePathname();

  const items = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Notes", href: "/notes", icon: TerminalSquare },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 md:pb-6 pointer-events-none">
      <div className="flex items-center gap-2 bg-zinc-950/80 backdrop-blur-md border border-border p-2 pointer-events-auto shadow-2xl">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group relative flex flex-col items-center justify-center w-12 h-12 transition-all duration-200 hover:-translate-y-2 ${
                isActive ? "text-primary bg-primary/10 border border-primary/30" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 border border-transparent"
              }`}
            >
              <Icon className="h-5 w-5" />
              
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full" />
              )}

              {/* Tooltip */}
              <span className="absolute -top-10 scale-0 transition-all rounded bg-zinc-900 px-2 py-1 text-xs font-mono text-zinc-300 group-hover:scale-100 border border-border whitespace-nowrap">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

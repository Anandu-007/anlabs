import { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      {children}
    </main>
  );
}
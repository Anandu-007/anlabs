"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Folder, Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

import { downloadResume } from "@/services/resume";

export default function ApplicationShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadingResume, setDownloadingResume] = useState(false);

  const folders = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    // { name: "Blog", href: "/notes" },
    // { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  async function handleResumeDownload() {
    try {
      setDownloadingResume(true);
      await downloadResume();
    } catch (error) {
      console.error(error);
      alert("Unable to download resume.");
    } finally {
      setDownloadingResume(false);
      setMobileMenuOpen(false);
    }
  }

  const Sidebar = () => (
    <div className="flex flex-col h-full bg-black border-r border-primary">
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        {folders.map((folder) => {
          const isActive =
            pathname === folder.href ||
            (folder.href !== "/" && pathname.startsWith(folder.href));

          return (
            <Link
              key={folder.name}
              href={folder.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-4 p-3 group transition-none ${
                isActive
                  ? "bg-primary text-black"
                  : "hover:bg-primary hover:text-black text-white"
              }`}
            >
              <Folder
                className={`h-8 w-8 ${
                  isActive
                    ? "text-black"
                    : "text-primary group-hover:text-black"
                } fill-current`}
              />

              <span className="text-sm font-bold tracking-wider uppercase">
                {folder.name}
              </span>
            </Link>
          );
        })}

        <button
          type="button"
          onClick={handleResumeDownload}
          disabled={downloadingResume}
          className="w-full flex items-center gap-4 p-3 group hover:bg-primary hover:text-black text-white transition-none disabled:opacity-60"
        >
          <Folder className="h-8 w-8 text-primary group-hover:text-black fill-current" />

          <span className="text-sm font-bold tracking-wider uppercase">
            {downloadingResume ? "Downloading..." : "Resume.pdf"}
          </span>
        </button>

        {/* <Link
          href="/terminal"
          onClick={() => setMobileMenuOpen(false)}
          className={`flex items-center gap-4 p-3 group transition-none ${
            pathname === "/terminal"
              ? "bg-primary text-black"
              : "hover:bg-primary hover:text-black text-white"
          }`}
        >
          <Terminal
            className={`h-8 w-8 ${
              pathname === "/terminal"
                ? "text-black"
                : "text-primary group-hover:text-black"
            } fill-current`}
          />
          <span className="text-sm font-bold tracking-wider uppercase">
            Terminal.exe
          </span>
        </Link> */}
      </div>

      <div className="shrink-0 p-4 border-t border-primary text-xs text-primary bg-black">
        <p>SYSTEM STATUS</p>

        <p className="flex items-center gap-2 mt-1 text-white">
          <span className="w-2 h-2 bg-primary inline-block" />
          All Systems Operational
        </p>
      </div>
    </div>
  );

  return (
    <div
      className="
        w-screen
        h-screen
        md:w-full
        md:max-w-[1400px]
        md:h-full
        md:max-h-[900px]
        bg-black
        border
        border-primary
        flex
        flex-col
        shadow-[0_0_50px_rgba(170,255,220,0.08)]
        relative
        z-10
        overflow-hidden
      "
    >
      <div className="flex items-center justify-between bg-black border-b border-primary px-3 py-1 shrink-0">
        <div className="flex items-center gap-3">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-primary font-bold text-sm">
            ANLABS.EXE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="md:hidden w-6 h-6 border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>

          <button className="hidden md:flex w-6 h-6 border border-primary text-primary items-center justify-center hover:bg-primary hover:text-black font-bold">
            _
          </button>

          <button className="hidden md:flex w-6 h-6 border border-primary text-primary items-center justify-center hover:bg-primary hover:text-black font-bold">
            □
          </button>

          <button className="hidden md:flex w-6 h-6 border border-primary text-primary items-center justify-center hover:bg-primary hover:text-black font-bold">
            ×
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 bg-black border-b border-primary px-4 py-1 shrink-0 text-sm text-primary">
        <span className="hover:bg-primary hover:text-black px-1 cursor-pointer">
          File
        </span>
        <span className="hover:bg-primary hover:text-black px-1 cursor-pointer">
          Edit
        </span>
        <span className="hover:bg-primary hover:text-black px-1 cursor-pointer">
          View
        </span>
        <span className="hover:bg-primary hover:text-black px-1 cursor-pointer">
          Navigate
        </span>
        <span className="hover:bg-primary hover:text-black px-1 cursor-pointer">
          About
        </span>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        <div className="hidden md:block w-72 shrink-0">
          <Sidebar />
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute inset-0 z-50 bg-black">
            <Sidebar />
          </div>
        )}

        <div className="flex-1 relative overflow-y-auto overflow-x-hidden bg-black">
          {children}
        </div>
      </div>

      <div className="shrink-0 h-6 bg-black border-t border-primary flex items-center justify-between px-4 text-xs text-primary">
        <div>ANLABS //</div>
        <div className="hidden md:block">{pathname}</div>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import SkillsSection from "@/components/hero/SkillsSection";
export default function HeroWindow() {
  return (
    <>
      {/* Terminal Cursor Animation */}
      <style jsx>{`
       .terminal-cursor {
  display: inline-block;
  width: 2px;
  height: 0.9em;
  margin-left: 8px;
  background: #22c55e;
  border-radius: 2px;
  animation: blink 1s steps(1) infinite;
  box-shadow: 0 0 6px rgba(34, 197, 94, 0.45);
  vertical-align: middle;
}

@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0;
  }
}

        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
      `}</style>

      {/* ================= MOBILE ================= */}

      <section className="lg:hidden  bg-black px-5 py-5">
        <div className="h-full flex flex-col justify-between">

          {/* Hero */}
          <div>
            <p className="text-primary text-[11px] uppercase tracking-[0.35em]">
              &gt; SOFTWARE DEVELOPER
            </p>

            <div className="mt-6">
              <h2 className="text-white text-3xl font-bold leading-none">
                Hi, I'm
              </h2>

              <h1 className="mt-2 flex items-end text-primary text-6xl font-black leading-none">
                Anandu
                <span className="terminal-cursor" />
              </h1>
            </div>

            <p className="mt-8 text-sm leading-7 text-zinc-400">
              I build backend systems, AI-powered applications, scalable APIs
              and automation tools with a focus on clean architecture,
              performance and production-ready software that solves real-world
              problems.
            </p>

            <div className="mt-8 border-t border-zinc-800 pt-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                Built under
              </p>

              <h3 className="mt-1 text-primary text-lg font-bold">
                ANLABS
              </h3>

              <p className="text-zinc-500 text-xs">
                Personal Software Development Lab
              </p>
            </div>
          </div>

          {/* Buttons */}

          <div className="flex gap-3 mt-8">
            <Link
              href="/projects"
              className="flex-1 h-12 border border-primary flex items-center justify-center text-primary font-semibold hover:bg-primary hover:text-black transition"
            >
              VIEW PROJECTS
            </Link>

            <Link
              href="/contact"
              className="flex-1 h-12 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:border-primary hover:text-primary transition"
            >
              CONTACT
            </Link>
          </div>

          {/* Featured */}

          <div>
           <h3 className="mt-8 mb-5 text-primary text-xs uppercase tracking-[0.3em]">
  Skills
</h3>

<SkillsSection />
          </div>
        </div>
      </section>

      {/* ================= DESKTOP ================= */}

      <div className="hidden lg:grid  lg:grid-cols-[55%_45%] bg-black">

        {/* Left */}

        <section className="flex flex-col justify-center px-16 py-10">

          <p className="text-primary text-sm uppercase tracking-[0.35em]">
            &gt; SOFTWARE DEVELOPER
          </p>

          <div className="mt-8">

            <h2 className="text-white text-5xl font-bold leading-none">
              Hi, I'm
            </h2>

            <h1 className="mt-3 flex items-end text-primary text-8xl font-black leading-none">
              Anandu
              <span className="terminal-cursor" />
            </h1>

          </div>

          <p className="mt-10 max-w-xl text-zinc-400 leading-8 text-lg">
            I build production-ready backend systems, AI applications,
            scalable APIs, automation platforms and tools designed for
            real-world deployment.
          </p>

          <div className="mt-10 flex gap-3">

            <Link
              href="/projects"
              className="flex-1 flex items-center justify-center h-11 border border-primary text-primary text-xs font-semibold hover:bg-primary hover:text-black transition"
            >
              VIEW PROJECTS
            </Link>

            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center h-11 border border-zinc-700 text-zinc-300 text-xs font-semibold hover:border-primary hover:text-primary transition"
            >
              CONTACT
            </Link>

          </div>

          <div className="mt-10 border-t border-zinc-800 pt-5">

            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Built under
            </p>

            <h2 className="mt-2 text-primary text-2xl font-bold">
              ANLABS
            </h2>

            <p className="text-zinc-500 text-sm mt-1">
              Personal Software Development Lab
            </p>

          </div>

        </section>

        {/* Right */}

        <section className="hidden lg:flex flex-col pt-14 px-10">

   <p className="mb-6 text-primary text-base font-bold uppercase tracking-[0.35em]">
  Skills
</p>

<SkillsSection />

        </section>

      </div>
    </>
  );
}
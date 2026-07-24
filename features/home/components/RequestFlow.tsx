"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { simulatedRequests as requests, architectureServices as services } from "@/data/requests";
import { useSimulationEngine } from "@/hooks/useSimulationEngine";

export default function RequestFlow() {
  const { activeRequest: active, activeRequestIndex: current, healthStatus } = useSimulationEngine();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  
  // Auto-scroll pipeline to active node
  const pipelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (pipelineRef.current) {
      const activeElement = pipelineRef.current.children[current] as HTMLElement;
      if (activeElement) {
        const scrollLeft = activeElement.offsetLeft - (pipelineRef.current.clientWidth / 2) + (activeElement.clientWidth / 2);
        pipelineRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [current]);

  return (
    <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950/60">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">

        <h3 className="font-semibold text-white">
          Live Request Monitor
        </h3>

        <div className="flex items-center gap-2 text-emerald-400">

          <div className={`h-2.5 w-2.5 rounded-full ${healthStatus === "Degraded" ? "bg-amber-400" : healthStatus === "Critical" ? "bg-red-500" : "bg-emerald-400"} animate-pulse`} />

          <span className="text-sm">
            {healthStatus || "Healthy"}
          </span>

        </div>

      </div>

      {/* Architecture */}

      <div className="border-b border-zinc-800 p-6 overflow-hidden relative">
        {/* Fades for horizontal scrolling */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-zinc-950/60 to-transparent z-10 sm:hidden pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-zinc-950/60 to-transparent z-10 sm:hidden pointer-events-none" />
        
        <div 
          ref={pipelineRef}
          className="flex items-center overflow-x-auto snap-x hide-scrollbar pb-4 -mb-4 w-full"
        >

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex items-center snap-center shrink-0 relative"
                onMouseEnter={() => setHoveredNode(service.title)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div
                  className={`relative rounded-2xl border p-4 transition-all duration-500 cursor-pointer ${
                    current === index
                      ? "border-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,.25)]"
                      : "border-zinc-800 bg-zinc-900"
                  }`}
                >
                  <Icon className="mx-auto h-5 w-5 text-blue-400" />

                  <p className="mt-2 text-center text-sm font-medium text-white">
                    {service.title}
                  </p>
                  
                  <AnimatePresence>
                    {hoveredNode === service.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-14 left-1/2 -translate-x-1/2 w-max rounded-md bg-zinc-800 px-3 py-2 text-xs text-blue-300 border border-zinc-700 shadow-xl z-50 pointer-events-none"
                      >
                        {service.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {index !== services.length - 1 && (
                  <ArrowRight className="mx-4 text-zinc-700 shrink-0" />
                )}
              </div>
            );
          })}

        </div>

      </div>

      {/* Active Request */}

      <div className="border-b border-zinc-800 p-6">

        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
          Active Request
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4">

          <div className="w-full">
            <p className="font-mono text-white text-sm sm:text-base break-all">
              <span className="text-blue-400 mr-2">
                {active.method}
              </span>
              {active.endpoint}
            </p>

            <p className="mt-2 text-xs sm:text-sm text-zinc-500 line-clamp-1">
              Request authenticated • Validated • Persisted
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-0 border-zinc-800">
            <p className={`font-semibold ${active.status.startsWith('5') ? 'text-red-400' : active.status.startsWith('4') ? 'text-amber-400' : 'text-emerald-400'}`}>
              {active.status}
            </p>

            <p className="text-sm text-zinc-500">
              {active.latency}
            </p>
          </div>

        </div>

      </div>

      {/* Recent Requests */}

      <div className="p-6">

        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
          Recent Requests
        </p>

        <div className="space-y-3">

          {requests.map((request, index) => (

            <div
              key={request.endpoint}
              className={`flex items-center justify-between rounded-xl border px-4 py-3 transition-all duration-300 ${
                current === index
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-zinc-800 bg-zinc-900/60"
              }`}
            >

              <div className="flex items-center gap-3">

                <CheckCircle2
                  className={`h-4 w-4 ${
                    current === index
                      ? "text-blue-400"
                      : "text-emerald-400"
                  }`}
                />

                <span className="font-mono text-sm text-white">
                  {request.method} {request.endpoint}
                </span>

              </div>

              <div className="flex items-center gap-6 text-sm">

                <span className="text-zinc-400">
                  {request.latency}
                </span>

                <span className="font-medium text-emerald-400">
                  {request.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
"use client";

import { useSimulationEngine } from "@/hooks/useSimulationEngine";

export default function LiveMetrics() {
  const { metrics: simMetrics } = useSimulationEngine();

  const metrics = [
    {
      label: "Latency",
      value: `${simMetrics.latency} ms`,
    },
    {
      label: "Requests",
      value: `${simMetrics.requests}/min`,
    },
    {
      label: "Memory",
      value: `${simMetrics.memory} MB`,
    },
    {
      label: "CPU",
      value: `${simMetrics.cpu}%`,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 transition-all duration-500"
        >
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            {metric.label}
          </p>

          <p className="mt-3 text-xl font-semibold text-white transition-all duration-300">
            {metric.value}
          </p>
        </div>
      ))}
    </div>
  );
}
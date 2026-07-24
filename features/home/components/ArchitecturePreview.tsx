import ArchitectureNode from "./ArchitectureNode";
import RequestFlow from "./RequestFlow";
import LiveMetrics from "./LiveMetrics";

export default function ArchitecturePreview() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          Live Architecture
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-white">
          Production System Overview
        </h3>

        <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400">
          A simplified representation of how I design modern web applications
          using scalable backend architecture and production-ready workflows.
        </p>
      </div>

      {/* Dashboard Metrics */}
      <LiveMetrics />

      {/* Architecture Diagram */}
     
      {/* Request Animation */}
      <div className="relative z-10">
        <RequestFlow />
      </div>

    </div>
  );
}
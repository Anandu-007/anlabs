import {
  BrainCircuit,
  CheckCircle2,
  Circle,
} from "lucide-react";

import Section from "@/components/shared/Section";
import { focusData } from "@/data/focus";

export default function Focus() {
  return (
    <Section
      icon={BrainCircuit}
      title="Currently Building"
    >
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

        <h3 className="text-2xl font-bold text-white">
          AI Backend Engineer Roadmap
        </h3>

        <p className="mt-3 max-w-2xl text-zinc-400">
          My current learning path is focused on building production-ready AI
          applications with modern backend technologies.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Completed
            </h4>

            <div className="space-y-4">
              {focusData.completed.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                  <span className="text-zinc-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Currently Learning
            </h4>

            <div className="space-y-4">
              {focusData.inProgress.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3"
                >
                  <Circle className="h-5 w-5 text-blue-400" />

                  <span className="text-zinc-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
}
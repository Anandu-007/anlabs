import { BrainCircuit } from "lucide-react";
import Section from "@/components/shared/Section";

const learning = [
  "LangChain",
  "LangGraph",
  "RAG",
  "Vector Databases",
];

export default function CurrentFocus() {
  return (
    <Section
      icon={BrainCircuit}
      title="Currently Building"
      subtitle="Areas I'm actively focusing on."
    >
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h3 className="text-xl font-semibold text-white">
          AI Backend Engineering
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {learning.map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-sm text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
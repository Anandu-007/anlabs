import { Cpu } from "lucide-react";

import Section from "@/components/shared/Section";
import { technologyCategories } from "@/data/technologies";

export default function TechStack() {
  return (
    <Section
      icon={Cpu}
      title="Core Technologies"
    >
      <div className="space-y-10">
        {technologyCategories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-5 text-xl font-semibold text-white">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {category.technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-200 hover:border-zinc-800 hover:bg-zinc-900/40"
                  >
                    <Icon className="h-5 w-5 text-zinc-400 transition-colors duration-200 group-hover:text-blue-400" />

                    <span className="text-sm font-medium text-zinc-300 transition-colors duration-200 group-hover:text-white">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
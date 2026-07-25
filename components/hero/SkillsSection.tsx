"use client";

import { useEffect, useMemo, useState } from "react";
import { getSkills, Skill } from "@/services/skills";

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSkills() {
      try {
        const data = await getSkills();
        setSkills(data);
      } catch (error) {
        console.error("Failed to load skills:", error);
      } finally {
        setLoading(false);
      }
    }

    loadSkills();
  }, []);

  const groupedSkills = useMemo(() => {
    const grouped: Record<string, Skill[]> = {};

    skills.forEach((skill) => {
      if (!grouped[skill.category]) {
        grouped[skill.category] = [];
      }

      grouped[skill.category].push(skill);
    });

    return grouped;
  }, [skills]);

  if (loading) {
    return (
      <div className="text-sm text-zinc-500">
        Loading skills...
      </div>
    );
  }

  if (skills.length === 0) {
    return (
      <div className="text-sm text-zinc-500">
        No skills added yet.
      </div>
    );
  }

  const categories = Object.entries(groupedSkills);

  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-8 w-full">
      {categories.map(([category, items]) => (
        <div key={category}>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary border-b border-zinc-800 pb-2">
            {category.toUpperCase()}
          </h3>

          <div className="space-y-2">
            {items.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-primary transition-colors"
              >
                <span className="text-primary font-semibold">
                  {">"}
                </span>

                <span className="uppercase tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
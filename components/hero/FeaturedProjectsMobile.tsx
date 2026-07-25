"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getProjects, Project } from "@/services/projects";
import { IMAGE_BASE_URL } from "@/services/api";
import { FileTerminal } from "lucide-react";

export default function FeaturedProjectsMobile() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();

        const featured = data.filter((project) => project.featured);

        setProjects(featured);
      } catch (error) {
        console.error(error);
      }
    }

    loadProjects();
  }, []);

  useEffect(() => {
    if (projects.length <= 1) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [projects]);

  if (projects.length === 0) {
    return (
      <div className="border border-border p-6 text-center text-zinc-500">
        No featured projects.
      </div>
    );
  }

  const previous = (active - 1 + projects.length) % projects.length;
  const next = (active + 1) % projects.length;

  return (
    <div className="w-full">
      {/* MOBILE */}

      <div className="relative flex h-56 items-center justify-center overflow-hidden lg:hidden">
        {projects.length > 1 && (
          <>
            <div className="absolute left-0 w-[34%] scale-90 opacity-40">
              <Card project={projects[previous]} />
            </div>

            <div className="absolute right-0 w-[34%] scale-90 opacity-40">
              <Card project={projects[next]} />
            </div>
          </>
        )}

        <div className="z-10 w-[72%]">
          <Card project={projects[active]} active />
        </div>
      </div>

      {/* DESKTOP */}

      <div className="hidden lg:block">
        <Card
          project={projects[active]}
          active
          desktop
        />
      </div>

      {projects.length > 1 && (
        <div className="flex justify-center gap-2 mt-5">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`transition-all duration-300 rounded-full ${
                active === i
                  ? "bg-primary w-8 h-2"
                  : "bg-zinc-700 w-2 h-2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Card({
  project,
  active = false,
  desktop = false,
}: {
  project: Project;
  active?: boolean;
  desktop?: boolean;
}) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className={`border border-primary bg-black transition-all duration-500 overflow-hidden ${
          active
            ? "shadow-[0_0_24px_rgba(0,255,120,.12)]"
            : ""
        } ${
          desktop
            ? "min-h-[340px]"
            : ""
        }`}
      >
        <div className={desktop ? "h-52" : "h-28"}>
        {project.thumbnail ? (
  <img
    src={`${IMAGE_BASE_URL}/${project.thumbnail.file_path}`}
    alt={project.title}
    className="w-full h-full object-cover"
  />
) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-950">
              <FileTerminal className="h-10 w-10 text-primary" />
            </div>
          )}
        </div>

        <div className={desktop ? "p-8" : "p-4"}>
          <h3
            className={`font-bold text-primary ${
              desktop
                ? "text-3xl"
                : "text-lg"
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`text-zinc-400 ${
              desktop
                ? "text-base mt-3"
                : "text-xs mt-2"
            }`}
          >
            {project.summary}
          </p>

          <div
            className={`text-primary font-semibold ${
              desktop
                ? "text-sm mt-8"
                : "text-xs mt-6"
            }`}
          >
            View Project →
          </div>
        </div>
      </div>
    </Link>
  );
}
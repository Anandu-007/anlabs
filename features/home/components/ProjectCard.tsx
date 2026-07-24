import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <article className="group flex min-h-[500px] min-w-[320px] sm:min-w-[380px] flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">

      {/* Cover */}
      <div className="relative aspect-video overflow-hidden bg-zinc-950">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div>
            <h3 className="text-2xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              {project.subtitle}
            </p>
          </div>

          <span
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
              project.status === "Completed"
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-yellow-500/10 text-yellow-400"
            }`}
          >
            {project.status === "Completed" ? (
              <CheckCircle2 size={14} />
            ) : (
              <Clock3 size={14} />
            )}

            {project.status}
          </span>

        </div>

        {/* Description */}
        <p className="mt-6 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Meta */}
        <div className="mt-6 flex gap-8 text-sm">

          <div>
            <p className="text-zinc-500">
              Role
            </p>

            <p className="font-medium text-white">
              {project.role}
            </p>
          </div>

          <div>
            <p className="text-zinc-500">
              Year
            </p>

            <p className="font-medium text-white">
              {project.year}
            </p>
          </div>

        </div>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-4">

          {project.technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="flex items-center gap-2 text-zinc-300"
              >
                <Icon className="h-5 w-5 text-blue-400" />

                <span className="text-sm">
                  {tech.name}
                </span>
              </div>
            );
          })}

        </div>

        <div className="mt-auto pt-10">

            <span
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-all duration-200 group-hover:gap-3"
            >
              View Case Study
              <ArrowUpRight size={16} />
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}
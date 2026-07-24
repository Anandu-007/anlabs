"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FolderGit2 } from "lucide-react";
import {
  getProjectBySlug,
  Project,
} from "@/services/projects";

import { IMAGE_BASE_URL } from "@/services/api";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const data = await getProjectBySlug(slug);
        setProject(data);
      } catch {
        setProject(null);
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full text-primary font-mono">
        Loading Project...
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-full bg-black text-white">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border px-6 py-4">
        <Link
          href="/projects"
          className="text-zinc-400 hover:text-primary transition-colors"
        >
          {/* <ArrowLeft className="h-5 w-5" /> */}
        </Link>

        <h1><span className="font-mono text-sm text-zinc-400 uppercase">
          PROJECT DETAILS
        </span></h1>
      </div>

      <div className="max-w-6xl mx-auto p-6 md:p-10">
        {/* Banner */}
        <div className="w-full h-56 md:h-96 overflow-hidden border border-border bg-zinc-950">
          {project.thumbnail ? (
            <img
              src={`${IMAGE_BASE_URL}${project.thumbnail.file_path}`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-500 font-mono">
              NO PREVIEW AVAILABLE
            </div>
          )}
        </div>

        {/* Details */}
        <div className="mt-10 space-y-8">
          <div>
            <p className="text-primary font-mono text-xs uppercase mb-2">
              Project
            </p>

            <h1 className="text-4xl font-bold">
              {project.title}
            </h1>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-primary font-mono text-xs uppercase mb-3">
              Description
            </p>

            <p className="text-zinc-300 leading-8 text-lg">
              {project.description}
            </p>
          </div>

          {project.github_url && (
            <div className="border-t border-border pt-6">
              <p className="text-primary font-mono text-xs uppercase mb-3">
                GitHub
              </p>

              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-primary break-all"
              >
                {project.github_url}
              </a>
            </div>
          )}

          {project.live_url && (
            <div className="border-t border-border pt-6">
              <p className="text-primary font-mono text-xs uppercase mb-3">
                Live Demo
              </p>

              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-primary break-all"
              >
                {project.live_url}
              </a>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary px-6 py-3 flex items-center justify-center gap-2 hover:bg-primary hover:text-black transition-colors font-mono"
              >
                <FolderGit2 className="h-5 w-5" />
                OPEN GITHUB
              </a>
            )}

            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary px-6 py-3 flex items-center justify-center gap-2 hover:bg-primary hover:text-black transition-colors font-mono"
              >
                <ExternalLink className="h-5 w-5" />
                VISIT SITE
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
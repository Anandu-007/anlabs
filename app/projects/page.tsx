import Link from "next/link";
import Window from "@/components/os/Window";
import { getProjects } from "@/services/projects";
import { IMAGE_BASE_URL } from "@/services/api";
import { FileTerminal } from "lucide-react";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Window title="\\PROJECTS">
      <div className="p-6 md:p-8 font-mono">
        <div className="mb-8">
          <p className="text-zinc-500 mb-2">Directory listing of /projects</p>
          <div className="h-px w-full bg-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group border border-border bg-black hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="h-56 bg-zinc-950 border-b border-border flex items-center justify-center overflow-hidden">
                {project.thumbnail ? (
             <img
  src={`${IMAGE_BASE_URL}/${project.thumbnail!.file_path}`}
  alt={project.title}
  className="w-full h-full object-cover"
  
/>
                ) : (
                  <FileTerminal className="h-14 w-14 text-primary" />
                )}
              </div>

              {/* Details */}
              <div className="p-5">
                <h2 className="m-0 text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h2>

                <p className="m-0 mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-2">
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Window>
  );
}
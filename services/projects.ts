import { apiFetch } from "./api";

export interface Project {
  id: number;
  title: string;
  slug: string;
  summary: string;
  description: string;
  github_url: string | null;
  live_url: string | null;
  featured: boolean;
  published: boolean;
  thumbnail: {
    id: number;
    filename: string;
    file_path: string;
    file_type: string;
  } | null;
}

export async function getProjects(): Promise<Project[]> {
  return apiFetch("/projects");
}

export async function getProjectBySlug(
  slug: string
): Promise<Project> {
  return apiFetch(`/projects/slug/${slug}`);
}
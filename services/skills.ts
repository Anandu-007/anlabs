import { apiFetch } from "./api";

export interface Skill {
  id: number;
  name: string;
  category: string;
  icon: string;
  display_order: number;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export async function getSkills(): Promise<Skill[]> {
  return apiFetch("/skills");
}
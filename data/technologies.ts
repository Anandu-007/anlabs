import {
  SiDocker,
  SiFastapi,
  SiGit,
  SiLinux,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
import { LuDatabase } from "react-icons/lu";

export interface Technology {
  name: string;
  icon: React.ElementType;
}

export interface TechnologyCategory {
  title: string;
  technologies: Technology[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    title: "Backend",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs", icon: LuDatabase },
      { name: "JWT Authentication", icon: LuDatabase },
    ],
  },
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Database",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLite", icon: SiSqlite },
      { name: "SQLAlchemy", icon: LuDatabase },
    ],
  },
  {
    title: "Tools",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "VS Code", icon: TbBrandVscode },
    ],
  },
];
import {
  SiFastapi,
  SiReact,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";
import { LuKeyRound } from "react-icons/lu";

export interface ProjectTechnology {
  name: string;
  icon: React.ElementType;
}

export interface Project {
  id: number;

  title: string;
  subtitle: string;
  description: string;

  year: string;
  role: string;

  status: "Completed" | "In Progress";

  technologies: ProjectTechnology[];

  slug: string;

  cover: string;

  github?: string;
  live?: string;

  // Engineering Case Study Fields
  architecture?: string;
  tradeoffs?: string[];
  challenges?: string[];
  lessonsLearned?: string[];
}

export const projects: Project[] = [
  {
    id: 1,

    title: "XENOVA",

    subtitle: "College Tech Fest Management Platform",

    description:
      "A production-style event management platform with secure authentication, registrations, attendance tracking, certificate generation, and an admin dashboard.",

    year: "2026",

    role: "Solo Project",

    status: "In Progress",

    technologies: [
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "SQLite",
        icon: SiSqlite,
      },
      {
        name: "JWT",
        icon: LuKeyRound,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],

    slug: "xenova",

    cover: "/projects/xenova-cover.png",

    github: "",

    live: "",

    architecture: "Client-Server model using Next.js on the frontend and FastAPI on the backend. SQLite for rapid prototyping with SQLAlchemy ORM. JWT-based stateless authentication.",
    
    tradeoffs: [
      "Chose SQLite over PostgreSQL for faster initial MVP development, though it sacrifices concurrent write performance.",
      "Used JWTs for auth to reduce database lookups, trading off immediate session revocation capability."
    ],
    
    challenges: [
      "Designing a robust capacity-validation system for multi-slot team bookings to prevent race conditions during registration.",
      "Implementing role-based access control (RBAC) securely across both React and FastAPI layers."
    ],
    
    lessonsLearned: [
      "Atomic transactions are critical when handling concurrent bookings.",
      "Clean architecture in FastAPI makes testing significantly easier compared to tightly-coupled routes."
    ]
  },
];
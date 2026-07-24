import { ShieldCheck, Database, Server, Rocket } from "lucide-react";

export const engineeringCapabilities = [
  {
    title: "Authentication & Security",
    icon: ShieldCheck,
    description: "Secure user authentication and authorization for production applications.",
    skills: ["JWT Authentication", "Password Hashing", "Role-Based Access", "Protected Routes"],
  },
  {
    title: "Backend APIs",
    icon: Server,
    description: "Designing maintainable REST APIs with clean architecture.",
    skills: ["REST APIs", "CRUD Operations", "Validation", "Error Handling", "Pagination", "Filtering"],
  },
  {
    title: "Database Engineering",
    icon: Database,
    description: "Building reliable relational database models and data access layers.",
    skills: ["PostgreSQL", "SQLAlchemy ORM", "Relationships", "Transactions", "Schema Design"],
  },
  {
    title: "Deployment & Tooling",
    icon: Rocket,
    description: "Preparing applications for production deployment and collaboration.",
    skills: ["Docker", "Linux", "Git", "Environment Variables"],
  },
];

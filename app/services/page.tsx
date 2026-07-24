import Window from "@/components/os/Window";
import { Server, ShieldCheck, Database, Zap, Cpu } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "REST APIs & Backend Systems",
      icon: Server,
      problem: "Scalability bottlenecks and tightly coupled monolithic architectures.",
      solution: "Building decoupled, high-performance REST APIs using FastAPI and Next.js Server Components. Implementing async task queues, rate limiting, and clean architectural patterns.",
      technologies: ["FastAPI", "Python", "Next.js", "Node.js"]
    },
    {
      title: "Authentication & Authorization",
      icon: ShieldCheck,
      problem: "Insecure endpoints and rigid access control systems.",
      solution: "Implementing stateless JWT flows, Role-Based Access Control (RBAC), and secure credential management for robust system protection.",
      technologies: ["JWT", "OAuth2", "Bcrypt", "Redis"]
    },
    {
      title: "Database Architecture",
      icon: Database,
      problem: "Slow query execution, data anomalies, and unscalable schemas.",
      solution: "Designing normalized relational databases, optimizing indexes, and managing complex migrations to ensure data integrity and read/write performance.",
      technologies: ["PostgreSQL", "SQLite", "Prisma ORM", "SQLAlchemy"]
    },
    {
      title: "AI Backend Integration",
      icon: Cpu,
      problem: "Disconnect between machine learning models and production web services.",
      solution: "Wrapping AI models in performant APIs, implementing RAG (Retrieval-Augmented Generation) pipelines, and managing prompt engineering architectures.",
      technologies: ["LangChain", "OpenAI", "Vector DBs"]
    }
  ];

  return (
    <Window title="C:\ANLABS\SERVICES">
      <div className="p-6 md:p-10 font-mono h-full flex flex-col">
        <div className="mb-10 shrink-0">
          <h1 className="text-2xl font-bold text-white uppercase tracking-widest mb-2 font-sans">Installed Modules</h1>
          <p className="text-zinc-400 max-w-xl font-sans text-lg">
            I don't just write code; I architect systems. Here is an overview of the technical domains I specialize in.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 flex-1 overflow-y-auto pr-2 pb-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="border border-border bg-black/20 p-6 flex flex-col hover:border-zinc-500 transition-colors group">
                <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                  <Icon className="h-6 w-6 text-primary group-hover:animate-pulse" />
                  <h2 className="text-lg font-bold text-white font-sans">{service.title}</h2>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="text-xs text-zinc-500 mb-1 tracking-wider uppercase font-mono">PROBLEM:</p>
                    <p className="text-sm text-zinc-400 leading-relaxed font-sans">{service.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 mb-1 tracking-wider uppercase font-mono">SOLUTION:</p>
                    <p className="text-sm text-zinc-300 leading-relaxed font-sans">{service.solution}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex flex-wrap gap-2">
                  {service.technologies.map(tech => (
                    <span key={tech} className="text-[10px] uppercase text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-1 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Window>
  );
}

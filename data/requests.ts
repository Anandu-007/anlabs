import { Globe, Server, Lock, ShieldCheck, Database, Cloud, Zap, RefreshCw, Layers } from "lucide-react";

export const simulatedRequests = [
  { method: "POST", endpoint: "/api/v1/teams", latency: "114ms", status: "201" },
  { method: "GET", endpoint: "/api/v1/registrations", latency: "24ms", status: "200" },
  { method: "POST", endpoint: "/api/v1/auth/token", latency: "42ms", status: "200" },
  { method: "GET", endpoint: "/api/v1/events/capacity", latency: "12ms", status: "200" },
  { method: "PATCH", endpoint: "/api/v1/users/me", latency: "65ms", status: "200" },
  { method: "POST", endpoint: "/api/v1/checkout", latency: "215ms", status: "202" },
];

export const architectureServices = [
  { icon: Globe, title: "Client", description: "Next.js React Server Components" },
  { icon: Cloud, title: "CDN", description: "Cloudflare Edge Caching" },
  { icon: Server, title: "FastAPI", description: "Async Python Workers" },
  { icon: Lock, title: "Auth", description: "Stateless JWT Validation" },
  { icon: ShieldCheck, title: "Validation", description: "Pydantic Schema Checking" },
  { icon: Layers, title: "Logic", title2: "Logic", description: "Service Layer Injection" },
  { icon: Zap, title: "Cache", description: "Redis Key-Value Store" },
  { icon: Database, title: "PostgreSQL", description: "Relational Data Storage" },
  { icon: RefreshCw, title: "Response", description: "Standardized JSON Payload" },
];

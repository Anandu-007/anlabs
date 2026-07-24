import { CheckCircle2 } from "lucide-react";
import { engineeringCapabilities as capabilities } from "@/data/capabilities";

export default function EngineeringCapabilities() {
  return (
    <section
      id="capabilities"
      className="mx-auto mt-32 max-w-7xl px-6"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Engineering Capabilities
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Production-ready engineering, not just technology familiarity.
        </h2>

        <p className="mt-5 text-lg leading-8 text-zinc-400">
          I focus on building complete software systems—from authentication and
          API design to database architecture and deployment—rather than simply
          working with individual frameworks.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {capabilities.map((capability) => {
          const Icon = capability.icon;

          return (
            <article
              key={capability.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-zinc-900/60"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-500/10 p-3">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {capability.title}
                </h3>
              </div>

              <p className="mt-5 leading-7 text-zinc-400">
                {capability.description}
              </p>

              <div className="mt-8 grid gap-3">
                {capability.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />

                    <span className="text-zinc-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
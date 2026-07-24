import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface SectionProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: ReactNode;
  id?: string;
}

export default function Section({
  title,
  subtitle,
  icon: Icon,
  children,
  id,
}: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-8">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8">
        <div className="mb-8 flex items-start gap-4">
          {Icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
              <Icon className="h-6 w-6 text-zinc-300" />
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}
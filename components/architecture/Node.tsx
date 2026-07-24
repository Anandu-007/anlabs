import { LucideIcon } from "lucide-react";

type NodeProps = {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  className?: string;
};

export default function Node({
  title,
  subtitle,
  icon: Icon,
  className = "",
}: NodeProps) {
  return (
    <div
      className={`
        group
        relative
        w-36
        rounded-xl
        border border-emerald-500/20
        bg-black/60
        backdrop-blur-xl
        p-3
        transition-all duration-300
        hover:border-emerald-400
        hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]
        ${className}
      `}
    >
      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10">
          <Icon
            size={18}
            className="text-emerald-300"
          />
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.15em] text-emerald-300">
            {title}
          </h3>

          <p className="text-[10px] text-emerald-500/60">
            {subtitle}
          </p>
        </div>

      </div>

      <div className="mt-3 flex items-center justify-between">

        <span className="text-[9px] text-emerald-500/70">
          HEALTH
        </span>

        <div className="flex items-center gap-1">

          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

          <span className="text-[9px] text-emerald-300">
            ONLINE
          </span>

        </div>

      </div>

      <div className="mt-2 h-[2px] rounded-full bg-emerald-900 overflow-hidden">
        <div className="h-full w-2/3 bg-emerald-400 animate-pulse" />
      </div>
    </div>
  );
}
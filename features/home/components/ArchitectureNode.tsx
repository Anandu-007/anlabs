"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ArchitectureNodeProps {
  title: string;
  subtitle?: string;
  active?: boolean;
}

export default function ArchitectureNode({
  title,
  subtitle,
  active = false,
}: ArchitectureNodeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative rounded-2xl border
        px-5 py-4 cursor-pointer
        transition-colors duration-300
        ${
          active || isHovered
            ? "border-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.18)]"
            : "border-zinc-800 bg-zinc-900/60"
        }
      `}
    >
      <h3 className="font-semibold text-white">
        {title}
      </h3>

      {subtitle && (
        <p className="mt-1 text-xs text-zinc-400">
          {subtitle}
        </p>
      )}
      
      {isHovered && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-md bg-zinc-800 px-3 py-1 text-xs text-emerald-400 whitespace-nowrap border border-zinc-700 shadow-xl z-50 pointer-events-none font-mono"
        >
          {`SELECT * FROM ${title.toLowerCase()}`}
        </motion.div>
      )}
    </motion.div>
  );
}
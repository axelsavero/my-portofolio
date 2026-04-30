"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl
        bg-white/[0.03] backdrop-blur-xl
        border border-white/[0.08]
        transition-all duration-500 ease-out
        ${hover ? "hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(59,130,246,0.08)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

"use client";

import { ReactNode } from "react";

interface GlowBorderProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowBorder({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.4)",
}: GlowBorderProps) {
  return (
    <div className={`animated-border ${className}`}>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

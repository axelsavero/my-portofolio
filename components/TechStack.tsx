"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import Marquee from "@/components/ui/Marquee";
import { techStack } from "@/data/techstack";

function TechBadge({
  name,
  icon,
  color,
}: {
  name: string;
  icon: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 mx-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500 cursor-default group whitespace-nowrap select-none">
      <span
        className="text-lg transition-transform duration-300 group-hover:scale-125"
        style={{ filter: `drop-shadow(0 0 8px ${color}40)` }}
      >
        {icon}
      </span>
      <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
        {name}
      </span>
      <div
        className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}60` }}
      />
    </div>
  );
}

export default function TechStack() {
  const firstHalf = techStack.slice(0, 7);
  const secondHalf = techStack.slice(7);

  return (
    <section
      id="techstack"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.05] bg-purple-500 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10 mb-12">
        <ScrollReveal className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-400 mb-4 font-medium">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <AnimatedText className="gradient-text">
              Technologies I Work With
            </AnimatedText>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base md:text-lg">
            A curated set of modern tools and frameworks that I use to build
            performant, scalable applications.
          </p>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.2}>
        <Marquee direction="left" speed={35} className="mb-4">
          {firstHalf.map((tech) => (
            <TechBadge key={tech.name} {...tech} />
          ))}
        </Marquee>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <Marquee direction="right" speed={40}>
          {secondHalf.map((tech) => (
            <TechBadge key={tech.name} {...tech} />
          ))}
        </Marquee>
      </ScrollReveal>
    </section>
  );
}

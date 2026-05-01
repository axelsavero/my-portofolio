"use client";

import { Code2, Database, Cloud, Layout } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import GlassCard from "@/components/ui/GlassCard";
import CountUp from "@/components/ui/CountUp";

const focusAreas = [
  {
    icon: Layout,
    title: "Frontend",
    description:
      "Building beautiful, responsive interfaces with modern frameworks",
    color: "#3B82F6",
  },
  {
    icon: Code2,
    title: "Backend",
    description: "Designing scalable APIs and server architectures",
    color: "#8B5CF6",
  },
  {
    icon: Database,
    title: "Database",
    description: "Optimizing data models and query performance",
    color: "#06B6D4",
  },
];

const stats = [
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Technologies", value: 16, suffix: "+" },
  // { label: "Clients & Teams", value: 10, suffix: "+" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.07] bg-blue-500 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-4 font-medium">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <AnimatedText className="gradient-text">
              Crafting Digital Experiences
            </AnimatedText>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            I&apos;m a passionate Fullstack Developer with a deep love for
            building products that make a real difference. With expertise
            spanning the entire development lifecycle, I bring ideas to life
            with clean code and thoughtful design.
          </p>
        </ScrollReveal>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {focusAreas.map((area, i) => (
            <ScrollReveal key={area.title} delay={i * 0.1}>
              <GlassCard className="p-6 h-full group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4
                    transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `${area.color}15`,
                    boxShadow: `0 0 20px ${area.color}10`,
                  }}
                >
                  <area.icon size={22} style={{ color: area.color }} />
                </div>
                <h3 className="text-white font-semibold mb-2">{area.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {area.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <GlassCard className="p-6 text-center group">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-zinc-500 text-sm">{stat.label}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

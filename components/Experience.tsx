"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import GlassCard from "@/components/ui/GlassCard";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-[150px] opacity-[0.05] bg-pink-500 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-pink-400 mb-4 font-medium">
            Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <AnimatedText className="gradient-text">My Journey</AnimatedText>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base md:text-lg">
            A timeline of my professional growth and key milestones.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.1] to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <ScrollReveal
              key={exp.id}
              delay={i * 0.15}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 -translate-x-[5px] md:-translate-x-1.5 mt-6 z-10 shadow-[0_0_10px_rgba(59,130,246,0.4)]" />

                {/* Card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-0 pl-8 md:pl-0" : "md:pl-0 pl-8 md:pr-0"} ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <GlassCard className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-zinc-400 mb-3">{exp.company}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.05] text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.05] bg-cyan-500 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-4 font-medium">
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <AnimatedText className="gradient-text">Featured Work</AnimatedText>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base md:text-lg">
            A selection of projects that showcase my expertise in building
            modern, scalable applications.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.id}
              delay={i * 0.1}
              className={project.featured ? "md:row-span-1" : ""}
            >
              <SpotlightCard
                className="h-full group"
                spotlightColor={
                  i % 2 === 0
                    ? "rgba(59, 130, 246, 0.08)"
                    : "rgba(139, 92, 246, 0.08)"
                }
              >
                <div className="p-6">
                  {/* Project Image */}
                  <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-white/[0.02] to-white/[0.05]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
                    >
                      <GithubIcon size={14} /> Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-400 hover:text-blue-300 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300"
                    >
                      <ExternalLink size={14} /> Demo
                    </motion.a>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

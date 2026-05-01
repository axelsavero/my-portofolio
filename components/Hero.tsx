"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import DecryptedText from "@/components/ui/DecryptedText";
import MagneticButton from "@/components/ui/MagneticButton";

const roles = [
  "Tech Enthusiast",
  "Fullstack Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/axelsavero", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/axel-savero-01a8a7278/", label: "LinkedIn" },
    { icon: InstagramIcon, href: "https://www.instagram.com/axelsvro/", label: "Instagram" },
    { icon: Mail, href: "mailto:muhammadaxel139@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, #3B82F6, transparent 70%)",
          x: mousePos.x * 30,
          y: mousePos.y * 30,
        }}
        animate={{
          x: mousePos.x * 30,
          y: mousePos.y * 30,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
        style={{
          background: "radial-gradient(circle, #8B5CF6, transparent 70%)",
        }}
        animate={{
          x: mousePos.x * -20,
          y: mousePos.y * -20,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
        style={{
          background: "radial-gradient(circle, #06B6D4, transparent 70%)",
        }}
        animate={{
          x: mousePos.x * -15,
          y: mousePos.y * 15,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${50 + mousePos.x * 30}% ${50 + mousePos.y * 30}%, rgba(59, 130, 246, 0.04), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/[0.05] border border-white/[0.08]
            text-sm text-zinc-400 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="gradient-text">
              <DecryptedText text="Muhammad Axel Savero Fikri" speed={40} />
            </span>
          </h1>
        </motion.div>

        {/* Rotating Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-12 md:h-14 flex items-center justify-center mb-6"
        >
          <div className="relative overflow-hidden h-full flex items-center">
            <motion.span
              key={roleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-xl md:text-3xl font-medium text-zinc-400"
            >
              {roles[roleIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about building high-performance web applications with clean
          architecture. I transform complex problems into elegant, scalable
          digital solutions with a focus on user experience and modern design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <MagneticButton>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                bg-gradient-to-r from-blue-500 to-cyan-500
                text-white font-medium text-sm
                hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                transition-all duration-300"
            >
              View Projects
              <ArrowDown
                size={16}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="/resume.pdf"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                bg-white/[0.05] border border-white/[0.1]
                text-zinc-300 font-medium text-sm
                hover:bg-white/[0.08] hover:border-white/[0.15]
                transition-all duration-300"
            >
              <Download size={16} />
              Download CV
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-3"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]
                text-zinc-500 hover:text-white hover:bg-white/[0.08]
                hover:border-white/[0.12] transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/[0.15] flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

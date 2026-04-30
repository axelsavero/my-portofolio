"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "developer@example.com",
    href: "mailto:developer@example.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 812 3456 7890",
    href: "https://wa.me/6281234567890",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/developer",
    href: "https://github.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/developer",
    href: "https://linkedin.com",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only: no backend
    alert("Thank you for your message! (This is a UI-only demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.05] bg-blue-500 pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-4 font-medium">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <AnimatedText className="gradient-text">
              Let&apos;s Work Together
            </AnimatedText>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base md:text-lg">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.label} delay={i * 0.1}>
                <a
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlassCard className="p-5 group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.1] transition-all duration-300">
                        <info.icon
                          size={20}
                          className="text-zinc-400 group-hover:text-white transition-colors"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-0.5">
                          {info.label}
                        </p>
                        <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                          {info.value}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-zinc-600 group-hover:text-zinc-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                      />
                    </div>
                  </GlassCard>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <GlassCard className="p-6" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-zinc-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/30 focus:bg-white/[0.05] transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-zinc-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/30 focus:bg-white/[0.05] transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-zinc-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/30 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <MagneticButton className="w-full">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-shadow duration-300"
                  >
                    <Send size={16} /> Send Message
                  </motion.button>
                </MagneticButton>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/axelsavero", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/axel-savero-01a8a7278/", label: "LinkedIn" },
  { icon: InstagramIcon, href: "https://www.instagram.com/axelsvro/", label: "Instagram" },
  { icon: Mail, href: "mailto:muhammadaxel139@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.05]">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-lg font-bold gradient-text mb-2 inline-block"
            >
              {"<Dev />"}
            </a>
            <p className="text-zinc-600 text-sm flex items-center gap-1 justify-center md:justify-start">
              © {new Date().getFullYear()} Built with{" "}
              <Heart size={12} className="text-red-400" /> by Muhammad Axel Savero Fikri
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-zinc-500 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-zinc-500 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

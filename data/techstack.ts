export interface TechItem {
  name: string;
  icon: string;
  color: string;
}

export const techStack: TechItem[] = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Laravel", icon: "◆", color: "#FF2D20" },
  { name: "Node.js", icon: "⬢", color: "#339933" },
  { name: "Express", icon: "Ex", color: "#ffffff" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
  { name: "MySQL", icon: "🐬", color: "#4479A1" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "Tailwind", icon: "🌊", color: "#06B6D4" },
  { name: "Flutter", icon: "◇", color: "#02569B" },
  { name: "Rust", icon: "🦀", color: "#DEA584" },
  { name: "GitHub", icon: "⚙️", color: "#ffffff" },
  { name: "Linux", icon: "🐧", color: "#FCC624" },
];

export const techCategories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Flutter"],
  },
  {
    title: "Backend",
    items: ["Laravel", "Node.js", "Express", "Rust"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "DevOps",
    items: ["Docker", "GitHub", "Linux"],
  },
];

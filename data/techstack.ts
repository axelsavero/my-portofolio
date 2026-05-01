export interface TechItem {
  name: string;
  icon: string;
  color: string;
}

export const techStack: TechItem[] = [
  { name: "C++", icon: "⚙️", color: "#00599C" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "HTML", icon: "🌐", color: "#E34F26" },
  { name: "CSS", icon: "🎨", color: "#1572B6" },
  { name: "Javascript", icon: "JS", color: "#F7DF1E" },
  { name: "Typescript", icon: "TS", color: "#3178C6" },
  { name: "PHP", icon: "🐘", color: "#777BB4" },
  { name: "Laravel", icon: "◆", color: "#FF2D20" },
  { name: "React.js", icon: "⚛️", color: "#61DAFB" },
  { name: "Vue.js", icon: "V", color: "#4FC08D" },
  { name: "Git", icon: "🌿", color: "#F05032" },
  { name: "MySql", icon: "🐬", color: "#4479A1" },
  { name: "Tailwind", icon: "🌊", color: "#06B6D4" },
  { name: "Kotlin", icon: "K", color: "#0095D5" },
  { name: "Flutter", icon: "◇", color: "#02569B" },
  { name: "Node.js", icon: "⬢", color: "#339933" },
];

export const techCategories = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "Javascript", "Typescript", "React.js", "Vue.js", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["PHP", "Laravel", "Node.js", "C++", "Python"],
  },
  {
    title: "Database",
    items: ["MySql"],
  },
  {
    title: "Mobile & Tools",
    items: ["Kotlin", "Flutter", "Git"],
  },
];

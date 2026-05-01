export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Fullstack Web Developer",
    company: "Pustikom UNJ",
    period: "2025 — Present",
    description:
      "Developing and maintaining web applications for university needs, focusing on modern stacks and scalable systems.",
    skills: ["PHP", "Laravel", "Nuxt.js", "Vue", "React", "MySQL"],
  },
  {
    id: 2,
    role: "IT Extracurricular Teacher",
    company: "Labschool UNJ",
    period: "2025 — Present",
    description:
      "Teaching students fundamental web development skills, guiding them through practical projects.",
    skills: ["HTML", "CSS", "PHP", "Laravel"],
  },
  {
    id: 3,
    role: "Computer Science",
    company: "Jakarta State University",
    period: "2023 — 2027",
    description:
      "Pursuing a degree in Computer Science, focusing on software engineering, algorithms, and system design.",
    skills: [],
  },
];

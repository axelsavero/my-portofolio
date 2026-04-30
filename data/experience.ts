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
    role: "Freelance Fullstack Developer",
    company: "Self-Employed",
    period: "2024 — Present",
    description:
      "Building end-to-end web applications for clients across various industries. Specializing in modern React/Next.js frontends with scalable backend architectures. Delivered 10+ projects with a focus on performance and user experience.",
    skills: ["Next.js", "React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "Tech Startup Inc.",
    period: "2023 — 2024",
    description:
      "Contributed to the development of a SaaS platform serving 50K+ users. Implemented new features, optimized database queries by 40%, and collaborated with cross-functional teams in agile sprints.",
    skills: ["Laravel", "React", "MySQL", "REST API", "Git"],
  },
  {
    id: 3,
    role: "University Projects Lead",
    company: "Computer Science Department",
    period: "2022 — 2023",
    description:
      "Led a team of 5 students in developing capstone projects including a smart campus management system. Managed project timelines, conducted code reviews, and presented to faculty stakeholders.",
    skills: ["Project Management", "Full Stack", "System Design", "Agile"],
  },
  {
    id: 4,
    role: "Tech Division Head",
    company: "Student Tech Organization",
    period: "2021 — 2022",
    description:
      "Organized tech workshops, hackathons, and community events for 200+ members. Built the organization's official website and internal management tools. Mentored junior developers.",
    skills: ["Leadership", "Event Management", "Web Development", "Mentoring"],
  },
];

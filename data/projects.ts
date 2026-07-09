export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  demo?: string;
  isPrivate: boolean;
  featured: boolean;
  isMobileApp?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sekolah Unggul Garuda Baru",
    description:
      "An integrated information system for SMA Unggulan Garuda Transformasi, designed to streamline the input and management of interview and microteaching assessment scores. Built as a monolithic architecture with Laravel and React for seamless performance.",
    image: "/projects/garuda-baru.png",
    techStack: ["Laravel", "React", "PHP", "Tailwind CSS", "TypeScript"],
    isPrivate: true,
    featured: true,
  },
  {
    id: 2,
    title: "SIMRISK — Risk Management System",
    description:
      "A comprehensive web-based risk management application tailored for university environments. SimRisk enables systematic identification, assessment, mitigation, and monitoring of institutional risks with a robust, multi-level workflow approval system.",
    image: "/projects/simrisk.png",
    techStack: ["Laravel", "React", "TypeScript", "Shadcn UI", "Tailwind CSS"],
    isPrivate: true,
    featured: true,
  },
  {
    id: 3,
    title: "SIAKAD V3 — Academic Information System",
    description:
      "The next-generation Academic Information System (SIAKAD) for Universitas Negeri Jakarta. Serves as a centralized platform for academic data processing, scheduling, and communication between students, lecturers, and campus units.",
    image: "/projects/siakad-v3.png",
    techStack: ["Nuxt.js", "Vue.js", "TypeScript", "Nuxt UI"],
    isPrivate: true,
    featured: true,
  },
  {
    id: 4,
    title: "Poke Pedia",
    description:
      "An interactive Pokémon encyclopedia that lets users explore detailed statistics, types, abilities, and evolution chains for every Pokémon. Features real-time search, responsive card layouts, and data fetched from the PokéAPI.",
    image: "/projects/pokepedia.png",
    techStack: ["React", "Tailwind CSS"],
    github: "https://github.com/axelsavero/pokemon-react",
    demo: "https://pokemon-react-taupe.vercel.app/",
    isPrivate: false,
    featured: false,
  },
  {
    id: 5,
    title: "Duitku — Finance Manager",
    description:
      "A sleek personal finance management app built with Kotlin for Android. Track income and expenses, visualize spending patterns with intuitive statistics, and take full control of your financial health — all from the palm of your hand.",
    image: "/projects/duitku.png",
    techStack: ["Kotlin"],
    github: "https://github.com/axelsavero/duitku",
    isPrivate: false,
    featured: false,
    isMobileApp: true,
  },
];

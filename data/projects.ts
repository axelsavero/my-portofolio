export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Job Portal Disability Platform",
    description:
      "An inclusive job portal platform designed to connect people with disabilities to accessible employment opportunities. Features advanced filtering, accessibility-first design, and employer matching system.",
    image: "/projects/job-portal.png",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "Smart expense tracking application with AI-powered categorization, visual analytics dashboards, budget planning, and multi-currency support for personal and team finance management.",
    image: "/projects/expense-tracker.png",
    techStack: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    id: 3,
    title: "AI Dashboard",
    description:
      "Intelligent analytics dashboard powered by machine learning. Real-time data visualization, predictive insights, anomaly detection, and automated reporting for business intelligence.",
    image: "/projects/ai-dashboard.png",
    techStack: ["Next.js", "TypeScript", "Docker", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false,
  },
  {
    id: 4,
    title: "E-Commerce Analytics",
    description:
      "Comprehensive e-commerce analytics platform with real-time sales tracking, customer behavior analysis, inventory optimization, and revenue forecasting using advanced data pipelines.",
    image: "/projects/ecommerce-analytics.png",
    techStack: ["Laravel", "React", "Tailwind", "MySQL"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false,
  },
];

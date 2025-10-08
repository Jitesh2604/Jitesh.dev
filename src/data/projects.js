import { Monitor, ShoppingCart, Database, Star, Brain, Gamepad } from "lucide-react";

export const projects = [
  {
    title: "Movies Rating Site",
    description: "React app with REST APIs, auth, and ratings.",
    tech: ["React", "REST API", "Node.js"],
    icon: Star,
    liveUrl: "https://movies-rating-site.vercel.app",
    githubUrl: "https://github.com/Jitesh2604/Movies_Rating_Site",
  },
  {
    title: "Brain Teaser",
    description: "AI-powered Quiz App built with React, Express, and MongoDB featuring category selection, levels, ranking, and dynamic question generation.",
    tech: ["React", "Express", "MongoDB", "Gemini AI"],
    icon: Gamepad,
    liveUrl: "https://quiz-app-azure-rho.vercel.app",
    githubUrl: "https://github.com/Jitesh2604/Quiz_App",
  },
  {
    title: "Task Manager",
    description: "Next.js + Express + MongoDB full-stack app with JWT auth.",
    tech: ["Next.js", "Express", "MongoDB"],
    icon: Database,
    liveUrl: "https://task-manager-rust-ten.vercel.app",
    githubUrl: "https://github.com/Jitesh2604/Task_Manager",
  },
  {
    title: "E-Commerce Demo",
    description: "React + Stripe checkout with product filters & demo data.",
    tech: ["React", "Stripe", "Tailwind"],
    icon: ShoppingCart,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Dashboard",
    description: "Analytics dashboard using Recharts, role-based UI, CSV import.",
    tech: ["React", "Recharts", "CSV Import"],
    icon: Monitor,
    liveUrl: "#",
    githubUrl: "#",
  },
];

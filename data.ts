export type status =
  | "active"
  | "offline"
  | "in progress"
  | "repository only"
  | "completed";

export type technologies =
  | "typescript"
  | "python"
  | "reactjs"
  | "javascript"
  | "nodejs"
  | "react-native"
  | "pygame"
  | "pandas"
  | "vite"
  | "tailwindcss"
  | "supabase"
  | "html"
  | "css"
  | "bash"
  | "...";

export interface IData {
  title: string;
  img: string;
  description: string;
  status: status[];
  technologies: technologies[];
}

export const data: IData[] = [
  {
    title: "TODOApp",
    img: "",
    description:
      "A web application to manage tasks and tasklists. The user save their tasks with google account easy login, and can use the same account in many devices at once. The app is very keyboard friendly and all of it's core functionalities can be acceced through hotkeys",
    status: ["active", "in progress"],
    technologies: [
      "vite",
      "typescript",
      "reactjs",
      "tailwindcss",
      "supabase",
      "html",
      "css",
    ],
  },
  {
    title: "Poker",
    img: "",
    description: "",
    status: ["active", "completed", "repository only"],
    technologies: ["python", "pygame"],
  },
  {
    title: "Beat Machine",
    img: "",
    description: "",
    status: ["active", "completed", "repository only"],
    technologies: ["python", "pygame"],
  },
  {
    title: "Nlw e-sports",
    img: "",
    description: "",
    status: ["completed", "offline", "repository only"],
    technologies: [
      "vite",
      "typescript",
      "nodejs",
      "reactjs",
      "react-native",
      "html",
      "tailwindcss",
      "css",
    ],
  },
  {
    title: "Page clones",
    img: "",
    description: "",
    status: ["offline", "in progress"],
    technologies: [
      "vite",
      "typescript",
      "reactjs",
      "tailwindcss",
      "html",
      "css",
    ],
  },
  {
    title: "Imersão Dados",
    img: "",
    description: "",
    status: ["completed", "active", "repository only"],
    technologies: ["python", "pandas"],
  },
  {
    title: "Nlw Return",
    img: "",
    description: "",
    status: ["completed", "repository only", "offline"],
    technologies: [
      "vite",
      "react-native",
      "reactjs",
      "typescript",
      "nodejs",
      "tailwindcss",
      "html",
      "css",
    ],
  },
  {
    title: "Pong",
    img: "",
    description: "",
    status: ["completed", "repository only"],
    technologies: ["python"],
  },
  {
    title: "Hangman",
    img: "",
    description: "",
    status: ["completed", "offline", "repository only"],
    technologies: ["reactjs", "javascript", "css", "html", "supabase"],
  },
];

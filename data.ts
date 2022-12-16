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
      "Non tempor velit aute sunt labore eu deserunt eiusmod anim ex ad. Esse proident est esse pariatur irure. Do consectetur tempor officia aliqua fugiat officia excepteur labore adipisicing tempor est adipisicing nulla. Eiusmod eu est veniam incididunt fugiat labore amet elit. Labore duis dolore veniam veniam veniam exercitation dolor ullamco. Aliquip elit veniam ut ea aute do proident esse cillum. Amet reprehenderit laboris enim tempor labore quis esse magna cupidatat nulla nisi Lorem do in.",
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
    description:
      "Fugiat ut aute nostrud culpa fugiat sunt quis laboris incididunt veniam id commodo in ullamco. Sit officia culpa esse tempor non minim ea aliqua. Sit minim aliqua ex non Lorem aute dolore. Consectetur qui reprehenderit do aute enim est sunt labore occaecat adipisicing ea eiusmod. Reprehenderit laborum sint ullamco voluptate aliqua nisi in excepteur Lorem voluptate irure enim.",
    status: ["active", "completed", "repository only"],
    technologies: ["python", "pygame"],
  },
  {
    title: "Beat Machine",
    img: "",
    description:
      "Fugiat ut aute nostrud culpa fugiat sunt quis laboris incididunt veniam id commodo in ullamco. Sit officia culpa esse tempor non minim ea aliqua. Sit minim aliqua ex non Lorem aute dolore. Consectetur qui reprehenderit do aute enim est sunt labore occaecat adipisicing ea eiusmod. Reprehenderit laborum sint ullamco voluptate aliqua nisi in excepteur Lorem voluptate irure enim.",
    status: ["active", "completed", "repository only"],
    technologies: ["python", "pygame"],
  },
  {
    title: "Nlw e-sports",
    img: "",
    description:
      "Fugiat ut aute nostrud culpa fugiat sunt quis laboris incididunt veniam id commodo in ullamco. Sit officia culpa esse tempor non minim ea aliqua. Sit minim aliqua ex non Lorem aute dolore. Consectetur qui reprehenderit do aute enim est sunt labore occaecat adipisicing ea eiusmod. Reprehenderit laborum sint ullamco voluptate aliqua nisi in excepteur Lorem voluptate irure enim.",
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
    description:
      "Fugiat ut aute nostrud culpa fugiat sunt quis laboris incididunt veniam id commodo in ullamco. Sit officia culpa esse tempor non minim ea aliqua. Sit minim aliqua ex non Lorem aute dolore. Consectetur qui reprehenderit do aute enim est sunt labore occaecat adipisicing ea eiusmod. Reprehenderit laborum sint ullamco voluptate aliqua nisi in excepteur Lorem voluptate irure enim.",
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
    description:
      "Fugiat ut aute nostrud culpa fugiat sunt quis laboris incididunt veniam id commodo in ullamco. Sit officia culpa esse tempor non minim ea aliqua. Sit minim aliqua ex non Lorem aute dolore. Consectetur qui reprehenderit do aute enim est sunt labore occaecat adipisicing ea eiusmod. Reprehenderit laborum sint ullamco voluptate aliqua nisi in excepteur Lorem voluptate irure enim.",
    status: ["completed", "active", "repository only"],
    technologies: ["python", "pandas"],
  },
  {
    title: "Nlw Return",
    img: "",
    description:
      "Fugiat ut aute nostrud culpa fugiat sunt quis laboris incididunt veniam id commodo in ullamco. Sit officia culpa esse tempor non minim ea aliqua. Sit minim aliqua ex non Lorem aute dolore. Consectetur qui reprehenderit do aute enim est sunt labore occaecat adipisicing ea eiusmod. Reprehenderit laborum sint ullamco voluptate aliqua nisi in excepteur Lorem voluptate irure enim.",
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
    description:
      "Fugiat ut aute nostrud culpa fugiat sunt quis laboris incididunt veniam id commodo in ullamco. Sit officia culpa esse tempor non minim ea aliqua. Sit minim aliqua ex non Lorem aute dolore. Consectetur qui reprehenderit do aute enim est sunt labore occaecat adipisicing ea eiusmod. Reprehenderit laborum sint ullamco voluptate aliqua nisi in excepteur Lorem voluptate irure enim.",
    status: ["completed", "repository only"],
    technologies: ["python"],
  },
  {
    title: "Hangman",
    img: "",
    description:
      "Fugiat ut aute nostrud culpa fugiat sunt quis laboris incididunt veniam id commodo in ullamco. Sit officia culpa esse tempor non minim ea aliqua. Sit minim aliqua ex non Lorem aute dolore. Consectetur qui reprehenderit do aute enim est sunt labore occaecat adipisicing ea eiusmod. Reprehenderit laborum sint ullamco voluptate aliqua nisi in excepteur Lorem voluptate irure enim.",
    status: ["completed", "offline", "repository only"],
    technologies: ["reactjs", "javascript", "css", "html", "supabase"],
  },
];

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
    img: "https://user-images.githubusercontent.com/81166239/204522990-c1887aba-032f-49f4-bb01-eef15f7fef7f.png",
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
    title: "Nlw e-sports",
    img: "https://raw.githubusercontent.com/phenriquep00/portfolio/main/public/project_images/nlw-esports.png",
    description:
      "A web projects developed during Rocketseat's Next Level Week Event. The project consists of a application to find people to play online games with you. The complete project is composed by a web app created with react, a mobile app built with react-native and a server created with nodejs.",
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
    title: "Poker",
    img: "https://raw.githubusercontent.com/phenriquep00/portfolio/main/public/project_images/poker.png",
    description:
      "A Poker game created with python & pygame. The players plays against 3 bots in a classic poker match where the winner is the last one with chips in the table.",
    status: ["active", "completed", "repository only"],
    technologies: ["python", "pygame"],
  },
  {
    title: "Nlw Return",
    img: "",
    description:
      "A project created during Rocketseat's Next Level Week. The goal of the event was to create a react component that allows the user to send feedback to the page maintainers. The feedback widget component is supported in web and mobile apps and is connected with a nodejs backend.",
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
    title: "Beat Machine",
    img: "https://raw.githubusercontent.com/phenriquep00/portfolio/main/public/project_images/beat-machine.png",
    description:
      "A python & pygame application that simulates a drum kit. The app allows the user to select the beats per second and the amount of beats to repeat. The user can also save and import beats following a simple .txt file with the pattern.",
    status: ["active", "completed", "repository only"],
    technologies: ["python", "pygame"],
  },
  {
    title: "Imersão Dados 4",
    img: "https://raw.githubusercontent.com/phenriquep00/portfolio/main/public/project_images/imersao-dados-4.png",
    description: "A data science project created during Alura's Imersão Dados.",
    status: ["completed", "active", "repository only"],
    technologies: ["python", "pandas"],
  },

  {
    title: "Pong",
    img: "https://raw.githubusercontent.com/phenriquep00/portfolio/main/public/project_images/pong.png",
    description: "A simple pong game made with python's turtle library",
    status: ["completed", "repository only"],
    technologies: ["python"],
  },
  {
    title: "Hangman",
    img: "https://raw.githubusercontent.com/phenriquep00/portfolio/main/public/project_images/hangman.png",
    description:
      "A hangman web application created with react and stylized with tailwindcss. The words come from a custom server on supabase",
    status: ["completed", "offline", "repository only"],
    technologies: ["reactjs", "javascript", "css", "html", "supabase"],
  },
];

export interface IData {
  title: string;
  img: string;
  description: string;
  status: "active" | "offline" | "in development";
  technologies: string;
}

export const data: IData[] = [
  {
    title: "First project",
    img: "",
    description:
      "Non tempor velit aute sunt labore eu deserunt eiusmod anim ex ad. Esse proident est esse pariatur irure. Do consectetur tempor officia aliqua fugiat officia excepteur labore adipisicing tempor est adipisicing nulla. Eiusmod eu est veniam incididunt fugiat labore amet elit. Labore duis dolore veniam veniam veniam exercitation dolor ullamco. Aliquip elit veniam ut ea aute do proident esse cillum. Amet reprehenderit laboris enim tempor labore quis esse magna cupidatat nulla nisi Lorem do in.",
    status: "active",
    technologies: "js, html, css",
  },
  {
    title: "Second project",
    img: "",
    description:
      "Fugiat ut aute nostrud culpa fugiat sunt quis laboris incididunt veniam id commodo in ullamco. Sit officia culpa esse tempor non minim ea aliqua. Sit minim aliqua ex non Lorem aute dolore. Consectetur qui reprehenderit do aute enim est sunt labore occaecat adipisicing ea eiusmod. Reprehenderit laborum sint ullamco voluptate aliqua nisi in excepteur Lorem voluptate irure enim.",
    status: "in development",
    technologies: "python, react",
  },
  {
    title: "Third project",
    img: "",
    description:
      "Fugiat ut aute nostrud culpa fugiat sunt quis laboris incididunt veniam id commodo in ullamco. Sit officia culpa esse tempor non minim ea aliqua. Sit minim aliqua ex non Lorem aute dolore. Consectetur qui reprehenderit do aute enim est sunt labore occaecat adipisicing ea eiusmod. Reprehenderit laborum sint ullamco voluptate aliqua nisi in excepteur Lorem voluptate irure enim.",
    status: "offline",
    technologies: "nodejs, react native",
  },
  {
    title: "Forth project",
    img: "",
    description:
      "Fugiat ut aute nostrud culpa fugiat sunt quis laboris incididunt veniam id commodo in ullamco. Sit officia culpa esse tempor non minim ea aliqua. Sit minim aliqua ex non Lorem aute dolore. Consectetur qui reprehenderit do aute enim est sunt labore occaecat adipisicing ea eiusmod. Reprehenderit laborum sint ullamco voluptate aliqua nisi in excepteur Lorem voluptate irure enim.",
    status: "in development",
    technologies: "python, react",
  },
  {
    title: "Fifth project",
    img: "",
    description:
      "Fugiat ut aute nostrud culpa fugiat sunt quis laboris incididunt veniam id commodo in ullamco. Sit officia culpa esse tempor non minim ea aliqua. Sit minim aliqua ex non Lorem aute dolore. Consectetur qui reprehenderit do aute enim est sunt labore occaecat adipisicing ea eiusmod. Reprehenderit laborum sint ullamco voluptate aliqua nisi in excepteur Lorem voluptate irure enim.",
    status: "in development",
    technologies: "python, react",
  },
];

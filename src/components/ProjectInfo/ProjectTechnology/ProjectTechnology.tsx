import { technologies } from "../../../../data";
import html from "../../../../src/logos/png/001-html.png";
import react from "../../../../src/logos/png/002-physics.png";
import typescript from "../../../../src/logos/png/003-typescript.png";
import javascript from "../../../../src/logos/png/004-js.png";
import python from "../../../../src/logos/png/005-python.png";
import css from "../../../../src/logos/png/006-css-3.png";
import bash from "../../../../src/logos/png/007-gnu-bash.png";
import node from "../../../../src/logos/png/008-nodejs.png";
import pandas from "../../../../src/logos/png/009-pandas.png";
import tailwind from "../../../../src/logos/png/010-tailwind.svg";
import vite from "../../../../src/logos/png/011-vite.svg";

interface IProjectTechnology {
  tech: technologies;
}

/* "typescript"
  | "python"
  | "reactjs"
  | "javascript"
  | "nodejs" 
  | "react-native" * 
  | "pandas" 
  | "vite" * 
  | "tailwindcss" * 
  | "supabase" * 
  | "html"
  | "css"
  | "bash"
  | "..."; */

export function ProjectTechnology({ tech }: IProjectTechnology) {
  return (
    <div className="text-[#feda4a]">
      {
        tech === "typescript" ? (
          <div className="flex gap-1 justify-center items-center">
            <img className="w-16 h-16" src={typescript} alt="typescript logo" />
            <p>{tech}</p>
          </div>
        ) : tech === "python" ? (
          <div className="flex gap-1 justify-center items-center">
            <img className="w-16 h-16" src={python} alt="python logo" />
            <p>{tech}</p>
          </div>
        ) : tech === "reactjs" ? (
          <div className="flex gap-1 justify-center items-center">
            <img className="w-16 h-16" src={react} alt="react logo" />
            <p>{tech}</p>
          </div>
        ) : tech === "javascript" ? (
          <div className="flex gap-1 justify-center items-center">
            <img className="w-16 h-16" src={javascript} alt="javascript logo" />
            <p>{tech}</p>
          </div>
        ) : tech === "html" ? (
          <div className="flex gap-1 justify-center items-center">
            <img className="w-16 h-16" src={html} alt="html logo" />
            <p>{tech}</p>
          </div>
        ) : tech === "css" ? (
          <div className="flex gap-1 justify-center items-center">
            <img className="w-16 h-16" src={css} alt="css logo" />
            <p>{tech}</p>
          </div>
        ) : tech === "bash" ? (
          <div className="flex gap-1 justify-center items-center">
            <img className="w-16 h-16" src={bash} alt="bash logo" />
            <p>{tech}</p>
          </div>
        ) : tech === "nodejs" ? (
          <div className="flex gap-1 justify-center items-center">
            <img className="w-16 h-16" src={node} alt="nodejs logo" />
            <p>{tech}</p>
          </div>
        ) : tech === "pandas" ? (
          <div className="flex gap-1 justify-center items-center">
            <img className="w-16 h-16" src={pandas} alt="pandas logo" />
            <p>{tech}</p>
          </div>
        ) : tech === "tailwindcss" ? (
          <div className="flex gap-1 justify-center items-center">
            <img className="w-16 h-16" src={tailwind} alt="tailwind logo" />
            <p>{tech}</p>
          </div>
        ) : tech === "vite" ? (
          <div className="flex gap-1 justify-center items-center">
            <img className="w-16 h-16" src={vite} alt="vite logo" />
            <p>{tech}</p>
          </div>
        ) : (
          tech
        ) /* TODO: add technologies */
      }
    </div>
  );
}

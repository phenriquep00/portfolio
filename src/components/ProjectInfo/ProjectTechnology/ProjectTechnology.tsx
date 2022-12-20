import { technologies } from "../../../../data";
import html from "../../../../public/logos/png/001-html.png";
import react from "../../../../public/logos/png/002-physics.png";
import typescript from "../../../../public/logos/png/003-typescript.png";
import javascript from "../../../../public/logos/png/004-js.png";
import python from "../../../../public/logos/png/005-python.png";
import css from "../../../../public/logos/png/006-css-3.png";
import bash from "../../../../public/logos/png/007-gnu-bash.png";

interface IProjectTechnology {
  tech: technologies;
}

/* "typescript"
  | "python"
  | "reactjs"
  | "javascript"
  | "nodejs" * 
  | "react-native" * 
  | "pygame" * 
  | "pandas" * 
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
          <img src={typescript} alt="typescript logo" />
        ) : tech === "python" ? (
          <img src={python} alt="python logo" />
        ) : tech === "reactjs" ? (
          <img src={react} alt="reactjs logo" />
        ) : tech === "javascript" ? (
          <img src={javascript} alt="javascript logo" />
        ) : tech === "html" ? (
          <img src={html} alt="html logo" />
        ) : tech === "css" ? (
          <img src={css} alt="css logo" />
        ) : tech === "bash" ? (
          <img src={bash} alt="gnu bash logo" />
        ) : tech /* TODO: add technologies */
      }
    </div>
  );
}

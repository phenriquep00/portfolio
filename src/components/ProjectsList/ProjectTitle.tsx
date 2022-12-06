import { useState } from "react";

interface IProjectTitle {
    title: string
}

export function ProjectTitle({title}: IProjectTitle) {

  return (
        <button className="border-2 border-[#feda4a] p-2 font-black text-[#feda4a] transition ease-in-out duration-75 -skew-y-12 -skew-x-12 hover:active-item whitespace-nowrap overflow-clip">
            {title}
        </button>    
  );
}

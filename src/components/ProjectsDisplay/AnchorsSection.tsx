import { House } from "phosphor-react";
import GithubLogo from "../../../public/logos/png/github-mark.png";

interface IAnchorsSection {
  github: string;
  page?: string;
}

export function AnchorsSection({github, page}: IAnchorsSection) {
    return (
        <div className="flex flex-col items-center mt-5 justify-center p-4 rounded-xl w-full text-white border-2 border-blue-500">
                <div className="bg-blue-500 rounded p-2 px-4 relative -top-9">
                  links
                </div>
                <div className="flex w-full font-medium text-lg flex-row items-center justify-around relative -mt-6">
                    <a href={github} target="_blank" className="bg-white items-center flex gap-2 rounded text-black p-2 hover:bg-opacity-80 ">
                      <img className="w-6 h-6" src={GithubLogo} alt="" />
                      github repository
                    </a>
                    {page !== "" && (
                      <a href={page} className="bg-white flex gap-2 items-center rounded text-black p-2 hover:bg-opacity-80 ">
                        <House width={24} height={24} weight="bold"/>
                        Home page
                      </a>
                    )}
                </div>
              </div>
    )
}
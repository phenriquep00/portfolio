import { Button } from "../Button/Button";
import { Lightsaber } from "./Lightsaber";


export interface INavigator {
  focusProjects: () => void;
  focusContact: () => void;
  focusLandingPage: () => void;
  activePage: string;
}

export function Navigator({
  focusLandingPage,
  focusProjects,
  focusContact,
  activePage,
}: INavigator) {
  return (
    <div className="flex gap-4 items-center justify-around overflow-hidden">
      <Lightsaber hilt="https://raw.githubusercontent.com/phenriquep00/portfolio/main/public/lightsaber1.png" color="lime" onClick={focusLandingPage}  text="Home" activePage={activePage}/>
      <Lightsaber hilt="https://raw.githubusercontent.com/phenriquep00/portfolio/main/public/lightsaber1.png" color="red" onClick={focusProjects}  text="Projects"activePage={activePage}/>
      <Lightsaber hilt="https://raw.githubusercontent.com/phenriquep00/portfolio/main/public/lightsaber1.png" color="blue" onClick={focusContact}  text="Contact" activePage={activePage}/>
    </div>
  );
};
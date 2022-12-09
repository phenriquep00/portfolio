import { Button } from "../Button/Button";

export interface INavigator {
  focusProjects: () => void;
  focusContact: () => void;
  focusLandingPage: () => void;
}

export function Navigator({focusLandingPage, focusProjects, focusContact}: INavigator) {
  return (
    <div className="flex gap-4 items-center justify-around">
      <Button type="p" onClick={() => {focusLandingPage()}}>
        <p>Home</p>
      </Button>

      <Button type="p" onClick={() => {focusProjects()}}>
        <p>Projects</p>
      </Button>

      <Button type="p" onClick={() => {focusContact()}}>
        <p>Contact</p>
      </Button>
    </div>
  );
}

import { Button } from "../Button/Button";

export interface INavigator {
  focusProjects: () => void;
  focusContact: () => void;
}

export function Navigator({focusProjects, focusContact}: INavigator) {
  return (
    <div className="flex gap-4">
      <Button type="p" onClick={() => {focusProjects()}}>
        <p>Projects</p>
      </Button>

      <Button type="p" onClick={() => {focusContact()}}>
        <p>Contact</p>
      </Button>
    </div>
  );
}

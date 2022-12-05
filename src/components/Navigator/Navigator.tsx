import { Button } from "../Button/Button";

export function Navigator() {
  return (
    <div className="flex gap-4">
      <Button type="p" onClick={() => {}}>
        <p>Projects</p>
      </Button>

      <Button type="p" onClick={() => {}}>
        <p>Contact</p>
      </Button>
    </div>
  );
}

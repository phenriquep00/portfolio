import { forwardRef, ReactNode } from "react";

export interface IPage {
  children?: ReactNode;
}

export type Ref = HTMLDivElement;

export const Projects = forwardRef<Ref, IPage>((props, ref) => (
  <div tabIndex={0} ref={ref} className="flex items-center justify-center w-screen h-screen ">
    Projects Page
  </div>
));

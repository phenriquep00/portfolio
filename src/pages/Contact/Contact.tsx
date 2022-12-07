import { forwardRef } from "react";
import { IPage, Ref } from "../Projects/Projects";

export const Contact = forwardRef<Ref, IPage>((props, ref) => (
  <div tabIndex={0} ref={ref} className="flex items-center rounded-md  justify-center w-4/5 h-screen bg-slate-600">
    Contact Page
  </div>
));

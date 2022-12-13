import { forwardRef } from "react";
import { SocialMediaList } from "../../components/SocialMediaList/SocialMediaList";
import { IPage, Ref } from "../Projects/Projects";

export const Contact = forwardRef<Ref, IPage>((props, ref) => (
  <div
    tabIndex={0}
    ref={ref}
    className="flex flex-col p-2   items-center rounded-md  justify-evenly w-4/5 h-[90vh] mt-3 bg-opacity-50 bg-gray-700"
  >
    <div className="flex flex-row p-4 gap-4 w-full h-3/4">
      <SocialMediaList />

      <div className="flex flex-1 border-2 border-[#feda4a] bg-black  bg-opacity-70  h-full">
        email form
      </div>
    </div>

    {/* <div className="flex flex-1 border-2 w-full">
      something here
    </div> */}
  </div>
));

import { forwardRef, useEffect, useState } from "react";
import { EmailForm } from "../../components/SocialMediaList/EmailForm";
import { SocialMediaList } from "../../components/SocialMediaList/SocialMediaList";
import { IPage, Ref } from "../Projects/Projects";
import useWindowDimensions from "../../hooks/useWindowDimentions";
import { Button } from "../../components/Button/Button";

export const Contact = forwardRef<Ref, IPage>((props, ref) => {
  //TODO: if the viewport is mobile,  toggle email form with a button
  const { height, width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(
    height >= 550 && width >= 300 ? false : true
  );
  const [showEmailForm, setShowEmailForm] = useState<boolean>(
    isMobile ? false : true
  );

  useEffect(() => {
    setIsMobile(height >= 550 && width >= 300 ? false : true);
    setShowEmailForm(isMobile ? false : true);
  }, [width, height]);

  return (
    <div
      tabIndex={0}
      ref={ref}
      className="flex flex-col p-2 items-center rounded-md  justify-evenly w-4/5 h-[88vh] animate-contact my-2 bg-opacity-50 bg-gray-700"
    >
      <div className={`flex flex-row p-4 ${isMobile ? 'h-5/6' : 'gap-4 h-3/4'}  w-full `}>
        <SocialMediaList />
        {showEmailForm && <EmailForm mobile={isMobile} toggle={setShowEmailForm}/>}
      </div>

      {!showEmailForm && (
        <Button onClick={() => setShowEmailForm(true)} type="p">
          Send a Email
        </Button>
      )}
    </div>
  );
});

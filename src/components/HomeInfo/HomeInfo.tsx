import { useEffect, useState } from "react";

export function HomeInfo() {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 24850);
  }, []);

  return (
    <>
      {render && (
        <div className="fixed bg-brand w-[80%] h-[70%] z-50 rounded -ml-[2%] animate-homeIntro self-center justify-self-center"></div>
      )}
    </>
  );
}

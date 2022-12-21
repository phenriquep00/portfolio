import { PropsWithChildren, useEffect, useState } from "react";

type ISocialMediaItem = PropsWithChildren<{
  link: string;
  description: string;
  delay?: number;
}>;

export function SocialMediaItem({
  children,
  link,
  description,
  delay,
}: ISocialMediaItem) {
  const [render, setRender] = useState<boolean>(delay ? false : true);

  useEffect(() => {
    //deley to render
    if (delay) {
      setTimeout(() => {
        setRender(true);
      }, delay * 100);
    };
  }, []);

  return (
    <>
      {render && (
        <li className="flex-1 flex border-2 animate-contactCard border-[#feda4a] max-h-16 bg-black bg-opacity-70 justify-start rounded items-start w-full h-full hover:bg-opacity-100 transition-colors duration-300">
          <a
            href={link}
            target="_blank"
            className="flex flex-1 h-full items-center  flex-row"
          >
            <div className="px-4">{children}</div>
            <p className="flex text-[#feda4a] text-xl font-medium">
              {description}
            </p>
          </a>
        </li>
      )}
    </>
  );
}

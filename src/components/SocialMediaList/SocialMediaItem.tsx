import { PropsWithChildren } from "react";

type ISocialMediaItem = PropsWithChildren<{
  link: string;
  description: string;
}>;

export function SocialMediaItem({
  children,
  link,
  description,
}: ISocialMediaItem) {
  return (
    <li className="flex-1 flex border-2 border-[#feda4a] bg-black bg-opacity-70 justify-start rounded items-start w-full h-full">
      <a
        href={link}
        target="_blank"
        className="flex flex-1 h-full items-center  flex-row"
      >
        <div className="px-4">{children}</div>
        <p className="flex text-[#feda4a] text-xl font-medium">{description}</p>
      </a>
    </li>
  );
}

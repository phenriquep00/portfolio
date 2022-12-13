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
    <li className="flex-1 flex border-2 border-[#feda4a] bg-black justify-start rounded items-start w-full h-full">
      <a href={link} className="flex flex-1 h-full items-center flex-row">
        <div className="px-4">{children}</div>
        <p className=" text-[#feda4a] text-xl font-medium ">{description}</p>
      </a>
    </li>
  );
}

import { PropsWithChildren } from "react";

type LogoProps = PropsWithChildren<{
    img: string;
}>

export function Logo({ img, children }: LogoProps) {
    return (
        <div className="flex flex-row items-center justify-center gap-2">
            <img src={img} alt="profile image" className="w-8 rounded-full mt-2"/>
            <p className="font-semibold text-base">{children}</p>
        </div>
    )
}
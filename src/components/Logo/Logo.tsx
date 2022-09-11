import { PropsWithChildren } from "react";

type LogoProps = PropsWithChildren<{
    img: string;
}>

export function Logo({ img, children }: LogoProps) {
    return (
        <div className="flex flex-row items-center justify-center gap-2 cursor-default text-primary">
            <img src={img} alt="profile image" className="w-8 rounded-full justify-self-center"/>
            <p className="font-semibold text-base">{children}</p>
        </div>
    )
}
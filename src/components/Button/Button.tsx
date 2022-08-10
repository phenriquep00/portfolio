import { PropsWithChildren } from 'react';


type ButtonProps = PropsWithChildren<{
    type: string;
    onClick: any;
}>

export function Button({ children, type, onClick }: ButtonProps) {
    return (
        <div 
            className={
                type.startsWith("p")
                ? // primary button style
                'flex items-center justify-center bg-emerald-500 text-white font-semibold p-2 rounded-md w-fit h-fit hover:cursor-pointer hover:bg-emerald-600 hover:ring-2 ring-offset-1 transition-colors duration-200'
                :
                type.startsWith("s")
                ? // secondary button style
                'flex items-center justify-center border-2 border-emerald-400 text-emerald-400 font-bold p-[6px] rounded-md w-fit h-fit hover:cursor-pointer hover:border-emerald-200 hover:text-emerald-200 transition-colors duration-200'
                :
                type.startsWith("t")
                ? // tertiary button style
                'flex items-center justify-center text-emerald-400 font-semibold p-2 w-fit h-fit hover:cursor-pointer hover:text-emerald-600 transition-colors duration-200'
                :
                ''
            }
        >
            {children}
        </div>
    )
}
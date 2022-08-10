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
                'flex items-center justify-center bg-emerald-700 text-white font-semibold p-2 rounded-md w-fit h-fit hover:cursor-pointer hover:bg-emerald-600 hover:ring-2 ring-offset-1'
                :
                type.startsWith("s")
                ? // secondary button style
                ''
                :
                type.startsWith("t")
                ? // tertiary button style
                ''
                :
                ''
            }
        >
            {children}
        </div>
    )
}
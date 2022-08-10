import { PropsWithChildren } from 'react';


type ButtonProps = PropsWithChildren<{
    type: string;
}>

export function Button({ children, type }: ButtonProps) {
    return(
        <div>
            {children}
        </div>
    )
}
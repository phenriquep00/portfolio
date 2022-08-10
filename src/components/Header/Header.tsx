import { Button } from "../Button/Button";

export function Header() {
    return (
        <header className="flex flex-row justify-start items-center w-full h-[7%] bg-[#2A2338] text-white gap-6 pl-6">
            <p>phenriquep00</p>
            <Button type="t" onClick={null}>github</Button> 
            <Button type="t" onClick={null}>linkedin</Button> 
            <Button type="p" onClick={null}>linkedin</Button> 
            <Button type="s" onClick={null}>linkedin</Button> 

        </header>
    )
}
import { SetStateAction, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Content } from "../../components/Content/Content";
import { Header } from "../../components/Header/Header";

export function HomePage() {

    const [activeContent, setActiveContent] = useState('About Me')
''
    const updateActiveContent = (k: SetStateAction<string>) => {
        setActiveContent(k);
        console.log(k)
    }
    
    return (
        <div className="flex flex-col w-screen h-screen bg-[#2A2338]">
            <Header activeContent={activeContent} updateActiveContent={updateActiveContent}/>
            <Content />
        </div>
    )
}
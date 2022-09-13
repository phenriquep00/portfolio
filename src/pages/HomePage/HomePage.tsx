import { SetStateAction, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Content } from "../../components/Content/Content";
import { Header } from "../../components/Header/Header";

export function HomePage() {

    const [activeContent, setActiveContent] = useState('About Me')

    const updateActiveContent = (k: SetStateAction<string>) => {
        setActiveContent(k);
    }
    
    return (
        <div className="flex flex-col w-screen h-screen bg-primary transition-colors duration-700">
            <Header activeContent={activeContent} updateActiveContent={updateActiveContent}/>
            <Content activeContent={activeContent} updateActiveContent={updateActiveContent}/>
        </div>
    )
}
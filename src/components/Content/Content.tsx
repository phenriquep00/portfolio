import { AboutMe } from "./AboutMe/AboutMe";
import { Contacts } from "./Contacts/Contacts";
import { Projects } from "./Projects/Projects";

interface ContentProps {
    activeContent: string;
    updateActiveContent: any;
}

export function Content({ activeContent, updateActiveContent }: ContentProps) {
    return (
        <div className="flex items-center content-center justify-center flex-1 w-screen h-[93%]">
            {
                activeContent === 'About Me'
                    ?
                    <AboutMe updateActiveContent={updateActiveContent}/>
                    :
                    activeContent === 'Projects'
                        ?
                        <Projects />
                        :
                        <Contacts />
            }
        </div>
    )
}
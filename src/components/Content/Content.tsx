import { AboutMe } from "./AboutMe/AboutMe";
import { Contacts } from "./Contacts/Contacts";
import { Projects } from "./Projects/Projects";

interface ContentProps{
    activeContent: string;
}

export function Content({ activeContent }: ContentProps) {
    return(
        <div className="flex items-center content-center justify-center flex-1">
            {
                activeContent === 'About me'
                ?
                <AboutMe/>
                :
                activeContent === 'Projects'
                ?
                <Projects/>
                :
                <Contacts/>
            }
        </div>
    )
}
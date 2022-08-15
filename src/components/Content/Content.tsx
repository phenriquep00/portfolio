import { AboutMe } from "./AboutMe/AboutMe";
import { Contacts } from "./Contacts/Contacts";
import { Projects } from "./Projects/Projects";

interface ContentProps{
    activeContent: string;
}

export function Content({ activeContent }: ContentProps) {
    return(
        <div>
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
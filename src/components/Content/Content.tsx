import { AboutMe } from "./AboutMe/AboutMe";
import { Contacts } from "./Contacts/Contacts";
import { Projects } from "./Projects/Projects";

export function Content() {
    return(
        <div>
            <AboutMe/>
            <Projects/>
            <Contacts/>
        </div>
    )
}
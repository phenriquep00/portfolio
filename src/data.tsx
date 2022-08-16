// navbar items
export interface NavbarItemsProps {
    id: number;
    title: string;
}

export const navbarItems: NavbarItemsProps[] = [
    {
        id: 0,
        title: 'About Me',
    },
    {
        id: 1,
        title: 'Projects',
    },
    {
        id: 2,
        title: 'Contacts',
    },
]

// projects data
export interface ProjectsProps {
    id: number;
    name: string;
    img: string;
    description: string;
}

export const ProjectsData: ProjectsProps[] = [
    {
        id: 0,
        name: 'test1',
        img: 'test1.png',
        description: 'test1 description',
    }
]
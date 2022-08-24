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
    thumb: string;
}

export const projectsData: ProjectsProps[] = [
    {
        id: 0,
        name: 'test1',
        img: 'test1.png',
        description: 'test1 description',
        thumb: 'thumb.png'
    },
    {
        id: 1,
        name: 'test2',
        img: 'test2.png',
        description: 'test2 description',
        thumb: 'thumb.png'
    },
    {
        id: 2,
        name: 'test3',
        img: 'test3.png',
        description: 'test3 description',
        thumb: 'thumb.png'
    },
    {
        id: 3,
        name: 'test4',
        img: 'test3.png',
        description: 'test3 description',
        thumb: 'thumb.png'
    },
    {
        id: 4,
        name: 'test5',
        img: 'test3.png',
        description: 'test3 description',
        thumb: 'thumb.png'
    },
    {
        id: 5,
        name: 'test6',
        img: 'test3.png',
        description: 'test3 description',
        thumb: 'thumb.png'
    },
    {
        id: 6,
        name: 'test7',
        img: 'test3.png',
        description: 'test3 description',
        thumb: 'thumb.png'
    },
    {
        id: 7,
        name: 'test8',
        img: 'test3.png',
        description: 'test3 description',
        thumb: 'thumb.png'
    },
    {
        id: 8,
        name: 'test9',
        img: 'test3.png',
        description: 'test3 description',
        thumb: 'thumb.png'
    },
]

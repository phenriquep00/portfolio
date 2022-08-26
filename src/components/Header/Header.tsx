import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import { NavbarItem } from "../Navbar/NavbarItem";
import { HeaderMenu } from "./HeaderMenu";
import { navbarItems, NavbarItemsProps } from "../../data";

interface headerProps {
    activeContent: string;
    updateActiveContent: any;
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function Header({ activeContent, updateActiveContent }: headerProps) {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [activeNavbarItem, setActiveNavbarItem] = useState(activeContent)

    const handleNavbarClick = (
        e: React.MouseEvent<HTMLInputElement>
    ) => {
        setActiveNavbarItem(e.currentTarget.innerText)
        updateActiveContent(e.currentTarget.innerText)
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <header className="flex flex-row justify-between w-full h-[7%]  text-white ">
            <div className="flex flex-row gap-4 md:pl-10 pl-4 justify-start items-center">
                <Logo img="https://github.com/phenriquep00.png">
                    {
                        windowDimensions.width > 600 && windowDimensions.height > 800
                            ?
                            <p>phenriquep00</p>
                            :
                            null
                    }
                </Logo>
                <a href="https://github.com/phenriquep00" target={"_blank"}>
                    <Button type="t" onClick={null}>
                        <GithubLogo weight="fill" size={20} className="mr-1" />
                        {
                            windowDimensions.width > 600 && windowDimensions.height > 800
                                ?
                                <p>Github</p>
                                :
                                null
                        }

                    </Button>
                </a>

                <a href="https://www.linkedin.com/in/pedro-lima-255a33223/" target={"_blank"}>
                    <Button type="t" onClick={null}>
                        <LinkedinLogo weight="fill" size={20} className="mr-1" />
                        {
                            windowDimensions.width > 600 && windowDimensions.height > 800
                                ?
                                <p>Linkedin</p>
                                :
                                null
                        }
                    </Button>
                </a>

            </div>

            <div className="flex flex-row gap-4 md:pr-10 pr-4 justify-start items-center">

                {
                    windowDimensions.width > 600 
                        ?
                        (
                            <Navbar>
                                {
                                    navbarItems.map(({ id, title }: NavbarItemsProps) => (
                                        title === activeContent
                                            ?
                                            <NavbarItem active={true} onClick={handleNavbarClick} key={id}>
                                                <p>{title}</p>
                                            </NavbarItem>
                                            :
                                            <NavbarItem active={false} onClick={handleNavbarClick} key={id}>
                                                <p>{title}</p>
                                            </NavbarItem>
                                    ))
                                }
                            </Navbar>
                        )
                        :
                        <HeaderMenu>
                            <div className="flex flex-col gap-4 justify-start items-center">
                                {
                                    navbarItems.map(({ id, title }: NavbarItemsProps) => (
                                        title === activeContent
                                            ?
                                            <NavbarItem active={true} onClick={handleNavbarClick} key={id}>
                                                <p>{title}</p>
                                            </NavbarItem>
                                            :
                                            <NavbarItem active={false} onClick={handleNavbarClick} key={id}>
                                                <p>{title}</p>
                                            </NavbarItem>
                                    ))
                                }
                            </div>
                        </HeaderMenu>
                }
                
            </div>

        </header>
    )
}


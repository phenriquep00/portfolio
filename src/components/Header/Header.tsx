import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import { NavbarItem } from "../Navbar/NavbarItem";
import { HeaderMenu } from "./HeaderMenu";
import { navbarItems, NavbarItemsProps } from "../../data";

export function Header() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [activeNavbarItem, setActiveNavbarItem] = useState('About Me')

    const handleNavbarClick = () => {

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
            </div>

            <div className="flex flex-row gap-4 md:pr-10 pr-4 justify-start items-center">

                {
                    windowDimensions.width > 600 && windowDimensions.height > 800
                        ?
                        (
                            <Navbar >
                                {
                                    navbarItems.map(({ id, title }: NavbarItemsProps) => (
                                        title === activeNavbarItem
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
                            <Navbar >
                                <NavbarItem active={true} onClick={handleNavbarClick}>
                                    <p>About me</p>
                                </NavbarItem>

                                <NavbarItem active={false} onClick={handleNavbarClick}>
                                    <p>Projects</p>
                                </NavbarItem>

                                <NavbarItem active={false} onClick={handleNavbarClick}>
                                    <p>Contacts</p>
                                </NavbarItem>
                            </Navbar>
                        </HeaderMenu>
                }
            </div>

        </header>
    )
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
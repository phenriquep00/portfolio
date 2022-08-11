import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";

export function Header() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

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

            <div className="flex flex-row gap-4 pr-10 justify-start items-center">

                {
                    windowDimensions.width > 600 && windowDimensions.height > 800
                        ?
                        (
                            <div className="flex flex-row gap-4 justify-start items-center">
                                <Button type="t" onClick={null}>
                                    <p>About me</p>
                                </Button>

                                <Button type="t" onClick={null}>
                                    <p>Projects</p>
                                </Button>

                                <Button type="t" onClick={null}>
                                    <p>Contacts</p>
                                </Button>
                            </div>

                        )

                        :
                        null
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
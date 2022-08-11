import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

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
        <header className="flex flex-row justify-start items-center w-full h-[7%] bg-[#2A2338] text-white gap-4 pl-6">
            <p>phenriquep00</p>
            <Button type="t" onClick={null}>
                <GithubLogo weight="fill" size={18} className="mr-1" />
                {
                    windowDimensions.width > 600 && windowDimensions.height > 800
                        ?
                        <p>Github</p>
                        :
                        null
                }

            </Button>

            <Button type="t" onClick={null}>
                <LinkedinLogo weight="fill" size={18} className="mr-1" />
                {
                    windowDimensions.width > 600 && windowDimensions.height > 800
                        ?
                        <p>Linkedin</p>
                        :
                        null
                }
            </Button>

            <Button type="t" onClick={null}>
                <FacebookLogo weight="fill" size={18} className="mr-1" />
                {
                    windowDimensions.width > 600 && windowDimensions.height > 800
                        ?
                        <p>Facebook</p>
                        :
                        null
                }
            </Button>

            <Button type="t" onClick={null}>
                <InstagramLogo weight="fill" size={18} className="mr-1" />
                {
                    windowDimensions.width > 600 && windowDimensions.height > 800
                        ?
                        <p>Instagram</p>
                        :
                        null
                }
            </Button>

            <Button type="t" onClick={null}>
                <TwitterLogo weight="fill" size={18} className="mr-1" />
                {
                    windowDimensions.width > 600 && windowDimensions.height > 800
                        ?
                        <p>Twitter</p>
                        :
                        null
                }
            </Button>
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
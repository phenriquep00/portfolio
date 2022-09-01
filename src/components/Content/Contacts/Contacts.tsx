import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from "phosphor-react";
import { useState } from "react";
import { Card } from "../../Card/Card";

export function Contacts() {


    return (
        <div className="flex flex-col w-full h-full items-center justify-center gap-4 md:text-lg">

            <div className="flex flex-row gap-4 font-medium">
                <Card title={<p className="flex flex-row gap-2"><GithubLogo size={20} /> Github</p>}>
                    Teste
                </Card>
                <Card title={<p className="flex flex-row gap-2"><LinkedinLogo size={20}/> Linkedin</p>}>
                    Teste2
                </Card>
            </div>

            <div className="flex flex-row gap-4 font-medium">
                <Card title={<p className="flex flex-row gap-2"><FacebookLogo size={20}/> Facebook</p>}>
                    Teste
                </Card>
                <Card title={<p className="flex flex-row gap-2"><InstagramLogo size={20}/> Instagram</p>}>
                    Teste2
                </Card>
            </div>

            <div className="flex flex-row gap-4 font-medium">
                <Card title={<p className="flex flex-row gap-2"><TwitterLogo size={20}/> Twitter</p>}>
                    Teste
                </Card>
                <Card title={<p className="flex flex-row gap-2"><WhatsappLogo size={20}/> Whatsapp</p>}>
                    Teste2
                </Card>
            </div>

        </div>
    )
}
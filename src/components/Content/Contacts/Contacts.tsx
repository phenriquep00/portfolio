import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from "phosphor-react";
import { useState } from "react";
import { Card } from "../../Card/Card";

export function Contacts() {


    return (
        <div className="flex flex-col w-full h-full items-center justify-center gap-4">

            <div className="flex flex-row gap-4">
                <Card title={<p className="flex flex-row"><GithubLogo /> Github</p>}>
                    Teste
                </Card>
                <Card title={<p className="flex flex-row"><LinkedinLogo /> Linkedin</p>}>
                    Teste2
                </Card>
            </div>

            <div className="flex flex-row gap-4">
                <Card title={<p className="flex flex-row"><FacebookLogo /> Facebook</p>}>
                    Teste
                </Card>
                <Card title={<p className="flex flex-row"><InstagramLogo /> Instagram</p>}>
                    Teste2
                </Card>
            </div>

            <div className="flex flex-row gap-4">
                <Card title={<p className="flex flex-row"><TwitterLogo /> Twitter</p>}>
                    Teste
                </Card>
                <Card title={<p className="flex flex-row"><WhatsappLogo /> Whatsapp</p>}>
                    Teste2
                </Card>
            </div>

        </div>
    )
}
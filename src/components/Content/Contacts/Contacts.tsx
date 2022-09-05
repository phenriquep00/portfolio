import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from "phosphor-react";
import { useState } from "react";
import { Card } from "../../Card/Card";

export function Contacts() {

    return (
        <div className="flex flex-col w-full h-full items-center justify-center gap-4 md:text-lg">

            <div className="flex flex-row gap-4 font-medium">
                <Card title={<p className="flex flex-row gap-2"><GithubLogo size={20} /> Github</p>}>
                    <p className="text-cyan-600">
                        <a href="https://github.com/phenriquep00" target={"_blank"}>phenriquep00</a>
                    </p>
                </Card>
                <Card title={<p className="flex flex-row gap-2"><LinkedinLogo size={20} /> Linkedin</p>}>
                    <p className="text-cyan-600">
                        <a href="https://www.linkedin.com/in/pedro-lima-255a33223/" target={"_blank"}>Pedro Henrique</a>
                    </p>
                </Card>
            </div>

            <div className="flex flex-row gap-4 font-medium">
                <Card title={<p className="flex flex-row gap-2"><FacebookLogo size={20} /> Facebook</p>}>
                    <p className="text-cyan-600">
                        <a href="https://www.facebook.com/pedro.henriquefonseca.925/" target={"_blank"}>Add me on Facebook</a>
                    </p>
                </Card>
                <Card title={<p className="flex flex-row gap-2"><InstagramLogo size={20} /> Instagram</p>}>
                    <p className="text-cyan-600">
                        <a href="https://www.instagram.com/im.pedrooo/" target={"_blank"}>Follow on Instagram</a>
                    </p>
                </Card>
            </div>

            <div className="flex flex-row gap-4 font-medium">
                <Card title={<p className="flex flex-row gap-2"><TwitterLogo size={20} /> Twitter</p>}>
                    <p className="text-cyan-600">
                        <a href="https://twitter.com/Pedro32977686" target={"_blank"}>Follow on Twitter</a>
                    </p>
                </Card>
                <Card title={<p className="flex flex-row gap-2"><WhatsappLogo size={20} /> Whatsapp</p>}>
                    <p className="text-cyan-600">
                        <a href="https://wa.me/5599981277776" target={"_blank"}>Send a Message in Whatsapp</a>
                    </p>
                </Card>
            </div>

        </div>
    )
}
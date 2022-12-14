import {
  DiscordLogo,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from "phosphor-react";
import { SocialMediaItem } from "./SocialMediaItem";

export function SocialMediaList() {
  return (
    <ul className="flex flex-col gap-4 flex-1 h-full">
      <SocialMediaItem
        description="check out my profile on github"
        link="https://github.com/phenriquep00"
        delay={1}
      >
        <GithubLogo size={32} color="#fff" weight="bold" />
      </SocialMediaItem>

      <SocialMediaItem
        description="here is my linkedin profile"
        link="https://www.linkedin.com/in/pedro-lima-255a33223/"
        delay={2}
      >
        <LinkedinLogo size={32} color="#fff" weight="bold" />
      </SocialMediaItem>

      <SocialMediaItem
        description="let's chat on discord"
        link="https://discordapp.com/users/764296456081244180"
        delay={3}
      >
        <DiscordLogo size={32} color="#fff" weight="bold" />
      </SocialMediaItem>
      
      <SocialMediaItem
        description="fell free to send me a message"
        link="https://wa.me/5599981277776"
        delay={4}
      >
        <WhatsappLogo size={32} color="#fff" weight="bold" />
      </SocialMediaItem>

      <SocialMediaItem
        description="why don't you follow me on instagram?"
        link="https://www.instagram.com/im.pedrooo/"
        delay={5}
      >
        <InstagramLogo size={32} color="#fff" weight="bold" />
      </SocialMediaItem>

      <SocialMediaItem
        description="also folow me on twitter"
        link="https://twitter.com/PedroHe55060838"
        delay={6}
      >
        <TwitterLogo size={32} color="#fff" weight="bold" />
      </SocialMediaItem>

      <SocialMediaItem
        description="doesn't really matter but here is facebook anyway"
        link="https://www.facebook.com/pedro.henriquefonseca.925"
        delay={7}
      >
        <FacebookLogo size={32} color="#fff" weight="bold" />
      </SocialMediaItem>
    </ul>
  );
}

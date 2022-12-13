import { DiscordLogo, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";
import { SocialMediaItem } from "./SocialMediaItem";

export function SocialMediaList() {
  return (
    <ul className="flex flex-col gap-4 flex-1 h-full">
      <SocialMediaItem description="check out my profile on github" link="">
        <GithubLogo size={36} color="#feda4a" weight="bold" />
      </SocialMediaItem>
      <SocialMediaItem description="" link="">
        <LinkedinLogo size={36} color="#feda4a" weight="bold" />
      </SocialMediaItem>
      <SocialMediaItem description="" link="">
      <DiscordLogo size={36} color="#feda4a" weight="bold" />
      </SocialMediaItem>
      <SocialMediaItem description="" link="">
        <InstagramLogo size={36} color="#feda4a" weight="bold" />
      </SocialMediaItem>
      <SocialMediaItem description="" link="">
      <FacebookLogo size={36} color="#feda4a" weight="bold" />
      </SocialMediaItem>
      <SocialMediaItem description="" link="">
      <TwitterLogo size={36} color="#feda4a" weight="bold" />
      </SocialMediaItem>
    </ul>
  );
}

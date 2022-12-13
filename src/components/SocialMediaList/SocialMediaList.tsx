import {
  DiscordLogo,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import { SocialMediaItem } from "./SocialMediaItem";

export function SocialMediaList() {
  return (
    <ul className="flex flex-col gap-4 flex-1 h-full">
      <SocialMediaItem description="check out my profile on github" link="">
        <GithubLogo size={36} color="#feda4a" weight="bold" />
      </SocialMediaItem>
      <SocialMediaItem description="here is my linkedin profile" link="">
        <LinkedinLogo size={36} color="#feda4a" weight="bold" />
      </SocialMediaItem>
      <SocialMediaItem description="let's chat on discord" link="">
        <DiscordLogo size={36} color="#feda4a" weight="bold" />
      </SocialMediaItem>
      <SocialMediaItem description="why don't you follow me on instagram?" link="">
        <InstagramLogo size={36} color="#feda4a" weight="bold" />
      </SocialMediaItem>
      <SocialMediaItem description="" link="">
        <TwitterLogo size={36} color="#feda4a" weight="bold" />
      </SocialMediaItem>
      <SocialMediaItem description="doesn't really matter but here is facebook anyway" link="">
        <FacebookLogo size={36} color="#feda4a" weight="bold" />
      </SocialMediaItem>
      
    </ul>
  );
}

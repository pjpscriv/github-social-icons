import { SocialLink } from "./social-links";

export class Discord extends SocialLink {
    public name: string = "Discord";
    public domain: string = "discord.gg";
    public regex: RegExp = /discord\.gg\/([^\/]+)/;
    public iconUrl: string = "link-icons/discord.svg";
}
import { SocialLink } from "./social-links";

export class Discord extends SocialLink {
    public name: string = "Discord";
    public domain: string = "discord.gg";
    public regex: RegExp = /discord\.gg\/([^\/]+)/;
    public iconUrl: string = "link-icons/discord.svg";

    public getText(text: string): string {
        const match = text.match(this.regex);
        const userName = match ? match[1] : null;

        if (!!userName) {
            return userName;
        }

        return text;
    }
}
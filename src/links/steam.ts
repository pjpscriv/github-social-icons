import { SocialLink } from "./social-links";

export class Steam extends SocialLink {
    public name: string = 'Steam';
    public domain: string = 'steamcommunity.com';
    public regex: RegExp = /steamcommunity\.com\/(id|profiles)\/([^\/]+)/;
    public iconUrl: string = 'link-icons/steam.svg';

    public getText(text: string): string {
        const match = text.match(this.regex);
        const userName = match ? match[2] : null;

        if (!!userName) {
            return userName;
        }

        return text;
    }
}
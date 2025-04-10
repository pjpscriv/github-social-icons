import { SocialLink } from "./social-links";

export class Behance extends SocialLink {
    public name: string = 'Behance';
    public domain: string = 'behance.net';
    public regex: RegExp = /behance\.net\/([^\/]+)/;
    public iconUrl: string = 'icons/behance.svg';

    public getText(text: string): string {
        const match = text.match(this.regex);
        const userName = match ? match[1] : null;

        if (!!userName) {
            return userName;
        }

        return text;
    }
}
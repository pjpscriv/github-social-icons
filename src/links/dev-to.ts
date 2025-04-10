import { SocialLink } from "./social-links";

export class DevTo extends SocialLink {
    public name: string = 'Dev.to';
    public domain: string = 'dev.to';
    public regex: RegExp = /dev\.to\/([^\/]+)/;
    public iconUrl: string = 'icons/dev-to.svg';

    public getText(text: string): string {
        const match = text.match(this.regex);
        const userName = match ? match[1] : null;

        if (!!userName) {
            return userName;
        }

        return text;
    }
}
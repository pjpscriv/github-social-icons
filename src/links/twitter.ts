import { SocialLink } from "./_social-links";

export class Twitter extends SocialLink {
    public name: string = 'Twitter';
    public domain: string = 'twitter.com';
    public regex: RegExp = /twitter\.com\/@?([^\/]+)/;
    public iconUrl: string = 'link-icons/twitter.svg';

    public getText(text: string): string {
        const match = text.match(this.regex);
        const userName = match ? match[1] : null;

        if (!!userName) {
            return `@${userName}`;
        }

        return text;
    }
}

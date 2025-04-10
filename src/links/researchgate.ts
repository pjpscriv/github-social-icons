import { SocialLink } from "./social-links";

export class ResearchGate extends SocialLink {
    public name: string = 'ResearchGate';
    public domain: string = 'researchgate.net';
    public regex: RegExp = /researchgate\.net\/profile\/([^\/]+)/;
    public iconUrl: string = 'link-icons/researchgate.svg';

    public getText(text: string): string {
        const match = text.match(this.regex);
        const userName = match ? match[1] : null;

        if (!!userName) {
            return userName;
        }

        return text;
    }
}
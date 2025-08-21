import { SocialLink } from "./_social-links";

export class TikTok extends SocialLink {
    public name: string = 'TikTok';
    public domain: string = 'tiktok.com';
    public regex: RegExp = /tiktok\.com\/@([^\/]+)/;
    public iconUrl: string = 'link-icons/tiktok.svg';

    public getText(text: string): string {
        const match = text.match(this.regex);
        const userName = match ? match[1] : null;
        
        if (!!userName) {
            return `@${userName}`;
        }
        
        return text;
    }
}
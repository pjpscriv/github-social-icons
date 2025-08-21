import { SocialLink } from "./_social-links";

export class Observable extends SocialLink {
    public name: string = 'Observable';
    public domain: string = 'observablehq.com';
    public regex: RegExp = /observablehq\.com\/@([^\/]+)/;
    public iconUrl: string = 'link-icons/observable.svg';
    
    public getText(text: string): string {
        const match = text.match(this.regex);
        const userName = match ? match[1] : null;
        
        if (!!userName) {
            return `@${userName}`;
        }
        
        return text;
    }
}
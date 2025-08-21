import { SocialLink } from "./_social-links";

export class ResearchGate extends SocialLink {
    public name: string = 'ResearchGate';
    public domain: string = 'researchgate.net';
    public regex: RegExp = /researchgate\.net\/profile\/([^\/]+)/;
    public iconUrl: string = 'link-icons/researchgate.svg';
}
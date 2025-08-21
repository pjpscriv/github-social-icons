import { SocialLink } from "./_social-links";

export class Behance extends SocialLink {
    public name: string = 'Behance';
    public domain: string = 'behance.net';
    public regex: RegExp = /behance\.net\/([^\/]+)/;
    public iconUrl: string = 'link-icons/behance.svg';
}
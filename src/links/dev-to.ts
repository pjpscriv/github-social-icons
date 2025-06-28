import { SocialLink } from "./social-links";

export class DevTo extends SocialLink {
    public name: string = 'Dev.to';
    public domain: string = 'dev.to';
    public regex: RegExp = /dev\.to\/([^\/]+)/;
    public iconUrl: string = 'link-icons/dev-to.svg';
}
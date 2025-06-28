import { SocialLink } from "./social-links";

export class Figma extends SocialLink {
    public name: string = 'Figma';
    public domain: string = 'figma.com';
    public regex: RegExp = /figma\.com\/([^\/]+)/;
    public iconUrl: string = 'link-icons/figma.svg';
}
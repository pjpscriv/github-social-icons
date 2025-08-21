import { SocialLink } from "./_social-links";

export class Pintrest extends SocialLink {
    public name: string = 'Pintrest';
    public domain: string = 'pinterest.com';
    public regex: RegExp = /pinterest\.com\/([^\/]+)/;
    public iconUrl: string = 'link-icons/pintrest.svg';
}
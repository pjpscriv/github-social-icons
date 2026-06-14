import { SocialLink } from "./_social-links";

export class Gravatar extends SocialLink {
    public name: string = 'Gravatar';
    public domain: string = 'gravatar.com';
    public regex: RegExp = /gravatar\.com\/([^\/]+)/;
    public iconUrl: string = 'link-icons/gravatar.svg';
}

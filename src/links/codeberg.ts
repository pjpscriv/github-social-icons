import { SocialLink } from "./_social-links";

export class Codeberg extends SocialLink {
    public name: string = 'Codeberg';
    public domain: string = 'codeberg.org';
    public regex: RegExp = /codeberg\.org\/([^\/]+)/;
    public iconUrl: string = 'link-icons/codeberg.svg';
}

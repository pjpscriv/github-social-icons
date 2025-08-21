import { SocialLink } from "./_social-links";

export class Linktree extends SocialLink {
    public name: string = 'Linktree';
    public domain: string = 'linktr.ee';
    public regex: RegExp = /linktr\.ee\/([^\/]+)/;
    public iconUrl: string = 'link-icons/linktree.svg';
}
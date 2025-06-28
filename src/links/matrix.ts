import { SocialLink } from "./social-links";

export class Matrix extends SocialLink {
    public name: string = 'Matrix';
    public domain: string = 'matrix.to';
    public regex: RegExp = /matrix\.to\/#\/([^\/]+)/;
    public iconUrl: string = 'link-icons/matrix-big.svg';
}
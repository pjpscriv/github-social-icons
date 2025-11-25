import { SocialLink } from "./_social-links";

export class Medium extends SocialLink {
  public name: string = 'Medium';
  public domain: string = 'medium.com'
  public regex: RegExp = /medium\.com\/([^\/]+)/;
  public iconUrl: string = 'link-icons/medium.svg';
}
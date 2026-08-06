import { SocialLink } from "./_social-links";

export class Tangled extends SocialLink {
  public name: string = 'Tangled';
  public domain: string = 'tangled.org';
  public regex: RegExp = /tangled\.org\/([^\/]+)/;
  public iconUrl: string = 'link-icons/tangled.svg';

  public getText(text: string): string {
    const match = text.match(this.regex);
    const userName = match ? match[1] : null;

    if (!!userName) {
      return userName.startsWith('did:') ? userName : `@${userName}`;
    }

    return text;
  }
}

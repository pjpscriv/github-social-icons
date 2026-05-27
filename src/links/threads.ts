import { SocialLink } from "./_social-links";

export class Threads extends SocialLink {
    public name: string = 'Threads';
    public domain: string = 'threads.net';
    public secondaryDomain: string = 'threads.com';
    public regex: RegExp = /threads\.(net|com)\/@([^\/]+)/;
    public iconUrl: string = 'link-icons/threads.svg';

    public override appliesTo(linkEl: HTMLAnchorElement): boolean {
      return super.appliesTo(linkEl) || linkEl.href.includes(this.secondaryDomain);
    }

    public getText(text: string): string {
      const match = text.match(this.regex);
      const userName = match ? match[2] : null;

      if (!!userName) {
        return `@${userName}`;
      }

      return text;
    }
  }
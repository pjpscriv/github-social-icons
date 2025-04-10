import { SocialLink } from "./social-links";

export class Threads extends SocialLink {
    public name: string = 'Threads';
    public domain: string = 'threads.net';
    public regex: RegExp = /threads\.net\/@([^\/]+)/;
    public iconUrl: string = 'icons/threads.svg';

    public getText(text: string): string {
      const match = text.match(this.regex);
      const userName = match ? match[1] : null;

      if (!!userName) {
        return `@${userName}`;
      }

      return text;
    }
  }
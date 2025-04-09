import { SocialLink } from "./social-links";

export class StackOverflow extends SocialLink {
    public name: string = 'StackOverflow';
    public domain: string = 'stackoverflow.com';
    public regex: RegExp = /stackoverflow\.com\/(?:users|u)\/(\d+)(?:\/([^\/]+))?/;
    public iconUrl: string = 'icons/stackoverflow.svg';
  
    public getText(text: string): string {
      const match = text.match(this.regex);
      const userId = match ? match[1] : null;
      const userName = match && match[2] ? match[2] : null;

      if (!!userName && !!userId) {
        return `${userName}`;
      } else if (!!userId) {
        return `user:${userId}`;
      }

      return text;
    }
  }
  
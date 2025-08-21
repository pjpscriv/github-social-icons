import { SocialLink } from "./_social-links";

export class Telegram extends SocialLink {
    public name: string = 'Telegram';
    public domain: string = 't.me';
    public secondaryDomain = 'telegram.me';
    public regex: RegExp = /(t\.me|telegram\.me)\/([^\/]+)/;
    public iconUrl: string = 'link-icons/telegram.svg';

    public override appliesTo(linkEl: HTMLAnchorElement): boolean {
        return super.appliesTo(linkEl) || linkEl.href.includes(this.secondaryDomain);
    }

    public getText(text: string): string {
      const match = text.match(this.regex);
      const userName = match ? match[2] : null;

      if (!!userName) {
        return userName;
      }

      return text;
    }
}
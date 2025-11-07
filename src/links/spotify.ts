import { SocialLink } from "./_social-links";

export class Spotify extends SocialLink {
    public name: string = 'Spotify';
    public domain: string = 'spotify.com';
    public regex: RegExp = /spotify\.com\/(user|artist|album|track)\/([^\/]+)/;
    public iconUrl: string = 'link-icons/spotify.svg';

    public getText(text: string): string {
      const match = text.match(this.regex);
      const entityType = match ? match[1] : null;
      const entityId = match ? match[2] : null;

      if (entityType && entityId) {
        return `${entityType}/${entityId}`;
      }

      return text;
    }
}
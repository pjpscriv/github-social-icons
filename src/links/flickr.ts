import { SocialLink } from './social-links';

export class Flickr extends SocialLink {
    public name: string = 'Flickr';
    public domain: string = 'flickr.com';
    public regex: RegExp = /flickr\.com\/(people|photos)\/([^\/]+)/;
    public iconUrl: string = 'link-icons/flickr.svg';

    public getText(text: string): string {
        const match = text.match(this.regex);
        const userName = match ? match[2] : null;

        if (!!userName) {
            return userName;
        }

        return text;
    }
}

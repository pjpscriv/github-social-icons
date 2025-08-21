import { SocialLink } from "./_social-links";

export class ItchIo extends SocialLink {
    public name: string = 'Itch.io';
    public domain: string = 'itch.io';
    public regex: RegExp = /http(s?):\/\/([^\/]+itch\.io)/;
    public iconUrl: string = 'link-icons/itch-io.svg';

    public getText(text: string): string {
        const match = text.match(this.regex);
        const userName = match ? match[2] : null;

        if (!!userName) {
            return userName;
        }

        return text;
    }
}
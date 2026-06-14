import { SocialLink } from "./_social-links";

export class Farcaster extends SocialLink {
    public name: string = 'Farcaster';
    public domain: string = 'farcaster.xyz';
    public secondaryDomain: string = 'warpcast.com';
    public regex: RegExp = /(?:farcaster\.xyz|warpcast\.com)\/([^\/]+)/;
    public iconUrl: string = 'link-icons/farcaster.svg';

    public override appliesTo(linkEl: HTMLAnchorElement): boolean {
        return super.appliesTo(linkEl) || linkEl.href.includes(this.secondaryDomain);
    }
}

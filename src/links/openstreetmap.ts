import { SocialLink } from "./_social-links";

export class OpenStreetMap extends SocialLink {
    public name: string = 'OpenStreetMap';
    public domain: string = 'openstreetmap.org';
    public secondaryDomain: string = 'osm.org';
    public regex: RegExp = /(?:openstreetmap\.org|osm\.org)\/user\/([^\/]+)/;
    public iconUrl: string = 'link-icons/openstreetmap.svg';

    public override appliesTo(linkEl: HTMLAnchorElement): boolean {
        return super.appliesTo(linkEl) || linkEl.href.includes(this.secondaryDomain);
    }
}

import { SocialLink } from "./_social-links";

export class NuGet extends SocialLink {
    public name: string = 'NuGet';
    public domain: string = 'nuget.org';
    public regex: RegExp = /nuget\.org\/profiles\/([^\/]+)/;
    public iconUrl: string = 'link-icons/nuget.svg';
}

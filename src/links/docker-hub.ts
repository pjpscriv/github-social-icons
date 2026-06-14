import { SocialLink } from "./_social-links";

export class DockerHub extends SocialLink {
    public name: string = 'DockerHub';
    public domain: string = 'hub.docker.com';
    public regex: RegExp = /hub\.docker\.com\/u\/([^\/]+)/;
    public iconUrl: string = 'link-icons/docker.svg';
}

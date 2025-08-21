import { SocialLink } from './_social-links';
import { Observable } from './observable';
import { StackOverflow } from './stackoverflow';
import { Telegram } from './telegram';
import { Threads } from './threads';
import { Steam } from './steam';
import { Behance } from './behance';
import { Figma } from './figma';
import { ResearchGate } from './researchgate';
import { DevTo } from './dev-to';
import { Discord } from './discord';
import { Flickr } from './flickr';
import { Matrix } from './matrix';
import { TikTok } from './tiktok';
import { Pintrest } from './pintrest';
import { ItchIo } from './itch-io';
import { Linktree } from './linktree';

export const SOCIAL_LINKS: SocialLink[] = [
    new StackOverflow(),
    new Observable(),
    new Telegram(),
    new Threads(),
    new Steam(),
    new Behance(),
    new Figma(),
    new ResearchGate(),
    new DevTo(),
    new Discord(),
    new Flickr(),
    new Matrix(),
    new TikTok(),
    new Pintrest(),
    new ItchIo(),
    new Linktree(),
];
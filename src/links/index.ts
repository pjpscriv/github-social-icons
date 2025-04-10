import { SocialLink } from './social-links';
import { Observable } from './observable';
import { StackOverflow } from './stackoverflow';
import { Telegram } from './telegram';
import { Threads } from './threads';
import { Steam } from './steam';
import { Behance } from './behance';
import { Figma } from './figma';
import { ResearchGate } from './researchgate';
import { DevTo } from './dev-to';

export const SOCIAL_LINKS: SocialLink[] = [
    new StackOverflow(),
    new Observable(),
    new Telegram(),
    new Threads(),
    new Steam(),
    new Behance(),
    new Figma(),
    new ResearchGate(),
    new DevTo()
];
import { logger } from './logger';
import { LINK_SELECTOR, SOCIAL_LINK_SELECTOR } from './selectors';
import { SocialLink } from './links/social-links';
import { Observable } from './links/observable';
import { StackOverflow } from './links/stackoverflow';
import { Telegram } from './links/telegram';
import { Threads } from './links/threads';
import { Steam } from './links/steam';

export const socialLinks: SocialLink[] = [
  new StackOverflow(),
  new Observable(),
  new Telegram(),
  new Threads(),
  new Steam(),
];

function prettifyLinks() {
  const links = document.querySelectorAll(SOCIAL_LINK_SELECTOR);
  
  links.forEach((link: Element) => {
    const linkEl: HTMLAnchorElement = link.querySelector(LINK_SELECTOR);
    socialLinks.forEach((social: SocialLink) => {
      if (social.appliesTo(linkEl)) {
        social.transformItem(link);
      }
    });
  });
}


function onLoaded(): void {
  // Run for first time
  logger.log("Run on first load")
  prettifyLinks();
  
  // Set up URL change listener
  let lastURL = window.location.href;
  const observer = new MutationObserver(() => {
    if (window.location.href === lastURL) { return; }
    
    lastURL = window.location.href;
    logger.log("URL chaged, re-running");
    prettifyLinks();
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
}

onLoaded();

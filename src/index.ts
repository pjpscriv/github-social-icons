import { logger } from './logger';
import { LINK_SELECTOR, SOCIAL_LINK_SELECTOR } from './selectors';
import { SocialLink } from './links/social-links';
import { Observable } from './links/observable';
import { StackOverflow } from './links/stackoverflow';

export const socialLinks: SocialLink[] = [
  new StackOverflow(),
  new Observable()
];

function prettifyLinks() {
  const links = document.querySelectorAll(SOCIAL_LINK_SELECTOR);
  
  links?.forEach((link: Element) => {
    const linkEl: HTMLAnchorElement  = link.querySelector(LINK_SELECTOR);
    socialLinks.forEach((social: SocialLink) => {
      if (linkEl.href.includes(social.domain)) {
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

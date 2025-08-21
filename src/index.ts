import { logger } from './logger';
import { LINK_SELECTOR, SOCIAL_LINK_SELECTOR } from './selectors';
import { SocialLink } from './links/_social-links';
import { SOCIAL_LINKS } from './links/_index';

function prettifyLinks() {
  const links = document.querySelectorAll(SOCIAL_LINK_SELECTOR);
  
  links.forEach((link: Element) => {
    const linkEl: HTMLAnchorElement = link.querySelector(LINK_SELECTOR);
    SOCIAL_LINKS.forEach((social: SocialLink) => {
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

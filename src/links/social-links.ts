import { logger } from "../logger";
import { LINK_SELECTOR, SVG_SELECTOR } from "../selectors";
import { StackOverflow } from "./stackoverflow";

export abstract class SocialLink {
  name: string;
  domain: string;
  regex: RegExp;
  iconUrl: string;

  abstract getText(el: any): string;

  transformItem(el: Element): void {
    // Get parts of the link
    const svgEl = el.querySelector(SVG_SELECTOR);
    const linkEl = el.querySelector(LINK_SELECTOR)
    
    // Transform SVG
    const svgUrl = chrome.runtime.getURL(this.iconUrl);
    fetch(svgUrl).then((response) => {
      response.text().then((svg) => {
        logger.log(`GotSvg: ${svg}`);
        svgEl.innerHTML = svg;
      });
    });

    // Transform text
    if (!!linkEl) {
        const text = this.getText(linkEl.innerHTML);
        linkEl.innerHTML = text;
    }
  }
}

export const socialLinks: SocialLink[] = [
  new StackOverflow()
]

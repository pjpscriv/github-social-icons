import { logger } from "../logger";
import { LINK_SELECTOR, SVG_SELECTOR } from "../selectors";

export abstract class SocialLink {
    name: string;
    domain: string;
    regex: RegExp;
    iconUrl: string;
    
    // Default implementation - can be overridden if required
    getText(text: string): string {
        const match = text.match(this.regex);
        const userName = match ? match[1] : null;

        if (!!userName) {
            return userName;
        }

        return text;
    }
    
    appliesTo(linkEl: HTMLAnchorElement): boolean {
        return linkEl.href.includes(this.domain);
    }
    
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

import { browser, expect } from '@wdio/globals'

class ThreedotsMenu {

    get ThreeDotsBtn () {
        return $('[data-test-id="toggle-overflow--md"]');
    }
    get ThreeDotsOpened () {
        return $('//*[@data-test-id="overflow-list"]');
    }
    get MenuContainer () {
         return $('aside[data-test-id="sidebar-overflow--md"] ul')
    }

    async RSLpage () {
        return browser.url('https://www.rsl.com/schedule/');
    }

    async ThreeDotsMenuOpen () {
        await this.ThreeDotsBtn.click();
        await expect(this.ThreeDotsOpened).toExist();
        await browser.pause(2000);
    }

    async HoverOverListItems () {
        await expect(this.MenuContainer).toExist();
        await this.MenuContainer.moveTo();
            for (let i = 0; i < 6; i++) { // 6 items in the menu
                await this.MenuContainer.$('li:nth-child(' + (i + 1) + ')').moveTo();
                await browser.pause(1000);
            }
            await this.MenuContainer.$('li:last-child').click();
            await expect (browser).toHaveTitle('Youth | Real Salt Lake')
    }

}

export default new ThreedotsMenu();

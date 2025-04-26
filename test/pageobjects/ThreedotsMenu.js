import { browser, expect } from '@wdio/globals'

class ThreedotsMenu {

    get ThreeDotsBtn () {
        return $('[data-test-id="toggle-overflow--md"]');
    }
    get ThreeDotsOpened () {
        return $('//*[@data-test-id="overflow-list"]');
    }

    async RSLpage () {
        return browser.url('https://www.rsl.com/schedule/');
    }

    async ThreeDotsMenuOpen () {
        await this.ThreeDotsBtn.click();
        await expect(this.ThreeDotsOpened).toExist();
        await browser.pause(2000);
    }

}

export default new ThreedotsMenu();

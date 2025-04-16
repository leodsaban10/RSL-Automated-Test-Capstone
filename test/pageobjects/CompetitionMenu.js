import { expect } from '@wdio/globals'


class AllCompetitionsDropdownMenu { 
    get inputUsername () {
        return $('#username');
    }

    async RSLSchedulePage () {
        await browser.url('https://www.rsl.com/schedule/');
        await expect(browser).toHaveTitle('Schedule | Real Salt Lake');
    }
}

export default new AllCompetitionsDropdownMenu();

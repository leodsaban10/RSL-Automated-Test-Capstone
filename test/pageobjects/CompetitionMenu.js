import { expect } from '@wdio/globals'


class AllCompetitionsDropdownMenu { 
    get AllcompetitionBtn () {
        return $('//*[@title="Competitions"]');
    }

    async RSLSchedulePage () {
        await browser.url('https://www.rsl.com/schedule/');
        await expect(browser).toHaveTitle('Schedule | Real Salt Lake');
    }
    async ClickAllCompetitionsBtn () {
        await this.AllcompetitionBtn.click();;
    }
}

export default new AllCompetitionsDropdownMenu();

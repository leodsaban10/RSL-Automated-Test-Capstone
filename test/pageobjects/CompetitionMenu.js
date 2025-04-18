import { browser, expect } from '@wdio/globals'


class AllCompetitionsDropdownMenu { 
    get AllcompetitionBtn () {
        return $('//*[@class="mls-o-buttons__dropdown-button mls-o-buttons__dropdown-button--right "]');
    }
    get Competitions () {
        return $$('//*[@class="mls-o-buttons__dropdown-item"]');
    }
    get AllCompetitionList () {
        return $('//*[@value="all"]');
    }

    async RSLSchedulePage () {
        await browser.url('https://www.rsl.com/schedule/');
        await expect(browser).toHaveTitle('Schedule | Real Salt Lake');
    }
    async ClickAllCompetitionsBtn () {
        await this.AllcompetitionBtn.click();
        await expect(this.Competitions).toBeElementsArrayOfSize({ gte: 16 });
    }
    //create the hover all competitions function
    async HoverAllCompetitions () {
        await this.AllcompetitionBtn.moveTo();
        await expect(this.Competitions).toBeElementsArrayOfSize({ gte: 16 });
        await browser.pause(7000);
        await this.AllcompetitionBtn.click();
    }
}

export default new AllCompetitionsDropdownMenu();

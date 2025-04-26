import { browser, expect } from '@wdio/globals'
// Done

class DropdownMenu { 
    get AllcompetitionBtn () {
        return $('//*[@class="mls-o-buttons__dropdown-button mls-o-buttons__dropdown-button--right "]');
    }
    get LastTournament () {
        return $('//option[text()="CONCACAF Nations League"]');
    }


    async RSLSchedulePage () {
        await browser.url('https://www.rsl.com/schedule/');
        await expect(browser).toHaveTitle('Schedule | Real Salt Lake');
    }
    async ClickAllCompetitionsBtn () {
        await this.AllcompetitionBtn.click();
        for (let i = 0; i < 16; i++) { // 16 is the number of tournaments in the dropdown
            await browser.performActions([{
                type: 'key',
                id: 'keyboard',
                actions: [
                  { type: 'keyDown', value: '\uE015' },
                  { type: 'keyUp', value: '\uE015' }
                ]
              }]);
            await browser.pause(500); // Pause for 1 second between each action
            await expect(this.LastTournament).toHaveText('CONCACAF Nations League');
        }
    }
}

export default new DropdownMenu();

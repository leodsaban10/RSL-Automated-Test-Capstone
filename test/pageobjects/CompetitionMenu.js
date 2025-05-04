import { browser, expect } from '@wdio/globals'
import RSLLink from './Url.js';


class DropdownMenu extends RSLLink { 
    get AllcompetitionBtn () {
        return $('//*[@class="mls-o-buttons__dropdown-button mls-o-buttons__dropdown-button--right "]');
    }
    get FirstTournament () {
        return $('//option[text()="All Competitions"]');
    }
    get SecondTournament () {
        return $('//option[text()="Major League Soccer - Regular Season"]');
    }
    get ThirdTournament () {
        return $('//option[text()="Major League Soccer - Cup Playoffs"]');
    }
    get FourthTournament () {
        return $('//option[text()="MLS NEXT Pro - Regular Season"]');
    }
    get FifthTournament () {
        return $('//option[text()="MLS NEXT Pro - Playoffs"]');
    }
    get SixthTournament () {
        return $('//option[text()="MLS All-Star Game"]');
    }
    get SeventhTournament () {
        return $('//option[text()="Leagues Cup"]');
    }
    get EithTournament () {
        return $('//option[text()="Campeones Cup"]');
    }
    get NinethTournament () {
        return $('//option[text()="CONCACAF Champions Cup"]');
    }
    get TenthTournament () {
        return $('//option[text()="Club Friendly Matches"]');
    }
    get EleventhTournament () {
        return $('//option[text()="U.S. Open Cup"]');
    }
    get TwelvethTournament () {
        return $('//option[text()="Canadian Championship"]');
    }
    get ThirteenthTournament () {
        return $('//option[text()="Copa America"]');
    }
    get FourteenthTournament () {
        return $('//option[text()="MLS NEXT Pro Invitational"]');
    }
    get FiftheenthTournament () {
        return $('//option[text()="FIFA Club World Cup"]');
    }
    get SixteenthTournament () {
        return $('//option[text()="CONCACAF Nations League"]');
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
            await expect(this.FirstTournament).toHaveText('All Competitions');
            await expect(this.SecondTournament).toHaveText('Major League Soccer - Regular Season');
            await expect(this.ThirdTournament).toHaveText('Major League Soccer - Cup Playoffs');
            await expect(this.FourthTournament).toHaveText('MLS NEXT Pro - Regular Season');
            await expect(this.FifthTournament).toHaveText('MLS NEXT Pro - Playoffs');
            await expect(this.SixthTournament).toHaveText('MLS All-Star Game');
            await expect(this.SeventhTournament).toHaveText('Leagues Cup');
            await expect(this.EithTournament).toHaveText('Campeones Cup');
            await expect(this.NinethTournament).toHaveText('CONCACAF Champions Cup');
            await expect(this.TenthTournament).toHaveText('Club Friendly Matches');
            await expect(this.EleventhTournament).toHaveText('U.S. Open Cup');
            await expect(this.TwelvethTournament).toHaveText('Canadian Championship');
            await expect(this.ThirteenthTournament).toHaveText('Copa America');
            await expect(this.FourteenthTournament).toHaveText('MLS NEXT Pro Invitational');
            await expect(this.FiftheenthTournament).toHaveText('FIFA Club World Cup');
            await expect(this.SixteenthTournament).toHaveText('CONCACAF Nations League');
        }
    }
    open() {
        return super.open('schedule');
    }
}

export default new DropdownMenu();

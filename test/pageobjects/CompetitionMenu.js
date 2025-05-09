import { expect } from '@wdio/globals'
import RSLLink from './Base.js';


class DropdownMenu extends RSLLink { 

    get AllcompetitionBtn () {
        return $('//*[@title="Competitions"]');
    }    

    TournamentSelectors (tournamentNames) {
        return $(`//option[text()="${tournamentNames}"]`);
    }

    

    async ClickAllCompetitionsBtn () {
        await this.AllcompetitionBtn.waitForDisplayed({ timeout: 5000 });  
        await this.AllcompetitionBtn.scrollIntoView();
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
            let competitionNames = ['All Competitions', 'Major League Soccer - Regular Season', 'Major League Soccer - Cup Playoffs', 'MLS NEXT Pro - Regular Season',
            'MLS NEXT Pro - Playoffs', 'MLS All-Star Game', 'Leagues Cup', 'Campeones Cup', 'CONCACAF Champions Cup', 'Club Friendly Matches',
             'U.S. Open Cup', 'Canadian Championship', 'Copa America', 'MLS NEXT Pro Invitational', 'FIFA Club World Cup', 'CONCACAF Nations League'];
  
            await this.AllcompetitionBtn.scrollIntoView();
            await this.AllcompetitionBtn.waitForDisplayed({ timeout: 5000 });     
            for (let i = 0; i < competitionNames.length; i++) {
                await expect(this.TournamentSelectors(competitionNames[i])).toHaveText(competitionNames[i]);
            }

        }
    }

    goToSchedule () {
        return this.destination('schedule');
    }

}

export default new DropdownMenu();

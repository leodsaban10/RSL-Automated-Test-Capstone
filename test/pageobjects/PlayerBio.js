import { expect } from '@wdio/globals'; 

class Player {

    get RafaelCard () {
        return $('//*[@id="rafael-cabral-roster"]');
    }
    
    get RafaelCardName () {
        return $('//*[@aria-label="Learn More About Rafael! "]');
    }

    get RafaelCardHeader () {
        return $('//h2[contains(text(), "#1 - Rafael Cabral")]');
    }

    async RSLHomepage () {
        return browser.url('https://www.rsl.com/club/roster');
    }
    
    async Rafael () {
        await expect (this.RafaelCard).toExist();
        await expect(this.RafaelCardHeader).toHaveText('#1 - Rafael Cabral');
        await this.RafaelCardName.click();
        await expect(browser).toHaveTitle('Rafael Cabral | Real Salt Lake');
    }
//I need to do the Audio Controls (play) button for Rafael Cabral. 
}

export default new Player();

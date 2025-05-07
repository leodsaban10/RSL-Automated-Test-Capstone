import { expect } from '@wdio/globals'; 
import RSLLink from './Base.js';


class Player extends RSLLink {

    get RafaelCard () {
        return $('//*[@id="rafael-cabral-roster"]');
    }

    async Rafael() {

        const text = await this.RafaelCard.getText();
            await expect(text).toContain('#1 - Rafael Cabral');
            await expect(text).toContain('Goalkeeper');
            await expect(text).toContain('Learn More About Rafael!');

            const learnMoreBtn = await this.RafaelCard.$('.//*[contains(text(), "Learn More About Rafael!")]');
            await learnMoreBtn.click();
            await expect(browser).toHaveTitle('Rafael Cabral | Real Salt Lake');
}
    

Destination() {
        return super.open('club/roster');
    }
}

export default new Player();

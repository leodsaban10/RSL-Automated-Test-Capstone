import { browser, expect} from @wdio/globals';
import RSLLink from './Base.js';

class UtahRoyals extends RSLLink {

    get UtahRoyalsBtn () {
        return $('//button[@aria-label="Utah Royals FC"]');
    }

    async clickUtahRoyalsButton() {
        await this.UtahRoyalsBtn.click();
        await expect(this.UtahRoyalsBtn).toBeDisplayed();
    }
}
export default new UtahRoyals();
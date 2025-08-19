import UtahRoyals from "../pageobjects/UtahRoyals";

describe('Should Test the Utah Royals Nav Button', () => {  
    it('Should click the Utah Royals Button and verify it is displayed', async () => {
        await UtahRoyals.clickUtahRoyalsButton();
    });
})
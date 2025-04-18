import Player from "../pageobjects/PlayerBio.js"

describe('Open the Profile for Rafael Cabral', () => {
    it('should display the Player Card, Header Text with Rafael Name, and click on Learn More About Rafael Button', async () => {
        await Player.RSLHomepage()
        await Player.Rafael()
    })
})
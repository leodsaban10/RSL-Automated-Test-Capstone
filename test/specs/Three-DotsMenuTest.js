import ThreedotsMenu from "../pageobjects/ThreedotsMenu"

describe('Three Dots Menu is Clickable', () => {
    it('should open the Three Dot Menu', async () => {
        await ThreedotsMenu.RSLpage()
        await ThreedotsMenu.ThreeDotsMenuOpen()
    })
})
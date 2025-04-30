import ThreedotsMenu from "../pageobjects/ThreedotsMenu"

describe('Three Dots Menu is Clickable', () => {
    it('should open the Three Dot Menu and Hover over list items', async () => {
        await ThreedotsMenu.RSLpage()
        await ThreedotsMenu.ThreeDotsMenuOpen()
        await ThreedotsMenu.HoverOverListItems()
    })
})
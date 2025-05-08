import DropdownMenu from '../pageobjects/CompetitionMenu.js'

describe('All Competition Dropdown Menu', () => {
    it('should open the Schedule Page and click on the All Competitions Dropdown Button to review the items', async () => {
        await DropdownMenu.goToSchedule()
        await DropdownMenu.ClickAllCompetitionsBtn()
    })
})


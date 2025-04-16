import AllCompetitionsDropdownMenu from '../pageobjects/CompetitionMenu.js'

describe('All Competition Dropdown Menu', () => {
    it('should open the Schedule Page and click on the All Competitions Dropdown Button', async () => {
        await AllCompetitionsDropdownMenu.RSLSchedulePage()
        await AllCompetitionsDropdownMenu.ClickAllCompetitionsBtn()
    })
})
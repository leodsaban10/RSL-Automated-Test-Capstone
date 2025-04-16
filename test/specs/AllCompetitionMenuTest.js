import AllCompetitionsDropdownMenu from '../pageobjects/CompetitionMenu.js'

describe('All Competition Dropdown Menu', () => {
    it('should open the Schedule Page', async () => {
        await AllCompetitionsDropdownMenu.RSLSchedulePage()
    })
})
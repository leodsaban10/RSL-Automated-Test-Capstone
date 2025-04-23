import CalendarUse from "../pageobjects/Calendar"

describe('Should Open the Calendar', () => {
    it('should  open the calendar and view the Month and Year 2025', async () => {
        await CalendarUse.RSLSchedulePage()
        await CalendarUse.CalendarOpen()
    })
})


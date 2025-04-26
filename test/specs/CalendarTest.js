import CalendarUse from "../pageobjects/Calendar"

describe('Should Open the Calendar', () => {
    it('should  open the calendar and test the Month Arrows', async () => {
        await CalendarUse.RSLSchedulePage()
        await CalendarUse.CalendarOpen()
        await CalendarUse.PreviousMonth()
        await CalendarUse.NextMonth()
        await CalendarUse.DisabledArrowBtn()
    })
})


import CalendarUse from "../pageobjects/Calendar"

describe('Should Test the Calendar Year', () => {
    it('Should click the Calendar Year Arrows', async () => {
        await CalendarUse.RSLSchedulePage()
        await CalendarUse.PreviousYearArrow()
        await CalendarUse.NextYearArrow()
        await CalendarUse.DisabledArrowYearBtn()
    })
})

describe('Should Open the Calendar', () => {
    it('should  open the calendar and test the Month Arrows', async () => {
        await CalendarUse.RSLSchedulePage()
        await CalendarUse.CalendarOpen()
        await CalendarUse.PreviousMonthArrow()
        await CalendarUse.NextMonthArrow()
        await CalendarUse.DisabledArrowMonthBtn()
    })
})


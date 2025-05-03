import CalendarUse from "../pageobjects/Calendar"

describe('Should Test the Calendar Year', () => {
    it('Should click the Calendar Year Arrows, and the Next Arrow is Disabled after year 2025', async () => {
        await CalendarUse.open()
        await CalendarUse.PreviousYearArrow()
        await CalendarUse.NextYearArrow()
        await CalendarUse.DisabledArrowYearBtn()
    })
})

describe('Should Open the Calendar', () => {
    it('should  open the Calendar read the month and year and test the Month Arrows, and the Next Arrow is Disabled after current month', async () => {
        await CalendarUse.open()
        await CalendarUse.CalendarOpen()
        await CalendarUse.PreviousMonthArrow()
        await CalendarUse.NextMonthArrow()
        await CalendarUse.DisabledArrowMonthBtn()
    })
})

describe('Should Test the Calendar Year', () => {   
    it('Should test the Today Button', async () => {
        await CalendarUse.open()
        await CalendarUse.TodayButton()
    })
})


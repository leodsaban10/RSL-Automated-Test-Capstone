import { browser, expect } from '@wdio/globals'


class CalendarUse {

    get CalendarYear () {
        return $('//*[@aria-label="Date selector"]');
    }
    
    get TodayText () {
        return $('//button[text()="Today"]');
    }
    get MonthYearHeader () {
        return $('//*[@class="mls-o-calendar__title"]');
    }
    get PreviousMonthYearArrowBtn () {
        return $('//button[@class="mls-o-calendar__prev-month"]');
    }
    get NextMonthYearArrowBtn () {
        return $('//button[@class="mls-o-calendar__next-month"]');
    }

    async RSLSchedulePage () {
        await browser.url('https://www.rsl.com/schedule/');
        await expect(browser).toHaveTitle('Schedule | Real Salt Lake');
    }

    async CalendarOpen () {
        await this.CalendarYear.click();
        // await expect (this.TodayText).toHaveText('Today');
        const monthHeaderText = await this.MonthYearHeader.getText();
        await expect(monthHeaderText).toContain('April 2025');
    }

    async PreviousMonthYear () {
        await this.PreviousMonthYearArrowBtn.click();
        const monthHeaderText = await this.MonthYearHeader.getText();
        await expect(monthHeaderText).toContain('March 2025');
    }

    async NextMonthYear () {
        await this.NextMonthYearArrowBtn.click();
        const monthHeaderText = await this.MonthYearHeader.getText();
        await expect(monthHeaderText).toContain('April 2025');
    }

}

export default new CalendarUse();
 
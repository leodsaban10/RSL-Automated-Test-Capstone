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

    async PreviousMonthYear (times = 6) {// times = 6
        // await this.PreviousMonthYearArrowBtn.click();
        for (let i = 0; i < times; i++) {
            await this.PreviousMonthYearArrowBtn.click();
        }
        await browser.pause(500);
        const monthHeaderText = await this.MonthYearHeader.getText();
        await expect(monthHeaderText).toContain('');
    }

    async NextMonthYear ( times = 6) {
        // await this.NextMonthYearArrowBtn.click();
            for (let i = 0; i < times; i++) {
                await this.NextMonthYearArrowBtn.click();
        }
        await browser.pause(500);
        const monthHeaderText = await this.MonthYearHeader.getText();
        await expect(monthHeaderText).toContain('April 2025');
    }

    async DisabledArrowBtn (times = 10) {
        for (let i = 0; i < times; i++) {
            await this.NextMonthYearArrowBtn.click();
    }
        const isEnabled = await this.NextMonthYearArrowBtn.getAttribute('disabled');
        if (isEnabled === 'true') {
            console.log('Next month arrow button is Disabled');
        } else {
            console.log('Next month arrow button is Enabled');
        }
    }

}

export default new CalendarUse();
 
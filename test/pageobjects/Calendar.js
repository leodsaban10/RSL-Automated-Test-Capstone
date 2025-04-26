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
    get PreviousMonthArrowBtn () {
        return $('//button[@class="mls-o-calendar__prev-month"]');
    }
    get NextMonthArrowBtn () {
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

    async PreviousMonth (times = 6) {// times = 6
        // await this.PreviousMonthYearArrowBtn.click();
        for (let i = 0; i < times; i++) {
            await this.PreviousMonthArrowBtn.click();
        }
        await browser.pause(500);
        const monthHeaderText = await this.MonthYearHeader.getText();
        await expect(monthHeaderText).toContain('');
    }

    async NextMonth ( times = 6) {
        // await this.NextMonthYearArrowBtn.click();
            for (let i = 0; i < times; i++) {
                await this.NextMonthArrowBtn.click();
        }
        await browser.pause(500);
        const monthHeaderText = await this.MonthYearHeader.getText();
        await expect(monthHeaderText).toContain('April 2025');
    }

    async DisabledArrowBtn (times = 10) {
        for (let i = 0; i < times; i++) {
            await this.NextMonthArrowBtn.click();
    }
        const isEnabled = await this.NextMonthArrowBtn.getAttribute('disabled');
        if (isEnabled === 'true') {
            console.log('Next month arrow button is Disabled');
        } else {
            console.log('Next month arrow button is Enabled');
        }
    }

}

export default new CalendarUse();
 
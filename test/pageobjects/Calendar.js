import { browser, expect } from '@wdio/globals'


class CalendarUse {

    get CalendarYear () {
        return $('//*[@aria-label="Date selector"]');
    }
    
    get ConfirmCalendarYearOpen () {
        return $('//button[text()="Today"]');
    }

    async Year () {
        await this.CalendarYear.click();
        await expect (this.ConfirmCalendarYearOpen).toHaveText('Today');
    }

    async RSLSchedulePage () {
        await browser.url('https://www.rsl.com/schedule/');
        await expect(browser).toHaveTitle('Schedule | Real Salt Lake');
    }
}

export default new CalendarUse();
 
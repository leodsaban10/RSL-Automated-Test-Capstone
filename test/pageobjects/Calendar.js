import { browser, expect } from '@wdio/globals'
import RSLLink from './Url.js';


class CalendarUse extends RSLLink {

    get CalendarYear () {
        return $('//*[@aria-label="Date selector"]');
    }
    get YearHeaderText () {
        return $(`//button[text()="${year}"]`);
    }
    get YearHeaderText1 () {
        return $(`//button[text()="${year}"]`);
    }
    get PreviousYearArrowBtn () {
        return $('//button[@aria-label="Previous results"]');
    }
    get NextYearArrowBtn () {
        return $('//button[@aria-label="Next results"]');
    }
    get TodayText () {
        return $('//button[text()="Today"]');
    }
    get TodayBtn () {
        return $('//button[@class="mls-o-calendar__today"]');
    }
    get DayEleven () {
        return $('//button[@class="mls-o-calendar__day  "][text()=11]');
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

    async CalendarOpen () {
        await this.CalendarYear.click();
        await expect (this.TodayText).toHaveText('Today');
        const monthHeaderText = await this.MonthYearHeader.getText();
        await expect(monthHeaderText).toContain('May 2025');
    }

    async PreviousYearArrow (times = 4) {
        for (let i = 0; i < times; i++) {
            await this.PreviousYearArrowBtn.click();
        }
        const yearText = await this.YearHeaderText.getText();
        await expect(yearText).toContain('2021');
    }
    
    async NextYearArrow (times = 4) {
        for (let i = 0; i < times; i++) {
            await this.NextYearArrowBtn.click();
        }
        const yearText = await this.YearHeaderText1.getText();
        await expect(yearText).toContain('2025');
    }

    async PreviousMonthArrow (times = 6) {
        for (let i = 0; i < times; i++) {
            await this.PreviousMonthArrowBtn.click();
        }
        const monthHeaderText = await this.MonthYearHeader.getText();
        await expect(monthHeaderText).toContain('');
    }

    async NextMonthArrow ( times = 6) {
            for (let i = 0; i < times; i++) {
                await this.NextMonthArrowBtn.click();
        }
        const monthHeaderText = await this.MonthYearHeader.getText();
        await expect(monthHeaderText).toContain('May 2025');
    }

    async DisabledArrowMonthBtn (times = 10) {
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

    async DisabledArrowYearBtn (times = 2) {
        for (let i = 0; i < times; i++) {
            await this.NextYearArrowBtn.click();
    }
        const isEnabled = await this.NextYearArrowBtn.getAttribute('disabled');
        if (isEnabled === 'true') {
            console.log('Next month arrow button is Disabled');
        } else {
            console.log('Next month arrow button is Enabled');
        }
    }

    async TodayButton () {
        await this.CalendarOpen();
        await this.PreviousMonthArrow();
        await this.DayEleven.click();
        await expect(browser).toHaveUrl('https://www.rsl.com/schedule/#competition=all&date=2024-11-11');
        await this.CalendarYear.click();
        await this.TodayBtn.click();  
        await expect(browser).toHaveUrl('https://www.rsl.com/schedule/#competition=all&date=2025-05-03');//change date as today's date
    }

    
    open() {
        return super.open('schedule');
    }
}


export default new CalendarUse();
 


class ThreedotsMenu {

    get ThreeDotsBtn () {
        return $('li [data-test-id="toggle-overflow--lg"]');
    }
    get ThreeDotsOpened () {
        return $('//*[@data-test-id="overflow-list"]');
    }

    async RSLpage () {
        return browser.url('https://www.rsl.com/schedule/');
    }

    async ThreeDotsMenuOpen () {
        await this.ThreeDotsBtn.click();
        // await expect(this.ThreeDotsOpened).toExist();
    }

}

export default new ThreedotsMenu();

import { browser, expect } from '@wdio/globals'
import RSLLink from './Base.js';


class ThreedotsMenu extends RSLLink { 

    get ThreeDotsBtn () {
        return $('[data-test-id="toggle-overflow--md"]');
    }
    get ThreeDotsOpened () {
        return $('//*[@data-test-id="overflow-list"]');
    }
    get MenuContainer () {
         return $('aside[data-test-id="sidebar-overflow--md"] ul')
    }

    MenuItems (itemNames) {
        return $(`//ul[text()="${itemNames}"]`);
    }
    

    async ThreeDotsMenuOpen () {
        await this.ThreeDotsBtn.click();
        await expect(this.ThreeDotsOpened).toExist();
    }

    // async HoverOverListItems () {
    //     await expect(this.MenuContainer).toExist();
    //     await this.MenuContainer.moveTo();
    //         for (let i = 0; i < 6; i++) { // 6 items in the menu
    //             await this.MenuContainer.$('li:nth-child(' + (i + 1) + ')').moveTo();
    //         }
    //         await this.MenuContainer.$('li:last-child').click();
    //         await expect (browser).toHaveTitle('Youth | Real Salt Lake')
    // }

    async HoverOverListItems () {
        await expect(this.MenuContainer).toExist();
        await this.MenuContainer.moveTo();
            // for (let i = 0; i < 6; i++) { // 6 items in the menu
            //     await this.MenuContainer.$('li:nth-child(' + (i + 1) + ')').moveTo();
            // }
        let itemNames = ['News', 'Video', 'Community', 'Real Moarchs', 'RSL Academy', 'Youth'];
        for (let i = 0; i < itemNames.length; i++) {
            await expect(this.MenuItems(itemNames[i])).toHaveText(itemNames[i]);
            // await this.MenuItems.$('li:last-child').click();
            // await expect (browser).toHaveTitle('Youth | Real Salt Lake')
            for (let i = 0; i < 6; i++) { // 6 items in the menu
                await this.MenuContainer.$('li:nth-child(' + (i + 1) + ')').moveTo();
            }
     }


    }
    open () {
        return super.open('schedule');
    }
    
}

export default new ThreedotsMenu();

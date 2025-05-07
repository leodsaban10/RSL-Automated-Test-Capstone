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
        return $(`//span[contains(@class, "mls-o-navigation__item-text") and contains(text(), "${itemNames}")]`);
    }  
    
    async ThreeDotsMenuOpen () {
        await this.ThreeDotsBtn.click();
        await expect(this.ThreeDotsOpened).toExist();
    }

    async HoverOverListItems () {
        await expect(this.MenuContainer).toExist();
        await this.MenuContainer.moveTo();
            for (let i = 0; i < 6; i++) { // 6 items in the menu
                await this.MenuContainer.$('li:nth-child(' + (i + 1) + ')').moveTo();
            }        
            let itemNames = ['News', 'Video', 'Community', 'Monarchs', 'Academy', 'Youth'];
            for (let i = 0; i < itemNames.length; i++) {
            await expect(this.MenuItems(itemNames[i])).toExist(itemNames[i]);
            }
            await this.MenuContainer.$('li:nth-child(1)').middleClick();
            await expect (browser).toHaveTitle('News | Real Salt Lake')
            // await this.MenuContainer.$('li:nth-child(2)').click();
            // await expect (browser).toHaveTitle('Video | Real Salt Lake')
            // await this.MenuContainer.$('li:nth-child(3)').click();
            // await expect (browser).toHaveTitle('Community | Real Salt Lake')
            // await this.MenuContainer.$('li:nth-child(4)').click();
            // await expect (browser).toHaveTitle('Real Monarchs')
            // await this.MenuContainer.$('li:nth-child(5)').click();
            // await expect (browser).toHaveTitle('Real Salt Lake')
            // await this.MenuContainer.$('li:last-child').click();
            // await expect (browser).toHaveTitle('Youth | Real Salt Lake')
    }

    goToThreeDotsMenu () {
        return this.destination('schedule');
    }
    
}

export default new ThreedotsMenu();

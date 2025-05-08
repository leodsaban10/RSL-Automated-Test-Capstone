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

            let expectedTitles = ['News | Real Salt Lake', 'Video | Real Salt Lake', 'Community | Real Salt Lake', 'Real Monarchs', 'Real Salt Lake', 'Youth | Real Salt Lake'];
            for (let i = 0; i <expectedTitles.length; i++) {
                const listItem = await this.MenuContainer.$(`li:nth-child(${i + 1})`);
                await listItem.click();
                let handle = await browser.getWindowHandles();
                if (handle.length > 1) {
                    await browser.switchWindow(handle[1]);
                    await expect(browser).toHaveTitle(expectedTitles[i]);
                    await browser.closeWindow();
                    await browser.switchWindow(handle[0]);
            }   else {
                await expect(browser).toHaveTitle(expectedTitles[i]);
            }
                await this.ThreeDotsBtn.click();
               
            }

    }

    goToThreeDotsMenu () {
        return this.destination('schedule');
    }
    
}

export default new ThreedotsMenu();

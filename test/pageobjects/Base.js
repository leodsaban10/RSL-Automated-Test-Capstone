export default class RSLLink {
    destination (path = '') {
        return browser.url(`https://www.rsl.com/${path}`);
    }
}

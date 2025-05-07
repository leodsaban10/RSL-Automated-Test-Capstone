export default class RSLLink {
    Destination (path = '') {
        return browser.url(`https://www.rsl.com/${path}`);
    }
}

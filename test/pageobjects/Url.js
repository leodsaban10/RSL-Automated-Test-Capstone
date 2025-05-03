export default class RSLLink {
    open(path = '') {
        return browser.url(`https://www.rsl.com/${path}`);
    }
}

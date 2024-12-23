export const enum BrowserName {
  Firefox = 'firefox',
  Safari = 'safari',
  Opera = 'opera',
  Edge = 'edge',
  IE = 'ie',
  Chrome = 'chrome',
  Unknown = 'unknown',
  Wildcard = "*"
};
function detectBrowser(): BrowserName {
  let browsername = "unknown";
  browsername =
    /firefox|iceweasel|fxios/i.test(navigator.userAgent) ? "firefox" :
    /safari/i.test(navigator.userAgent) && !/chrome|crmo|crios/i.test(navigator.userAgent) ? "safari" :
    /opr\//i.test(navigator.userAgent) ? "opera" :
    /edg/i.test(navigator.userAgent) ? "edge" : /msie|trident/i.test(navigator.userAgent) ? "ie" :
    /chrome|crmo|crios/i.test(navigator.userAgent) && !/edge/i.test(navigator.userAgent) ? "chrome" :
    "unknown"
  return browsername as BrowserName
};
export const browserName: BrowserName = detectBrowser();
export default detectBrowser;
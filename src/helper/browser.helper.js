export const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

export const isFirefox = typeof InstallTrigger !== 'undefined';

export const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

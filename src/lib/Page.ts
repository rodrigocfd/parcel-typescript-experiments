export default class Page {
	/**
	 * Fired when the page is loaded and ready.
	 * @param func Callback do be called when the page loading is complete.
	 */
	static onReady(func: () => void) {
		if (document.readyState !== 'loading') {
			func();
		} else {
			document.addEventListener('DOMContentLoaded', func);
		}
	}
}

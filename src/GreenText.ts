import htmlText from './GreenText.html';

export default class GreenText {
	private tpl: HTMLElement = document.createElement('div');

	constructor() {
		this.parseTemplate();
	}

	loadInto(divId: string) {
		const place = <HTMLElement>document.getElementById(divId);
		place.appendChild(this.tpl);
	}

	private parseTemplate() {
		this.tpl.innerHTML = htmlText;
		this.tpl = <HTMLElement>this.tpl.firstChild;
	}
}

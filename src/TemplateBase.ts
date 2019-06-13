export default class TemplateBase {
	protected tpl: HTMLElement = document.createElement('div');

	constructor(htmlTemplate: string) {
		this.parseTemplate(htmlTemplate);
	}

	loadInto(divId: string) {
		const place = <HTMLElement>document.getElementById(divId);
		place.appendChild(this.tpl);
	}

	private parseTemplate(htmlTemplate: string) {
		this.tpl.innerHTML = htmlTemplate;
		this.tpl = <HTMLElement>this.tpl.firstChild;
	}
}

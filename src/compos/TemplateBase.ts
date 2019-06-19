export default class TemplateBase {
	protected tpl: HTMLElement = document.createElement('div');

	constructor(htmlTemplate: string) {
		this.parseTemplate(htmlTemplate);
	}

	/**
	 * Appends our element into a div; should be called during initialization.
	 * @param divId ID of target div, which will host the content.
	 */
	loadInto(divId: string) {
		const place = <HTMLElement>document.getElementById(divId);
		place.appendChild(this.tpl);
	}

	/**
	 * Retrieves the first element whose class matches.
	 * @param className Name of the class of the element.
	 */
	protected elemByClass(className: string): Element {
		return this.elemsByClass(className)[0];
	}

	/**
	 * Retrieves the set of elements whose class matches.
	 * @param className Name of the class of the elements.
	 */
	protected elemsByClass(className: string): HTMLCollectionOf<Element> {
		return this.tpl.getElementsByClassName(className);
	}

	/**
	 * Parses an HTML string into our element.
	 * @param htmlTemplate HTML string to be parsed into element.
	 */
	private parseTemplate(htmlTemplate: string) {
		this.tpl.innerHTML = htmlTemplate;
		this.tpl = <HTMLElement>this.tpl.firstChild;
	}
}

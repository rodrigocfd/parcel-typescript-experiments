export default class TemplateBase {
	protected elem: Element;

	/**
	 * Creates the HTML node by parsing the HTML string content.
	 * @param htmlTemplate HTML string to be parsed.
	 */
	constructor(htmlTemplate: string) {
		let ghost = document.createElement('div');
		ghost.innerHTML = htmlTemplate;
		this.elem = ghost.children[0];
	}

	/**
	 * Appends our element into a div; should be called during initialization only.
	 * @param divId ID of target div, which will host the content.
	 */
	loadInto(divId: string) {
		let parent = document.querySelector(`#${divId}`);
		parent!.appendChild(this.elem as Node);
	}
}

import $ from 'jquery';

export default class TemplateBase {
	protected $obj: JQuery = $();

	/**
	 * Creates the HTML node by parsing the HTML string content.
	 * @param htmlTemplate HTML string to be parsed.
	 */
	constructor(htmlTemplate: string) {
		this.$obj = $(htmlTemplate);
	}

	/**
	 * Appends our element into a div; should be called during initialization only.
	 * @param divId ID of target div, which will host the content.
	 */
	loadInto(divId: string) {
		$('#' + divId).append(this.$obj);
	}
}

import TemplateBase from './TemplateBase';
import htmlTextTemplate from './BoldRed.html';

export default class BoldRed extends TemplateBase {
	constructor() {
		super(htmlTextTemplate);
	}

	setText(text: string) {
		this.$obj.find('.name').text(text);
	}
}

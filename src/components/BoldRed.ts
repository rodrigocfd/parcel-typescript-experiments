import TemplateBase from '../lib/TemplateBase';
import htmlTextTemplate from './BoldRed.html';

export default class BoldRed extends TemplateBase {
	constructor() {
		super(htmlTextTemplate);
	}

	setText(text: string) {
		this.elem.querySelector('.name')!.innerHTML = text;
	}
}

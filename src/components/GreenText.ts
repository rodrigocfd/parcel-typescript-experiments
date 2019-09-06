import TemplateBase from './TemplateBase';
import htmlTextTemplate from './GreenText.html';

export default class GreenText extends TemplateBase {
	constructor() {
		super(htmlTextTemplate);
	}

	setName(name: string) {
		this.elem.querySelector('.name')!.innerHTML = name;
	}
}

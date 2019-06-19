import TemplateBase from './TemplateBase';
import htmlText from './GreenText.html';

export default class GreenText extends TemplateBase {
	constructor() {
		super(htmlText);
	}

	setName(name: string) {
		const divName = this.elemByClass('name');
		divName.innerHTML = name;
	}
}

import TemplateBase from '../lib/TemplateBase';
import htmlTextTemplate from './Residence.html';
import './Residence.scss';

export default class Residence extends TemplateBase {
	constructor() {
		super(htmlTextTemplate);
	}

	setCityState(city: string, state: string) {
		this.elem.querySelector('.city')!.innerHTML = city;
		this.elem.querySelector('.state')!.innerHTML = state;
	}
}

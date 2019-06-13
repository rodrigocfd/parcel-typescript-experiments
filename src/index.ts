import Phrase from './Phrase';

function genHello(ph: Phrase): string {
	return ph.name;
}

const foo = <HTMLElement>document.getElementById('foo');
foo.textContent = genHello({name: 'Hello there'});

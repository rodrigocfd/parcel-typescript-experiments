import Phrase from './Phrase';
import bubble from './bubble.html';

function genHello(ph: Phrase): string {
	return ph.name;
}

const foo = <HTMLElement>document.getElementById('foo');
foo.textContent = genHello({name: 'Hello there'});

let bubbleDiv = document.createElement('div');
bubbleDiv.innerHTML = bubble;
foo.appendChild(bubbleDiv);

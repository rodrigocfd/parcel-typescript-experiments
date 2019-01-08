import Boom from './Boom';

const hello = (b: Boom) => {
	return b.name;
};

const main = document.getElementById('foo');
if (main) {
	main.textContent = hello({name: 'Hello boom'});
}

import Page from './lib/Page';
import BoldRed from './components/BoldRed';
import GreenText from './components/GreenText';

Page.onReady(() => {
	let greenTexts = [new GreenText(), new GreenText()];
	greenTexts[0].loadInto('greenText0');
	greenTexts[1].loadInto('greenText1');

	greenTexts[0].setName('foo');
	greenTexts[1].setName('bar');

	let boldRed = new BoldRed();
	boldRed.loadInto('red');
	boldRed.setText('dancing');
});

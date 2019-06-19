import GreenText from './compos/GreenText';

let greenTexts = [new GreenText(), new GreenText()];
greenTexts[0].loadInto('greenText0');
greenTexts[1].loadInto('greenText1');

greenTexts[0].setName('foo');
greenTexts[1].setName('bar');
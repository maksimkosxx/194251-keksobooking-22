import createObject from './utils.js';
import createData from './createData.js';
import createTemplate from './createTemplate.js';

const cardsCollection = createTemplate(createData(createObject, 10));

const map = document.querySelector('#map-canvas');
map.appendChild(cardsCollection[0]);



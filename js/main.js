import createObject from './utils.js';
import createData from './createData.js';
import Map from './map.js';

const data = createData(createObject, 10);

Map(data);


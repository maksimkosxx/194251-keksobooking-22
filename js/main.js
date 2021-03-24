import './useForm.js';
import renderMarkers from './map.js';
import {getData, setData} from './api.js';


getData(renderMarkers);
setData();

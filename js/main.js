import useForm from './use-form.js';
import renderMarkers from './map.js';
import {getData, setData} from './api.js';


useForm();
getData(renderMarkers);
setData();

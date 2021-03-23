import errorResponse from './error.js';
import './useForm.js';
import changeFilters from './changeFilters.js'
import renderMarkers from './map.js';


fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if(response.ok ) {
      return response.json()
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then(json => {
    renderMarkers(json);
    changeFilters(() => renderMarkers(json))
  })
  .catch(err => {
    errorResponse(err);
  })

import Map from './map.js';
import errorMessage from './error.js';
import './useForm.js';


fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if(response.ok ) {
      return response.json()
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then(json => Map(json))
  .catch(err => {
    errorMessage(err);
    Map();
  })


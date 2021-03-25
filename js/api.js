import changeFilters from './change-filters.js';
import errorResponse from './error.js';
import {mainForm, mapFilterForm} from './utils.js';
import {createRespondingMessage as respondingMessage, setAddressValue} from './helpers.js';


const getData = (cb) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if(response.ok ) {
        return response.json()
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then(json => {
      cb(json);
      changeFilters(() => cb(json))
    })
    .catch(err => {
      errorResponse(err);
    })
}

const setData = () => {
  mainForm.addEventListener('submit', (evt) => {

    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch('https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      })
      .then((response) => {
        if(response.ok) {
          mainForm.reset();
          mapFilterForm.reset();
          setAddressValue();
          respondingMessage('success');
        } else {
          respondingMessage('error');
        }
      })
      .catch((err) => alert(err))
  })
}

export {getData, setData};

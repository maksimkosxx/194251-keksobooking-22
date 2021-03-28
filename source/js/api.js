import changeFilters from './change-filters.js';
import createApiResponse from './error.js';
import {mainForm, mapFilterForm} from './utils.js';
import {setAddressValue} from './helpers.js';
import createMessage from './create-message.js';

const URL = {
  get: 'https://22.javascript.pages.academy/keksobooking/data',
  post: 'https://22.javascript.pages.academy/keksobooking',
}

const getData = (cb) => {
  fetch(URL.get)
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
      createApiResponse(err);
    })
}

const setData = () => {
  mainForm.addEventListener('submit', (evt) => {

    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(URL.post,
      {
        method: 'POST',
        body: formData,
      })
      .then((response) => {
        if(response.ok) {
          mainForm.reset();
          mapFilterForm.reset();
          setAddressValue();
          createMessage('success');
        } else {
          throw new Error;
        }
      })
      .catch(() => createMessage('error'))
  })
}

export {getData, setData};

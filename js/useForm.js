import {mainForm, mapFilters} from './utils.js';
import { createRespondingMessage as respondingMessage, setAddressValue } from './helpers.js';


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
        mapFilters.reset();
        setAddressValue();
        respondingMessage('success');
      } else {
        respondingMessage('error');
      }
    })
    .catch((err) => alert(err))
})

import {initCoords, mainForm, mainPinMarker, mapPoints, mapFilterForm} from './utils.js';
import { createRespondingMessage as respondingMessage, setAddressValue } from './helpers.js';


const btnReset = document.querySelector('.ad-form__reset');

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


btnReset.addEventListener('click', ()=> {
  mainForm.reset();
  mapFilterForm.reset();
  mapPoints.clearLayers();
  setAddressValue();
  mainPinMarker.setLatLng(initCoords);
})


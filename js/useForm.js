import {
  initCoords,
  mainForm,
  mainPinMarker,
  mapPoints,
  mapFilterForm,
  typeFormInput,
  priceInput,
  timeinSelect,
  timeoutSelect
} from './utils.js';
import { createRespondingMessage as respondingMessage, setAddressValue } from './helpers.js';

const getMinPrice = (type) => {
  switch (type) {
    case 'flat':
      return 1000;
    case 'bungalow':
      return 0;
    case 'house':
      return 5000;
    case 'palace':
      return 10000;
  }
}

typeFormInput.addEventListener('change' , (evt) => {

  const currentValue = evt.target.value;
  priceInput.placeholder = getMinPrice(currentValue).toString();

})

priceInput.addEventListener('input', (evt) => {

  const inputValue = evt.target.value;
  const LIMIT = getMinPrice(typeFormInput.value);

  if (inputValue < LIMIT) {
    evt.target.setCustomValidity(`Цена должна не менее чем ${LIMIT} руб.`);
  }
  else {
    evt.target.setCustomValidity('');
  }

  evt.target.reportValidity();
});

timeinSelect.addEventListener('change', (evt) => {
  timeoutSelect.value = evt.target.value;

})
timeoutSelect.addEventListener('change', (evt) => {
  timeinSelect.value = evt.target.value;
})



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

const btnReset = mainForm.querySelector('.ad-form__reset');

btnReset.addEventListener('click', ()=> {
  mainForm.reset();
  priceInput.placeholder = '1000';
  mapFilterForm.reset();
  mapPoints.clearLayers();
  setAddressValue();
  mainPinMarker.setLatLng(initCoords);
})


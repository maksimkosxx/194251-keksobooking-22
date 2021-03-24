import {
  initCoords,
  mainForm,
  mainPinMarker,
  mapPoints,
  mapFilterForm,
  typeFormInput,
  priceInput,
  timeinSelect,
  timeoutSelect,
  roomNumberSelect,
  capacitySelect
} from './utils.js';
import { setAddressValue, getMinPrice, getRoomsValue } from './helpers.js';



typeFormInput.addEventListener('change' , (evt) => {
  const currentValue = evt.target.value;
  priceInput.placeholder = getMinPrice(currentValue).toString();
})

timeinSelect.addEventListener('change', (evt) => {
  timeoutSelect.value = evt.target.value;
})
timeoutSelect.addEventListener('change', (evt) => {
  timeinSelect.value = evt.target.value;
})


const allCapacityOptions = capacitySelect.children;
const optionsArr = [...allCapacityOptions];
optionsArr.map(option => option.value !== '1' ? option.disabled = true : option.disabled = false);

roomNumberSelect.addEventListener('change', (evt) => {

  const selectedValue = evt.target.value;
  optionsArr.map(option => option.disabled = true);

  getRoomsValue(selectedValue).map((item) => {
    capacitySelect.querySelector('option' + '[value="' + item + '"]').disabled = false;
  })
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


const btnReset = mainForm.querySelector('.ad-form__reset');

btnReset.addEventListener('click', ()=> {
  mainForm.reset();
  priceInput.placeholder = '1000';
  mapFilterForm.reset();
  mapPoints.clearLayers();
  setAddressValue();
  mainPinMarker.setLatLng(initCoords);
})


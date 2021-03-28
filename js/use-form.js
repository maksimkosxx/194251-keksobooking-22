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


const useForm = () => {
  const btnReset = mainForm.querySelector('.ad-form__reset');


  typeFormInput.addEventListener('change' , (evt) => {
    const currentValue = evt.target.value;
    priceInput.placeholder = getMinPrice[currentValue].toString();
  })

  timeinSelect.addEventListener('change', (evt) => {
    timeoutSelect.value = evt.target.value;
  })
  timeoutSelect.addEventListener('change', (evt) => {
    timeinSelect.value = evt.target.value;
  })


  const allCapacityOptions = capacitySelect.children;
  const options = [...allCapacityOptions];
  options.map(option => option.value !== '1' ? option.disabled = true : option.disabled = false);

  roomNumberSelect.addEventListener('change', (evt) => {

    const selectedValue = evt.target.value;
    options.map(option => option.disabled = true);

    getRoomsValue[selectedValue].map((item) => {
      capacitySelect.querySelector('option' + '[value="' + item + '"]').disabled = false;
    })
  })

  priceInput.addEventListener('input', (evt) => {

    const inputValue = evt.target.value;
    const LIMIT = getMinPrice[typeFormInput.value];

    if (inputValue < LIMIT) {
      evt.target.setCustomValidity(`Цена должна не менее чем ${LIMIT} руб.`);
    }
    else {
      evt.target.setCustomValidity('');
    }

    evt.target.reportValidity();
  });


  btnReset.addEventListener('click', ()=> {
    mainForm.reset();
    priceInput.placeholder = '1000';
    mapFilterForm.reset();
    mapPoints.clearLayers();
    setAddressValue();
    mainPinMarker.setLatLng(initCoords);
  })

}
export default useForm;

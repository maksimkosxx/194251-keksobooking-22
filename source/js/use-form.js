import {priceInput, mainForm, typeFormInput, roomNumberSelect, capacitySelect} from './utils.js';
import {getMinPrice, getRoomsValue} from './helpers.js';
import {checkPriceValidity, checkRoomsValidity} from './validation.js';
import uploadImage from './upload-image.js';


const timeinSelect = mainForm.querySelector('#timein');
const timeoutSelect = mainForm.querySelector('#timeout');


const useForm = () => {

  typeFormInput.addEventListener('change' , (evt) => {
    const currentValue = evt.target.value;
    priceInput.placeholder = getMinPrice[currentValue].toString();
    checkPriceValidity();
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
    checkRoomsValidity()
  });

  priceInput.addEventListener('input', () => checkPriceValidity());

  uploadImage('#avatar', '.ad-form-header__preview > img');
  uploadImage('#images', '.ad-form__photo', true);
}

export default useForm;

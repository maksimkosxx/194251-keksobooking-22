import {priceInput, mainForm} from './utils.js';
import {getMinPrice, getRoomsValue} from './helpers.js';
import uploadImage from './upload-image.js';


const typeFormInput = mainForm.querySelector('#type');
const timeinSelect = mainForm.querySelector('#timein');
const timeoutSelect = mainForm.querySelector('#timeout');
const roomNumberSelect = mainForm.querySelector('#room_number');
const capacitySelect = mainForm.querySelector('#capacity');


const useForm = () => {

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
  const options = [...allCapacityOptions];
  options.map(option => option.value !== '1' ? option.disabled = true : option.disabled = false);

  roomNumberSelect.addEventListener('change', (evt) => {

    const selectedValue = evt.target.value;
    options.map(option => option.disabled = true);

    getRoomsValue(selectedValue).map((item) => {
      capacitySelect.querySelector('option' + '[value="' + item + '"]').disabled = false;
    })
  })

  priceInput.addEventListener('input', (evt) => {

    const inputValue = evt.target.value;
    const priceLimit = getMinPrice(typeFormInput.value);

    if (inputValue < priceLimit) {
      evt.target.setCustomValidity(`Цена должна не менее чем ${priceLimit} руб.`);
    }
    else {
      evt.target.setCustomValidity('');
    }

    evt.target.reportValidity();
  });

  uploadImage('#avatar', '.ad-form-header__preview > img');
  uploadImage('#images', '.ad-form__photo', true);



}
export default useForm;

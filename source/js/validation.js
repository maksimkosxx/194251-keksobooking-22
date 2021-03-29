import {priceInput, typeFormInput, roomNumberSelect, capacitySelect} from './utils.js';
import {getMinPrice, getRoomsValue} from './helpers.js';


const checkPriceValidity = () => {
  const inputValue = priceInput.value;
  const valueLimit = getMinPrice[typeFormInput.value];

  if (inputValue < valueLimit) {
    priceInput.setCustomValidity(`Цена должна не менее чем ${valueLimit} руб.`);
  }
  else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
};

const checkRoomsValidity = () => {
  const roomGuests = getRoomsValue[roomNumberSelect.value];
  const message = roomGuests.indexOf(+capacitySelect.value) === -1 ? 'Некорректное значение, выберите правильное' : '';
  capacitySelect.setCustomValidity(message);
};

export {checkPriceValidity, checkRoomsValidity}

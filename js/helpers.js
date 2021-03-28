import {initCoords, fieldAddress} from './utils.js';

const getType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
}

const getMinPrice = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
}

const getRoomsValue = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
}

const getFilterPrice = {
  'low': {
    min: 0,
    max: 10000,
  },
  'middle': {
    min: 10000,
    max: 50000,
  },
  'high': {
    min: 50000,
    max: Infinity,
  },
}


const addDisabledValue = (array, value) => {
  for (let item of array) {
    item.disabled = value;
  }
}

const setAddressValue = () => {
  fieldAddress.value = `${initCoords.lat}, ${initCoords.lng}`;
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const handlerKeyDown = (targetElement, item, additionalItem) => {
  targetElement.addEventListener('keydown', (evt) => isEscEvent(evt) ? removeElement(item, additionalItem) : '');
}

const handlerClick = (targetElement, item, additionalItem) => {
  targetElement.addEventListener('click', () => removeElement(item, additionalItem));
}

const removeElement = (item, additionalItem) => {
  item.remove();
  additionalItem ? additionalItem.remove() : '';
  document.removeEventListener('click', () => removeElement);
  document.removeEventListener('keydown', () => removeElement);
}

export {
  addDisabledValue,
  setAddressValue,
  isEscEvent,
  handlerClick,
  handlerKeyDown,
  removeElement,
  getType,
  getMinPrice,
  getRoomsValue,
  getFilterPrice
}

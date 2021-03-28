import { typeSelect, priceSelect, roomsSelect, guestsSelect, featuresFieldset } from './utils.js';
import {getFilterPrice} from './helpers.js';

const anyValue = 'any';

const filtratedItem = (el, item, param) => el.value === anyValue ? true : el.value === item[param].toString();

const filtratedType = item => filtratedItem(typeSelect, item.offer, 'type');

const filtratedPrice = (item) => {
  const filteringPrice = getFilterPrice[priceSelect.value];
  return filteringPrice ? item.offer.price >= filteringPrice.min && item.offer.price <= filteringPrice.max : true;
};

const filtratedRooms = item => filtratedItem(roomsSelect, item.offer, 'rooms');

const filtratedGuests = item => filtratedItem(guestsSelect, item.offer, 'guests');

const filtratedFeatures = (item) => {

  const checkedFeaturesItems = featuresFieldset.querySelectorAll('input:checked');

  const featuresArr = [...checkedFeaturesItems];

  return featuresArr.every(element =>  item.offer.features.includes(element.value));
};


const filtratedData = (data) => {

  return data
    .filter(filtratedType)
    .filter(filtratedPrice)
    .filter(filtratedRooms)
    .filter(filtratedGuests)
    .filter(filtratedFeatures);
}

export default filtratedData;

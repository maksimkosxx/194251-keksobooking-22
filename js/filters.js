import { mapFilterForm } from './utils.js';


const typeSelect = mapFilterForm.querySelector('#housing-type');
const priceSelect = mapFilterForm.querySelector('#housing-price');
const roomsSelect = mapFilterForm.querySelector('#housing-rooms');
const guestsSelect = mapFilterForm.querySelector('#housing-guests');
const featuresFieldset = mapFilterForm.querySelector('#housing-features');


const Filters = (data) => {

  const getPrice = (price) => {
    switch (price) {
      case 'low':
        return {min: 0, max: 10000};
      case 'middle':
        return {min: 10000, max: 50000};
      case 'high':
        return {min: 50000, max: Infinity};
    }
  }

  const filtrationItem = (el, item, param) => {
    if(el.value === 'any') {
      return true
    } else {
      return el.value === item[param].toString()
    }
  };

  const filtrationType = (item) => filtrationItem(typeSelect, item.offer, 'type');

  const filtrationPrice = (item) => {
    const filteringPrice = getPrice(priceSelect.value);
    return filteringPrice ? item.offer.price >= filteringPrice.min && item.offer.price <= filteringPrice.max : true;
  };

  const filtrationRooms = (item) => filtrationItem(roomsSelect, item.offer, 'rooms');

  const filtrationGuests = (item) => filtrationItem(guestsSelect, item.offer, 'guests');

  const filtrationFeatures = (item) => {

    const checkedFeaturesItems = featuresFieldset.querySelectorAll('input:checked');

    const featuresArr = [...checkedFeaturesItems];

    return featuresArr.every((element) => {
      return item.offer.features.includes(element.value);
    });
  };

  return data
    .filter(filtrationType)
    .filter(filtrationPrice)
    .filter(filtrationRooms)
    .filter(filtrationGuests)
    .filter(filtrationFeatures);
}

export default Filters;

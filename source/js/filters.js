import { typeSelect, priceSelect, roomsSelect, guestsSelect, featuresFieldset } from './utils.js';
import {getPrice} from './helpers.js';


const Filters = (data) => {

  const filtrationItem = (el, item, param) => el.value === 'any' ? true : el.value === item[param].toString();

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

    return featuresArr.every(element => item.offer.features.includes(element.value));
  };

  return data
    .filter(filtrationType)
    .filter(filtrationPrice)
    .filter(filtrationRooms)
    .filter(filtrationGuests)
    .filter(filtrationFeatures);
}

export default Filters;

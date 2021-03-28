import {getType} from './helpers.js';
import createElement from './create-element.js';
import createFeaturesList from './create-features.js';
import createPhotosList from './create-photos.js';

const initTemplate = document.querySelector('#card').content;
const templateItem = initTemplate.querySelector('.popup');


const createPopup = data => {

  const newItem = templateItem.cloneNode(true);
  const title = newItem.querySelector('.popup__title');
  const address = newItem.querySelector('.popup__text--address');
  const price = newItem.querySelector('.popup__text--price');
  const type = newItem.querySelector('.popup__type');
  const capacity = newItem.querySelector('.popup__text--capacity');
  const time = newItem.querySelector('.popup__text--time');
  const features = newItem.querySelector('.popup__features');
  const description = newItem.querySelector('.popup__description');
  const photos = newItem.querySelector('.popup__photos');
  const photo = photos.querySelector('.popup__photo');
  const usePhoto = newItem.querySelector('.popup__avatar');

  const {offer} = data;
  const {avatar} = data.author;

  createElement(title, offer.title);
  createElement(address, offer.address);
  createElement(price, `${offer.price} ₽/ночь`);
  createElement(type, getType[offer.type]);
  createElement(capacity, `${offer.rooms} комнаты для ${offer.guests} гостей`);
  createElement(time, `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  createFeaturesList(features, offer.features);
  createElement(description, offer.description);
  createPhotosList(photos, photo, offer.photos, offer.title);
  usePhoto.src = avatar;

  return newItem;
}

export default createPopup;

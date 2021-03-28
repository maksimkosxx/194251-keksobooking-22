import {getType} from './helpers.js';
import createElement from './create-element.js';
import createFeaturesList from './create-features.js';
import createPhotosList from './create-photos.js';

const INIT_TEMPLATE = document.querySelector('#card').content;
const TEMPLATE_ITEM = INIT_TEMPLATE.querySelector('.popup');


const createPopup = data => {

  const newItem = TEMPLATE_ITEM.cloneNode(true);
  const TITLE = newItem.querySelector('.popup__title');
  const ADDRESS = newItem.querySelector('.popup__text--address');
  const PRICE = newItem.querySelector('.popup__text--price');
  const TYPE = newItem.querySelector('.popup__type');
  const CAPACITY = newItem.querySelector('.popup__text--capacity');
  const TIME = newItem.querySelector('.popup__text--time');
  const FEATURES = newItem.querySelector('.popup__features');
  const DESCRIPTION = newItem.querySelector('.popup__description');
  const PHOTOS = newItem.querySelector('.popup__photos');
  const PHOTO = PHOTOS.querySelector('.popup__photo');
  const AVATAR = newItem.querySelector('.popup__avatar');

  const {offer} = data;
  const {avatar} = data.author;

  createElement(TITLE, offer.title);
  createElement(ADDRESS, offer.address);
  createElement(PRICE, `${offer.price} ₽/ночь`);
  createElement(TYPE, getType[offer.type]);
  createElement(CAPACITY, `${offer.rooms} комнаты для ${offer.guests} гостей`);
  createElement(TIME, `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  createFeaturesList(FEATURES, offer.features);
  createElement(DESCRIPTION, offer.description);
  createPhotosList(PHOTOS, PHOTO, offer.photos, offer.title);
  AVATAR.src = avatar;

  return newItem;
}

export default createPopup;

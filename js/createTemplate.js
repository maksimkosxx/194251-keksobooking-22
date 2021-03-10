

const createTemplate = data => {

  const initTemplate = document.querySelector('#card').content;
  const templateItem = initTemplate.querySelector('.popup');
  const newItem = templateItem.cloneNode(true);
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

  const createElement = (element, content) => {
    if(element.textContent.length > 0) {
      return element.textContent = content
    } else
      return element.remove();
  }

  const getType = (type) => {
    switch (type) {
      case 'flat':
        return 'Квартира';
      case 'bungalow':
        return 'Бунгало';
      case 'house':
        return 'Дом';
      case 'palace':
        return 'Дворец';
    }
  }
  const getFeatures = (template, array) => {
    template.innerHTML = ''
    array.map(el => {
      const listItem = document.createElement('li');
      listItem.classList.add('popup__feature', `popup__feature--${el}`);
      template.appendChild(listItem);
    });
  }

  const { offer } = data;
  const { avatar } = data.author;

  createElement(TITLE, offer.title);
  createElement(ADDRESS, offer.address);
  createElement(PRICE, `${offer.price} ₽/ночь`);
  createElement(TYPE, getType(offer.type));
  createElement(CAPACITY, `${offer.rooms} комнаты для ${offer.guests} гостей`);
  createElement(TIME, `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  getFeatures(FEATURES, offer.features);
  createElement(DESCRIPTION, offer.description);
  PHOTO.src = offer.photos;
  PHOTO.alt = offer.title;
  AVATAR.src = avatar;

  return newItem;
}

export default createTemplate;

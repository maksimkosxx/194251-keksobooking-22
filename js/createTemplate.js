

const createTemplate = data => {

  let templatesCollection = [];

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

  data.map(item => {
    item.map(sub_item => {

      const dataOffer = sub_item.offer;
      const dataAvatar = sub_item.author.avatar;

      createElement(TITLE, dataOffer.title);
      createElement(ADDRESS, dataOffer.address);
      createElement(PRICE, `${dataOffer.price} ₽/ночь`);
      createElement(TYPE, getType(dataOffer.type));
      createElement(CAPACITY, `${dataOffer.rooms} комнаты для ${dataOffer.guests} гостей`);
      createElement(TIME, `Заезд после ${dataOffer.checkin}, выезд до ${dataOffer.checkout}`);
      getFeatures(FEATURES, dataOffer.features);
      createElement(DESCRIPTION, dataOffer.description);
      PHOTO.src = dataOffer.photos;
      PHOTO.alt = dataOffer.title;
      AVATAR.src = dataAvatar;

      templatesCollection.push(newItem)
    })
  })

  return templatesCollection;
}

export default createTemplate;

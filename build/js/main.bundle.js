/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/api.js":
/*!**************************!*\
  !*** ./source/js/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "setData": () => (/* binding */ setData)
/* harmony export */ });
/* harmony import */ var _change_filters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-filters.js */ "./source/js/change-filters.js");
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.js */ "./source/js/error.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./source/js/utils.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.js */ "./source/js/helpers.js");
/* harmony import */ var _create_message_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-message.js */ "./source/js/create-message.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation.js */ "./source/js/validation.js");







const URL = {
  get: 'https://22.javascript.pages.academy/keksobooking/data',
  post: 'https://22.javascript.pages.academy/keksobooking',
}

const getData = (cb) => {
  fetch(URL.get)
    .then((response) => {
      if(response.ok ) {
        return response.json()
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then(json => {
      cb(json);
      (0,_change_filters_js__WEBPACK_IMPORTED_MODULE_0__.default)(() => cb(json))
    })
    .catch(err => {
      (0,_error_js__WEBPACK_IMPORTED_MODULE_1__.default)(err);
    })
}

const setData = () => {
  _utils_js__WEBPACK_IMPORTED_MODULE_2__.mainForm.addEventListener('submit', (evt) => {

    evt.preventDefault();

    (0,_validation_js__WEBPACK_IMPORTED_MODULE_5__.checkPriceValidity)();
    (0,_validation_js__WEBPACK_IMPORTED_MODULE_5__.checkRoomsValidity)();

    const formData = new FormData(evt.target);

    fetch(URL.post,
      {
        method: 'POST',
        body: formData,
      })
      .then((response) => {
        if(response.ok) {
          _utils_js__WEBPACK_IMPORTED_MODULE_2__.mainForm.reset();
          _utils_js__WEBPACK_IMPORTED_MODULE_2__.mapFilterForm.reset();
          (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.setAddressValue)();
          (0,_create_message_js__WEBPACK_IMPORTED_MODULE_4__.default)('success');
        } else {
          throw new Error;
        }
      })
      .catch(() => (0,_create_message_js__WEBPACK_IMPORTED_MODULE_4__.default)('error'))
  })
}




/***/ }),

/***/ "./source/js/change-filters.js":
/*!*************************************!*\
  !*** ./source/js/change-filters.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./source/js/utils.js");
/* global _:readonly */


const RERENDER_DELAY = 500;

const changeFilters = (cb) => {

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapFilterForm.addEventListener('change', (_.throttle(() => cb(), RERENDER_DELAY)))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeFilters);


/***/ }),

/***/ "./source/js/create-element.js":
/*!*************************************!*\
  !*** ./source/js/create-element.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const createElement = (element, content) => {
  if (element.textContent.length) {
    element.textContent = content
  } else
    element.remove();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ }),

/***/ "./source/js/create-features.js":
/*!**************************************!*\
  !*** ./source/js/create-features.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const createFeaturesList = (template, array) => {
  template.innerHTML = ''
  if (array.length) {
    array.map(el => {
      const listItem = document.createElement('li');
      listItem.classList.add('popup__feature', `popup__feature--${el}`);
      template.appendChild(listItem);
    });
  } else {
    template.remove()
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFeaturesList);


/***/ }),

/***/ "./source/js/create-message.js":
/*!*************************************!*\
  !*** ./source/js/create-message.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./source/js/utils.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./source/js/helpers.js");



const createMessage = (selector) => {

  const messageId = `#${selector}`;
  const messageClass = `.${selector}`;
  const messageBtnClass = `${messageClass}__button`;
  const initTemplate = document.querySelector(messageId).content.cloneNode(true);
  const newMessage = initTemplate.querySelector(messageClass);
  const messageBtn = initTemplate.querySelector(messageBtnClass);
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.pageBody.appendChild(newMessage);

  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.handlerKeyDown)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.pageBody, newMessage);
  messageBtn ? (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.handlerClick)(messageBtn, newMessage) : (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.handlerClick)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.pageBody, newMessage);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMessage);


/***/ }),

/***/ "./source/js/create-photos.js":
/*!************************************!*\
  !*** ./source/js/create-photos.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createPhotosList = (list, item, array, alt) => {
  list.innerHTML = ''
  if (array.length) {
    array.map(link => {
      const listItem = item.cloneNode(true);
      listItem.src = link;
      listItem.alt = alt;
      list.appendChild(listItem);
    })
  } else {
    list.remove()
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPhotosList);


/***/ }),

/***/ "./source/js/create-popup.js":
/*!***********************************!*\
  !*** ./source/js/create-popup.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./source/js/helpers.js");
/* harmony import */ var _create_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-element.js */ "./source/js/create-element.js");
/* harmony import */ var _create_features_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-features.js */ "./source/js/create-features.js");
/* harmony import */ var _create_photos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-photos.js */ "./source/js/create-photos.js");





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

  (0,_create_element_js__WEBPACK_IMPORTED_MODULE_1__.default)(title, offer.title);
  (0,_create_element_js__WEBPACK_IMPORTED_MODULE_1__.default)(address, offer.address);
  (0,_create_element_js__WEBPACK_IMPORTED_MODULE_1__.default)(price, `${offer.price} ₽/ночь`);
  (0,_create_element_js__WEBPACK_IMPORTED_MODULE_1__.default)(type, _helpers_js__WEBPACK_IMPORTED_MODULE_0__.getType[offer.type]);
  (0,_create_element_js__WEBPACK_IMPORTED_MODULE_1__.default)(capacity, `${offer.rooms} комнаты для ${offer.guests} гостей`);
  (0,_create_element_js__WEBPACK_IMPORTED_MODULE_1__.default)(time, `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  (0,_create_features_js__WEBPACK_IMPORTED_MODULE_2__.default)(features, offer.features);
  (0,_create_element_js__WEBPACK_IMPORTED_MODULE_1__.default)(description, offer.description);
  (0,_create_photos_js__WEBPACK_IMPORTED_MODULE_3__.default)(photos, photo, offer.photos, offer.title);
  usePhoto.src = avatar;

  return newItem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPopup);


/***/ }),

/***/ "./source/js/error.js":
/*!****************************!*\
  !*** ./source/js/error.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./source/js/utils.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./source/js/helpers.js");





const mapFeatures = document.querySelector('.map__features');
const allMapFilters = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapFilterForm.querySelectorAll('.map__filter');
const allFieldset = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.querySelectorAll('fieldset');


const createApiResponse = err => {

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.classList.add('ad-form--disabled');
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.addDisabledValue)(allFieldset, true);
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapFilterForm.classList.add('map__filters--disabled');
  mapFeatures.classList.add('map__features--disabled');
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.addDisabledValue)(allMapFilters, true);

  const layout = document.createElement('div');
  layout.classList.add('message__layout')
  const popup =  document.createElement('div');
  popup.classList.add('message__popup')
  const close =  document.createElement('button');
  close.classList.add('message__close');
  close.tabIndex = 0;
  close.textContent = '×';
  const title =  document.createElement('h3');
  title.classList.add('message__title');
  title.textContent = err;
  const description =  document.createElement('p');
  description.classList.add('message__description');
  description.textContent = 'Данные не загружены, перезагрузите страницу или попробуйте позднее';

  popup.appendChild(close);
  popup.appendChild(title);
  popup.appendChild(description);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.pageBody.appendChild(layout);
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.pageBody.appendChild(popup);

  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.handlerKeyDown)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.pageBody, popup, layout);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.handlerClick)(layout, popup, layout);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.handlerClick)(close, popup, layout);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createApiResponse);


/***/ }),

/***/ "./source/js/filters.js":
/*!******************************!*\
  !*** ./source/js/filters.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./source/js/utils.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./source/js/helpers.js");



const anyValue = 'any';

const typeSelect = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapFilterForm.querySelector('#housing-type');
const priceSelect = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapFilterForm.querySelector('#housing-price');
const roomsSelect = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapFilterForm.querySelector('#housing-rooms');
const guestsSelect = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapFilterForm.querySelector('#housing-guests');
const featuresFieldset = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapFilterForm.querySelector('#housing-features');

const filtratedItem = (el, item, param) => el.value === anyValue ? true : el.value === item[param].toString();

const filtratedType = item => filtratedItem(typeSelect, item.offer, 'type');

const filtratedPrice = (item) => {
  const filteringPrice = _helpers_js__WEBPACK_IMPORTED_MODULE_1__.getFilterPrice[priceSelect.value];
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filtratedData);


/***/ }),

/***/ "./source/js/helpers.js":
/*!******************************!*\
  !*** ./source/js/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDisabledValue": () => (/* binding */ addDisabledValue),
/* harmony export */   "setAddressValue": () => (/* binding */ setAddressValue),
/* harmony export */   "isEscEvent": () => (/* binding */ isEscEvent),
/* harmony export */   "handlerClick": () => (/* binding */ handlerClick),
/* harmony export */   "handlerKeyDown": () => (/* binding */ handlerKeyDown),
/* harmony export */   "removeElement": () => (/* binding */ removeElement),
/* harmony export */   "getType": () => (/* binding */ getType),
/* harmony export */   "getMinPrice": () => (/* binding */ getMinPrice),
/* harmony export */   "getRoomsValue": () => (/* binding */ getRoomsValue),
/* harmony export */   "getFilterPrice": () => (/* binding */ getFilterPrice)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./source/js/utils.js");


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
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.fieldAddress.value = `${_utils_js__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS.lat}, ${_utils_js__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS.lng}`;
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const handlerKeyDown = (targetElement, item) => {
  targetElement.addEventListener('keydown', (evt) => {
    if(isEscEvent(evt)) {
      removeElement(item);
    }
  });
}

const handlerClick = (targetElement, item, additionalItem) => {
  targetElement.addEventListener('click', () => {
    removeElement(item, additionalItem)
  });
}

const removeElement = (item, additionalItem) => {

  document.removeEventListener('keydown', removeElement);
  document.removeEventListener('click', removeElement);

  item && item.remove();
  additionalItem ? additionalItem.remove() : '';
}




/***/ }),

/***/ "./source/js/map.js":
/*!**************************!*\
  !*** ./source/js/map.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./source/js/utils.js");
/* harmony import */ var _create_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-popup.js */ "./source/js/create-popup.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ "./source/js/filters.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.js */ "./source/js/helpers.js");
/* global L:readonly */






const POINTS_LIMIT = 10;

const btnReset = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.querySelector('.ad-form__reset');
const avatar = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.querySelector('.ad-form-header__preview > img');
const photo = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.querySelector('.ad-form__photo');

const initMap = L.map('map-canvas');

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

const mainPinMarker = L.marker(
  {
    lat: _utils_js__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS.lat,
    lng: _utils_js__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const mapPoints = L.layerGroup().addTo(initMap);

initMap.setView({
  lat: _utils_js__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS.lat,
  lng: _utils_js__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS.lng,
}, 9);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(initMap);

mainPinMarker.addTo(initMap);

_utils_js__WEBPACK_IMPORTED_MODULE_0__.fieldAddress.readOnly = true;
_utils_js__WEBPACK_IMPORTED_MODULE_0__.fieldAddress.value = `${_utils_js__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS.lat}, ${_utils_js__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS.lng}`;

mainPinMarker.addEventListener('mousemove', (evt) => {
  const coords = evt.target.getLatLng();
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.fieldAddress.value = `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;
});


const renderMarkers = (data) => {

  mapPoints.clearLayers();

  const resultData = (0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.default)(data).slice(0, POINTS_LIMIT);

  resultData.map(item => {

    const {lat, lng} = item.location;

    const popup = (0,_create_popup_js__WEBPACK_IMPORTED_MODULE_1__.default)(item);

    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({lat, lng}, {icon});

    marker
      .addTo(mapPoints)
      .bindPopup(popup,
        {
          keepInView: true,
        },
      );
  });
}

btnReset.addEventListener('click', ()=> {
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.reset();
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.priceInput.placeholder = '1000';
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapFilterForm.reset();
  avatar.src = 'img/muffin-grey.svg';
  photo.style.backgroundImage = '';
  mapPoints.clearLayers();
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.setAddressValue)();
  mainPinMarker.setLatLng(_utils_js__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS);
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMarkers);


/***/ }),

/***/ "./source/js/upload-image.js":
/*!***********************************!*\
  !*** ./source/js/upload-image.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./source/js/utils.js");



const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];


const uploadImage = (inputSelector, previewSelector, previewIsNotImg = false) => {

  const imageLoader = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.querySelector(inputSelector);
  const imagePreview = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.querySelector(previewSelector);

  imageLoader.addEventListener('change', () => {
    const file = imageLoader.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        if (!previewIsNotImg) {
          imagePreview.src = reader.result;
        } else {
          imagePreview.style.backgroundImage = `url(${reader.result}`;
        }

      })

      reader.readAsDataURL(file);
    }
  })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uploadImage);


/***/ }),

/***/ "./source/js/use-form.js":
/*!*******************************!*\
  !*** ./source/js/use-form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./source/js/utils.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./source/js/helpers.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation.js */ "./source/js/validation.js");
/* harmony import */ var _upload_image_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-image.js */ "./source/js/upload-image.js");






const timeinSelect = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.querySelector('#timein');
const timeoutSelect = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.querySelector('#timeout');


const useForm = () => {

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.typeFormInput.addEventListener('change' , (evt) => {
    const currentValue = evt.target.value;
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.priceInput.placeholder = _helpers_js__WEBPACK_IMPORTED_MODULE_1__.getMinPrice[currentValue].toString();
    (0,_validation_js__WEBPACK_IMPORTED_MODULE_2__.checkPriceValidity)();
  })

  timeinSelect.addEventListener('change', (evt) => {
    timeoutSelect.value = evt.target.value;
  })
  timeoutSelect.addEventListener('change', (evt) => {
    timeinSelect.value = evt.target.value;
  })


  const allCapacityOptions = _utils_js__WEBPACK_IMPORTED_MODULE_0__.capacitySelect.children;
  const options = [...allCapacityOptions];
  options.map(option => option.value !== '1' ? option.disabled = true : option.disabled = false);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.roomNumberSelect.addEventListener('change', (evt) => {

    const selectedValue = evt.target.value;
    options.map(option => option.disabled = true);

    _helpers_js__WEBPACK_IMPORTED_MODULE_1__.getRoomsValue[selectedValue].map((item) => {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__.capacitySelect.querySelector('option' + '[value="' + item + '"]').disabled = false;
    })
    ;(0,_validation_js__WEBPACK_IMPORTED_MODULE_2__.checkRoomsValidity)()
  });

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.priceInput.addEventListener('input', () => (0,_validation_js__WEBPACK_IMPORTED_MODULE_2__.checkPriceValidity)());

  (0,_upload_image_js__WEBPACK_IMPORTED_MODULE_3__.default)('#avatar', '.ad-form-header__preview > img');
  (0,_upload_image_js__WEBPACK_IMPORTED_MODULE_3__.default)('#images', '.ad-form__photo', true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useForm);


/***/ }),

/***/ "./source/js/utils.js":
/*!****************************!*\
  !*** ./source/js/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INIT_COORDS": () => (/* binding */ INIT_COORDS),
/* harmony export */   "pageBody": () => (/* binding */ pageBody),
/* harmony export */   "mainForm": () => (/* binding */ mainForm),
/* harmony export */   "mapFilterForm": () => (/* binding */ mapFilterForm),
/* harmony export */   "fieldAddress": () => (/* binding */ fieldAddress),
/* harmony export */   "priceInput": () => (/* binding */ priceInput),
/* harmony export */   "typeFormInput": () => (/* binding */ typeFormInput),
/* harmony export */   "roomNumberSelect": () => (/* binding */ roomNumberSelect),
/* harmony export */   "capacitySelect": () => (/* binding */ capacitySelect)
/* harmony export */ });
const INIT_COORDS = {
  lat: 35.68697,
  lng: 139.75394,
}

const pageBody = document.querySelector('body');

const mainForm = document.querySelector('.ad-form');
const mapFilterForm = document.querySelector('.map__filters');
const fieldAddress = mainForm.querySelector('#address');
const priceInput = mainForm.querySelector('#price');
const typeFormInput = mainForm.querySelector('#type');
const roomNumberSelect = mainForm.querySelector('#room_number');
const capacitySelect = mainForm.querySelector('#capacity');






/***/ }),

/***/ "./source/js/validation.js":
/*!*********************************!*\
  !*** ./source/js/validation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkPriceValidity": () => (/* binding */ checkPriceValidity),
/* harmony export */   "checkRoomsValidity": () => (/* binding */ checkRoomsValidity)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./source/js/utils.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./source/js/helpers.js");




const checkPriceValidity = () => {
  const inputValue = _utils_js__WEBPACK_IMPORTED_MODULE_0__.priceInput.value;
  const valueLimit = _helpers_js__WEBPACK_IMPORTED_MODULE_1__.getMinPrice[_utils_js__WEBPACK_IMPORTED_MODULE_0__.typeFormInput.value];

  if (inputValue < valueLimit) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.priceInput.setCustomValidity(`Цена должна не менее чем ${valueLimit} руб.`);
  }
  else {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.priceInput.setCustomValidity('');
  }
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.priceInput.reportValidity();
};

const checkRoomsValidity = () => {
  const roomGuests = _helpers_js__WEBPACK_IMPORTED_MODULE_1__.getRoomsValue[_utils_js__WEBPACK_IMPORTED_MODULE_0__.roomNumberSelect.value];
  const message = roomGuests.indexOf(+_utils_js__WEBPACK_IMPORTED_MODULE_0__.capacitySelect.value) === -1 ? 'Некорректное значение, выберите правильное' : '';
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.capacitySelect.setCustomValidity(message);
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-form.js */ "./source/js/use-form.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.js */ "./source/js/map.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ "./source/js/api.js");





(0,_use_form_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_api_js__WEBPACK_IMPORTED_MODULE_2__.getData)(_map_js__WEBPACK_IMPORTED_MODULE_1__.default);
(0,_api_js__WEBPACK_IMPORTED_MODULE_2__.setData)();

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map
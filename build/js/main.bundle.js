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






const getData = (cb) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
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

    const formData = new FormData(evt.target);

    fetch('https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      })
      .then((response) => {
        if(response.ok) {
          _utils_js__WEBPACK_IMPORTED_MODULE_2__.mainForm.reset();
          _utils_js__WEBPACK_IMPORTED_MODULE_2__.mapFilterForm.reset();
          (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.setAddressValue)();
          (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.createRespondingMessage)('success');
        } else {
          (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.createRespondingMessage)('error');
        }
      })
      .catch((err) => alert(err))
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

/***/ "./source/js/create-template.js":
/*!**************************************!*\
  !*** ./source/js/create-template.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./source/js/helpers.js");


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
    if (element.textContent.length > 0) {
      return element.textContent = content
    } else
      return element.remove();
  }

  const createFeaturesList = (template, array) => {
    template.innerHTML = ''
    if (array.length > 0) {
      array.map(el => {
        const listItem = document.createElement('li');
        listItem.classList.add('popup__feature', `popup__feature--${el}`);
        template.appendChild(listItem);
      });
    } else {
      template.remove()
    }
  }

  const createPhotosList = (list, array, alt) => {
    list.innerHTML = ''
    if (array.length > 0) {
      array.map(link => {
        const listItem = PHOTO.cloneNode(true);
        listItem.src = link;
        listItem.alt = alt;
        list.appendChild(listItem);
      })
    } else {
      return list.remove()
    }
  }

  const {offer} = data;
  const {avatar} = data.author;

  createElement(TITLE, offer.title);
  createElement(ADDRESS, offer.address);
  createElement(PRICE, `${offer.price} ₽/ночь`);
  createElement(TYPE, (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getType)(offer.type));
  createElement(CAPACITY, `${offer.rooms} комнаты для ${offer.guests} гостей`);
  createElement(TIME, `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  createFeaturesList(FEATURES, offer.features);
  createElement(DESCRIPTION, offer.description);
  createPhotosList(PHOTOS, offer.photos, offer.title);
  AVATAR.src = avatar;

  return newItem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTemplate);


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



const errorResponse = err => {

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.classList.add('ad-form--disabled');
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.addDisabledValue)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.allFieldset, true);
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapFilterForm.classList.add('map__filters--disabled');
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapFeatures.classList.add('map__features--disabled');
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.addDisabledValue)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.allMapFilters, true);

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
  description.textContent = 'Данные не загружены, перезагрузите страницу или попробуйте позднее'

  layout.addEventListener('click', () => {
    layout.remove();
    popup.remove();
  });
  close.addEventListener('click', () => {
    popup.remove();

    setTimeout(() => {
      layout.remove();
    }, 250)
  });
  popup && _utils_js__WEBPACK_IMPORTED_MODULE_0__.pageBody.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape' || evt.key === 'Esc') {
      popup.remove();

      setTimeout(() => {
        layout.remove();
      }, 250)
    }
  });

  popup.appendChild(close);
  popup.appendChild(title);
  popup.appendChild(description);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.pageBody.appendChild(layout);
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.pageBody.appendChild(popup);

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorResponse);


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




const Filters = (data) => {

  const filtrationItem = (el, item, param) => el.value === 'any' ? true : el.value === item[param].toString();

  const filtrationType = (item) => filtrationItem(_utils_js__WEBPACK_IMPORTED_MODULE_0__.typeSelect, item.offer, 'type');

  const filtrationPrice = (item) => {
    const filteringPrice = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getPrice)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.priceSelect.value);
    return filteringPrice ? item.offer.price >= filteringPrice.min && item.offer.price <= filteringPrice.max : true;
  };

  const filtrationRooms = (item) => filtrationItem(_utils_js__WEBPACK_IMPORTED_MODULE_0__.roomsSelect, item.offer, 'rooms');

  const filtrationGuests = (item) => filtrationItem(_utils_js__WEBPACK_IMPORTED_MODULE_0__.guestsSelect, item.offer, 'guests');

  const filtrationFeatures = (item) => {

    const checkedFeaturesItems = _utils_js__WEBPACK_IMPORTED_MODULE_0__.featuresFieldset.querySelectorAll('input:checked');

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);


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
/* harmony export */   "createRespondingMessage": () => (/* binding */ createRespondingMessage),
/* harmony export */   "getType": () => (/* binding */ getType),
/* harmony export */   "getMinPrice": () => (/* binding */ getMinPrice),
/* harmony export */   "getRoomsValue": () => (/* binding */ getRoomsValue),
/* harmony export */   "getPrice": () => (/* binding */ getPrice)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./source/js/utils.js");



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

const getMinPrice = (type) => {
  switch (type) {
    case 'flat':
      return 1000;
    case 'bungalow':
      return 0;
    case 'house':
      return 5000;
    case 'palace':
      return 10000;
  }
}

const getRoomsValue = (value) => {
  switch (value) {
    case '1':
      return ['1'];
    case '2':
      return ['1', '2'];
    case '3':
      return ['1', '2', '3'];
    case '100':
      return ['0'];
  }
}

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

const addDisabledValue = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    array[i].disabled = value;
  }
}

const setAddressValue = () => {
  setTimeout(()=> {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.fieldAddress.value = `${_utils_js__WEBPACK_IMPORTED_MODULE_0__.initCoords.lat}, ${_utils_js__WEBPACK_IMPORTED_MODULE_0__.initCoords.lng}`;
  }, 200)
};

const createRespondingMessage = (selector) => {
  const messageId = `#${selector}`;
  const messageClass = `.${selector}`;
  const messageBtnClass = `${messageClass}__button`;
  const initTemplate = document.querySelector(messageId).content.cloneNode(true);
  const newMessage = initTemplate.querySelector(messageClass);
  const messageBtn = initTemplate.querySelector(messageBtnClass);
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.pageBody.appendChild(newMessage);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.pageBody.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape' || evt.key === 'Esc') {
      newMessage.remove();
    }
  });
  if(messageBtn) {
    messageBtn.addEventListener('click', () => {
      newMessage.remove();
    });
  } else {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.pageBody.addEventListener('click', () => {
      newMessage.remove();
    });
  }
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
/* harmony import */ var _create_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-template.js */ "./source/js/create-template.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ "./source/js/filters.js");
/* global L:readonly */





_utils_js__WEBPACK_IMPORTED_MODULE_0__.initMap.setView({
  lat: _utils_js__WEBPACK_IMPORTED_MODULE_0__.initCoords.lat,
  lng: _utils_js__WEBPACK_IMPORTED_MODULE_0__.initCoords.lng,
}, 9);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(_utils_js__WEBPACK_IMPORTED_MODULE_0__.initMap);

_utils_js__WEBPACK_IMPORTED_MODULE_0__.mainPinMarker.addTo(_utils_js__WEBPACK_IMPORTED_MODULE_0__.initMap);

_utils_js__WEBPACK_IMPORTED_MODULE_0__.fieldAddress.readOnly = true;
_utils_js__WEBPACK_IMPORTED_MODULE_0__.fieldAddress.value = `${_utils_js__WEBPACK_IMPORTED_MODULE_0__.initCoords.lat}, ${_utils_js__WEBPACK_IMPORTED_MODULE_0__.initCoords.lng}`;

_utils_js__WEBPACK_IMPORTED_MODULE_0__.mainPinMarker.on('moveend', (evt) => {
  const coords = evt.target.getLatLng();
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.fieldAddress.value = `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;
});


const renderMarkers = (data) => {

  const POINTS_LIMIT = 10;

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapPoints.clearLayers();

  const resultData = (0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.default)(data).slice(0, POINTS_LIMIT);

  resultData.map(item => {

    const {lat, lng} = item.location;

    const popup = (0,_create_template_js__WEBPACK_IMPORTED_MODULE_1__.default)(item);

    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({lat, lng}, {icon});

    marker
      .addTo(_utils_js__WEBPACK_IMPORTED_MODULE_0__.mapPoints)
      .bindPopup(popup,
        {
          keepInView: true,
        },
      );
  });
}

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
/* harmony import */ var _upload_image_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-image.js */ "./source/js/upload-image.js");





const useForm = () => {
  const btnReset = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.querySelector('.ad-form__reset');
  const avatar = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.querySelector('.ad-form-header__preview > img');
  const photo = _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.querySelector('.ad-form__photo');


  _utils_js__WEBPACK_IMPORTED_MODULE_0__.typeFormInput.addEventListener('change' , (evt) => {
    const currentValue = evt.target.value;
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.priceInput.placeholder = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getMinPrice)(currentValue).toString();
  })

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.timeinSelect.addEventListener('change', (evt) => {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.timeoutSelect.value = evt.target.value;
  })
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.timeoutSelect.addEventListener('change', (evt) => {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.timeinSelect.value = evt.target.value;
  })


  const allCapacityOptions = _utils_js__WEBPACK_IMPORTED_MODULE_0__.capacitySelect.children;
  const options = [...allCapacityOptions];
  options.map(option => option.value !== '1' ? option.disabled = true : option.disabled = false);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.roomNumberSelect.addEventListener('change', (evt) => {

    const selectedValue = evt.target.value;
    options.map(option => option.disabled = true);

    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getRoomsValue)(selectedValue).map((item) => {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__.capacitySelect.querySelector('option' + '[value="' + item + '"]').disabled = false;
    })
  })

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.priceInput.addEventListener('input', (evt) => {

    const inputValue = evt.target.value;
    const LIMIT = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getMinPrice)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.typeFormInput.value);

    if (inputValue < LIMIT) {
      evt.target.setCustomValidity(`Цена должна не менее чем ${LIMIT} руб.`);
    }
    else {
      evt.target.setCustomValidity('');
    }

    evt.target.reportValidity();
  });

  (0,_upload_image_js__WEBPACK_IMPORTED_MODULE_2__.default)('#avatar', '.ad-form-header__preview > img');
  (0,_upload_image_js__WEBPACK_IMPORTED_MODULE_2__.default)('#images', '.ad-form__photo', true);

  btnReset.addEventListener('click', ()=> {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainForm.reset();
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.priceInput.placeholder = '1000';
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapFilterForm.reset();
    avatar.src = 'img/muffin-grey.svg';
    photo.style.backgroundImage = '';
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.mapPoints.clearLayers();
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.setAddressValue)();
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.mainPinMarker.setLatLng(_utils_js__WEBPACK_IMPORTED_MODULE_0__.initCoords);
  })

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
/* harmony export */   "pageBody": () => (/* binding */ pageBody),
/* harmony export */   "initCoords": () => (/* binding */ initCoords),
/* harmony export */   "initMap": () => (/* binding */ initMap),
/* harmony export */   "mainPinMarker": () => (/* binding */ mainPinMarker),
/* harmony export */   "mapPoints": () => (/* binding */ mapPoints),
/* harmony export */   "mainForm": () => (/* binding */ mainForm),
/* harmony export */   "mapFilterForm": () => (/* binding */ mapFilterForm),
/* harmony export */   "allMapFilters": () => (/* binding */ allMapFilters),
/* harmony export */   "allFieldset": () => (/* binding */ allFieldset),
/* harmony export */   "mapFeatures": () => (/* binding */ mapFeatures),
/* harmony export */   "fieldAddress": () => (/* binding */ fieldAddress),
/* harmony export */   "typeFormInput": () => (/* binding */ typeFormInput),
/* harmony export */   "priceInput": () => (/* binding */ priceInput),
/* harmony export */   "timeinSelect": () => (/* binding */ timeinSelect),
/* harmony export */   "timeoutSelect": () => (/* binding */ timeoutSelect),
/* harmony export */   "roomNumberSelect": () => (/* binding */ roomNumberSelect),
/* harmony export */   "capacitySelect": () => (/* binding */ capacitySelect),
/* harmony export */   "typeSelect": () => (/* binding */ typeSelect),
/* harmony export */   "priceSelect": () => (/* binding */ priceSelect),
/* harmony export */   "roomsSelect": () => (/* binding */ roomsSelect),
/* harmony export */   "guestsSelect": () => (/* binding */ guestsSelect),
/* harmony export */   "featuresFieldset": () => (/* binding */ featuresFieldset)
/* harmony export */ });
/* global L:readonly */

const pageBody = document.querySelector('body');

const initCoords = {
  lat: 35.68697,
  lng: 139.75394,
}

const initMap = L.map('map-canvas');

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

const mainPinMarker = L.marker(
  {
    lat: initCoords.lat,
    lng: initCoords.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
const mapPoints = L.layerGroup().addTo(initMap);

const mainForm = document.querySelector('.ad-form');
const mapFilterForm = document.querySelector('.map__filters');
const mapFeatures = document.querySelector('.map__features');
const allMapFilters = mapFilterForm.querySelectorAll('.map__filter');
const allFieldset = mainForm.querySelectorAll('fieldset');
const fieldAddress = mainForm.querySelector('#address');

const typeFormInput = mainForm.querySelector('#type');
const priceInput = mainForm.querySelector('#price');
const timeinSelect = mainForm.querySelector('#timein');
const timeoutSelect = mainForm.querySelector('#timeout');
const roomNumberSelect = mainForm.querySelector('#room_number');
const capacitySelect = mainForm.querySelector('#capacity');

const typeSelect = mapFilterForm.querySelector('#housing-type');
const priceSelect = mapFilterForm.querySelector('#housing-price');
const roomsSelect = mapFilterForm.querySelector('#housing-rooms');
const guestsSelect = mapFilterForm.querySelector('#housing-guests');
const featuresFieldset = mapFilterForm.querySelector('#housing-features');






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
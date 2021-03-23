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


export {
  pageBody,
  initCoords,
  initMap,
  mainPinMarker,
  mapPoints,
  mainForm,
  mapFilterForm,
  allMapFilters,
  allFieldset,
  mapFeatures,
  fieldAddress
}

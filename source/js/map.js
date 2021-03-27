/* global L:readonly */
import {initCoords, fieldAddress, mainForm, priceInput, mapFilterForm} from './utils.js';
import createPopup from './create-popup.js';
import Filters from './filters.js';
import {setAddressValue} from './helpers.js';



const initMap = L.map('map-canvas');

initMap.setView({
  lat: initCoords.lat,
  lng: initCoords.lng,
}, 9);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(initMap);

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

mainPinMarker.addTo(initMap);

fieldAddress.readOnly = true;
fieldAddress.value = `${initCoords.lat}, ${initCoords.lng}`;

mainPinMarker.on('moveend', (evt) => {
  const coords = evt.target.getLatLng();
  fieldAddress.value = `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;
});


const renderMarkers = (data) => {

  const POINTS_LIMIT = 10;

  mapPoints.clearLayers();

  const resultData = Filters(data).slice(0, POINTS_LIMIT);

  resultData.map(item => {

    const {lat, lng} = item.location;

    const popup = createPopup(item);

    const icon = L.icon({
      iconUrl: 'img/pin.svg',
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

const btnReset = mainForm.querySelector('.ad-form__reset');
const avatar = mainForm.querySelector('.ad-form-header__preview > img');
const photo = mainForm.querySelector('.ad-form__photo');

btnReset.addEventListener('click', ()=> {
  mainForm.reset();
  priceInput.placeholder = '1000';
  mapFilterForm.reset();
  avatar.src = 'img/muffin-grey.svg';
  photo.style.backgroundImage = '';
  mapPoints.clearLayers();
  setAddressValue();
  mainPinMarker.setLatLng(initCoords);
})

export default renderMarkers;

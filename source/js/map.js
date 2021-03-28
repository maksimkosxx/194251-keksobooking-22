/* global L:readonly */
import {INIT_COORDS, fieldAddress, mainForm, priceInput, mapFilterForm} from './utils.js';
import createPopup from './create-popup.js';
import filtratedData from './filters.js';
import {setAddressValue} from './helpers.js';


const POINTS_LIMIT = 10;

const btnReset = mainForm.querySelector('.ad-form__reset');
const avatar = mainForm.querySelector('.ad-form-header__preview > img');
const photo = mainForm.querySelector('.ad-form__photo');

const initMap = L.map('map-canvas');

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

const mainPinMarker = L.marker(
  {
    lat: INIT_COORDS.lat,
    lng: INIT_COORDS.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const mapPoints = L.layerGroup().addTo(initMap);

initMap.setView({
  lat: INIT_COORDS.lat,
  lng: INIT_COORDS.lng,
}, 9);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(initMap);

mainPinMarker.addTo(initMap);

fieldAddress.readOnly = true;
fieldAddress.value = `${INIT_COORDS.lat}, ${INIT_COORDS.lng}`;

mainPinMarker.addEventListener('mousemove', (evt) => {
  const coords = evt.target.getLatLng();
  fieldAddress.value = `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;
});


const renderMarkers = (data) => {

  mapPoints.clearLayers();

  const resultData = filtratedData(data).slice(0, POINTS_LIMIT);

  resultData.map(item => {

    const {lat, lng} = item.location;

    const popup = createPopup(item);

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
  mainForm.reset();
  priceInput.placeholder = '1000';
  mapFilterForm.reset();
  avatar.src = 'img/muffin-grey.svg';
  photo.style.backgroundImage = '';
  mapPoints.clearLayers();
  setAddressValue();
  mainPinMarker.setLatLng(INIT_COORDS);
})

export default renderMarkers;

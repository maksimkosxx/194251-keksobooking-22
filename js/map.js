/* global L:readonly */
import { initCoords, mainForm, fieldAddress, mapFilters } from './utils.js';
import {setAddressValue} from './helpers.js';
import createTemplate from './createTemplate.js';

const addDisabledValue = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    array[i].disabled = value;
  }
}

mainForm.classList.add('ad-form--disabled');

const allFieldset = mainForm.querySelectorAll('fieldset');
addDisabledValue(allFieldset, true);

mapFilters.classList.add('map__filters--disabled');

const mapFeatures = document.querySelector('.map__features');
mapFeatures.classList.add('map__features--disabled');

const allSelect = document.querySelectorAll('.map__filter');
addDisabledValue(allSelect, true);


const Map = (data) => {

  const checkData = data !== undefined;

  const map = L.map('map-canvas').on('load', () => {

    mainForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
    if(checkData) {
      mapFeatures.classList.remove('map__features--disabled');
    }
    addDisabledValue(allFieldset, false);
    addDisabledValue(allSelect, !checkData);

  });

  map.setView({
    lat: initCoords.lat,
    lng: initCoords.lng,
  }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

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

  mainPinMarker.addTo(map);

  fieldAddress.readOnly = true;
  fieldAddress.value = `${initCoords.lat}, ${initCoords.lng}`;

  mainPinMarker.on('moveend', (evt) => {
    const coords = evt.target.getLatLng();
    fieldAddress.value = `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;
  });

  const btnReset = document.querySelector('.ad-form__reset');

  btnReset.addEventListener('click', ()=> {
    mainForm.reset();
    setAddressValue();
    mainPinMarker.setLatLng(initCoords);
  })

  data && data.map(item => {

    const {lat, lng} = item.location;

    const popup = createTemplate(item);

    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker =  L.marker({lat, lng}, {icon});

    marker
      .addTo(map)
      .bindPopup(popup,
        {
          keepInView: true,
        },
      );
  });
}

export default Map;

/* global L:readonly */
import createTemplate from './createTemplate.js';

const initCoords = {
  lat: 35.68697,
  lng: 139.75394,
}

const addDisabledValue = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    array[i].disabled = value;
  }
}

const mainForm = document.querySelector('.ad-form');
mainForm.classList.add('ad-form--disabled');

const allFieldset = mainForm.querySelectorAll('fieldset');
addDisabledValue(allFieldset, true);

const mapFilters = document.querySelector('.map__filters');
mapFilters.classList.add('map__filters--disabled');

const allSelect = document.querySelectorAll('.map__filter');
addDisabledValue(allSelect, true);

const Map = (data) => {

  const map = L.map('map-canvas').on('load', () => {

    mainForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
    addDisabledValue(allFieldset, false);
    addDisabledValue(allSelect, false);

  });

  map.setView({
    lat: initCoords.lat,
    lng: initCoords.lng,
  }, 13);

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
      lat: 35.687023,
      lng: 139.757369,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.addTo(map);


  const fieldAddress = mainForm.querySelector('#address');
  fieldAddress.readOnly = true;
  fieldAddress.value = `${initCoords.lat}, ${initCoords.lng}`;

  mainPinMarker.on('moveend', (evt) => {
    const coords = evt.target.getLatLng();
    fieldAddress.value = `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;
  });

  data.map(item => {

    const {x: lat, y: lng} = item.location;

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

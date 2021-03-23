/* global L:readonly */
import { initCoords, initMap, mainPinMarker, mapPoints, fieldAddress } from './utils.js';
import createTemplate from './createTemplate.js';
import Filters from './filters.js';


initMap.setView({
  lat: initCoords.lat,
  lng: initCoords.lng,
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(initMap);

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

    const popup = createTemplate(item);

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

export default renderMarkers;

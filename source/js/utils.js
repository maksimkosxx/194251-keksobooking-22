const pageBody = document.querySelector('body');

const initCoords = {
  lat: 35.68697,
  lng: 139.75394,
}

const mainForm = document.querySelector('.ad-form');
const mapFilterForm = document.querySelector('.map__filters');
const fieldAddress = mainForm.querySelector('#address');
const priceInput = mainForm.querySelector('#price');


export {pageBody, initCoords, mainForm, mapFilterForm, fieldAddress, priceInput}


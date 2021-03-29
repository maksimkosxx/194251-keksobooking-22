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


export {
  INIT_COORDS,
  pageBody,
  mainForm,
  mapFilterForm,
  fieldAddress,
  priceInput,
  typeFormInput,
  roomNumberSelect,
  capacitySelect
}


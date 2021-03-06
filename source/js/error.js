import {mainForm, mapFilterForm, pageBody} from './utils.js';
import {addDisabledValue, handlerClick, handlerKeyDown} from './helpers.js';



const mapFeatures = document.querySelector('.map__features');
const allMapFilters = mapFilterForm.querySelectorAll('.map__filter');
const allFieldset = mainForm.querySelectorAll('fieldset');


const createApiResponse = err => {

  mainForm.classList.add('ad-form--disabled');
  addDisabledValue(allFieldset, true);
  mapFilterForm.classList.add('map__filters--disabled');
  mapFeatures.classList.add('map__features--disabled');
  addDisabledValue(allMapFilters, true);

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

  pageBody.appendChild(layout);
  pageBody.appendChild(popup);

  handlerKeyDown(pageBody, popup, layout);
  handlerClick(layout, popup, layout);
  handlerClick(close, popup, layout);
}

export default createApiResponse;

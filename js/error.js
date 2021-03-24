import {allFieldset, allMapFilters, mainForm, mapFeatures, mapFilterForm, pageBody} from './utils.js';
import {addDisabledValue} from './helpers.js';

const errorResponse = err => {

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
  pageBody.addEventListener('keydown', (evt) => {
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

  pageBody.appendChild(layout);
  pageBody.appendChild(popup);

}
export default errorResponse;

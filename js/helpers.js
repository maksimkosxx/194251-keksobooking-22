import {initCoords, fieldAddress, pageBody} from './utils.js';


const getMinPrice = (type) => {
  switch (type) {
    case 'flat':
      return 1000;
    case 'bungalow':
      return 0;
    case 'house':
      return 5000;
    case 'palace':
      return 10000;
  }
}

const getRoomsValue = (value) => {
  switch (value) {
    case '1':
      return ['1'];
    case '2':
      return ['1', '2'];
    case '3':
      return ['1', '2', '3'];
    case '100':
      return ['0'];
  }
}

const getPrice = (price) => {
  switch (price) {
    case 'low':
      return {min: 0, max: 10000};
    case 'middle':
      return {min: 10000, max: 50000};
    case 'high':
      return {min: 50000, max: Infinity};
  }
}

const addDisabledValue = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    array[i].disabled = value;
  }
}

const setAddressValue = () => {
  setTimeout(()=> {
    fieldAddress.value = `${initCoords.lat}, ${initCoords.lng}`;
  }, 200)
};

const createRespondingMessage = (selector) => {
  const messageId = `#${selector}`;
  const messageClass = `.${selector}`;
  const messageBtnClass = `${messageClass}__button`;
  const initTemplate = document.querySelector(messageId).content.cloneNode(true);
  const newMessage = initTemplate.querySelector(messageClass);
  const messageBtn = initTemplate.querySelector(messageBtnClass);
  pageBody.appendChild(newMessage);

  pageBody.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape' || evt.key === 'Esc') {
      newMessage.remove();
    }
  });
  if(messageBtn) {
    messageBtn.addEventListener('click', () => {
      newMessage.remove();
    });
  } else {
    pageBody.addEventListener('click', () => {
      newMessage.remove();
    });
  }
}
export {addDisabledValue, setAddressValue, createRespondingMessage, getMinPrice, getRoomsValue, getPrice}

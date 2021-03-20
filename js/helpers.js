import {initCoords, fieldAddress, pageBody} from './utils.js';


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
export {createRespondingMessage, setAddressValue}

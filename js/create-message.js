import {pageBody} from './utils.js';
import {handlerClick, handlerKeyDown} from './helpers.js';

const createMessage = (selector) => {

  const messageId = `#${selector}`;
  const messageClass = `.${selector}`;
  const messageBtnClass = `${messageClass}__button`;
  const initTemplate = document.querySelector(messageId).content.cloneNode(true);
  const newMessage = initTemplate.querySelector(messageClass);
  const messageBtn = initTemplate.querySelector(messageBtnClass);
  pageBody.appendChild(newMessage);

  handlerKeyDown(pageBody, newMessage);
  messageBtn ? handlerClick(messageBtn, newMessage) : handlerClick(pageBody, newMessage);
}

export default createMessage;

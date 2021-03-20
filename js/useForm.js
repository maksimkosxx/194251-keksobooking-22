import { mainForm } from './utils.js';
import { createRespondingMessage, setAddressValue } from './helpers.js';


mainForm.addEventListener('submit', (evt) => {

  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if(response.ok) {
        mainForm.reset();
        setAddressValue();
        createRespondingMessage('success');
      } else {
        createRespondingMessage('error');
      }
    })
    .catch((err) => alert(err))
})

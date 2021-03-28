
const createFeaturesList = (template, array) => {
  template.innerHTML = ''
  if (array.length) {
    array.map(el => {
      const listItem = document.createElement('li');
      listItem.classList.add('popup__feature', `popup__feature--${el}`);
      template.appendChild(listItem);
    });
  } else {
    template.remove()
  }
}
export default createFeaturesList;

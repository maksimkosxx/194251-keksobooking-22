
const createPhotosList = (list, item, array, alt) => {
  list.innerHTML = ''
  if (array.length) {
    array.map(link => {
      const listItem = item.cloneNode(true);
      listItem.src = link;
      listItem.alt = alt;
      list.appendChild(listItem);
    })
  } else {
    return list.remove()
  }
}

export default createPhotosList;

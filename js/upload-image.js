import {mainForm} from './utils.js';


const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];


const uploadImage = (inputSelector, previewSelector, previewIsNotImg = false) => {

  const imageLoader = mainForm.querySelector(inputSelector);
  const imagePreview = mainForm.querySelector(previewSelector);

  imageLoader.addEventListener('change', () => {
    const file = imageLoader.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        if (!previewIsNotImg) {
          imagePreview.src = reader.result;
        } else {
          imagePreview.style.backgroundImage = `url(${reader.result}`;
        }

      })

      reader.readAsDataURL(file);
    }
  })
}

export default uploadImage;

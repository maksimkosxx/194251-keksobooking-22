import {mapFilterForm} from './utils.js';


const changeFilters = (cb) => {

  mapFilterForm.addEventListener('change', (() => cb()))
}

export { changeFilters };

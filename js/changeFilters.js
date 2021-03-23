/* global _:readonly */
import {mapFilterForm} from './utils.js';

const RERENDER_DELAY = 500;

const changeFilters = (cb) => {

  mapFilterForm.addEventListener('change', (_.debounce(() => cb(), RERENDER_DELAY)))
}

export default changeFilters;

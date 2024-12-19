import {showData, showSortedDiscussedData, showTenRandomPhotos} from './api.js';
import {miniatureCreate} from './miniature.js';

const filters = document.querySelector('.img-filters');
const defaultButton = filters.querySelector('#filter-default');
const randomButton = filters.querySelector('#filter-random');
const discussedButton = filters.querySelector('#filter-discussed');

defaultButton.addEventListener('click', () => {
  showFilteredPhotos(defaultButton, showData);
});

randomButton.addEventListener('click', () => {
  showFilteredPhotos(randomButton, showTenRandomPhotos);
});

discussedButton.addEventListener('click', () => {
  showFilteredPhotos(discussedButton, showSortedDiscussedData);
});

function showFilteredPhotos(buttonFilter, callback) {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  buttonFilter.classList.add('img-filters__button--active');
  callback(miniatureCreate);
}



// import { getFromStorage } from '';
import { renderGalleryFilms } from './render-Gallery-Films';

const getFromStorage = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
  }
};

const refs = {
  queueButton: document.querySelector('.js-queue-button'),
  watchedButton: document.querySelector('.js-watched-button'),
};

refs.watchedButton.addEventListener('click', handleClickWatched);
refs.queueButton.addEventListener('click', handleClickQueue);

renderSavedFilms('watch');

function handleClickQueue() {
  renderSavedFilms('queue');
  removeDisabled(refs.watchedButton);
  setDisabled(refs.queueButton);
  refs.isWatchTabActive = false;
}

function handleClickWatched() {
  renderSavedFilms('watch');
  setDisabled(refs.watchedButton);
  removeDisabled(refs.queueButton);
  refs.isWatchTabActive = true;
}

function renderSavedFilms(name) {
  clearFilmList();
  const addedFilms = getFromStorage(name);
  if (addedFilms && addedFilms.length > 0) {
    renderGalleryFilms(addedFilms);
    refs.noFilmsMessage.classList.add('visually-hidden');
  } else {
    refs.noFilmsMessage.classList.remove('visually-hidden');
  }
}

function setDisabled(el) {
  el.setAttribute('disabled', '');
  el.classList.add('button-active');
}

function removeDisabled(el) {
  el.removeAttribute('disabled');
  el.classList.remove('button-active');
}

function clearFilmList() {
  refs.cardsContainer.innerHTML = '';
}

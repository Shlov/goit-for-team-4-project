// import { getFromStorage } from '';
// import { renderGalleryFilms } from './render-gallery-films';
import { load } from './local_storage';
import newsApiService from './fetch';
import { addListenerBtnYouTube } from './trailer';
import { onLoadLocalStrQuery } from './pagination-library';

const watchedButton = document.querySelector('.btn-watch');
const queueButton = document.querySelector('.btn-queue');
const galleryEl = document.querySelector('.gallery');
const ApiService = new newsApiService();

watchedButton.addEventListener('click', firstQueryToWatched);
queueButton.addEventListener('click', firstQueryToQueue);

function firstQueryToWatched() {
  onLoadLocalStrQuery('watch');
  addWatchListActive();
}

function firstQueryToQueue() {
  onLoadLocalStrQuery('queue');
  addQueueListActive();
}

// Отрисовка фильмов из списка watch
export function handleClick(data) {
  cleanHTML();  

  const arrWatched = data;
  arrWatched.forEach(film => {
    ApiService.getFilmDetails(film).then(data => {
      const markup = `<li class="card card-js" data-id="${data.id}">
      <div>
        <button data-id="${data.id}" class="button-youtube"></button>
      </div>
      <div class="card__wrap">
        <img
          class="card__img"
          src="https://image.tmdb.org/t/p/w500/${data.poster_path}"
          alt="${data.original_title}"
          width="395"
          height="574"
        />
        <h3 class="card__name">${data.title}</h3>
        <p class="card__info">
          ${data.genres[0].name} | ${data.release_date}<span class="card__rating">
            ${data.vote_average}
          </span>
        </p>
      </div>
    </li>`;
      galleryEl.insertAdjacentHTML('beforeend', markup);
    });
  });

  setTimeout(addListenerBtnYouTube, 500);
}

// Проверка состояния кнопок watch и queue
function addWatchListActive() {
  if (!watchedButton.classList.contains('active')) {
    watchedButton.classList.add('active');
    queueButton.classList.contains('active')
      ? queueButton.classList.remove('active')
      : null;
  }
}

function addQueueListActive() {
  if (!queueButton.classList.contains('active')) {
    queueButton.classList.add('active');
    watchedButton.classList.contains('active')
      ? watchedButton.classList.remove('active')
      : null;
  }
}

// Очистка страницы
function cleanHTML() {
  galleryEl.innerHTML = '';
}

// const getFromStorage = key => {
//   try {
//     return JSON.parse(localStorage.getItem(key));
//   } catch (error) {
//     console.error(error);
//   }
// };

// const refs = {
//   queueButton: document.querySelector('.js-queue-button'),
//   watchedButton: document.querySelector('.js-watched-button'),
// };

// refs.watchedButton.addEventListener('click', handleClickWatched);
// refs.queueButton.addEventListener('click', handleClickQueue);

// renderSavedFilms('watch');

// function handleClickQueue() {
//   renderSavedFilms('queue');
//   removeDisabled(refs.watchedButton);
//   setDisabled(refs.queueButton);
//   refs.isWatchTabActive = false;
// }

// function handleClickWatched() {
//   renderSavedFilms('watch');
//   setDisabled(refs.watchedButton);
//   removeDisabled(refs.queueButton);
//   refs.isWatchTabActive = true;
// }

// function renderSavedFilms(name) {
//   clearFilmList();
//   const addedFilms = getFromStorage(name);
//   if (addedFilms && addedFilms.length > 0) {
//     renderGalleryFilms(addedFilms);
//     refs.noFilmsMessage.classList.add('visually-hidden');
//   } else {
//     refs.noFilmsMessage.classList.remove('visually-hidden');
//   }
// }

// function setDisabled(el) {
//   el.setAttribute('disabled', '');
//   el.classList.add('button-active');
// }

// function removeDisabled(el) {
//   el.removeAttribute('disabled');
//   el.classList.remove('button-active');
// }

// function clearFilmList() {
//   refs.cardsContainer.innerHTML = '';
// }

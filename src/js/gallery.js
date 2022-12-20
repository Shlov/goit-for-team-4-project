import { renderGalleryFilms } from './render-gallery-films';
import { load } from './local_storage';
import newsApiService from './fetch';
import { addListenerBtnYouTube } from './trailer';

// renderSavedFilms('watch');

const watchedButton = document.querySelector('.btn-watch');
const queueButton = document.querySelector('.btn-queue');
const galleryEl = document.querySelector('.js-gallery');
const noFilmsMessage = document.querySelector('.alert__message');
const ApiService = new newsApiService();

watchedButton.addEventListener('click', handleClickWatched);
queueButton.addEventListener('click', handleClickQueue);

// Отрисовка фильмов из списка watch
function handleClickWatched() {
  cleanHTML();
  addWatchListActive();

  const arrWatched = load('watch');
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

// // Отрисовка фильмов из списка watch
function handleClickQueue() {
  cleanHTML();
  addQueueListActive();

  const arrQueue = load('queue');
  arrQueue.forEach(film => {
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

// Рендер сохраненных фильмов
// function renderSavedFilms(key) {
//   cleanHTML();
//   const addedFilms = localStorage.getItem(key);
//   if (addedFilms && addedFilms.length > 0) {
//     renderGalleryFilms(addedFilms);
//     noFilmsMessage.classList.add('visually-hidden');
//   } else {
//     noFilmsMessage.classList.remove('visually-hidden');
//   }
// }

// Очистка страницы
function cleanHTML() {
  galleryEl.innerHTML = '';
}

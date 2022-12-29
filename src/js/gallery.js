
import { load } from './local_storage';
import newsApiService from './fetch';
import { addListenerBtnYouTube } from './trailer';
import { onOpenModal } from './modal';

const watchedButton = document.querySelector('.btn-watch');
const queueButton = document.querySelector('.btn-queue');
const galleryEl = document.querySelector('.js-gallery-library');
const noFilmsMessage = document.querySelector('.alert__message');


watchedButton.addEventListener('click', handleClickWatched);
queueButton.addEventListener('click', handleClickQueue);


renderSavedFilms('watch');

// Отрисовка фильмов из списка watch
function handleClickWatched() {
  cleanHTML();
// >>>>>>> main
  addWatchListActive();

  const arrWatched = load('watch');
  arrWatched.forEach(film => {
    renderFilmLibrary(film);
  });

  setTimeout(addListenerBtnYouTube, 500);
}

// // Отрисовка фильмов из списка watch
function handleClickQueue() {
  const arrQueue = load('queue');
  if (arrQueue && arrQueue.length > 0) {
    cleanHTML();
    addQueueListActive();

    arrQueue.forEach(film => {
      renderFilmLibrary(film);
    });

    noFilmsMessage.classList.add('visually-hidden');
  } else {
    noFilmsMessage.classList.remove('visually-hidden');
  }

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

function renderSavedFilms(localBaseList) {
  const addedFilms = load(localBaseList);
  console.log(addedFilms);
  if (addedFilms && addedFilms.length > 0) {
    addedFilms.forEach(film => {
      addWatchListActive();

      renderFilmLibrary(film);
    });

    noFilmsMessage.classList.add('visually-hidden');
  } else {
    noFilmsMessage.classList.remove('visually-hidden');
  }
}

function renderFilmLibrary(film) {
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
    openModalLibrary()
  });
}


function openModalLibrary() {
  galleryEl.classList.add('film-list');
  if (galleryEl) {
    galleryEl.addEventListener('click', onOpenModal);
  }

 
}

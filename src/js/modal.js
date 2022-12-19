import newsApiService from './fetch';
import { test } from './local_storage';
import { murkupMovie } from './markupModal';

const newData = new newsApiService();

const cardContainer = document.querySelector('.modal-window');
const card = document.querySelector('.film-list');
const modal = document.querySelector('.modal-backdrop');

if (card) {
  card.addEventListener('click', onOpenModal);
}

function onOpenModal(event) {
  const selectedMovie = event.target.closest('li');
  // Получаю id
  const selectedMovieId = Number(selectedMovie.getAttribute('data-id'));

  if (event.target.nodeName !== 'BUTTON') {
    // Открываю окно
    openModal();
    //Получение данных о фильме в модалку
    newData.getFilmDetails(selectedMovieId).then(data => {
      console.log(data);
      renderModalContent(data);
      const closeBtn = document.querySelector('.js-close');
      closeBtn.addEventListener('click', onCloseModal);
      document.addEventListener('keydown', onEscBtn);
      document.addEventListener('click', onBackDrop);
      exportIdToLocalStorage(data);
    });
  }
}
function renderModalContent(data) {
  cardContainer.innerHTML = murkupMovie(data);
}
function openModal() {
  // Тут бы спинер добавить
  setTimeout(() => {
    modal.classList.remove('is-hidden');
  }, 300);
}

function onCloseModal() {
  modal.classList.add('is-hidden');
  cardContainer.innerHTML = '';
}

function onBackDrop(event) {
  if (event.target === modal) {
    onCloseModal();
  }
}

function onEscBtn(event) {
  if (event.key === 'Escape') {
    onCloseModal();
  }
}

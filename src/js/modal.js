import newsApiService from './fetch'
import { exportIdToLocalStorage } from './local_storage';
import { changeLanguage } from './switchLanguage';
import { murkupMovie } from './markupModal';

const newData = new newsApiService();

const cardContainer = document.querySelector('.modal-window');
const card = document.querySelector('.film-list');
const modal = document.querySelector('.modal-backdrop');
const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
    document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = '';
  },
};

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
  changeLanguage();
}
function openModal() {
  // Тут бы спинер добавить
  setTimeout(() => {
    modal.classList.remove('is-hidden');
    scrollController.disabledScroll();
  }, 300);
}

function onCloseModal() {
  modal.classList.add('is-hidden');
  scrollController.enabledScroll();
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

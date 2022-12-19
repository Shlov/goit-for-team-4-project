import newsApiService from './fetch';
import { test } from './local_storage';

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
      renderModalContent(data);
      const closeBtn = document.querySelector('.js-close');
      closeBtn.addEventListener('click', onCloseModal);
      document.addEventListener('keydown', onEscBtn);
      document.addEventListener('click', onBackDrop);
      test(data);
    });
  }
}
function openModal() {
  // Тут бы спинер добавить
  setTimeout(() => {
    modal.classList.remove('is-hidden');
  }, 300);
}

function onCloseModal() {
  modal.classList.add('is-hidden');
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

// Генерирование жанра

// const genresConverting = genresInfo => {
//   // const genresList = loadLs('genresList');
//   const genreArray = [];
//   genresInfo.map(genreId => {
//     genresList.map(genre => {
//       if (genreId === genre.id) {
//         genreArray.push(genre.name);
//       }
//     });
//   });
//   return genreArray.join(', ');
// };

// Функция для отрисовки модального окна

const murkupMovie = ({
  poster_path,
  popularity,
  vote_average,
  vote_count,
  original_title,
  genre_ids,
  overview,
}) => {
  return ` <button class="modal__btn-close js-close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
        />
      </svg>
    </button>
  <div class="modal__sidebar--left">
      <img class="modal__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}"width="395" height="574" />
    </div>

    <div class="modal__sidebar--right">
      <h2 class="modal__title">${original_title}</h2>
      <ul class="modal__list lst">
        <li class="modal__item">
          <p class="modal__heading">Vote / Votes</p>
          <p class="modal__txt">
            <span class="modal__vote">${vote_average}</span> /
            <span class="modal__votes">${vote_count}</span>
          </p>
        </li>
        <li class="modal__item">
          <p class="modal__heading">Popularity</p>
          <p class="modal__txt">${popularity}</p>
        </li>
        <li class="modal__item">
          <p class="modal__heading">Original Title</p>
          <p class="modal__txt">${original_title}</p>
        </li>
        <li class="modal__item">
          <p class="modal__heading">Genre</p>
          <p class="modal__txt"></p>
        </li>
      </ul>
      <h3 class="modal__subtitle">ABOUT</h3>
      <p class="modal__desc">${overview}</p>
      <div class="modal__box">
        <button type="button" class="modal__btn--left js-watched">add to Watched</button>
        <button type="button" class="modal__btn--right js-queue">add to queue</button>
      </div>
    </div>`;
};

// ${genresConverting(genre_ids)}

function renderModalContent(data) {
  cardContainer.innerHTML = murkupMovie(data);
}

const genresInfo = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

// // export const genresInfoUk = [
// //   { id: 28, name: 'Бойовик' },
// //   { id: 12, name: 'Пригоди' },
// //   { id: 16, name: 'Мультфільм' },
// //   { id: 35, name: 'Комедія' },
// //   { id: 80, name: 'Кримінал' },
// //   { id: 99, name: 'Документальний' },
// //   { id: 18, name: 'Драма' },
// //   { id: 10751, name: 'Сімейний' },
// //   { id: 14, name: 'Фентезі' },
// //   { id: 36, name: 'Історичний' },
// //   { id: 27, name: 'Жахи' },
// //   { id: 10402, name: 'Музика' },
// //   { id: 9648, name: 'Детектив' },
// //   { id: 10749, name: 'Мелодрама' },
// //   { id: 878, name: 'Фантастика' },
// //   { id: 10770, name: 'Телефільм' },
// //   { id: 53, name: 'Трилер' },
// //   { id: 10752, name: 'Військовий' },
// //   { id: 37, name: 'Вестерн' },
// // ];

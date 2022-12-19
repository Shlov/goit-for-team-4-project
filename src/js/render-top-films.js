import newsApiService from './fetch';
import axios from 'axios';
export { renderGalleryFilms };
import { addListenerBtnYouTube } from './trailer';

const ApiService = new newsApiService();
ApiService.fetchPopularMovie().then(data => {
  console.dir(data.results);
  renderGalleryFilms(data.results);
});

const refs = {
  card: document.querySelector('.film-list'),
};

function renderGalleryFilms(cards) {
  const markup = cards
    .map(card => {
      const {
        id,
        backdrop_path,
        genre_ids,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        vote_average,
      } = card;
      return `<li class="card card-js" data-id="${id}">
      <div>
        <button data-id="${id}" class="button-youtube"></button>
      </div>
      <div class="card__wrap">
        <img
          class="card__img"
          src="https://image.tmdb.org/t/p/w500${poster_path}"
          alt="${original_title}"
          width="395"
          height="574"
        />
        <h3 class="card__name">${title}</h3>
        <p class="card__info">
          ${genre_ids} | ${
        release_date.split('-')[0]
      }<span class="card__rating">
            ${vote_average}
          </span>
        </p>
      </div>
    </li>`;
    })
    .join('');
  refs.card.insertAdjacentHTML('beforeend', markup);
  addListenerBtnYouTube();
}

export const genresInfo = [
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

export const genresInfoUk = [
  { id: 28, name: 'Бойовик' },
  { id: 12, name: 'Пригоди' },
  { id: 16, name: 'Мультфільм' },
  { id: 35, name: 'Комедія' },
  { id: 80, name: 'Кримінал' },
  { id: 99, name: 'Документальний' },
  { id: 18, name: 'Драма' },
  { id: 10751, name: 'Сімейний' },
  { id: 14, name: 'Фентезі' },
  { id: 36, name: 'Історичний' },
  { id: 27, name: 'Жахи' },
  { id: 10402, name: 'Музика' },
  { id: 9648, name: 'Детектив' },
  { id: 10749, name: 'Мелодрама' },
  { id: 878, name: 'Фантастика' },
  { id: 10770, name: 'Телефільм' },
  { id: 53, name: 'Трилер' },
  { id: 10752, name: 'Військовий' },
  { id: 37, name: 'Вестерн' },
];

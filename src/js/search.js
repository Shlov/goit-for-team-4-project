// import { renderGalleryFilms } from './render-top-films';
// import newsApiService from './fetch'
import {
  detectedURLForPagination,
  obtainFetchDataForPagination,
} from './pagination-fetch';
import { changeLanguage } from './switchLanguage';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

// const search = document.querySelector('.btn__form-js');
// const keywords = document.querySelector('.inpt-js');
const form = document.querySelector('search-js');
// const list = document.querySelector('js-gallery');
// let results = [];

form.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const {
    query: { value: searchValue },
  } = evt.currentTarget.elements;

  if (!searchValue) {
    Notiflix.Notify.failure(
      'Search result not successful. Enter the correct movie name and'
    );
    return;
  }
  fetchSearchMovie(searchValue).then(data => renderGalleryFilms(data));
}

async function fetchSearchMovie(keywords = 'Avatar') {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=ab57a8d74b0df3fdba80a78e42f32d17&language=en&query=${keywords}&page=1&include_adult=false`
  )
    .then(resp => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    })
    .catch(err => console.error(err));
}

// search.addEventListener('click', e => {
//   e.preventDefault();

//   const nameMovie = keywords.value.trim();
//   if (nameMovie !== '') {
//     fetchSearchMovie(nameMovie).then(data => {
//       // console.log(data);
//       if (data.length === 0) {
//         Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');

//       } else {
//         renderGalleryFilms(data);
//       }
//     });
//   }
// });

export function renderGalleryFilms(cards) {
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
        <button data-id="${id}" class="button-youtube" type="button" aria-label="watch movie trailer"></button>
      </div>
      <div class="card__wrap">
      <img class="card__img" src='${
        poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : 'https://ik.imagekit.io/rqegzjddo/no-poster-avalible.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661766934161'
      }' alt="${original_title || title}" width="395" height="574">
      <h3 class="card__name lng-cardName">${original_title || title}</h3>
      <p class="card__info lng-cardInfo"> ${changeGenre(
        genresInfo,
        genre_ids
      )} | ${
        release_date.split('-')[0] || 'Coming soon'
      }<span class="card__rating"> ${vote_average} </span></p></div>
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

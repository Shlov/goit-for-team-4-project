// Import library
import { addListenerBtnYouTube } from "./trailer";

// Link on HTML / DOM elements
const imageGallaryRef = document.querySelector('.film-list');

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
      return `<li class="card card-js" data-id="${id}"> <div>
    <button data-id="${id}" class="button-youtube" type="button" aria-label="watch movie trailer"></button>
  </div><div class="card__wrap">
      <img class="card__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" width="395" height="574">
      <h3 class="card__name lng-cardName">${original_title}</h3>
      <p class="card__info lng-cardInfo"> ${genre_ids} | ${
        release_date.split('-')[0]
      }<span class="card__rating"> ${vote_average} </span></p></div>
  </li>`;
    })
    .join('');
  imageGallaryRef.insertAdjacentHTML('beforeend', markup);
  addListenerBtnYouTube();
}
import newsApiService from './fetch';
import axios from 'axios';
// export { renderGalleryFilms };

let page = 1;

const ApiService = new newsApiService();
ApiService.fetchPopularMovie().then(data => {
  if (data.page === 1) {
    console.dir(data.results);
    renderGalleryFilms(data.results);
  }
});

const refs = {
  card: document.querySelector('.film-list'),
};

function renderGalleryFilms(cards) {
  const markup = cards.map(card => {
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
    return  `<li class="card card-js" data-id="${id}">
    <a class="card__link lnk" href="#">
      <img class="card__img" src="${poster_path}" alt="${original_title}" width="395" height="574">
      <h3 class="card__name card__name-lang">${original_title}</h3>
      <p class="card__info card__info-lang"> ${genre_ids} | ${release_date}<span class="card__rating"> ${vote_average} </span></p>
    </a>
  </li>` }).join('')
  refs.card.insertAdjacentHTML('beforeend', markup);
}



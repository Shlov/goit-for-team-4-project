import newsApiService from './fetch';
import axios from 'axios';
// export { renderGalleryFilms };



const ApiService = new newsApiService();
ApiService.fetchPopularMovie().then(data => {
    console.dir(data.results);
    renderGalleryFilms(data.results);
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
    return  `<li class="card card-js" data-id="${id}"> <div>
    <button data-id="${id}" class="button-youtube"></button>
  </div><div class="card__wrap">
      <img class="card__img" src="${poster_path}" alt="${original_title}" width="395" height="574">
      <h3 class="card__name lng-cardName">${original_title}</h3>
      <p class="card__info lng-cardInfo"> ${genre_ids} | ${release_date}<span class="card__rating"> ${vote_average} </span></p></div>
  </li>` }).join('')
  refs.card.insertAdjacentHTML('beforeend', markup);
}



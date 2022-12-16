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
  card: document.querySelector('.gallery'),
};

function renderGalleryFilms(cards) {
  console.log(cards);
  const markup = cards.map(card => {
    const {
      id,
      backdrop_path,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      vote_average,
    } = card;
    return `<a class="gallery__link" href="">
    <img class="gallery--item__img" src="${poster_path}" alt="${title}" width = "300" />
        </a>` }).join('')
  refs.card.insertAdjacentHTML('beforeend', markup);
}



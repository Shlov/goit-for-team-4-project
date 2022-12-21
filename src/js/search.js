
import { renderGalleryFilms } from './render-gallery-films';
import NewsApiService from './fetch';
import {detectedURLForPagination, obtainFetchDataForPagination} from './pagination-fetch';

const search = document.querySelector('.btn__form-js');
const keywords = document.querySelector('.inpt-js');

const API_URL_SEARCH =
  'https://api.themoviedb.org/3/search/movie?api_key=ab57a8d74b0df3fdba80a78e42f32d17&language=en&query={keywords}&include_adult=false ';

// async fetchSearchMovie() {
//   try {
//     const url = ${BASE_URL}/search/movie?api_key=${API_KEY}&language=${currentHash}&query={keywords}&include_adult=false};
//     detectedURLForPagination(url);
//     const response = await axios.get(url);
//     obtainFetchDataForPagination(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }

search.addEventListener('click', e => {
  e.preventDefault();

  const searchMovie = `${API_URL_SEARCH}${keywords.value}`;
  if (keywords.value) {
    renderGalleryFilms(searchMovie);

    keywords.value = '';
  }
});

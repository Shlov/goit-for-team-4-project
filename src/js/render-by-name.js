const BASE_URL = 'https://api.themoviedb.org/3/'; // базове URL
const KEY = '00bb2c85647763d13c7f7e27b824373c'; // ключ API
const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // посилання на картинку
const API_URL = `${BASE_URL}trending/movie/day?api_key=${KEY}&page=${movieStrorage}`; // посилання на початковий рендер популярних фільмів
const BASE_FIND_WORD_URL = `https://api.themoviedb.org/3/search/movie?api_key=00bb2c85647763d13c7f7e27b824373c`; // посилання на пошук фільмів за назвою
// export const POPULAR_URL = `${BASE_URL}discover/movie/?sort_by=popularity.desc&api_key=${KEY}`;
const POPULAR_URL = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US`;

import { Loading, Notify } from 'notiflix';

// добавил page в параметр и в строку запроса!!!

function getMovieNameAPI(movie, page) {
  fetch(`${BASE_FIND_WORD_URL}&page=${page}&query=${movie}`)
    .then(response => {
      if (!response.ok) {
        throw (
          (new Error(response.status),
          Loading.custom('Loading...', {
            customSvgCode:
              '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><linearGradient id="myG"  fy="0" gradientTransform="rotate(60 .5 .5)"><stop offset="0" stop-color="#f15361"></stop><stop offset=".25" stop-color="#ffffff"><animate attributeName="offset" dur="2s" values="0;1;0"repeatCount="indefinite" /></stop><stop offset="1" stop-color="#f15361"/></linearGradient><path d="M0 0V12H16V0H0ZM3 11H1V9H3V11ZM3 7H1V5H3V7ZM3 3H1V1H3V3ZM12 11H4V1H12V11ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM15 3H13V1H15V3ZM6 3V9L10 6L6 3Z" fill="url(#myG)"/></svg>',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }))
        );
      }
      return response.json();
    })

    .then(data => {
      Loading.custom('Loading...', {
        customSvgCode:
          '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><linearGradient id="myG"  fy="0" gradientTransform="rotate(60 .5 .5)"><stop offset="0" stop-color="#f15361"></stop><stop offset=".25" stop-color="#ffffff"><animate attributeName="offset" dur="2s" values="0;1;0"repeatCount="indefinite" /></stop><stop offset="1" stop-color="#f15361"/></linearGradient><path d="M0 0V12H16V0H0ZM3 11H1V9H3V11ZM3 7H1V5H3V7ZM3 3H1V1H3V3ZM12 11H4V1H12V11ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM15 3H13V1H15V3ZM6 3V9L10 6L6 3Z" fill="url(#myG)"/></svg>',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      });

      console.log(data);
      if (data.results.length !== 0) {
        pasteContent(data.results);
      } else {
        Loading.custom('Loading...', {
          customSvgCode:
            '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><linearGradient id="myG"  fy="0" gradientTransform="rotate(60 .5 .5)"><stop offset="0" stop-color="#f15361"></stop><stop offset=".25" stop-color="#ffffff"><animate attributeName="offset" dur="2s" values="0;1;0"repeatCount="indefinite" /></stop><stop offset="1" stop-color="#f15361"/></linearGradient><path d="M0 0V12H16V0H0ZM3 11H1V9H3V11ZM3 7H1V5H3V7ZM3 3H1V1H3V3ZM12 11H4V1H12V11ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM15 3H13V1H15V3ZM6 3V9L10 6L6 3Z" fill="url(#myG)"/></svg>',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        });

        refs.list.innerHTML = `<h1 class="list__nofind">No movies found on request :(</h1>`;
      }
    })
    .catch(error => {
      console.log('error', error);
    })
    .finally(() => {
      Loading.remove(2000);
    });
}
//! Фетч фільмів по назві фільма

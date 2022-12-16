import { Loading, Notify } from 'notiflix';

const KEY = 'ab57a8d74b0df3fdba80a78e42f32d17'; // API KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // посилання на картинку
const API_URL = `${BASE_URL}trending/movie/day?api_key=${KEY}&page=${movieStrorage}`; // посилання на початковий рендер популярних фільмів
const BASE_FIND_WORD_URL = `https://api.themoviedb.org/3/search/movie?api_key=00bb2c85647763d13c7f7e27b824373c`; // посилання на пошук фільмів за назвою
// export const POPULAR_URL = `${BASE_URL}discover/movie/?sort_by=popularity.desc&api_key=${KEY}`;
const POPULAR_URL = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US`;

const refs = {
  list: document.querySelector('.movie-popular__list'), // це UL з куди вставляти розмітку
  input: document.querySelector('.input-form'), // це поле куди треба уводити
  headerBtn: document.querySelector('.btn__form-js'), // це кнопка відправки
  form: document.querySelector('.header__form'), // форма
};

async function getMovieNameAPI(movie, page) {
  await fetch(`${BASE_FIND_WORD_URL}&page=${page}&query=${movie}`)
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
      localStorage.setItem('totalItems', data.total_results);
      localStorage.setItem('itemsPerPage', data.results.length);
      if (data.results.length !== 0) {
        filterItem.filterForm.classList.add('is-hidden');
        pasteContent(data.results);
      } else {
        Loading.custom('Loading...', {
          customSvgCode:
            '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><linearGradient id="myG"  fy="0" gradientTransform="rotate(60 .5 .5)"><stop offset="0" stop-color="#f15361"></stop><stop offset=".25" stop-color="#ffffff"><animate attributeName="offset" dur="2s" values="0;1;0"repeatCount="indefinite" /></stop><stop offset="1" stop-color="#f15361"/></linearGradient><path d="M0 0V12H16V0H0ZM3 11H1V9H3V11ZM3 7H1V5H3V7ZM3 3H1V1H3V3ZM12 11H4V1H12V11ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM15 3H13V1H15V3ZM6 3V9L10 6L6 3Z" fill="url(#myG)"/></svg>',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        });
        refs.paginationDiv.classList.add('visually-hidden');
        Notify.failure(`Nothing was found for your request`);
        refs.list.innerHTML = ` <img src="${'https://cdn.dribbble.com/users/4266416/screenshots/8269080/media/69de53b0834d3b0c493f21d4ce773dfd.png'}"
        alt="no movies found" class="no__found">`;
      }
    })
    .catch(error => {
      console.log('error', error);
    })
    .finally(() => {
      Loading.remove(2000);
    });
}
function pasteContent(array) {
  const result = generateContent(array);
  refs.list.insertAdjacentHTML('beforeend', result);

  if (sliderActiv) {
    resetSlider();
  }
  refs.slickSlider.innerHTML = result;
  initializeSlider();
  sliderActiv = true;
}

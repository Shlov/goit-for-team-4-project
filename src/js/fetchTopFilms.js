// Запит найбільш популярних фільмів за останній тиждень.

import axios from 'axios';
export { fetchTopFilms };

axios.defaults.baseURL = ' https://api.themoviedb.org/3/';
const KEY = 'ab57a8d74b0df3fdba80a78e42f32d17';

async function fetchTopFilms() {
  const response = await axios.get(`trending/movie/week?api_key=${KEY}`);
  return response;
}

// Масив обєктів найбільш популярних фільмів за останній тиждень.
fetchTopFilms()
  .then(({ data }) => {
    console.dir(data);
  })
  .catch(error => console.log(error));

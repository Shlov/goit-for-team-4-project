import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ab57a8d74b0df3fdba80a78e42f32d17';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.lang = '';
  }
  // Запрос популярных фильмов на главную страницу
  async fetchPopularMovie() {
    try {
      const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&page=${this.page}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  // Запрос детальной информации по id для модалки
  async getFilmDetails(id) {
    try {
      // ? language ?
      const currentHash = localStorage.getItem('localStorageHash');
      let currentLanguage;
      if (currentHash == 'en') {
        currentLanguage = 'en';
      } else if (currentHash == 'ua') {
        currentLanguage = 'uk';
      }
      // ? language ?
      const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${currentLanguage}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  incrementPage() {
    this.page += 1;
  }
  decrementPage() {
    this.page -= 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

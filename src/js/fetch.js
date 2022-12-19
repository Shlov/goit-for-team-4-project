import axios from 'axios';
import {detectedURLForPagination, obtainFetchDataForPagination} from './pagination-fetch';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ab57a8d74b0df3fdba80a78e42f32d17';
const currentHash = localStorage.getItem('localStorageHash');

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.lang = '';
  }
  // Запрос популярных фильмов на главную страницу
  async fetchPopularMovie() {
    try {
      const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=${currentHash}&page=${this.page}`;
      detectedURLForPagination(url);
      const response = await axios.get(url);
      obtainFetchDataForPagination(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  // Запрос детальной информации по id для модалки
  async getFilmDetails(id) {
    try {
      const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${currentHash}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

// ? Допустимый hash
const allLanguages = ['en', 'uk'];

// ? Массив переведённых слов ?
const langArr = {
  webTitle: {
    uk: 'Фільмотека',
    en: 'Filmoteka',
  },

  headerTitle: {
    uk: 'Фільмотека',
    en: 'Filmoteka',
  },
  homepage: {
    uk: 'Домашня сторінка',
    en: 'Home',
  },
  myLibrary: {
    uk: 'Моя бібліотека',
    en: 'My library',
  },
  movieSearch: {
    uk: 'Пошук фильмів',
    en: 'Movie search',
  },
  languageChoose: {
    uk: 'Мова',
    en: 'Language',
  },
  watchBtn: {
    uk: 'Дивитися',
    en: 'Watch',
  },
  queue: {
    uk: 'Черга',
    en: 'queue',
  },
};
checkLocalStorageHash();

// ? Сохранение языка при переходе на новую страницу ?
function checkLocalStorageHash() {
  const currentHash = localStorage.getItem('localStorageHash');
  if (currentHash) {
    document.querySelector('title').innerHTML =
      langArr['webTitle'][currentHash];

    // ? Меняет на домашней странице placeholder в input ?
    const searchBar = document.querySelector('.inpt-js');
    if (searchBar) {
      searchBar.placeholder = langArr['movieSearch'][currentHash];
    }
    // ? Берёт перевод на слова, которые есть в массиве "langArr" ?
    for (let key in langArr) {
      let elem = document.querySelector('.lng-' + key);
      if (elem) {
        elem.textContent = langArr[key][currentHash];
      }
    }
  } else {
    changeLanguage();
  }
}

// ? open language list ?

const openBgButton = document.querySelector('.jsBgLangOpen');
const langList = document.querySelector('.jsLangList');

// ? Открыть/закрыть список языков ?
function openBgLang() {
  langList.classList.toggle('lang-hidden');
  langList.classList.toggle('lang-list-show');

  openBgButton.classList.toggle('lang-hidden');
}
function closeBgLang() {
  langList.classList.add('lang-hidden');
  langList.classList.toggle('lang-list-show');

  openBgButton.classList.toggle('lang-hidden');
}
// ? Флажки языков ?
const langUA = document.querySelector('.jsUA');
const langUK = document.querySelector('.jsUK');

openBgButton.addEventListener('click', openBgLang);
langUA.addEventListener('click', changeURLLanguageUK);
langUK.addEventListener('click', changeURLLanguageEN);

function changeURLLanguageUK() {
  // ? Перезаписывает нынешний hash в локальное хранилище ?
  location.href = window.location.pathname + '#' + 'uk';
  setItem: localStorage.setItem('localStorageHash', 'uk');
  changeLanguage();
  closeBgLang();
}
function changeURLLanguageEN() {
  // ? Перезаписывает нынешний hash в локальное хранилище ?
  location.href = window.location.pathname + '#' + 'en';
  setItem: localStorage.setItem('localStorageHash', 'en');
  changeLanguage();
  closeBgLang();
}
function changeLanguage() {
  let hash = window.location.hash;
  // ? Выделяем буквы из hash ?
  hash = hash.substr(1);
  setItem: localStorage.setItem('localStorageHash', hash);

  // ? Если пользователь попытался ввести неверный хеш вручную - перенаправляет на английскую версию ?
  if (!allLanguages.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  document.querySelector('title').innerHTML = langArr['webTitle'][hash];
  const searchBar = document.querySelector('.inpt-js');
  // ? Меняет на домашней странице placeholder в input ?
  if (searchBar) {
    searchBar.placeholder = langArr['movieSearch'][hash];
  }
  // ? Берёт перевод на слова, которые есть в массиве "langArr" ?
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.textContent = langArr[key][hash];
    }
  }
}
// ! fetch !

// import axios from 'axios';
// async function fetchImages() {
//   try {
//     const currentHash = localStorage.getItem('localStorageHash');
//     const API_KEY = 'ab57a8d74b0df3fdba80a78e42f32d17';
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/15?api_key=${API_KEY}&language=uk`
//     );
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchImages();

// const currentHash = localStorage.getItem('localStorageHash');

// ? Допустимый hash
const allLanguages = ['en', 'ua'];

// ? Массив переведённых слов ?
const langArr = {
  webTitle: {
    ua: 'Фільмотека',
    en: 'Filmoteka',
  },

  headerTitle: {
    ua: 'Фільмотека',
    en: 'Filmoteka',
  },
  homepage: {
    ua: 'Домашня сторінка',
    en: 'Home',
  },
  myLibrary: {
    ua: 'Моя бібліотека',
    en: 'My library',
  },
  movieSearch: {
    ua: 'Пошук фильмів',
    en: 'Movie search',
  },
  languageChoose: {
    ua: 'Мова',
    en: 'Language',
  },
  watchBtn: {
    ua: 'Дивитися',
    en: 'Watch',
  },
  queue: {
    ua: 'Черга',
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
}
function closeBgLang() {
  langList.classList.add('lang-hidden');
}
// ? Флажки языков ?
const langUA = document.querySelector('.jsUA');
const langUK = document.querySelector('.jsUK');

openBgButton.addEventListener('click', openBgLang);
langUA.addEventListener('click', changeURLLanguageUA);
langUK.addEventListener('click', changeURLLanguageUK);

function changeURLLanguageUA() {
  // ? Перезаписывает нынешний hash в локальное хранилище ?
  location.href = window.location.pathname + '#' + 'ua';
  setItem: localStorage.setItem('localStorageHash', 'ua');
  changeLanguage();
  closeBgLang();
}
function changeURLLanguageUK() {
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

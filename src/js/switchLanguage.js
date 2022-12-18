const allLanguages = ['en', 'ua'];

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
};

// ? open language list

const openBgButton = document.querySelector('.jsBgLangOpen');
const langList = document.querySelector('.jsLangList');

function openBgLang() {
  langList.classList.toggle('lang-hidden');
}
function closeBgLang() {
  langList.classList.add('lang-hidden');
}
const langUA = document.querySelector('.jsUA');
const langUK = document.querySelector('.jsUK');

openBgButton.addEventListener('click', openBgLang);
langUA.addEventListener('click', changeURLLanguageUA);
langUK.addEventListener('click', changeURLLanguageUK);

function changeURLLanguageUA() {
  location.href = window.location.pathname + '#' + 'ua';
  setItem: localStorage.setItem('localStorageHash', 'ua');
  changeLanguage();
  closeBgLang();
  // if (localStorage.getItem('localStorageHash') !== 'en') {
  //   langList.classList.add('lang-list-ua');
  //   langList.classList.remove('lang-list-uk');
  // }
  // for (let key in langArr) {
  //   let elem = document.querySelector('.lng-' + key);
  //   if (elem) {
  //     elem.innerHTML = langArr[key][ua];
  //   }
  // }
}
function changeURLLanguageUK() {
  location.href = window.location.pathname + '#' + 'en';
  setItem: localStorage.setItem('localStorageHash', 'en');
  changeLanguage();
  closeBgLang();
  // if (localStorage.getItem('localStorageHash') !== 'ua') {
  //   langList.classList.add('lang-list-uk');
  //   langList.classList.remove('lang-list-ua');
  // }
}
function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  setItem: localStorage.setItem('localStorageHash', hash);
  // console.log(localStorage.localStorageHash);

  if (!allLanguages.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  document.querySelector('title').innerHTML = langArr['webTitle'][hash];
  const searchBar = document.querySelector('.inpt-js');
  if (searchBar) {
    searchBar.placeholder = langArr['movieSearch'][hash];
  }

  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.textContent = langArr[key][hash];
    }
  }
}

changeLanguage();

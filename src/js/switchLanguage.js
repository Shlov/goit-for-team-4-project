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
};

// ? open language list

const openBgButton = document.querySelector('.jsBgLangOpen');
const langList = document.querySelector('.jsLangList');

openBgButton.addEventListener('click', openBgLang);

function openBgLang() {
  langList.classList.toggle('lang-hidden');
}

const langUA = document.querySelector('.jsUA');
const langUK = document.querySelector('.jsUK');

langUA.addEventListener('click', changeURLLanguageUA);
langUK.addEventListener('click', changeURLLanguageUK);

function changeURLLanguageUA() {
  location.href = window.location.pathname + '#' + 'ua';
  setItem: localStorage.setItem('localStorageHash', 'ua');
  changeLanguage();

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

  // for (let key in langArr) {
  //   let elem = document.querySelector('.lng-' + key);
  //   if (elem) {
  //     elem.innerHTML = langArr[key][ua];
  //   }
  // }
}
function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  setItem: localStorage.setItem('localStorageHash', hash);
  // console.log(localStorage.localStorageHash);

  if (!allLanguages.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  document.querySelector('title').innerHTML = langArr['webTitle'][hash];
}
changeLanguage();

// const select = document.querySelector('#switchLanguage');
const allLanguages = ['en', 'ua'];

// select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

// function changeLanguage() {
//   let hash = window.location.hash;
//   hash = hash.substr(1);
//   console.log(hash);
//   setItem: localStorage.setItem('localStorageHash', hash);
//   console.log(localStorage.localStorageHash);

//   if (!allLanguages.includes(hash)) {
//     location.href = window.location.pathname + '#en';
//     location.reload();
//   }

//   //   select.value = hash;
//   //   document.querySelector('title').innerHTML = langArr['webTitle'][hash];

//   for (let key in langArr) {
//     let elem = document.querySelector('.lng-' + key);
//     if (elem) {
//       elem.innerHTML = langArr[key][hash];

//       // //   document.querySelector('#firstInput').placeholder =
//       // //     langArr['firstPlaceholder'][hash];
//       // //   document.querySelector('#secondInput').placeholder =
//       // //     langArr['secondPlaceholder'][hash];
//     }
//   }
// }
// ! changeLanguage();

// // const ru = 'https://i.ibb.co/MCXYQD1/russia.png'
// const KZ = 'https://i.ibb.co/SyxxBx8/kazakhstan.png'
// const UK = 'https://i.ibb.co/rbcBCtd/united-kingdom.png'

const imgPlace = document.querySelector('.selected-lang-img');

const langImgs = document.querySelectorAll('ul.bgLang li img');
langImgs.forEach(img => {
  img.addEventListener('click', e => {
    let last = e.target.src;
    let next = imgPlace.src;
    imgPlace.src = last;
    e.target.src = next;
  });
});

const openBgButton = document.querySelector('.jsBgLangOpen');
const langList = document.querySelector('.jsLangList');

openBgButton.addEventListener('click', () => {
  if (!langList) {
    console.log('Return');
    return;
  } 
    openBgLang();
});
function openBgLang() {
  langList.classList.toggle('lang-hidden');
}

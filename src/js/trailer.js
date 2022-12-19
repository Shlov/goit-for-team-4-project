import * as basicLightbox from 'basiclightbox';
let trailer;
const bodyEl = document.querySelector('body');
let langTrailer = document.querySelector('.lng-languageChoose');

// Добавляет прослушиватель на карточки фильмов стартовой страницы 
export function addListenerBtnYouTube() {
  const btnYouTube = document.querySelectorAll('.button-youtube');
  btnYouTube.forEach(btn => btn.addEventListener('click', onPlayTrailer));
}

function onPlayTrailer(event) {
  selectLangTrailer(event);
}

// Запрос для получения ключа трейлера 
function fetchVideo(id, lang) {
  console.log(id);
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=ab57a8d74b0df3fdba80a78e42f32d17&append_to_response=videos&language=${lang}`
  )
    .then(resp => resp.json())
    .then(data => renderTrailer(data, lang));
}

// Обработка запроса для записи ключа трейлера
function renderTrailer(data, lang) {
  let key;
  if (lang === 'en') {
    data.videos.results.forEach(video => {
      video.name.includes('Official') && video.site.includes('YouTube')
        ? (key = video.key)
        : (key = 'WHeOZLmXxn8');
    });
  } else {
    data.videos.results.forEach(video => {
      video.name.includes('трейлер') && video.site.includes('YouTube')
        ? (key = video.key)
        : (key = 'WHeOZLmXxn8');
    });
  }

  openVideoModal(key);

  //   Закрытие по esc и mouse
  window.addEventListener('keydown', closeTrailerByEsc);
  window.addEventListener('click', closeTrailerByMouse);
}

// Открытие окна с трейлером

function openVideoModal(key = 'WHeOZLmXxn8') {
  trailer =
    basicLightbox.create(`<iframe class="video_frame" height="315" src="https://www.youtube.com/embed/${key}"
     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
     picture-in-picture" allowfullscreen></iframe>`);
  trailer.show();

   bodyEl.style.pointerEvents = 'none';
   bodyEl.style.overflowY = 'hidden';
}

  //   Закрытие по esc и mouse
function closeTrailerByEsc(event) {
  if (event.code === 'Escape') {
    trailer.close();
    window.removeEventListener('keydown', closeTrailerByEsc);
  }
  bodyEl.style.pointerEvents = 'auto';
  bodyEl.style.overflowY = 'auto';
}

function closeTrailerByMouse(event) {
  if (event) {
    trailer.close();
    window.removeEventListener('click', closeTrailerByMouse);
  }
  bodyEl.style.pointerEvents = 'auto';
  bodyEl.style.overflowY = 'auto';
}

// Выбор языка трейлера 
function selectLangTrailer(event) {
  langTrailer.textContent === 'Language'
    ? fetchVideo(event.path[2].dataset.id, 'en')
    : fetchVideo(event.path[2].dataset.id, 'ru');
}

// Функция для отрисовки модального окна
const murkupMovie = ({
  poster_path,
  popularity,
  vote_average,
  vote_count,
  original_title,
  genres,
  overview,
}) => {
  return ` <button class="modal__btn-close js-close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
        />
      </svg>
    </button>
  <div class="modal__sidebar--left">
      <img class="modal__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}"width="395" height="574" />
    </div>

    <div class="modal__sidebar--right">
      <h2 class="modal__title">${original_title}</h2>
      <ul class="modal__list lst">
        <li class="modal__item">
          <p class="modal__heading">Vote / Votes</p>
          <p class="modal__txt">
            <span class="modal__vote">${vote_average.toFixed(1)}</span> /
            <span class="modal__votes">${vote_count.toFixed(1)}</span>
          </p>
        </li>
        <li class="modal__item">
          <p class="modal__heading">Popularity</p>
          <p class="modal__txt">${popularity.toFixed(1)}</p>
        </li>
        <li class="modal__item">
          <p class="modal__heading">Original Title</p>
          <p class="modal__txt">${original_title}</p>
        </li>
        <li class="modal__item">
          <p class="modal__heading">Genre</p>
          <p class="modal__txt">${genresConverting(genres)}</p>
        </li>
      </ul>
      <h3 class="modal__subtitle">ABOUT</h3>
      <p class="modal__desc">${overview}</p>
      <div class="modal__box">
        <button type="button" class="modal__btn--left js-watched">add to Watched</button>
        <button type="button" class="modal__btn--right js-queue">add to queue</button>
      </div>
    </div>`;
};

// Генерирование жанра

function genresConverting(genres) {
  if (genres.length) {
    const genreArray = [];
    genres.map(genre => {
      genreArray.push(genre.name);
    });

    return genreArray.join(' / ');
  }
  return 'N/A';
}

export { murkupMovie };
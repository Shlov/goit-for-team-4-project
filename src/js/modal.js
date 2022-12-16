import newsApiService from './fetch';

// Функция для отрисовки модального окна

const ApiService = new newsApiService();

ApiService.fetchPopularMovie().then(data => console.log(data));

// // const cardContainer = document.querySelector('.js-modal');

// function modalMarkup(arr) {
//   const murkupMovie = arr
//     .map(
//       data => ` <div class="modal__sidebar--left">
//       <img class="modal__img" src="#" alt="" />
//     </div>

//     <div class="modal__sidebar--right">
//       <h2 class="modal__title"></h2>
//       <ul class="modal__list lst">
//         <li class="modal__item">
//           <p class="modal__heading">Vote / Votes</p>
//           <p class="modal__txt">
//             <span class="modal__vote"></span> /
//             <span class="modal__votes"></span>
//           </p>
//         </li>
//         <li class="modal__item">
//           <p class="modal__heading">Popularity</p>
//           <p class="modal__txt"></p>
//         </li>
//         <li class="modal__item">
//           <p class="modal__heading">Original Title</p>
//           <p class="modal__txt"></p>
//         </li>
//         <li class="modal__item">
//           <p class="modal__heading">Genre</p>
//           <p class="modal__txt"></p>
//         </li>
//       </ul>
//       <h3 class="modal__subtitle">ABOUT</h3>
//       <p class="modal__desc"></p>
//       <div class="modal__box">
//         <button type="button" class="modal__btn--left">add to Watched</button>
//         <button type="button" class="modal__btn--right">add to queue</button>
//       </div>
//     </div>`
//     )
//     .join();
//   cardContainer.insertAdjacentHTML('beforeend', markupGallery);
// }

// // const cardsId = event.target.closest('li');
// // const data = await moviesApiService.getFilmDetails(cardsId.id);
// // const trailer = await moviesApiService.getFilmVideo(cardsId.id);

// // Ключ API (v3 auth)
// // ab57a8d74b0df3fdba80a78e42f32d17

// // export const genresInfo = [
// //   { id: 28, name: 'Action' },
// //   { id: 12, name: 'Adventure' },
// //   { id: 16, name: 'Animation' },
// //   { id: 35, name: 'Comedy' },
// //   { id: 80, name: 'Crime' },
// //   { id: 99, name: 'Documentary' },
// //   { id: 18, name: 'Drama' },
// //   { id: 10751, name: 'Family' },
// //   { id: 14, name: 'Fantasy' },
// //   { id: 36, name: 'History' },
// //   { id: 27, name: 'Horror' },
// //   { id: 10402, name: 'Music' },
// //   { id: 9648, name: 'Mystery' },
// //   { id: 10749, name: 'Romance' },
// //   { id: 878, name: 'Science Fiction' },
// //   { id: 10770, name: 'TV Movie' },
// //   { id: 53, name: 'Thriller' },
// //   { id: 10752, name: 'War' },
// //   { id: 37, name: 'Western' },
// // ];

// // export const genresInfoUk = [
// //   { id: 28, name: 'Бойовик' },
// //   { id: 12, name: 'Пригоди' },
// //   { id: 16, name: 'Мультфільм' },
// //   { id: 35, name: 'Комедія' },
// //   { id: 80, name: 'Кримінал' },
// //   { id: 99, name: 'Документальний' },
// //   { id: 18, name: 'Драма' },
// //   { id: 10751, name: 'Сімейний' },
// //   { id: 14, name: 'Фентезі' },
// //   { id: 36, name: 'Історичний' },
// //   { id: 27, name: 'Жахи' },
// //   { id: 10402, name: 'Музика' },
// //   { id: 9648, name: 'Детектив' },
// //   { id: 10749, name: 'Мелодрама' },
// //   { id: 878, name: 'Фантастика' },
// //   { id: 10770, name: 'Телефільм' },
// //   { id: 53, name: 'Трилер' },
// //   { id: 10752, name: 'Військовий' },
// //   { id: 37, name: 'Вестерн' },
// // ];

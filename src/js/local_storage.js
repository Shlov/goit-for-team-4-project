import { Notify } from 'notiflix/build/notiflix-notify-aio';
let dataForLocalStorage = null;
let langTrailer = document.querySelector('.lng-languageChoose');

function save(key, value) {
  try {
    const arrForLocal = JSON.parse(localStorage.getItem(key));
    arrForLocal.push(value);
    const saveValue = JSON.stringify(arrForLocal);
    localStorage.setItem(key, saveValue);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function remove(key) {
  try {
    const serializedState = localStorage.removeItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Remove state error:', error.message);
  }
}

// Активация кнопок watch и Queue c последующей установкой прослушивателей
export function exportIdToLocalStorage({ id }) {
  dataForLocalStorage = id;

  const btnAddToWatch = document
    .querySelector('.js-watched')
    .addEventListener('click', onAddToWatch);
  const btnAddToQueue = document
    .querySelector('.js-queue')
    .addEventListener('click', onAddToQueue);
  addQueueListActive(id);
  addWatchListActive(id);
}

// Добавляет фильм в список для просмотра и просмотренных
function onAddToWatch() {
  checkEmptyWatchListInLocalStorage();
  checkEmptyQueueListInLocalStorage();

  checkFullWatchListInLocalStorage();

  JSON.parse(localStorage.getItem('watch')).includes(dataForLocalStorage)
    ? Notify.warning('Этот фильм уже в списке для просмотра')
    : save('watch', dataForLocalStorage);

  addWatchListActive(dataForLocalStorage);
  addQueueListActive(dataForLocalStorage);
}

function onAddToQueue() {
  checkEmptyWatchListInLocalStorage();
  checkEmptyQueueListInLocalStorage();

  checkFullQueueListInLocalStorage();

  JSON.parse(localStorage.getItem('queue')).includes(dataForLocalStorage)
    ? Notify.warning('Этот фильм уже Вами просмотрен')
    : save('queue', dataForLocalStorage);

  addQueueListActive(dataForLocalStorage);
  addWatchListActive(dataForLocalStorage);
}
// Проверяет наличие массива в localeStorage
function checkEmptyWatchListInLocalStorage() {
  if (!JSON.parse(localStorage.getItem('watch'))) {
    localStorage.setItem('watch', '[]');
  }
}

function checkEmptyQueueListInLocalStorage() {
  if (!JSON.parse(localStorage.getItem('queue'))) {
    localStorage.setItem('queue', '[]');
  }
}
// Изменяет стили кнопок в зависимости от localStorage
function addWatchListActive(id) {
  checkEmptyQueueListInLocalStorage();
  checkEmptyWatchListInLocalStorage();

  const btnAddToWatch = document.querySelector('.js-watched');
  const btnAddToQueue = document.querySelector('.js-queue');
  const arrCheckValue = JSON.parse(localStorage.getItem('watch'));

  if (arrCheckValue.includes(id)) {
    langTrailer.textContent === 'Language'
      ? (btnAddToWatch.textContent = 'REMOVE FROM WATCHED')
      : (btnAddToWatch.textContent = 'Фільм у черзі на перегляд');
    btnAddToWatch.classList.add('js-watched--active');
  } else {
    langTrailer.textContent === 'Language'
      ? (btnAddToWatch.textContent = 'ADD TO WATCHED')
      : (btnAddToWatch.textContent = 'Додати до перегляду');
    // btnAddToWatch.textContent = 'ADD TO WATCHED';
    btnAddToWatch.classList.remove('js-watched--active');
  }
}

function addQueueListActive(id) {
  checkEmptyQueueListInLocalStorage();
  checkEmptyWatchListInLocalStorage();

  const btnAddToWatch = document.querySelector('.js-watched');
  const btnAddToQueue = document.querySelector('.js-queue');
  const arrCheckValue = JSON.parse(localStorage.getItem('queue'));

  if (arrCheckValue.includes(id)) {
    langTrailer.textContent === 'Language'
      ? (btnAddToQueue.textContent = 'REMOVE FROM Queue')
      : (btnAddToQueue.textContent = 'Переглянуто');
    btnAddToQueue.classList.add('js-watched--active');
  } else {
    langTrailer.textContent === 'Language'
      ? (btnAddToQueue.textContent = 'Queue')
      : (btnAddToQueue.textContent = 'Переглянуто');
    btnAddToQueue.classList.remove('js-watched--active');
  }
}

// Проверяет наличие фильма в localStorage
function checkFullWatchListInLocalStorage() {
  const arrCheck = JSON.parse(localStorage.getItem('queue'));

  if (arrCheck.includes(dataForLocalStorage)) {
    const index = arrCheck.indexOf(dataForLocalStorage);
    const arrRemoved = arrCheck.splice(index, 1);
    rewriteAfterCheck('queue', arrCheck);
  }
}

function checkFullQueueListInLocalStorage() {
  const arrCheck = JSON.parse(localStorage.getItem('watch'));

  if (arrCheck.includes(dataForLocalStorage)) {
    const index = arrCheck.indexOf(dataForLocalStorage);
    const arrRemoved = arrCheck.splice(index, 1);
    rewriteAfterCheck('watch', arrCheck);
  }
}

function rewriteAfterCheck(key, value) {
  try {
    localStorage.removeItem(key);
    const saveValue = JSON.stringify(value);
    localStorage.setItem(key, saveValue);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

export { load, save, remove };

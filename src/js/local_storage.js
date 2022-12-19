import { Notify } from 'notiflix/build/notiflix-notify-aio';
let dataForLocalStorage = null;

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

function saveAfterCheck(key, value) {
  try {
    localStorage.removeItem(key);
    const saveValue = JSON.stringify(value);
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

// function remove(key) {
//   try {
//     const serializedState = localStorage.removeItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Remove state error:', error.message);
//   }
// }

export function test({ id }) {
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

export function onAddToWatch() {
  checkWatchListInLocalStorage();
  checkQueueListInLocalStorage();
  const arrCheck = JSON.parse(localStorage.getItem('queue'));
  if (arrCheck.includes(dataForLocalStorage)) {
    const index = arrCheck.indexOf(dataForLocalStorage);
    const arrRemoved = arrCheck.splice(index, 1);
    saveAfterCheck('queue', arrCheck);
  }

  JSON.parse(localStorage.getItem('watch')).includes(dataForLocalStorage)
    ? Notify.warning('Этот фильм уже в списке для просмотра')
    : save('watch', dataForLocalStorage);
  addWatchListActive(dataForLocalStorage);
  addQueueListActive(dataForLocalStorage);
}

export function onAddToQueue() {
  checkWatchListInLocalStorage();
  checkQueueListInLocalStorage();
  const arrCheck = JSON.parse(localStorage.getItem('watch'));
  if (arrCheck.includes(dataForLocalStorage)) {
    const index = arrCheck.indexOf(dataForLocalStorage);
    const arrRemoved = arrCheck.splice(index, 1);
    saveAfterCheck('watch', arrCheck);
  }

  JSON.parse(localStorage.getItem('queue')).includes(dataForLocalStorage)
    ? Notify.warning('Этот фильм уже Вами просмотрен')
    : save('queue', dataForLocalStorage);
  addQueueListActive(dataForLocalStorage);
  addWatchListActive(dataForLocalStorage);
}

function checkWatchListInLocalStorage() {
  if (!JSON.parse(localStorage.getItem('watch'))) {
    localStorage.setItem('watch', '[]');
  }
}

function checkQueueListInLocalStorage() {
  if (!JSON.parse(localStorage.getItem('queue'))) {
    localStorage.setItem('queue', '[]');
  }
}

//   if (JSON.parse(localStorage.getItem('watch')).id === dataForLocalStorage.id) {
//     Notify.warning('Такой фильм уже в избранных');
//   }
//   save('watch', dataForLocalStorage);
//   console.log(JSON.parse(localStorage.getItem('watch')));

export function addWatchListActive(id) {
  checkQueueListInLocalStorage();
  checkWatchListInLocalStorage();
  const btnAddToWatch = document.querySelector('.js-watched');
  const btnAddToQueue = document.querySelector('.js-queue');
  const arrCheckValue = JSON.parse(localStorage.getItem('watch'));
  if (arrCheckValue.includes(id)) {
    btnAddToWatch.textContent = 'REMOVE FROM WATCHED';
    btnAddToWatch.classList.add('js-watched--active');
  } else {
    btnAddToWatch.textContent = 'ADD TO WATCHED';
    btnAddToWatch.classList.remove('js-watched--active');
  }

  //   btnAddToQueue.textContent = 'Queue';

  //   btnAddToQueue.classList.remove('js-watched--active');
}

export function addQueueListActive(id) {
  checkQueueListInLocalStorage();
  checkWatchListInLocalStorage();
  const btnAddToWatch = document.querySelector('.js-watched');
  const btnAddToQueue = document.querySelector('.js-queue');
  const arrCheckValue = JSON.parse(localStorage.getItem('queue'));
  if (arrCheckValue.includes(id)) {
    btnAddToQueue.textContent = 'REMOVE FROM QUEUE';
    btnAddToQueue.classList.add('js-watched--active');
  } else {
    btnAddToQueue.textContent = 'Queue';
    btnAddToQueue.classList.remove('js-watched--active');
  }

  //   btnAddToWatch.textContent = 'ADD TO WATCHED';

  //   btnAddToWatch.classList.remove('js-watched--active');
  //   btnAddToQueue.classList.add('js-watched--active');
}



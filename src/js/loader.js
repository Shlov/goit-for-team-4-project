const loaderEl = document.querySelector('.loader-js');

// Запускає Loader при створенні запиту (додати у відповідну функцію)
function startLoader() {
  loaderEl.removeAttribute('hidden');
}

//Виключає Loader при отримані даних для відмальовки катрок фільмів
function offLoader() {
  loaderEl.setAttribute('hidden', true);
}

// Перевірка роботи Loader-а

// startLoader();
// setTimeout(offLoader, 1000);
// setTimeout(startLoader, 2000);
// setTimeout(offLoader, 3000);
// Load inner sources
import createTypicalPaginationNavigation from './pagination-create-typical-nav';
import createMobilePaginationNavigation from './pagination-create-mobile-nav';
import NewsApiService from './fetch';
import { renderGalleryFilms } from './render-gallery-films';

// Create starting pagination panel
const startFetch = new NewsApiService();
startFetch.fetchPopularMovie().then(data => changeViewportAndData(data));

// Link on HTML / DOM elements
const paginationRef = document.querySelector('.js-pagination');
const imageGallaryRef = document.querySelector('.film-list')

// Support pagination data
let paginationData = {
  page: 0,
  totalPages: 0,
};

// export function switchPagination(num) {
//     if (num === 0) {
//         startFetch.fetchPopularMovie().then(data => console.log('My-data', data.total_pages, data.page));
//     } else if (num === 1) {
//         console.log("запустилась 1 версія");
//     }
// }

// Here starting panel pagination
function changeViewportAndData(data) {
  // imageGallaryRef.innerHTML = '';
  let newData;
  if (!data.total_results) {
    return;
  } else if (data.total_pages > 500) {
    newData = {
      page: data.page,
      totalPages: 500,
    };
  } else {
    newData = {
      page: data.page,
      totalPages: data.total_pages,
    };
  }

  paginationData = newData;
  paginationRef.innerHTML = '';
  if (window.innerWidth >= 480) {
    createTypicalPaginationNavigation(newData); // Viewport width for mobile device
  } else {
    createMobilePaginationNavigation(newData); // Viewport width for tab and desktop device
  }
}

// Change form on resize viewport
window.addEventListener('resize', onChangeWindow);
function onChangeWindow(evt) {
  paginationRef.innerHTML = '';
  if (evt.target.innerWidth >= 480) {
    createTypicalPaginationNavigation(paginationData);
  } else {
    createMobilePaginationNavigation(paginationData);
  }
}

// Behavior pagination panel and render image(s) when clicking on the button
paginationRef.addEventListener('click', onPaginationNavigationClick);
function onPaginationNavigationClick(evt) {
  const { tagName, name, textContent } = evt.target;

  if (tagName !== 'BUTTON') {
    return;
  } else {
    if (
      name === 'number-page' ||
      name === 'first-page' ||
      name === 'last-page'
    ) {
      startFetch.queryPage = textContent;
      paginationData.page = textContent;
      imageGallaryRef.innerHTML = '';
      startFetch.fetchPopularMovie().then(data => {
        changeViewportAndData(data);
        renderGalleryFilms(data.results);
      });
    } else if (name === 'pre-page') {
      paginationData.page -= 1;
      startFetch.queryPage = paginationData.page;
      imageGallaryRef.innerHTML = '';
      startFetch.fetchPopularMovie().then(data => {
        changeViewportAndData(data);
        renderGalleryFilms(data.results);
      });
    } else if (name === 'next-page') {
      paginationData.page += 1;
      startFetch.queryPage = paginationData.page;
      imageGallaryRef.innerHTML = '';
      startFetch.fetchPopularMovie().then(data => {
        changeViewportAndData(data);
        renderGalleryFilms(data.results);
      });
    }
  }
}

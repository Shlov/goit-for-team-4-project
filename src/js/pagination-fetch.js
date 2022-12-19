// Load inner sources
import createTypicalPaginationNavigation from './pagination-create-typical-nav';
import createMobilePaginationNavigation from './pagination-create-mobile-nav';
import { renderGalleryFilms } from './render-gallery-films';
import axios from 'axios';

// Link on HTML / DOM elements
const paginationRef = document.querySelector('.js-pagination');
const imageGallaryRef = document.querySelector('.film-list');

// Support pagination data
let paginationData = {
  page: 0,
  totalPages: 0,
};
let paginationURL = '';

export function detectedURLForPagination(url) {
  paginationURL = url;
}

export function obtainFetchDataForPagination(data) {
  let paginationPAGE = data.page;
  let paginationTOTALPAGES = data.total_results;

  changeViewportAndData(paginationPAGE, paginationTOTALPAGES);
}

// Here starting panel pagination
// where: p is page, tP is total pages
function changeViewportAndData(p, tP) {
  // imageGallaryRef.innerHTML = '';
  let newData;
  if (!tP) {
    return;
  } else if (tP > 500) {
    newData = {
      page: p,
      totalPages: 500,
    };
  } else {
    newData = {
      page: p,
      totalPages: tP,
    };
  }
  paginationData = newData;
  paginationRef.innerHTML = '';
  if (window.innerWidth >= 480) {
    createTypicalPaginationNavigation(newData); // Viewport width for tab and desktop device
  } else {
    createMobilePaginationNavigation(newData); // Viewport width for mobile device
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
      paginationData.page = textContent;
      imageGallaryRef.innerHTML = '';
      paginationFetch(paginationURL, paginationData.page).then(data => {
        changeViewportAndData(data.page, data.total_results);
        renderGalleryFilms(data.results);
      });
    } else if (name === 'pre-page') {
      paginationData.page -= 1;
      imageGallaryRef.innerHTML = '';
      paginationFetch(paginationURL, paginationData.page).then(data => {
        changeViewportAndData(data.page, data.total_results);
        renderGalleryFilms(data.results);
      });
    } else if (name === 'next-page') {
      paginationData.page += 1;
      imageGallaryRef.innerHTML = '';
      paginationFetch(paginationURL, paginationData.page).then(data => {
        changeViewportAndData(data.page, data.total_results);
        renderGalleryFilms(data.results);
      });
    }
  }
}

// Fetch function for pagination
async function paginationFetch(urlFetch, num) {
  try {
    let firstIndex = urlFetch.indexOf('page=') + 5;
    let clipStr = urlFetch.slice(0, firstIndex);
    const url = `${clipStr + num}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

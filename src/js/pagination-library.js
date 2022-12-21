// Load inner sources
import createTypicalPaginationNavigation from './pagination-create-typical-nav';
import createMobilePaginationNavigation from './pagination-create-mobile-nav';
import { load } from './local_storage';
import { handleClick } from './gallery';

// Link on HTML / DOM elements
const paginationRef = document.querySelector('.js-pagination-library');
const imageGallaryRef = document.querySelector('.js-gallery-library');

// Support pagination data
let paginationData = {
  page: 0,
  totalPages: 0,
};
let objArrayData = [];

export function onLoadLocalStrQuery(key) { 
  objArrayData = [];
  const queue = load(`${key}`);
  const numQueue = queue.length;
  const allPages = Math.ceil(numQueue / 20);
  paginationData.page = 1;
  paginationData.totalPages = allPages;
  for (let idx = 0; idx < allPages; idx++) {
    let portion = queue.slice((20 * idx), (20 * (idx + 1)));
    console.log(portion)
    objArrayData.push(portion);
    changeViewportAndData(paginationData.page, paginationData.totalPages);
    handleClick(objArrayData[0])
  }
}

// Here starting panel pagination
// where: p is page, tP is total pages
function changeViewportAndData(p, tP) {
  // imageGallaryRef.innerHTML = '';
  let newData;
  if (!tP) {
    return;
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
      changeViewportAndData(paginationData.page, paginationData.totalPages);
      handleClick(objArrayData[textContent-1])
    } else if (name === 'pre-page') {
      paginationData.page -= 1;
      imageGallaryRef.innerHTML = '';     
      changeViewportAndData(paginationData.page, paginationData.totalPages);
      handleClick(objArrayData[paginationData.page - 1]);
      
    } else if (name === 'next-page') {
      paginationData.page += 1;
      imageGallaryRef.innerHTML = '';
      changeViewportAndData(paginationData.page, paginationData.totalPages);
      handleClick(objArrayData[paginationData.page - 1]);
    }
  }
}


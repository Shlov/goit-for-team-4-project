// Load inner sources
import createTypicalPaginationNavigation from "./pagination-create-typical-nav";
import createMobilePaginationNavigation from "./pagination-create-mobile-nav";
import NewsApiService from "./fetch";
const Fetch = new NewsApiService;
Fetch.fetchPopularMovie().then(data => console.log('My-data', data.total_pages, data.page));

const paginationClickForInput = document.querySelector(".pagination-click");
const paginationInput = document.querySelector(".pagination-input");

const paginationRef = document.querySelector('.js-pagination');

const data = {
    page: 1,
    totalPages: 8,
}

function changeViewportWhenStart(data) {
    paginationRef.innerHTML = '';
    if (window.innerWidth >= 480) {        
        createTypicalPaginationNavigation(data);
    } else {
        createMobilePaginationNavigation(data);
    }    
}

changeViewportWhenStart(data);

window.addEventListener("resize", onChangeWindow);
function onChangeWindow(evt) {
    paginationRef.innerHTML = '';    
    if (evt.target.innerWidth >= 480) {        
        createTypicalPaginationNavigation(data);
    } else {        
        createMobilePaginationNavigation(data);
    }
}

paginationRef.addEventListener('click', onPaginationNavigationClick);
function onPaginationNavigationClick(evt) {
    const { tagName, name, textContent } = evt.target;
    console.log(name);
    if (tagName !== 'BUTTON') {
        return;
    } else {
        if ((name === 'number-page') || (name === 'first-page') || (name === 'last-page')) {
            
        }
    }
}
// Load inner sources
import createTypicalPaginationNavigation from "./pagination-create-typical-nav";
import createMobilePaginationNavigation from "./pagination-create-mobile-nav";

const paginationClickForInput = document.querySelector(".pagination-click");
const paginationInput = document.querySelector(".pagination-input");

const paginationRef = document.querySelector('.js-pagination');

const data = {
    page: 10,
    totalPages: 25,
}

function changeViewportWhenStart(data) {
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

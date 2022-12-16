// Load inner source

const paginationClickForInput = document.querySelector(".pagination-click");
const paginationInput = document.querySelector(".pagination-input");
paginationClickForInput.addEventListener("click", onClick);

function onClick(evt) {
    console.log(paginationInput.value)
}




const paginationRef = document.querySelector('.js-pagination');

const data = {
    page: 3,
    totalPages: 3,
}



// Func. for create Pagination
function createPaginationNavigation(data) {
    const { page, totalPages } = data;
    let paginationHtml = '';
    let paginationElements = '';
    if (totalPages <= 5) {        
        for (let i = 1; i <= totalPages; i++) {
            if (i === page) {
                paginationButtonWithNumber = `<button type="button" class="js-pagination__btn js-pagination__btn--current" name="number-page">${i}</button>`
            } else {
                paginationButtonWithNumber = `<button type="button" class="js-pagination__btn" name="number-page">${i}</button>`
            }
            paginationElements += paginationButtonWithNumber;            
        }
        paginationHtml = '<button type="button" class="js-pagination__btn" name="pre-page"></button>' + paginationElements + '<button type="button" class="js-pagination__btn" name="next-page"></button>';
        return paginationHtml;
    } else {
        
    }
}



// const paginationHtml = `
// <button type="button" class="js-pagination__btn" name="pre-page">
// <svg class="js-pagination__svg" width="40" height="40"><use href="./images/symbol.svg#arrow-left"></use></svg>
// </button>
// <button type="button" class="js-pagination__btn" name="first-page"></button>
// <span>...</span>
// <button type="button" class="js-pagination__btn" name="number-page"></button>
// <button type="button" class="js-pagination__btn" name="number-page"></button>
// <button type="button" class="js-pagination__btn" name="number-page"></button>
// <button type="button" class="js-pagination__btn" name="number-page"></button>
// <button type="button" class="js-pagination__btn" name="number-page"></button>
// <span>...</span>
// <button type="button" class="js-pagination__btn" name="last-page"></button>
// <button type="button" class="js-pagination__btn" name="next-page"></button>`

paginationRef.insertAdjacentHTML("afterend", createPaginationNavigation(data))
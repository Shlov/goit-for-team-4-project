// Load inner source

const paginationClickForInput = document.querySelector(".pagination-click");
const paginationInput = document.querySelector(".pagination-input");
paginationClickForInput.addEventListener("click", onClick);

function onClick(evt) {
    console.log(paginationInput.value)
}


// Func. for create Pagination
function createPaginationNavigation(totalPages) {

}

const paginationRef = document.querySelector('.js-pagination');

const paginationHtml = `<button type="button" class="js-pagination__btn" name="pre-page"></button>
<button type="button" class="js-pagination__btn" name="first-page"></button>
<span>...</span>
<button type="button" class="js-pagination__btn" name="number-page"></button>
<button type="button" class="js-pagination__btn" name="number-page"></button>
<button type="button" class="js-pagination__btn" name="number-page"></button>
<button type="button" class="js-pagination__btn" name="number-page"></button>
<button type="button" class="js-pagination__btn" name="number-page"></button>
<span>...</span>
<button type="button" class="js-pagination__btn" name="last-page"></button>
<button type="button" class="js-pagination__btn" name="next-page"></button>`

paginationRef.insertAdjacentHTML("afterend", paginationHtml)
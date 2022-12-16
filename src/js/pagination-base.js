// Load inner source

const paginationClickForInput = document.querySelector(".pagination-click");
const paginationInput = document.querySelector(".pagination-input");
paginationClickForInput.addEventListener("click", onClick);

function onClick(evt) {
    console.log(paginationInput.value)
}




const paginationRef = document.querySelector('.js-pagination');

const data = {
    page: 1,
    totalPages: 24,
}



// Func. for create Pagination
function createPaginationNavigation(data) {
    const { page, totalPages } = data;
    let paginationHtml = '';
    let paginationElements = '';
    let paginationButtonWithNumber = '';
    if (totalPages <= 5) {        
        for (let i = 1; i <= totalPages; i++) {
            if (i === page) {
                paginationButtonWithNumber = `<button type="button" class="js-pagination__btn js-pagination__btn--current" name="number-page">${i}</button>`
            } else {
                paginationButtonWithNumber = `<button type="button" class="js-pagination__btn" name="number-page">${i}</button>`
            }
            paginationElements += paginationButtonWithNumber;            
        }
        paginationHtml = '<button type="button" class="js-pagination__btn" name="pre-page"><<</button>' + paginationElements + '<button type="button" class="js-pagination__btn" name="next-page">>></button>';
        return paginationHtml;
    } else {
        let flag = 0;


        let paginationElementsLeft;
        let paginationElementsRight;

        if((page-3)>0){
            paginationElementsLeft = `
<button type="button" class="js-pagination__btn" name="pre-page"><</button>
<button type="button" class="js-pagination__btn" name="first-page">1</button>
<span>...</span>`;
        }else{
            paginationElementsLeft = `
<button type="button" class="js-pagination__btn" name="pre-page" disabled><</button>
<span>...</span>`;
            flag -= 1;
        }

        if((totalPages-page > 2)){
            paginationElementsRight = `
<span>...</span>
<button type="button" class="js-pagination__btn" name="last-page">${totalPages}</button>
<button type="button" class="js-pagination__btn" name="next-page">></button>`;
        }else{
            paginationElementsRight = `
<span>...</span>
<button type="button" class="js-pagination__btn" name="next-page" disabled>></button>`
            flag += 1;
        }

        if (flag ===-1) {
            for (let i = 1; i <= 5; i++) {
                if (i === page) {
                paginationButtonWithNumber = `<button type="button" class="js-pagination__btn js-pagination__btn--current" name="number-page">${i}</button>`
                } else {
                paginationButtonWithNumber = `<button type="button" class="js-pagination__btn" name="number-page">${i}</button>`
            }
            paginationElements += paginationButtonWithNumber;
            };            
        } else if(flag===0){
            for (let i = (page-2); i <= (page+2); i++) {
                if (i === page) {
                paginationButtonWithNumber = `<button type="button" class="js-pagination__btn js-pagination__btn--current" name="number-page">${i}</button>`
                } else {
                paginationButtonWithNumber = `<button type="button" class="js-pagination__btn" name="number-page">${i}</button>`
            }
            paginationElements += paginationButtonWithNumber;
            };            
        } else if (flag===1){
            for (let i = (totalPages-5); i <= totalPages; i++) {
                if (i === page) {
                paginationButtonWithNumber = `<button type="button" class="js-pagination__btn js-pagination__btn--current" name="number-page">${i}</button>`
                } else {
                paginationButtonWithNumber = `<button type="button" class="js-pagination__btn" name="number-page">${i}</button>`
            }
            paginationElements += paginationButtonWithNumber;
            };            
        }

        paginationHtml = paginationElementsLeft+paginationElements+paginationElementsRight;
        return paginationHtml;
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

paginationRef.insertAdjacentHTML("afterend", createPaginationNavigation(data));
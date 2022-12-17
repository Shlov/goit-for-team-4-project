// Load inner source

const paginationClickForInput = document.querySelector(".pagination-click");
const paginationInput = document.querySelector(".pagination-input");
paginationClickForInput.addEventListener("click", onClick);

function onClick(evt) {
    console.log(paginationInput.value)
}




const paginationRef = document.querySelector('.js-pagination');

const data = {
    page: 5,
    totalPages: 5,
}

console.log('Width viewport', window.innerWidth);


window.addEventListener("resize", onChangeWindow);
function onChangeWindow(evt) {
    console.log(evt)
}

// Func. for create Pagination
function createPaginationNavigation(data) {
    const { page, totalPages } = data;

    let paginationHtml = '';
    let paginationElements = '';
    let paginationButtonWithNumber = '';
    let paginationElementsLeft;
    let paginationElementsRight;

    if (totalPages <= 5) {        
        for (let i = 1; i <= totalPages; i++) {
            if (i === page) {
                paginationButtonWithNumber = `<button type="button" class="js-pagination__btn js-pagination__btn--current" name="number-page">${i}</button>`
            } else {
                paginationButtonWithNumber = `<button type="button" class="js-pagination__btn" name="number-page">${i}</button>`
            }
            paginationElements += paginationButtonWithNumber;            
        }

        if (page === 1) {
            paginationElementsLeft = `
<button type="button" class="js-pagination__btn js-pagination__btn--block" name="pre-page" disabled><</button>`;            
        } else {
            paginationElementsLeft = `
<button type="button" class="js-pagination__btn" name="pre-page"><</button>`;            
        }
        

        if (page === totalPages) {
            paginationElementsRight =`
<button type="button" class="js-pagination__btn js-pagination__btn--block" name="next-page" disabled>></button>`
        } else {
            paginationElementsRight =`
<button type="button" class="js-pagination__btn" name="next-page">></button>`
        }

        paginationHtml = paginationElementsLeft + paginationElements + paginationElementsRight;
        return paginationHtml;
    } else {
        // in case more 5 pages
        let flag = 0;

        if((page-3)>0){
            paginationElementsLeft = `
<button type="button" class="js-pagination__btn" name="pre-page"><</button>
<button type="button" class="js-pagination__btn" name="first-page">1</button>
<span>...</span>`;
        }else{
            if (page === 1) {
                paginationElementsLeft = `<button type="button" class="js-pagination__btn js-pagination__btn--block" name="pre-page" disabled><</button>`;
            } else {
                paginationElementsLeft = `<button type="button" class="js-pagination__btn" name="pre-page"><</button>`;
            }
            
            flag -= 1;
        }

        if((totalPages-page > 2)){
            paginationElementsRight = `
<span>...</span>
<button type="button" class="js-pagination__btn" name="last-page">${totalPages}</button>
<button type="button" class="js-pagination__btn" name="next-page">></button>`;
        }else{
            if (page === totalPages) {
                paginationElementsRight = `<button type="button" class="js-pagination__btn js-pagination__btn-block" name="next-page" disabled>></button>`
            } else {
                paginationElementsRight = `<button type="button" class="js-pagination__btn" name="next-page">></button>`
                }
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
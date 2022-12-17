// Load inner source

const paginationClickForInput = document.querySelector(".pagination-click");
const paginationInput = document.querySelector(".pagination-input");
paginationClickForInput.addEventListener("click", onClick);

function onClick(evt) {
    console.log(paginationInput.value)
}

const paginationRef = document.querySelector('.js-pagination');

const data = {
    page: 17,
    totalPages: 20,
}

console.log('Width viewport', window.innerWidth);


window.addEventListener("resize", onChangeWindow);
function onChangeWindow(evt) {
    console.log(evt)
}

// Func. for create Pagination
function createTypicalPaginationNavigation(data) {
    const { page, totalPages } = data;

    let paginationHtml = '';
    let paginationElements = '';
    let paginationButtonWithNumber = '';
    let paginationElementsLeft;
    let paginationElementsRight;

// ***<<<<< In case to up 5 pages >>>>>>***
    if (totalPages <= 5) {        
        for (let i = 1; i <= totalPages; i++) {
            paginationButtonWithNumber = selectConditionOfButton(i, page);
            paginationElements += paginationButtonWithNumber;            
        }

        if (page === 1) {
            paginationElementsLeft = `<button type="button" class="js-pagination__btn js-pagination__btn--block" name="pre-page" disabled><i class="fa-solid fa-arrow-left"></i></button>`;            
        } else {
            paginationElementsLeft = `<button type="button" class="js-pagination__btn js-pagination__btn--active js-pagination__btn--grey" name="pre-page"><i class="fa-solid fa-arrow-left"></i></button>`;            
        }
        

        if (page === totalPages) {
            paginationElementsRight =`<button type="button" class="js-pagination__btn js-pagination__btn--block" name="next-page" disabled><i class="fas fa-arrow-right"></i></button>`
        } else {
            paginationElementsRight =`<button type="button" class="js-pagination__btn js-pagination__btn--active js-pagination__btn--grey" name="next-page"><i class="fas fa-arrow-right"></i></button>`
        }

        paginationHtml = paginationElementsLeft + paginationElements + paginationElementsRight;
        return paginationHtml;
    } else {
// ***<<<<< In case more 5 pages >>>>>>***
        let flag = 0;

        if((page-3)>0){
            paginationElementsLeft = `
<button type="button" class="js-pagination__btn js-pagination__btn--active js-pagination__btn--grey" name="pre-page"><i class="fa-solid fa-arrow-left"></i></button>
<button type="button" class="js-pagination__btn js-pagination__btn--active" name="first-page">1</button>
<span>&#183&#183&#183</span>`;
        }else{
            if (page === 1) {
                paginationElementsLeft = `<button type="button" class="js-pagination__btn js-pagination__btn--block" name="pre-page" disabled><i class="fa-solid fa-arrow-left"></i></button>`;
            } else {
                paginationElementsLeft = `<button type="button" class="js-pagination__btn js-pagination__btn--active js-pagination__btn--grey" name="pre-page"><i class="fa-solid fa-arrow-left"></i></button>`;
            }
            
            flag -= 1;
        }

        if((totalPages-page > 2)){
            paginationElementsRight = `
<span>&#183&#183&#183</span>
<button type="button" class="js-pagination__btn js-pagination__btn--active" name="last-page">${totalPages}</button>
<button type="button" class="js-pagination__btn js-pagination__btn--active js-pagination__btn--grey" name="next-page"><i class="fas fa-arrow-right"></i></button>`;
        }else{
            if (page === totalPages) {
                paginationElementsRight = `<button type="button" class="js-pagination__btn js-pagination__btn--block" name="next-page" disabled><i class="fas fa-arrow-right"></i></button>`
            } else {
                paginationElementsRight = `<button type="button" class="js-pagination__btn js-pagination__btn--active js-pagination__btn--grey" name="next-page"><i class="fas fa-arrow-right"></i></button>`
                }
                flag += 1;
        }

        if (flag ===-1) {
            for (let i = 1; i <= 5; i++) {
                paginationButtonWithNumber = selectConditionOfButton(i, page);
                paginationElements += paginationButtonWithNumber;
            };            
        } else if(flag===0){
            for (let i = (page-2); i <= (page+2); i++) {
                paginationButtonWithNumber = selectConditionOfButton(i, page);
                paginationElements += paginationButtonWithNumber;
            };            
        } else if (flag===1){
            for (let i = (totalPages-5); i <= totalPages; i++) {
                paginationButtonWithNumber = selectConditionOfButton(i, page);
                paginationElements += paginationButtonWithNumber;
            };
        }

        paginationHtml = paginationElementsLeft+paginationElements+paginationElementsRight;
        return paginationHtml;
    }
}

function selectConditionOfButton(i, page) {
            let text = '';
            
            if (i === page) {
                text = `<button type="button" class="js-pagination__btn js-pagination__btn--current" name="number-page" disabled>${i}</button>`
                } else {
                text = `<button type="button" class="js-pagination__btn js-pagination__btn--active" name="number-page">${i}</button>`
            }
            return text
        }

paginationRef.insertAdjacentHTML("afterend", createTypicalPaginationNavigation(data));
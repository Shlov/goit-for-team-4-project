import { selectConditionOfButton } from "./pagination-number-button-create";

const paginationRef = document.querySelector('.js-pagination-library');

// Func. for create Pagination
export default function createTypicalPaginationNavigation(data) {
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
      paginationElementsLeft = `<button type="button" class="js-pagination__btn js-pagination__btn--active js-grey" name="pre-page"><i class="fa-solid fa-arrow-left"></i></button>`;
    }

    if (page === totalPages) {
      paginationElementsRight = `<button type="button" class="js-pagination__btn js-pagination__btn--block" name="next-page" disabled><i class="fas fa-arrow-right"></i></button>`;
    } else {
      paginationElementsRight = `<button type="button" class="js-pagination__btn js-pagination__btn--active js-grey" name="next-page"><i class="fas fa-arrow-right"></i></button>`;
    }

    paginationHtml =
      paginationElementsLeft + paginationElements + paginationElementsRight;
  } else {
    // ***<<<<< In case more 5 pages >>>>>>***
    let flag = 0;

    if (page - 3 > 0) {
      paginationElementsLeft = `
<button type="button" class="js-pagination__btn js-pagination__btn--active js-grey" name="pre-page"><i class="fa-solid fa-arrow-left"></i></button>
<button type="button" class="js-pagination__btn js-pagination__btn--active" name="first-page">1</button>
<span class="js-pagination__span">&#183&#183&#183</span>`;
    } else {
      if (page === 1) {
        paginationElementsLeft = `<button type="button" class="js-pagination__btn js-pagination__btn--block" name="pre-page" disabled><i class="fa-solid fa-arrow-left"></i></button>`;
      } else {
        paginationElementsLeft = `<button type="button" class="js-pagination__btn js-pagination__btn--active js-grey" name="pre-page"><i class="fa-solid fa-arrow-left"></i></button>`;
      }

      flag -= 1;
    }

    if (totalPages - page > 2) {
      paginationElementsRight = `
<span class="js-pagination__span">&#183&#183&#183</span>
<button type="button" class="js-pagination__btn js-pagination__btn--active" name="last-page">${totalPages}</button>
<button type="button" class="js-pagination__btn js-pagination__btn--active js-grey" name="next-page"><i class="fas fa-arrow-right"></i></button>`;
    } else {
      if (page === totalPages) {
        paginationElementsRight = `<button type="button" class="js-pagination__btn js-pagination__btn--block" name="next-page" disabled><i class="fas fa-arrow-right"></i></button>`;
      } else {
        paginationElementsRight = `<button type="button" class="js-pagination__btn js-pagination__btn--active js-grey" name="next-page"><i class="fas fa-arrow-right"></i></button>`;
      }
      flag += 1;
    }

    if (flag === -1) {
      for (let i = 1; i <= 5; i++) {
        paginationButtonWithNumber = selectConditionOfButton(i, page);
        paginationElements += paginationButtonWithNumber;
      }
    } else if (flag === 0) {
      for (let i = page - 2; i <= page + 2; i++) {
        paginationButtonWithNumber = selectConditionOfButton(i, page);
        paginationElements += paginationButtonWithNumber;
      }
    } else if (flag === 1) {
      for (let i = totalPages - 5; i <= totalPages; i++) {
        paginationButtonWithNumber = selectConditionOfButton(i, page);
        paginationElements += paginationButtonWithNumber;
      }
    }

    paginationHtml =
      paginationElementsLeft + paginationElements + paginationElementsRight;
  }

  paginationRef.insertAdjacentHTML('beforeend', paginationHtml);
}


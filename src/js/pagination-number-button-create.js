export function selectConditionOfButton(i, page) {
  let text = '';

  if (i === page) {
    text = `<button type="button" class="js-pagination__btn js-pagination__btn--current" name="number-page" disabled>${i}</button>`;
  } else {
    text = `<button type="button" class="js-pagination__btn js-pagination__btn--active" name="number-page">${i}</button>`;
  }
  return text;
}
import refs from './refs';
import { searchTrendFilms } from './searchTrendFilms';
import { searchFilmByName } from './searchFilmByName';
import gloalVar from './globalConst';

const iconArrowRight = '&#129130';
const iconArrowLeft = '&#129128';
let emptyrArray = [];
let totalPages = 6;
let clickPages = 1;

function renderBtn(total) {
   renderArrow(total, iconArrowLeft);
   for (let i = 1; i <= total; i += 1) {
      emptyrArray.push(
         `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
      );
   }

   renderArrow(total, iconArrowRight);

   const readyArray = emptyrArray.join('');
   refs.paginationList.innerHTML = '';
   refs.paginationList.insertAdjacentHTML('afterbegin', readyArray);
   const allBtn = document.querySelectorAll('.pagination__btn');
   addCurrentFirstPage(allBtn, clickPages);
}
renderBtn(totalPages);

refs.paginationList.addEventListener('click', onBtnClick);

function onBtnClick(e) {
   const currentBtn = e.target;
   if (currentBtn.nodeName === 'BUTTON' && currentBtn.dataset.id) {
      removeClassList();
      clickPages = Number(currentBtn.dataset.id);
      currentBtn.classList.add('pagination__btn--current');
      removClasslistArrow();
   } else {
      onArrowClick(currentBtn);
   }

   if (gloalVar.whichTypeMovieSearch === 'trend') {
      searchTrendFilms(clickPages);
   } else if (gloalVar.whichTypeMovieSearch === 'search') {
      searchFilmByName(gloalVar.searchText, clickPages);
   }
}

function onArrowClick(button) {
   if (
      button.nodeName === 'BUTTON' &&
      button.className === 'pagination__btn--right js-pagination__btn--right'
   ) {
      clickPages += 1;
      removClasslistArrow();
      removeClassList();
      addCurrentFromId();
   } else if (
      button.nodeName === 'BUTTON' &&
      button.className === 'pagination__btn--left js-pagination__btn--left'
   ) {
      clickPages -= 1;
      removClasslistArrow();
      removeClassList();
      addCurrentFromId();
   }
}

function addCurrentFirstPage(arrayBtn, pageNumber) {
   arrayBtn[pageNumber - 1].classList.add('pagination__btn--current');
}

function renderArrow(number, arrow) {
   if (number > 5 && arrow === iconArrowRight) {
      emptyrArray.push(
         `<li class="pagination__item--right"><button class="pagination__btn--right js-pagination__btn--right">${arrow}</button></li>`
      );
   } else if (number > 5 && arrow === iconArrowLeft) {
      emptyrArray.push(
         `<li class="pagination__item--left pagination__hidden"><button class="pagination__btn--left js-pagination__btn--left">${arrow}</button></li>`
      );
   }
}

function removeClassList() {
   const current = document.querySelector('.pagination__btn--current');
   if (current) {
      current.classList.remove('pagination__btn--current');
   }
}

function removClasslistArrow() {
   const arrowLeft = document.querySelector('.pagination__item--left');
   const arrowRight = document.querySelector('.pagination__item--right');

   if (clickPages < 2) {
      arrowLeft.classList.add('pagination__hidden');
   } else if (clickPages > 1) {
      arrowLeft.classList.remove('pagination__hidden');
   }

   if (clickPages === totalPages) {
      arrowRight.classList.add('pagination__hidden');
   } else if (clickPages < totalPages) {
      arrowRight.classList.remove('pagination__hidden');
   }
}

function addCurrentFromId() {
   let idBtn = document.querySelector(`[data-id="${clickPages}"]`);
   idBtn.classList.add('pagination__btn--current');
}

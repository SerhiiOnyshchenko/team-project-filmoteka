import refs from './refs';
import { searchTrendFilms } from './searchTrendFilms';
import { searchFilmByName } from './searchFilmByName';
import gloalVar from './globalConst';

// const iconArrowLeft = '';
let emptyArray = [];
let totalPages = 100;
let clickPages = 1;

function pushInArray() {
   if (clickPages > 1) {
      emptyArray.push(
         `<li class="pagination__item--left"><button class="pagination__btn--left js-pagination__btn--left">&#129128</button></li>`
      );
   }
   for (let i = 1; i <= totalPages; i += 1) {
      if (totalPages < 10) {
         if (i === clickPages) {
            emptyArray.push(
               `<li class="pagination__item"><button class="pagination__btn pagination__btn--current" data-id="${i}">${i}</button></li>`
            );
         } else {
            emptyArray.push(
               `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
            );
         }
      } else {
         if (i === clickPages) {
            emptyArray.push(
               `<li class="pagination__item"><button class="pagination__btn pagination__btn--current" data-id="${i}">${i}</button></li>`
            );
         } else if (i === 1) {
            if (clickPages <= 4) {
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
               );
            } else {
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
               );
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn">...</button></li>`
               );
            }
         } else if (i === totalPages) {
            if (clickPages >= totalPages - 3) {
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
               );
            } else {
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn">...</button></li>`
               );
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
               );
            }
         } else if (i > clickPages + 2 || i < clickPages - 2) {
            if (i < 8 && clickPages < 5) {
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
               );
            }
            if (totalPages - 7 < i && clickPages > totalPages - 4) {
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
               );
            }
         } else {
            emptyArray.push(
               `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
            );
         }
      }
   }
   if (clickPages < totalPages) {
      emptyArray.push(
         `<li class="pagination__item--right"><button class="pagination__btn--right js-pagination__btn--right">&#129130</button></li>`
      );
   }
}

function renderBtn() {
   emptyArray = [];
   pushInArray();

   const readyArray = emptyArray.join('');
   refs.paginationList.innerHTML = '';
   refs.paginationList.insertAdjacentHTML('afterbegin', readyArray);
}
renderBtn();

refs.paginationList.addEventListener('click', onBtnClick);

function onBtnClick(e) {
   const currentBtn = e.target;
   if (currentBtn.nodeName === 'BUTTON' && currentBtn.dataset.id) {
      clickPages = Number(currentBtn.dataset.id);
      renderBtn(totalPages);
      removeClassList();
      addCurrentFromId();
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
      renderBtn(totalPages);
      removeClassList();
      addCurrentFromId();
   } else if (
      button.nodeName === 'BUTTON' &&
      button.className === 'pagination__btn--left js-pagination__btn--left'
   ) {
      clickPages -= 1;
      renderBtn(totalPages);
      removeClassList();
      addCurrentFromId();
   }
}

function removeClassList() {
   const current = document.querySelector('.pagination__btn--current');
   if (current) {
      current.classList.remove('pagination__btn--current');
   }
}

function addCurrentFromId() {
   let idBtn = document.querySelector(`[data-id="${clickPages}"]`);
   idBtn.classList.add('pagination__btn--current');
}

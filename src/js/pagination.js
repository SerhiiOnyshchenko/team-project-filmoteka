import refs from './refs';
import { searchTrendFilms } from './searchTrendFilms';
import { searchFilmByName } from './searchFilmByName';
import gloalVar from './globalConst';
import { searchMoviesByAuthor } from './searchMoviesByAuthor';
import { searchGenresMovies } from './searchGenresMovies';
import { renderQueueFilms, renderWatchedFilms } from './createMyLibraryMarkup';

let emptyArray = [];
let totalPages;
let clickPage = 1;

function pushInArray() {
   if (clickPage > 1) {
      emptyArray.push(
         `<li class="pagination__item--left"><button class="pagination__btn--left js-pagination__btn--left">&#129128;</button></li>`
      );
   }
   if (window.innerWidth < 768) {
      for (let i = 1; i <= totalPages; i += 1) {
         if (totalPages < 6) {
            if (i === clickPage) {
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn pagination__btn--current" data-id="${i}">${i}</button></li>`
               );
            } else {
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
               );
            }
         } else {
            if (i === clickPage) {
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn pagination__btn--current" data-id="${i}">${i}</button></li>`
               );
            } else if (i > clickPage + 2 || i < clickPage - 2) {
               if (i < 6 && clickPage < 3) {
                  emptyArray.push(
                     `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
                  );
               }
               if (totalPages - 5 < i && clickPage > totalPages - 2) {
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
   } else {
      for (let i = 1; i <= totalPages; i += 1) {
         if (totalPages < 10) {
            if (i === clickPage) {
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn pagination__btn--current" data-id="${i}">${i}</button></li>`
               );
            } else {
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
               );
            }
         } else {
            if (i === clickPage) {
               emptyArray.push(
                  `<li class="pagination__item"><button class="pagination__btn pagination__btn--current" data-id="${i}">${i}</button></li>`
               );
            } else if (i === 1) {
               if (clickPage <= 4) {
                  emptyArray.push(
                     `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
                  );
               } else {
                  emptyArray.push(
                     `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
                  );
                  emptyArray.push(
                     `<li class="pagination__item pagination__item--hidden"><button class="pagination__btn">...</button></li>`
                  );
               }
            } else if (i === totalPages) {
               if (clickPage >= totalPages - 3) {
                  emptyArray.push(
                     `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
                  );
               } else {
                  emptyArray.push(
                     `<li class="pagination__item pagination__item--hidden"><button class="pagination__btn">...</button></li>`
                  );
                  emptyArray.push(
                     `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
                  );
               }
            } else if (i > clickPage + 2 || i < clickPage - 2) {
               if (i < 8 && clickPage < 5) {
                  emptyArray.push(
                     `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
                  );
               }
               if (totalPages - 7 < i && clickPage > totalPages - 4) {
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
   }
   if (clickPage < totalPages) {
      emptyArray.push(
         `<li class="pagination__item--right"><button class="pagination__btn--right js-pagination__btn--right">&#129130;</button></li>`
      );
   }
}

export function renderBtn(page = clickPage) {
   emptyArray = [];
   totalPages = gloalVar.totalPages;
   clickPage = Number(page);
   pushInArray();

   refs.paginationList.innerHTML = emptyArray.join('');
}

refs.paginationList.addEventListener('click', onBtnClick);

function onBtnClick(e) {
   const currentBtn = e.target;
   if (currentBtn.nodeName === 'BUTTON' && currentBtn.dataset.id) {
      clickPage = Number(currentBtn.dataset.id);
      scrollUp();
   } else {
      onArrowClick(currentBtn);
      scrollUp();
   }

   if (gloalVar.whichTypeMovieSearch === 'trend') {
      searchTrendFilms(clickPage);
   } else if (gloalVar.whichTypeMovieSearch === 'search') {
      searchFilmByName(gloalVar.searchText, clickPage);
   } else if (gloalVar.whichTypeMovieSearch === 'author') {
      searchMoviesByAuthor(gloalVar.personId, clickPage);
   } else if (gloalVar.whichTypeMovieSearch === 'genres') {
      searchGenresMovies(gloalVar.genre, clickPage);
   } else if (gloalVar.whichTypeMovieSearch === 'queue') {
      renderQueueFilms(clickPage);
   } else if (gloalVar.whichTypeMovieSearch === 'watched') {
      renderWatchedFilms(clickPage);
   }
}

function onArrowClick(button) {
   if (
      button.nodeName === 'BUTTON' &&
      button.className === 'pagination__btn--right js-pagination__btn--right'
   ) {
      clickPage += 1;
   } else if (
      button.nodeName === 'BUTTON' &&
      button.className === 'pagination__btn--left js-pagination__btn--left'
   ) {
      clickPage -= 1;
   }
}

export function scrollUp() {
   window.scrollTo({
      top: 300,
      behavior: 'smooth',
   });
}

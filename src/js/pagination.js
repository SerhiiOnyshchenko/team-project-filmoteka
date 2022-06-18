import refs from './refs';
import { searchTrendFilms } from './searchTrendFilms';
import { searchFilmByName } from './searchFilmByName';
import gloalVar from './globalConst';

const iconArrowRight = '&#129130';
const iconArrowLeft = '&#129128';
let emptyArray = [];
let totalPages = 1000;
let clickPages = 1;

function pushInArray() {
   if (clickPages <= 6) {
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn pagination__btn--current" data-id="1">1</button></li>`
      );
      for (let i = 2; i <= 7; i += 1) {
         emptyArray.push(
            `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
         );
      }
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn">...</button></li>`
      );
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn" data-id="${totalPages}">${totalPages}</button></li>`
      );
   }
   //
   // начало!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   //
   else if (clickPages > clickPages - 1 && clickPages <= totalPages - 5) {
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn" data-id="1">1</button></li>`
      );
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn">...</button></li>`
      );
      for (let i = clickPages - 2; i <= clickPages + 2; i += 1) {
         emptyArray.push(
            `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
         );
      }
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn">...</button></li>`
      );
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn" data-id="${totalPages}">${totalPages}</button></li>`
      );
   } else if (clickPages === totalPages - 4) {
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn" data-id="1">1</button></li>`
      );
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn">...</button></li>`
      );
      for (let i = clickPages - 2; i <= totalPages - 1; i += 1) {
         emptyArray.push(
            `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
         );
      }
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn" data-id="${totalPages}">${totalPages}</button></li>`
      );
   } else {
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn" data-id="1">1</button></li>`
      );
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn">...</button></li>`
      );
      for (let i = totalPages - 6; i <= totalPages - 1; i += 1) {
         emptyArray.push(
            `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
         );
      }
      emptyArray.push(
         `<li class="pagination__item"><button class="pagination__btn" data-id="${totalPages}">${totalPages}</button></li>`
      );
   }
}

function renderBtn(total) {
   emptyArray = [];
   renderArrow(total, iconArrowLeft);
   pushInArray();
   renderArrow(total, iconArrowRight);

   const readyArray = emptyArray.join('');
   refs.paginationList.innerHTML = '';
   refs.paginationList.insertAdjacentHTML('afterbegin', readyArray);
}
renderBtn(totalPages);

refs.paginationList.addEventListener('click', onBtnClick);

function onBtnClick(e) {
   const currentBtn = e.target;
   if (currentBtn.nodeName === 'BUTTON' && currentBtn.dataset.id) {
      clickPages = Number(currentBtn.dataset.id);
      renderBtn(totalPages);
      removeClassList();
      addCurrentFromId();
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
      renderBtn(totalPages);
      removClasslistArrow();
      removeClassList();
      addCurrentFromId();
   } else if (
      button.nodeName === 'BUTTON' &&
      button.className === 'pagination__btn--left js-pagination__btn--left'
   ) {
      clickPages -= 1;
      renderBtn(totalPages);
      removClasslistArrow();
      removeClassList();
      addCurrentFromId();
   }
}

function renderArrow(number, arrow) {
   if (number > 4 && arrow === iconArrowRight) {
      emptyArray.push(
         `<li class="pagination__item--right"><button class="pagination__btn--right js-pagination__btn--right">${arrow}</button></li>`
      );
   } else if (number > 4 && arrow === iconArrowLeft) {
      emptyArray.push(
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

// import refs from './refs';
// import { searchTrendFilms } from './searchTrendFilms';
// import { searchFilmByName } from './searchFilmByName';
// import gloalVar from './globalConst';

// const iconArrowRight = '&#129130';
// const iconArrowLeft = '&#129128';
// let emptyArray = [];
// let totalPages = 20;
// let clickPages = 1;

// function createDefaultArray() {
//    for (let i = 1; i <= 5; i += 1) {
//       emptyArray.push(
//          `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
//       );
//    }
//    emptyArray.push(
//       `<li class="pagination__item"><button class="pagination__btn">...</button></li>`
//    );
//    emptyArray.push(
//       `<li class="pagination__item"><button class="pagination__btn" data-id="${totalPages}">${totalPages}</button></li>`
//    );
// }

// function renderBtn(total) {
//    renderArrow(total, iconArrowLeft);
//    createDefaultArray();
//    renderArrow(total, iconArrowRight);

//    const readyArray = emptyArray.join('');
//    // refs.paginationList.innerHTML = '';
//    refs.paginationList.insertAdjacentHTML('afterbegin', readyArray);
//    const allBtn = document.querySelectorAll('.pagination__btn');
//    addCurrentFirstPage(allBtn, clickPages);
// }
// renderBtn(totalPages);

// refs.paginationList.addEventListener('click', onBtnClick);

// function onBtnClick(e) {
//    const currentBtn = e.target;
//    if (currentBtn.nodeName === 'BUTTON' && currentBtn.dataset.id) {
//       removeClassList();
//       clickPages = Number(currentBtn.dataset.id);
//       currentBtn.classList.add('pagination__btn--current');
//       removClasslistArrow();
//    } else {
//       onArrowClick(currentBtn);
//    }

//    if (gloalVar.whichTypeMovieSearch === 'trend') {
//       searchTrendFilms(clickPages);
//    } else if (gloalVar.whichTypeMovieSearch === 'search') {
//       searchFilmByName(gloalVar.searchText, clickPages);
//    }
// }

// function onArrowClick(button) {
//    if (
//       button.nodeName === 'BUTTON' &&
//       button.className === 'pagination__btn--right js-pagination__btn--right'
//    ) {
//       clickPages += 1;
//       removClasslistArrow();
//       removeClassList();
//       addCurrentFromId();
//    } else if (
//       button.nodeName === 'BUTTON' &&
//       button.className === 'pagination__btn--left js-pagination__btn--left'
//    ) {
//       clickPages -= 1;
//       removClasslistArrow();
//       removeClassList();
//       addCurrentFromId();
//    }
// }

// function addCurrentFirstPage(arrayBtn, pageNumber) {
//    arrayBtn[pageNumber - 1].classList.add('pagination__btn--current');
// }

// function renderArrow(number, arrow) {
//    if (number > 4 && arrow === iconArrowRight) {
//       emptyArray.push(
//          `<li class="pagination__item--right"><button class="pagination__btn--right js-pagination__btn--right">${arrow}</button></li>`
//       );
//    } else if (number > 4 && arrow === iconArrowLeft) {
//       emptyArray.push(
//          `<li class="pagination__item--left pagination__hidden"><button class="pagination__btn--left js-pagination__btn--left">${arrow}</button></li>`
//       );
//    }
// }

// function removeClassList() {
//    const current = document.querySelector('.pagination__btn--current');
//    if (current) {
//       current.classList.remove('pagination__btn--current');
//    }
// }

// function removClasslistArrow() {
//    const arrowLeft = document.querySelector('.pagination__item--left');
//    const arrowRight = document.querySelector('.pagination__item--right');

//    if (clickPages < 2) {
//       arrowLeft.classList.add('pagination__hidden');
//    } else if (clickPages > 1) {
//       arrowLeft.classList.remove('pagination__hidden');
//    }

//    if (clickPages === totalPages) {
//       arrowRight.classList.add('pagination__hidden');
//    } else if (clickPages < totalPages) {
//       arrowRight.classList.remove('pagination__hidden');
//    }
// }

// function addCurrentFromId() {
//    let idBtn = document.querySelector(`[data-id="${clickPages}"]`);
//    idBtn.classList.add('pagination__btn--current');
// }

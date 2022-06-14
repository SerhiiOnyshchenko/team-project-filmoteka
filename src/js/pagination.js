import refs from './refs';

const iconArrowRight = '&#129130';
const iconArrowLeft = '&#129128';
let emptyrArray = [];

const totalPages = 6;
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
   addCurrentFirstPage(allBtn);
}
renderBtn(totalPages);

refs.paginationList.addEventListener('click', onBtnClick);

function onBtnClick(e) {
   const currentBtn = e.target;
   if (currentBtn.nodeName === 'BUTTON' && currentBtn.dataset.id) {
      removeClassList();
      console.log(currentBtn.dataset.id);
      currentBtn.classList.add('pagination__btn--current');
   }
}

function addCurrentFirstPage(arrayBtn) {
   arrayBtn[0].classList.add('pagination__btn--current');
}

function removeClassList() {
   const current = document.querySelector('.pagination__btn--current');
   if (current) {
      current.classList.remove('pagination__btn--current');
   }
}

function renderArrow(number, arrow) {
   if (number > 5 && arrow === iconArrowRight) {
      emptyrArray.push(
         `<li class=" pagination__item--right"><button class="pagination__btn--right">${arrow}</button></li>`
      );
   } else if (number > 5 && arrow === iconArrowLeft) {
      emptyrArray.push(
         `<li class=" pagination__item--left"><button class="pagination__btn--left">${arrow}</button></li>`
      );
   }
}

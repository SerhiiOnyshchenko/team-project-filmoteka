import refs from './refs';

const totalPages = 15;

function renderBtn(total) {
   let emptyrArray = [];
   for (let i = 1; i <= total; i += 1) {
      emptyrArray.push(
         `<li class="pagination__item"><button class="pagination__btn" data-id="${i}">${i}</button></li>`
      );
   }
   const readyArray = emptyrArray.join('');
   refs.paginationList.innerHTML = '';
   refs.paginationList.insertAdjacentHTML('afterbegin', readyArray);
   addCurrentFirstPage();
}
renderBtn(totalPages);

refs.paginationList.addEventListener('click', onBtnClick);

function onBtnClick(e) {
   const currentBtn = e.target;
   if (currentBtn.nodeName === 'BUTTON') {
      removeClassList();
      console.log(currentBtn.dataset.id);
      currentBtn.classList.add('pagination__btn--current');
   }
}

function addCurrentFirstPage() {
   const allBtn = document.querySelectorAll('.pagination__btn');
   allBtn[0].classList.add('pagination__btn--current');
}

function removeClassList() {
   const current = document.querySelector('.pagination__btn--current');
   if (current) {
      current.classList.remove('pagination__btn--current');
   }
}

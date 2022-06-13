const films = [
   { number: '1' },
   { number: '2' },
   { number: '3' },
   { number: '4' },
   { number: '5' },
   { number: '6' },
   { number: '7' },
   { number: '8' },
   { number: '9' },
   { number: '10' },
   { number: '11' },
   { number: '12' },
   { number: '13' },
   { number: '14' },
   { number: '15' },
   { number: '16' },
   { number: '17' },
   { number: '17' },
   { number: '17' },
   { number: '17' },
];

const refs = {
   list: document.querySelector('#js-pagination__list'),
   btn: document.querySelector('.pagination__btn--current'),
};

function renderBtn(array) {
   let emptyrArray = [];
   for (let i = 1; i <= array.length; i += 1) {
      emptyrArray.push(
         `<li class="pagination__item" data-id="${i}"><button class="pagination__btn">${i}</button></li>`
      );
   }
   const readyArray = emptyrArray.join('');
   refs.list.insertAdjacentHTML('afterbegin', readyArray);
}
renderBtn(films);

refs.list.addEventListener('click', onBtnClick);

function onBtnClick(e) {
   const currentBtn = e.target;
   if (e.target.nodeName === 'BUTTON') {
      currentBtn.classList.add('pagination__btn--current');
   }
}

// перебрать все кнопки если есть класс current значит удалить перед тем как ставить новый

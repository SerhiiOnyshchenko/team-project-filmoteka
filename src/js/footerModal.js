const refs = {
  openModalBtn: document.querySelector('.footer-link'),
  closeModalBtn: document.querySelector('.footerModalClose'),
  modal: document.querySelector('[data-footerModal]'),
  bodyScroll: document.querySelector('body'),

};

refs.openModalBtn.addEventListener('click', openModal);



function openModal() {
  refs.modal.classList.remove('is-hidden');
  refs.bodyScroll.classList.add('is-open');
  document.addEventListener('keydown', eventKeydown);

  
  refs.closeModalBtn.addEventListener('click', closeModal);
  
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
  refs.bodyScroll.classList.remove('is-open');

  refs.closeModalBtn.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', eventKeydown);
}

function eventKeydown(event) {
  console.log(event.code);
  if (event.code === 'Escape') {
    closeModal();
  }
  return;
}




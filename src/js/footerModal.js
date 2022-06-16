import refs from './refs';

refs.openModalBtn.addEventListener('click', openModal);

function openModal() {
   refs.footerModal.classList.remove('is-hidden');
   refs.bodyScroll.classList.add('is-openn');
   document.addEventListener('keydown', eventKeydown);

   refs.closeModalBtn.addEventListener('click', closeModal);
   refs.footerModal.addEventListener('click', backdrop);
}

function closeModal() {
   refs.footerModal.classList.add('is-hidden');
   refs.bodyScroll.classList.remove('is-openn');
   document.removeEventListener('keydown', eventKeydown);
}

function eventKeydown(event) {
   if (event.code === 'Escape') {
      closeModal();
   }
}

function backdrop(evt) {
   if (evt.currentTarget === evt.target) {
      closeModal();
   }
}

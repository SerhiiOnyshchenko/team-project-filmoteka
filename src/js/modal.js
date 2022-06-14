import refs from './refs';

refs.galleryList.addEventListener('click', toggleModal);

function toggleModal(evt) {
   if (!evt.target.parentNode.classList.contains('gallery__list')) {
      return;
   }

   refs.backdrop.classList.add('is-hidden');
   window.addEventListener('keydown', closeModalEscKey);
   refs.btnClose.addEventListener('click', closeModal);
   refs.backdrop.addEventListener('click', backdropClick);
}

function closeModal() {
   refs.backdrop.classList.remove('is-hidden');
}

function closeModalEscKey(evt) {
   if (evt.code === 'Escape') {
      closeModal();
      window.removeEventListener('keydown', closeModalEscKey);
   }
}

function backdropClick(evt) {
   if (evt.currentTarget === evt.target) {
      closeModal();
   }
}

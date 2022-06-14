import refs from './refs';

// window.addEventListener('click', toggleModal);

function toggleModal(evt) {
   evt.preventDefault();

   if (!evt.target.classList.contains('card')) {
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

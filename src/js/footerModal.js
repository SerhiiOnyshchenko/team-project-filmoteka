import { bodyAddNoScroll, bodyRemoveNoScroll } from './modal';
import refs from './refs';

refs.openModalBtn.addEventListener('click', openModal);

function openModal() {
   refs.footerModal.classList.remove('is-hidden');
   bodyAddNoScroll();
   document.addEventListener('keydown', eventKeydown);

   refs.closeModalBtn.addEventListener('click', closeModal);
   refs.footerModal.addEventListener('click', backdrop);
}

function closeModal() {
   refs.footerModal.classList.add('is-hidden');
   bodyRemoveNoScroll();
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

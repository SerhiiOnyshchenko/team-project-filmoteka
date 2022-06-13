
import refs from './refs'

refs.openModalBtn.addEventListener('click', openModal);


function openModal() {
  refs.footerModal.classList.remove('is-hiddenn');
  refs.bodyScroll.classList.add('is-openn');
  document.addEventListener('keydown', eventKeydown);
  

  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.backdropp.addEventListener('click', backdropp)
}

function closeModal() {
  refs.footerModal.classList.add('is-hiddenn');
  refs.bodyScroll.classList.remove('is-openn');
  document.removeEventListener('keydown', eventKeydown);
}

function eventKeydown(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
  return;
}

function backdropp(evt) {
   if (evt.currentTarget === evt.target) {
      closeModal();
  }
}


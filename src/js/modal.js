import refs from './refs';
import { fetchLoadMoreFilm } from './services/movies-api';

refs.galleryList.addEventListener('click', toggleModal);

function toggleModal(evt) {
   if (!evt.target.parentNode.classList.contains('card')) {
      return;
   }
   loadMoreInfoByModal(evt);
   refs.backdrop.classList.remove('is-hidden');
   window.addEventListener('keydown', closeModalEscKey);
   refs.btnClose.addEventListener('click', closeModal);
   refs.backdrop.addEventListener('click', backdropClick);
}

function closeModal() {
   refs.backdrop.classList.add('is-hidden');
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

function loadMoreInfoByModal(evt) {
   fetchLoadMoreFilm(evt.target.parentNode.dataset.id).then(
      ({
         title,
         id,
         vote_average,
         vote_count,
         popularity,
         original_title,
         genres,
         overview,
         poster_path,
      }) => {
         console.log({
            title,
            id,
            vote_average,
            vote_count,
            popularity,
            original_title,
            genres,
            overview,
            poster_path,
         });
      }
   );
}

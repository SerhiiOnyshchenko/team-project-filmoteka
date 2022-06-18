import refs from './refs';
import { fetchLoadMoreFilm, URL_IMG } from './services/movies-api';
import { loadMoreInfoMarkup } from './markupModal';
import getFilmDataForQueueLocaleStorage from './addQueueFilmToLocaleStorage';
import getFilmDataForWatchedLocaleStorage from './addWatchedFilmToLocaleStorage';

export function bodyAddNoScroll() {
   document.body.style.top = `-${window.scrollY}px`;
   document.body.style.position = 'fixed';
}
export function bodyRemoveNoScroll() {
   const scrollY = document.body.style.top;
   document.body.style.position = '';
   document.body.style.top = '';
   window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

refs.galleryList.addEventListener('click', toggleModal);

async function toggleModal(evt) {
   if (
      evt.target.parentNode.classList.contains('card') ||
      evt.target.parentNode.parentNode.classList.contains('card')
   ) {
      const movieId =
         evt.target.parentNode.dataset.id ||
         evt.target.parentNode.parentNode.dataset.id;
      await renderCardMoveDetail(movieId);
      refs.backdrop.classList.remove('is-hidden');
      bodyAddNoScroll();
      window.addEventListener('keydown', closeModalEscKey);
      refs.btnClose.addEventListener('click', closeModal);
      refs.backdrop.addEventListener('click', backdropClick);
   }
}

function closeModal() {
   refs.backdrop.classList.add('is-hidden');
   refs.modalMovieBackdrop.style.backgroundImage = `url(" ")`;
   bodyRemoveNoScroll();
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

async function renderCardMoveDetail(movieId) {
   const data = await fetchLoadMoreFilm(movieId);
   const img = URL_IMG + data.backdrop_path;
   refs.modalMovieBackdrop.style.backgroundImage = `url(${img})`;
   refs.cardMoveDetail.innerHTML = loadMoreInfoMarkup(data);
   getFilmDataForWatchedLocaleStorage(data);
   getFilmDataForQueueLocaleStorage(data);
}

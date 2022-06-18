import refs from './refs';
import {
   fetchLoadMoreFilm,
   fetchMovieCreditsById,
   URL_IMG,
} from './services/movies-api';
import { loadMoreInfoMarkup } from './markupModal';

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
   setTimeout(() => {
      hideAuthorsModal();
   }, 600);
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
}

refs.cardMoveDetail.addEventListener('click', renderAuthors);
refs.cardMoveAuthors.addEventListener('click', e => {
   if (e.target.id === 'btnGoBack') {
      hideAuthorsModal();
   }
});

async function renderAuthors(e) {
   if (e.target.id === 'showAuthors') {
      const movieId = e.target.dataset.id;
      const { cast } = await fetchMovieCreditsById(movieId);

      showAuthorsModal();
      refs.cardMoveAuthors.innerHTML = renderAuthorsList(cast);
   }
}
function renderAuthor({ profile_path, name }) {
   const imgUrl = profile_path
      ? URL_IMG + profile_path
      : 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg';
   return `<li class="author__item">
               <img class="author__img" src="${imgUrl}" alt="${name}" width="100"/>
               <p class="author__title">${name}</p>
            </li>`;
}
function renderAuthorsList(authorsArr) {
   const arrAuthors = authorsArr.map(author => renderAuthor(author)).join('');
   return `<button type="button" class="author__btn-go-back" id="btnGoBack">Go back to card</button><ul class="author__grid">${arrAuthors}</ul>`;
}

function showAuthorsModal() {
   refs.cardMoveDetail.classList.add('hide-detale');
   refs.cardMoveAuthors.classList.add('show-author');
}
function hideAuthorsModal() {
   refs.cardMoveDetail.classList.remove('hide-detale');
   refs.cardMoveAuthors.classList.remove('show-author');
}

import refs from './refs';
import { findTrailer } from './services/movies-api';

refs.cardMoveDetail.addEventListener('click', openModal);

function openModal(e) {
   if (e.target.id === 'trailerOpen') {
      refs.trailer.classList.remove('is-hidden');
      refs.bodyScroll.classList.add('is-openn');
      document.addEventListener('keydown', eventKeydown);
      refs.cardMoveDetail.classList.add('modal-box-detale-trailler');
      refs.trailer.addEventListener('click', backdrop);
      
      openTrailer(e.target.dataset.id);
   }
}

function closeModal() {
   refs.trailer.classList.add('is-hidden');
   refs.bodyScroll.classList.remove('is-openn');
   document.removeEventListener('keydown', eventKeydown);
   refs.trailerWrap.innerHTML = '';
   refs.cardMoveDetail.classList.remove('modal-box-detale-trailler');
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

function openTrailer(id) {
   findTrailer(id)
      .then(data => {
         const key = data.results[0].key;
         const trailerYouTube = `<iframe style="width: 100%; height: 100%;" data-id="${id}" src="https://www.youtube.com/embed/${key}?autoplay=1" loading = "lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser does not support inline frames!</iframe>`;
         return (refs.trailerWrap.innerHTML = trailerYouTube);
      })
      .catch(error => {
         refs.trailerWrap.innerHTML = `<iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/GY8PkikQ8ZE" loading = "lazy" title="Error 404 not found - The Requested URL was Not Found on This Server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser does not support inline frames!</iframe>`;
      });
}

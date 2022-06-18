import refs from './refs';
import { findTrailer } from './services/movies-api';


refs.trailerBtn.addEventListener('click', openModal)
function openModal() { 
   refs.trailer.classList.remove('is-hidden');
   refs.bodyScroll.classList.add('is-openn');
   document.addEventListener('keydown', eventKeydown);

   refs.trailer.addEventListener('click', backdrop);
   openTrailer();
}

function closeModal() {
   refs.trailer.classList.add('is-hidden');
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

export default  movieTrailer = () => {
  refs.trailerBtn.addEventListener('click', function (e) {
        openTrailer(Number(e.target.dataset.id));
  })
}

function openTrailer(id) {
    findTrailer(id).then(data => {
        console.log(data);
        const key = data.results[0].key;
       return  `
        <div class="trailer-modal-wrapper backdrop is-hidden" id="trailer-modal-wrapper">
            <iframe width="680" height="415" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button class="close-modal__trailer"></button>
        </div>`;
          })
          .catch(error => {
            `<iframe width="727" height="409" src="https://www.youtube.com/embed/GY8PkikQ8ZE" title="Error 404 not found - The Requested URL was Not Found on This Server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        });
    }





import refs from './refs';
import { findTrailer } from './services/movies-api';


refs.trailerBtn.addEventListener('click', openModal)

function openModal(e) { 
   refs.trailer.classList.remove('is-hidden');
   refs.bodyScroll.classList.add('is-openn');
   document.addEventListener('keydown', eventKeydown);

   refs.trailer.addEventListener('click', backdrop);
   openTrailer(e.currentTarget.dataset.id);
}

function closeModal() {
   refs.trailer.classList.add('is-hidden');
   refs.bodyScroll.classList.remove('is-openn');
   document.removeEventListener('keydown', eventKeydown);
   refs.trailerWrap.innerHTML = "";
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
    findTrailer(id).then(data => {
        console.log(data);
       const key = data.results[0].key;
       const trailerYouTube = `<iframe style="width: 100%; height: 100%;" data-id="${id}" src="https://www.youtube.com/embed/${key}?autoplay=1" loading = "lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser does not support inline frames!</iframe>`;
       return refs.trailerWrap.innerHTML = trailerYouTube;
          })
          .catch(error => {
            refs.trailerWrap.innerHTML = `<iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/GY8PkikQ8ZE" loading = "lazy" title="Error 404 not found - The Requested URL was Not Found on This Server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser does not support inline frames!</iframe>`;
        });
    }





import refs from './refs';
import { findTrailer } from './services/movies-api';


refs.trailerBtn.addEventListener('click', openModal)

function openModal() { 
   refs.trailer.classList.remove('is-hidden');
   refs.bodyScroll.classList.add('is-openn');
   document.addEventListener('keydown', eventKeydown);

   refs.trailer.addEventListener('click', backdrop);
   movieTrailer();
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

const  movieTrailer = () => {
  refs.trailerBtn.addEventListener('click', function (e) {
        openTrailer(Number(e.target.dataset.id));
  })
}

function openTrailer(id) {
    findTrailer(id).then(data => {
        console.log(data);
       const key = data.results[0].key;
       const trailerYouTube = `<iframe  width="680" height="415" src="https://www.youtube.com/embed/${key}" loading = "lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser does not support inline frames!</iframe>`;
       return refs.trailerWrap.insertAdjacentHTML("beforeend", trailerYouTube);
          })
          .catch(error => {
            refs.trailerWrap.insertAdjacentHTML("beforeend", `<iframe width="727" height="409" src="https://www.youtube.com/embed/GY8PkikQ8ZE" loading = "lazy" title="Error 404 not found - The Requested URL was Not Found on This Server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser does not support inline frames!</iframe>`) ;
        });
    }





import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { findTrailer } from './services/movies-api';

const movieTrailer = () => {
  const trailerBtn = document.getElementById('trailer');

  trailerBtn.addEventListener('click', function (e) {
        openTrailer(e.target.dataset.id);
  })
}

function openTrailer(id) {
    findTrailer(id).then(data => {
        console.log(data);
        const key = data.results[0].key;
        const modal = basicLightbox.create(`
  <iframe width="680" height="415" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<button class="close-modal__trailer">     
     </button>`);
            modal.show();
    
        const closeBtn = document.querySelector('.close-modal__trailer');
        closeBtn.addEventListener('click', closeModal);
        function closeModal(e) {
            modal.close();        
            window.removeEventListener('keydown', closeModalHandler);
          }
          })
          .catch(error => {
          const modal = basicLightbox.create(`
        <iframe width="727" height="409" src="https://www.youtube.com/embed/GY8PkikQ8ZE" title="Error 404 not found - The Requested URL was Not Found on This Server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          `);
            modal.show();
        });
    }



export default movieTrailer;
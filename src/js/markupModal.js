import { URL_IMG } from './services/movies-api';

export function loadMoreInfoMarkup(data) {
   const {
      title,
      id,
      vote_average,
      vote_count,
      popularity,
      original_title,
      genres,
      overview,
      poster_path,
   } = data;

   const allGanres = genres.map(genre => genre.name).join(', ');
   const filmPoster = poster_path
      ? URL_IMG + poster_path
      : 'https://www.reelviews.net/resources/img/default_poster.jpg';
   return `<div class="image-container">
            <img
               src=${filmPoster}
               alt="Poster ${title}"
            />
         </div>
         <div class="container-context">
            <div class="top-content">
               <h2 class="modal-title">${title}</h2>
               <div class="option-film">
                  <div class="properties-film">
                     <p class="option-film-p">Vote / Votes</p>
                     <p class="option-film-p">Popularity</p>
                     <p class="option-film-p">Original Title</p>
                     <p class="option-film-p">Genre</p>
                     <p class="option-film-p">Authors</p>
                  </div>
                  <div class="values-film">
                     <p class="option-film-p">
                        <span class="vote">${vote_average}</span
                        ><span class="slash"> /</span
                        ><span class="votes">${vote_count}</span>
                     </p>
                     <p class="option-film-p">${popularity}</p>
                     <p class="option-film-p values-film-lh">
                        ${original_title}
                     </p>
                     <p class="option-film-p values-film-lh">${allGanres}</p>
                     <p class="option-film-p values-film-lh" data-id=${id} id="showAuthors">Show</p>
                  </div>
               </div>

               <h3 class="title-modal">About</h3>
               <p class="text-modal">
                  ${overview}
               </p>
            </div>

            <div class="btn-container">
               <button type="button" class="btn-modal add-to-watched data-btn-id=${id}">
                  add to Watched
               </button>
               <button type="button" class="btn-modal add-to-queue data-btn-id=${id}">
                  add to queue
               </button>
            </div>
         </div>`;
}
